import { Heart, ExternalLink } from "lucide-react";
import { items } from "../lib/wedding-data";

export default function Details() {
  return (
    <section
      id="details"
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#fdf3ec] px-5 py-12 sm:px-8 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* العنوان */}
        <div className="text-center">
          <p className="mb-2 text-[11px] font-medium tracking-[0.25em] text-[#b85468] sm:mb-3 sm:text-sm">
            SAVE THE DATE
          </p>

          <h2 className="text-2xl font-bold text-[#a8475c] sm:text-3xl md:text-4xl">
            تفاصيل يومنا
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#b85468]/40 sm:w-16" />
            <Heart
              className="h-4 w-4 fill-[#b85468] text-[#b85468]"
              aria-hidden="true"
            />
            <span className="h-px w-10 bg-[#b85468]/40 sm:w-16" />
          </div>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#765356] sm:text-base sm:leading-8">
            يوم مميز بنستناه من قلبنا، ونتمنى تكونوا معانا عشان فرحتنا تكمل
            بوجودكم ❤️
          </p>
        </div>

        {/* الكروت */}
        <div className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-4 sm:mt-12 sm:max-w-3xl sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:max-w-4xl lg:grid-cols-3 lg:gap-0">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="group flex min-w-0 flex-col items-center justify-center rounded-2xl border border-[#b85468]/10 bg-white/65 px-4 py-6 text-center shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:min-h-56 sm:px-6 sm:py-7

                  sm:max-lg:last:odd:col-span-2 sm:max-lg:last:odd:mx-auto sm:max-lg:last:odd:w-full sm:max-lg:last:odd:max-w-[calc(50%-0.625rem)]

                  lg:min-h-60 lg:rounded-none lg:border-0 lg:border-e lg:border-[#b85468]/20 lg:bg-transparent lg:shadow-none lg:backdrop-blur-none lg:last:border-e-0 lg:hover:translate-y-0 lg:hover:shadow-none"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f8e5e1] transition duration-300 group-hover:bg-[#f1d4d4] sm:h-14 sm:w-14">
                  <Icon
                    className="h-6 w-6 text-[#b85468] sm:h-7 sm:w-7"
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-3 text-lg font-bold text-[#a8475c] sm:mt-4 sm:text-xl">
                  {item.label}
                </h3>

                <div className="mt-2 w-full space-y-1 wrap-break-word text-sm leading-7 text-[#5a4549] sm:text-base">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>

                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold text-[#b85468] transition hover:bg-[#f8e5e1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b85468]"
                  >
                    {item.link.text}
                    <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}