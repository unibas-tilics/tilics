export default function BottomNav() {
  return (
    <div>
      <div class="bg-[#2d373c] px-2 py-4 flex flex-col items-center text-white">
        <div class="w-full max-w-4xl space-y-4 text-sm">
          <a
            class="hover:underline"
            href="https://www.unibas.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Basel
          </a>{" "}
          /{" "}
          <a
            class="hover:underline"
            href="https://dmi.unibas.ch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DMI
          </a>{" "}
          /{" "}
          <a
            class="hover:underline"
            href="https://tilics.dmi.unibas.ch/imprint"
            target="_blank"
            rel="noopener noreferrer"
          >
            Imprint
          </a>
        </div>
      </div>
    </div>
  );
}
