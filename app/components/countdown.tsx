"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { data } from "../lib/wedding-data";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(): TimeLeft {
  const difference = new Date(data.dateTime).getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const units = [
  { key: "days", label: "يوم" },
  { key: "hours", label: "ساعة" },
  { key: "minutes", label: "دقيقة" },
  { key: "seconds", label: "ثانية" },
] as const;

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const update = () => setTimeLeft(calculateTimeLeft());

    update();

    const interval = window.setInterval(update, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const isFinished =
    timeLeft !== null &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section
      id="countdown"
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#9b6d69] py-10 sm:py-12 lg:py-14"
    >
      {/* صورة الخلفية */}
      <Image
        src="/images/flowers-countdown.png"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />

      {/* طبقة تحافظ على وضوح النص */}
      <div className="absolute inset-0 -z-10 bg-[#6f4148]/50" />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-8">
        <p className="text-[11px] font-medium tracking-[0.25em] text-white/85 sm:text-xs">
          THE BIG DAY IS COMING
        </p>

        <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl md:text-3xl">
          {isFinished ? "النهارده فرحتنا ❤️" : "الوقت المتبقي"}
        </h2>

        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-white/60 sm:w-14" />
          <Heart
            className="h-3.5 w-3.5 fill-white text-white"
            aria-hidden="true"
          />
          <span className="h-px w-10 bg-white/60 sm:w-14" />
        </div>

        <p className="mx-auto mt-3 max-w-md text-xs leading-7 text-white/90 sm:text-sm sm:leading-8">
          كل ثانية بتقربنا من أجمل يوم في حكايتنا، ومستنيين نعيش الفرحة دي
          معاكم.
        </p>

        <div
          className="mx-auto mt-6 grid max-w-2xl grid-cols-4 gap-2 sm:mt-8 sm:gap-4"
          aria-label="الوقت المتبقي على حفل الزفاف"
          aria-live="off"
        >
          {units.map((unit) => (
            <div
              key={unit.key}
              className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-white/50 bg-[#fff8f2]/95 px-1 py-3 shadow-lg shadow-[#613840]/10 backdrop-blur-sm sm:rounded-2xl sm:py-4 md:py-5"
            >
              <span
                className="text-2xl font-bold tabular-nums text-[#934858] sm:text-3xl md:text-4xl"
                dir="ltr"
              >
                {timeLeft ? String(timeLeft[unit.key]).padStart(2, "0") : "--"}
              </span>

              <span className="mt-1 text-xs font-medium text-[#765356] sm:text-sm">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs text-white sm:mt-6 sm:text-sm">
          بكل الحب، {data.groom} &amp; {data.bride}
        </p>
      </div>
    </section>
  );
}