import { Heart } from "lucide-react";
import { data, story } from "../lib/wedding-data";

export default function Story() {
  return (
    <section
      id="story"
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#fdf3ec] px-5 py-12 sm:px-8 sm:py-16 lg:py-20"
    >
      {/* خلفية زخرفية */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-0 -z-10 h-40 w-28 rounded-bl-full bg-[#f3d9d2]/60 sm:h-56 sm:w-40 lg:h-72 lg:w-52"
      />

      <div className="mx-auto max-w-5xl">
        {/* العنوان */}
        <div className="text-center">
          <p className="mb-2 text-[11px] font-medium tracking-[0.25em] text-[#b85468] sm:mb-3 sm:text-sm">
            OUR STORY
          </p>

          <h2 className="text-2xl font-bold text-[#a8475c] sm:text-3xl md:text-4xl">
            قصة حبنا
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
            حكاية بدأت ببساطة، وكبرت بالحب لحد ما وصلت ليوم فرحنا.
          </p>
        </div>

        {/* التايم لاين */}
        <ol className="relative mx-auto mt-10 max-w-md space-y-8 sm:mt-14 md:max-w-4xl md:space-y-12">
          {/* الخط الرأسي: على اليمين في الموبايل، وفي النص من التابلت */}
          <span
            aria-hidden="true"
            className="absolute bottom-2 right-5 top-2 w-px bg-[#b85468]/25 md:right-1/2 md:translate-x-1/2"
          />

          {story.map((item, index) => {
            const Icon = item.icon;
            const isFirstCol = index % 2 === 0;

            return (
              <li
                key={item.title}
                className="relative pr-14 md:grid md:grid-cols-2 md:pr-0"
              >
                {/* الأيقونة على الخط */}
                <span className="absolute right-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#b85468]/20 bg-[#f8e5e1] shadow-sm md:right-1/2 md:translate-x-1/2">
                  <Icon
                    className="h-5 w-5 text-[#b85468]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>

                {/* الكارت */}
                <article
                  className={`min-w-0 rounded-2xl border border-[#b85468]/10 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5 ${
                    isFirstCol
                      ? "md:col-start-1 md:ml-12"
                      : "md:col-start-2 md:mr-12"
                  }`}
                >
                  <span className="inline-block rounded-full bg-[#f8e5e1] px-3 py-1 text-xs font-medium text-[#b85468]">
                    {item.date}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-[#a8475c] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 wrap-break-word text-sm leading-7 text-[#5a4549] sm:text-base sm:leading-8">
                    {item.text}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>

        <p className="mt-10 text-center text-sm font-medium text-[#a8475c] sm:mt-14 sm:text-base">
          {data.groom} &amp; {data.bride} ❤️
        </p>
      </div>
    </section>
  );
}
