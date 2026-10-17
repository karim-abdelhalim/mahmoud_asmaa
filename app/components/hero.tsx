import Image from "next/image";
import { CalendarDays, MapPin, Heart, ChevronDown } from "lucide-react";
import { data } from "../lib/wedding-data";

export default function Hero() {
  return (
    <section
      id="home"
      dir="rtl"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      {/* الخلفية */}
      <Image
        src="/images/hero-bg.png"
        alt="كريم و نور"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[35%_center] sm:object-[30%_center] md:object-[25%_center]"
      />

      {/* طبقات التدرج: أقوى على الموبايل عشان النص يتقرأ، وأخف على الشاشات الكبيرة */}
      <div className="absolute inset-0 bg-linear-to-b from-[#fbe3d6]/70 via-[#f6d3c4]/50 to-[#fdf3ec] md:from-[#fbe3d6]/60 md:via-[#f6d3c4]/40" />
      <div className="absolute inset-0 bg-[#fdf3ec]/35 md:bg-transparent" />
      <div className="absolute inset-0 bg-linear-to-l from-[#fdf3ec]/80 via-transparent to-transparent md:from-[#fdf3ec]/70" />

      {/* المحتوى */}
      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center px-5 pt-20 pb-24 text-center sm:max-w-xl sm:px-8 sm:pt-24 sm:pb-28 md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <p
          dir="ltr"
          className="mb-3 text-[10px] font-light uppercase tracking-[0.35em] text-[#b5546a]/80 sm:mb-4 sm:text-xs sm:tracking-[0.45em]"
        >
          Wedding Invitation
        </p>

        <h1 className="font-script text-5xl leading-tight text-[#c4687a] sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl">
          {data.groom}{" "}
          <span className="mx-1 text-4xl sm:text-5xl lg:text-6xl">&amp;</span>{" "}
          {data.bride}
        </h1>

        <h2 className="mt-5 text-lg font-bold text-[#3b2a2e] sm:mt-6 sm:text-xl lg:text-2xl xl:text-3xl">
          {data.title}
        </h2>

        <p className="mt-3 max-w-xs text-sm leading-7 text-[#5a4549] sm:max-w-md sm:text-base sm:leading-8">
          {data.subtitle}
        </p>

        {/* التاريخ والمكان: تحت بعض على الموبايل الصغير، جنب بعض من sm */}
        <div className="mt-6 flex w-full flex-col items-center gap-4 text-[#5a4549] sm:mt-8 sm:flex-row sm:justify-center sm:gap-6">
          <div className="flex items-center gap-3">
            <CalendarDays
              className="h-6 w-6 shrink-0 text-[#b5546a] sm:h-7 sm:w-7"
              strokeWidth={1.3}
              aria-hidden="true"
            />
            <div className="text-start leading-5">
              <p className="text-sm font-medium">{data.dateDay}</p>
              <p className="text-xs text-[#7a6266]">{data.dateFull}</p>
            </div>
          </div>

          <span
            aria-hidden="true"
            className="hidden h-10 w-px bg-[#b5546a]/30 sm:block"
          />
          <span
            aria-hidden="true"
            className="h-px w-16 bg-[#b5546a]/30 sm:hidden"
          />

          <div className="flex items-center gap-3">
            <MapPin
              className="h-6 w-6 shrink-0 text-[#b5546a] sm:h-7 sm:w-7"
              strokeWidth={1.3}
              aria-hidden="true"
            />
            <div className="text-start leading-5">
              <p className="text-sm font-medium">{data.venue}</p>
              <p className="text-xs text-[#7a6266]">{data.city}</p>
            </div>
          </div>
        </div>

        <a
          href="#mes"
          className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#b85468] px-8 py-3 text-sm font-medium text-white shadow-lg shadow-[#b85468]/30 transition hover:-translate-y-0.5 hover:bg-[#a54759] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b85468] sm:mt-8 sm:px-10 sm:text-base"
        >
          {data.cta}
          <Heart className="h-4 w-4 fill-white" aria-hidden="true" />
        </a>
      </div>

      <a
        href="#details"
        aria-label="انزل للتفاصيل"
        className="absolute bottom-5 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 animate-bounce items-center justify-center rounded-full bg-white/70 text-[#7a6266] shadow sm:bottom-6"
      >
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
}