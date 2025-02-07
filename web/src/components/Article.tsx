import { Accessor, createSignal, For, onMount } from "solid-js";
import { marked } from "marked";
import { fetchRawFile, getPRFiles } from "~/server";
import { compareJaccardSimilarity, notEmpty } from "~/utils";
export default function Article(props: {
  pull: PullRequest;
  i: Accessor<number>;
}) {
  const [html, setHTML] = createSignal<string>("");
  const [image, setImage] = createSignal<string>("");

  onMount(async () => {
    // const user = props.pull.head.repo.owner.login;
    // const repo = props.pull.head.repo.name;
    // const branch = props.pull.head.ref;
    const { files, cacheStatus } = await getPRFiles(
      props.pull.number,
      props.pull.updated_at
    );
    console.log("cacheStatus", cacheStatus, props.pull.number, files.length);

    // Sometimes people mistakenly commit multiple files in a single pull request,
    // We compare to find the most relevant folder w.r.t PR title
    // Example: 2024/, folder code_obfuscation/ is more similar to 2024-spaghetti-code-obfuscation (PR title) than random_folder_name/
    const folder = (path: string) => path.split("/").at(1);
    const folders = files
      .map((f) => {
        const name = folder(f.filename);
        if (name === undefined) return undefined;
        return {
          score: compareJaccardSimilarity(name, props.pull.title),
          name,
        };
      })
      .filter(notEmpty);

    const mostRelevantFolder = folders.sort((a, b) => b.score - a.score)[0];

    const markdownFile = files.find(
      (f) =>
        f.filename.toLowerCase().endsWith(".md") &&
        folder(f.filename) == mostRelevantFolder.name
    );
    if (markdownFile === undefined) {
      console.warn(
        "No markdown file found for pull request",
        props.pull.number
      );
      return;
    }

    const markdown = await fetchRawFile(markdownFile.raw_url);
    const html = await marked(markdown);
    setHTML(html);

    const extensions = [".jpg", ".jpeg", ".png", ".svg"];
    const images = files.map((f) => {
      const index = extensions.findIndex(
        (ext) =>
          f.filename.toLowerCase().endsWith(ext) &&
          folder(f.filename) == mostRelevantFolder.name
      );
      return {
        ...f,
        score: index,
        extension: extensions[index],
      };
    });
    images.sort((a, b) => b.score - a.score);
    setImage(images[0].raw_url);
  });

  return (
    <div class="border">
      <div class="px-4 py-2 bg-neutral-200 space-y-1">
        <div>
          <span class="font-bold">{props.i() + 1}.</span>{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            class="hover:underline"
            href={`https://github.com/unibas-tilics/tilics/pull/${props.pull.number}`}
          >
            #{props.pull.number} - {props.pull.title} by {props.pull.user.login}
          </a>
        </div>

        <div class="flex flex-wrap gap-2">
          <For each={props.pull.labels}>
            {(l) => (
              <div class="px-2 py-1 text-xs rounded-full bg-neutral-300">
                <div class="z-20">{l.name}</div>
              </div>
            )}
          </For>
        </div>
      </div>

      <div class="space-y-16 px-4 py-2">
        <img src={image()} class="w-2/3 " />
        <div class="prose max-w-none" innerHTML={html()} />
      </div>
    </div>
  );
}
