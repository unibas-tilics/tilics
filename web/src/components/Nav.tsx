export default function Nav() {
  return (
    <div>
      <div class="bg-[#a5d7d2] px-2 py-4 flex flex-col items-center">
        <div class="w-full max-w-4xl space-y-4 ">
          <a
            href="https://www.unibas.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/uni-basel-logo-svg.svg" alt="logo" width="160" />
          </a>
          <div class="lg:ml-16 text-sm">
            <p>
              <a
                href="https://dmi.unibas.ch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Department
              </a>
            </p>
            <p>
              <a
                href="https://dmi.unibas.ch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mathematics and Computer Science
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="bg-[#d2ebe9] py-2 px-2 text-sm flex flex-col items-center">
        <div class="w-full max-w-4xl space-y-4 ">
          <a
            href="https://github.com/unibas-tilics/tilics"
            target="_blank"
            rel="noopener noreferrer"
          >
            Things I learned in Computer Science
          </a>
        </div>
      </div>
    </div>
  );
}
