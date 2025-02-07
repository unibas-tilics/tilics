import { createSignal, For, onMount } from "solid-js";
import Article from "~/components/Article";
import { getPullRequests } from "~/utils";

const prefix = "2024";
export default function Home() {
  const [pulls, setPulls] = createSignal<PullRequest[]>([]);
  const semPulls = () =>
    pulls().filter(
      (p) =>
        p.title.startsWith(prefix) ||
        p.labels.some(
          (l) => l.name.includes(prefix) || l.description.includes(prefix)
        )
    );
  onMount(async () => {
    const _pulls = await getPullRequests();
    setPulls(_pulls);
  });

  return (
    <main class=" text-gray-700 p-4 flex flex-col items-center min-h-screen">
      <div class="space-y-2 w-full max-w-4xl">
        <For each={semPulls()}>{(p, i) => <Article pull={p} i={i} />}</For>
      </div>
    </main>
  );
}
