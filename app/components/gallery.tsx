"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Heart, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const photos = [
  { src: "/images/gallery/gallery-1.jpeg", alt: "صورة من جلسة التصوير 1" },
  { src: "/images/gallery/gallery-2.jpeg", alt: "صورة من جلسة التصوير 2" },
  { src: "/images/gallery/gallery-3.jpeg", alt: "صورة من جلسة التصوير 3" },
  { src: "/images/gallery/gallery-4.jpeg", alt: "صورة من جلسة التصوير 4" },
  { src: "/images/gallery/gallery-5.jpeg", alt: "صورة من جلسة التصوير 5" },
  { src: "/images/gallery/gallery-6.jpeg", alt: "صورة من جلسة التصوير 6" },
  { src: "/images/gallery/gallery-7.jpeg", alt: "صورة من جلسة التصوير 7" },
  { src: "/images/gallery/gallery-8.jpeg", alt: "صورة من جلسة التصوير 8" },
  { src: "/images/gallery/gallery-9.jpeg", alt: "صورة من جلسة التصوير 9" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const close = useCallback(() => setActive(null), []);

  const next = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % photos.length));
  }, []);

  const prev = useCallback(() => {
    setActive((i) =>
      i === null ? i : (i - 1 + photos.length) % photos.length,
    );
  }, []);

  useEffect(() => {
    if (active === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") next();
      if (e.key === "ArrowRight") prev();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  return (
    <>
      <section
        id="gallery"
        dir="rtl"
        className="relative isolate overflow-hidden bg-[#fbeae2] px-4 py-12 sm:px-8 sm:py-16 lg:py-20"
      >
        {/* خلفية زخرفية */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 left-0 -z-10 h-40 w-28 rounded-tr-full bg-[#f3d9d2]/70 sm:h-56 sm:w-40 lg:h-72 lg:w-52"
        />

        <div className="mx-auto max-w-5xl">
          {/* العنوان */}
          <div className="text-center">
            <p className="mb-2 text-[11px] font-medium tracking-[0.25em] text-[#b85468] sm:mb-3 sm:text-sm">
              OUR MOMENTS
            </p>

            <h2 className="text-2xl font-bold text-[#a8475c] sm:text-3xl md:text-4xl">
              معرض الصور
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
              لحظات حلوة جمعناها عشان نفتكرها دايمًا.
            </p>
          </div>

          {/* شبكة الصور */}
          <ul className="mt-8 grid grid-flow-dense grid-cols-2 gap-2 sm:mt-12 sm:gap-3 md:grid-cols-3 md:gap-4">
            {photos.map((photo, index) => (
              <li
                key={photo.src}
                className={index === 0 ? "col-span-2 row-span-2" : ""}
              >
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`افتح ${photo.alt}`}
                  className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-[#f3d9d2] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b85468] sm:rounded-2xl"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={
                      index === 0
                        ? "(min-width: 1024px) 640px, (min-width: 768px) 60vw, 100vw"
                        : "(min-width: 1024px) 320px, (min-width: 768px) 30vw, 50vw"
                    }
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute inset-0 flex items-center justify-center bg-[#6f4148]/0 transition duration-300 group-hover:bg-[#6f4148]/30">
                    <ZoomIn
                      className="h-7 w-7 scale-75 text-white opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* عارض الصور خارج section وفوق الموقع بالكامل */}
      {mounted &&
        active !== null &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="عارض الصور"
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#2b1a1e]/90 p-3 sm:p-6"
            onClick={close}
          >
            {/* زر الإغلاق */}
            <button
              type="button"
              onClick={close}
              aria-label="إغلاق"
              className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:right-5 sm:top-5"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* الصورة السابقة */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="الصورة السابقة"
              className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:right-5"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* الصورة الحالية */}
            <div
              className="relative h-[80svh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* الصورة التالية */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="الصورة التالية"
              className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:left-5"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* رقم الصورة */}
            <p
              className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-xs text-white"
              dir="ltr"
            >
              {active + 1} / {photos.length}
            </p>
          </div>,
          document.body,
        )}
    </>
  );
}