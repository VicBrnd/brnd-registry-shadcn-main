import { LinkPreview } from "@/registry/brnd/link-preview/link-preview";

export function LinkPreviewExample() {
  return (
    <h2
      className="
            scroll-m-20 text-xl font-semibold tracking-tight
            sm:text-2xl md:text-3xl first:mt-0
            flex flex-col items-center justify-center gap-2
            sm:flex-row
        "
    >
      <LinkPreview
        url="https://nextjs.org/"
        className="font-bold text-amber-600 hover:text-amber-700 transition-colors bg-amber-600/10 px-1 py-[0.2rem] rounded"
      >
        NextJs
      </LinkPreview>
      <span className="text-gray-700 hidden sm:inline">+</span>
      <LinkPreview
        url="https://tailwindcss.com/"
        className="font-bold text-sky-600 hover:text-sky-700 transition-colors bg-sky-600/10 px-1 py-[0.2rem] rounded"
      >
        TailwindCss
      </LinkPreview>
      <span className="text-gray-700 hidden sm:inline">+</span>
      <LinkPreview
        url="https://ui.shadcn.com/"
        className="font-bold text-rose-600 hover:text-rose-700 transition-colors bg-rose-600/10 px-1 py-[0.2rem] rounded"
      >
        Shadcn/ui
      </LinkPreview>
    </h2>
  );
}
