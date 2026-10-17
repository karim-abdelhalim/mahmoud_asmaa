"use client";

import { useState } from "react";
import { Heart, Send, Quote } from "lucide-react";
import { data } from "../lib/wedding-data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Message() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const canSend =
    name.trim().length > 0 && text.trim().length > 0 && status !== "sending";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSend) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: text.trim() }),
      });

      if (!res.ok) throw new Error("request failed");

      setName("");
      setText("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="mes"
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#fdf3ec] px-5 py-12 sm:px-8 sm:py-16 lg:py-20"
    >
      {/* خلفية زخرفية */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-0 -z-10 h-40 w-28 rounded-br-full bg-[#f3d9d2]/60 sm:h-56 sm:w-40 lg:h-72 lg:w-52"
      />

      <div className="mx-auto max-w-5xl">
        {/* العنوان */}
        <div className="text-center">
          <p className="mb-2 text-[11px] font-medium tracking-[0.25em] text-[#b85468] sm:mb-3 sm:text-sm">
            WITH LOVE
          </p>

          <h2 className="text-2xl font-bold text-[#a8475c] sm:text-3xl md:text-4xl">
            رسالة من قلبنا
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#b85468]/40 sm:w-16" />
            <Heart
              className="h-4 w-4 fill-[#b85468] text-[#b85468]"
              aria-hidden="true"
            />
            <span className="h-px w-10 bg-[#b85468]/40 sm:w-16" />
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-md gap-5 sm:mt-12 md:max-w-3xl lg:max-w-none lg:grid-cols-2 lg:items-stretch lg:gap-8">
          {/* رسالة العروسين */}
          <article className="relative flex flex-col rounded-3xl border border-[#b85468]/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm sm:p-8">
            <Quote
              className="mx-auto h-8 w-8 text-[#b85468]/40"
              strokeWidth={1.3}
              aria-hidden="true"
            />

            <p className="mt-4 text-sm leading-8 text-[#5a4549] sm:text-base sm:leading-9">
              وجودكم في يوم فرحتنا هو أجمل هدية ممكن نتمناها. شكرًا لكل دعوة
              ودعاء وكلمة حلوة، ومستنيينكم تشاركونا أحلى لحظات حياتنا.
            </p>

            <div className="mt-auto pt-6">
              <span className="mx-auto mb-3 block h-px w-12 bg-[#b85468]/30" />
              <p className="text-base font-bold text-[#a8475c] sm:text-lg">
                {data.groom} &amp; {data.bride}
              </p>
              <p className="mt-1 text-xs text-[#7a6266] sm:text-sm">
                بكل الحب ❤️
              </p>
            </div>
          </article>

          {/* ابعتلنا تهنئة */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-3xl border border-[#b85468]/10 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8"
          >
            <div>
              <h3 className="text-lg font-bold text-[#a8475c] sm:text-xl">
                ابعتلنا تهنئة
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#7a6266] sm:text-sm">
                اكتب كلمتك وهتوصلنا مباشرة.
              </p>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#5a4549]">
                اسمك
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                maxLength={60}
                placeholder="اكتب اسمك"
                className="min-h-11 w-full rounded-xl border border-[#b85468]/20 bg-white px-4 text-sm text-[#3b2a2e] outline-none transition placeholder:text-[#b9a3a6] focus:border-[#b85468] focus:ring-2 focus:ring-[#b85468]/20 sm:text-base"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#5a4549]">
                رسالتك
              </span>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
                maxLength={400}
                placeholder="اكتب تهنئتك هنا..."
                className="w-full resize-none rounded-xl border border-[#b85468]/20 bg-white px-4 py-3 text-sm leading-7 text-[#3b2a2e] outline-none transition placeholder:text-[#b9a3a6] focus:border-[#b85468] focus:ring-2 focus:ring-[#b85468]/20 sm:text-base"
              />
            </label>

            <button
              type="submit"
              disabled={!canSend}
              className="mt-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#b85468] px-8 py-3 text-sm font-medium text-white shadow-lg shadow-[#b85468]/30 transition hover:-translate-y-0.5 hover:bg-[#a54759] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b85468] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 sm:text-base"
            >
              {status === "sending" ? "جاري الإرسال..." : "ابعت التهنئة"}
              <Send className="h-4 w-4 -scale-x-100" aria-hidden="true" />
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`min-h-5 text-center text-sm ${
                status === "error" ? "text-red-600" : "text-[#a8475c]"
              }`}
            >
              {status === "sent" && "وصلتنا تهنئتك، شكرًا من قلبنا ❤️"}
              {status === "error" && "حصلت مشكلة في الإرسال، جرّب تاني."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}