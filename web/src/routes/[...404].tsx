import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-neutral-700 p-4">
      <h1 class="max-6-xs text-6xl text-[#1b6f66] font-thin uppercase my-16">
        Not Found
      </h1>
      <p class="mt-8">
        The page you are looking for is not here. You can still go back to the{" "}
        <A href="/" class="text-[#1b6f66]">
          homepage
        </A>{" "}
        and try again.
      </p>
    </main>
  );
}
