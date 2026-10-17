import { Heart } from "lucide-react";

export default function Footer() {
  const year = 2026;

  return (
    <footer
      dir="rtl"
      className="border-t border-[#b85468]/25 bg-[#fdf3ec] px-2 py-5 text-center text-black"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 sm:gap-4">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#b85468]/40 sm:w-14" />
          <Heart
            className="h-4 w-4 fill-[#b85468] text-[#b85468]"
            aria-hidden="true"
          />
          <span className="h-px w-10 bg-[#b85468]/40 sm:w-14" />
        </div>

        <p className="text-sm font-medium sm:text-base">
          © {year} محمود &amp; أسماء. جميع الحقوق محفوظة.
        </p>

        <p className="text-xs text-black/80 sm:text-sm">
          Developed by Eng.{" "}
          <a
            href="https://www.portfolioxai.com/p/karim-abdelhalim"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-black underline decoration-[#b85468]/40 underline-offset-4 transition hover:decoration-[#b85468] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b85468]"
          >
            Karim Omran
          </a>
        </p>
      </div>
    </footer>
  );
}
