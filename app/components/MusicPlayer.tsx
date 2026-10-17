"use client";

import { useEffect, useRef, useState } from "react";
import { Heart, MailOpen, Volume2, VolumeX } from "lucide-react";
import { data } from "../lib/wedding-data";

const SONG_SRC = "/audio/wedding-song.mp3";

type Phase = "intro" | "leaving" | "done";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [phase, setPhase] = useState<Phase>("intro");

  const userPaused = useRef(false);
  const wasPlaying = useRef(false);

  useEffect(() => {
    if (phase === "done") return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6;

    const onVisibility = () => {
      if (document.hidden) {
        wasPlaying.current = !audio.paused;
        audio.pause();
      } else if (wasPlaying.current && !userPaused.current) {
        audio.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const openInvitation = () => {
    userPaused.current = false;
    audioRef.current?.play().catch(() => {});

    setPhase("leaving");
    window.setTimeout(() => {
      setPhase("done");
      window.scrollTo(0, 0);
    }, 700);
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      userPaused.current = false;
      audio.play().catch(() => {});
    } else {
      userPaused.current = true;
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={SONG_SRC}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      {/* شاشة افتح الدعوة */}
      {phase !== "done" && (
        <div
          dir="rtl"
          role="dialog"
          aria-modal="true"
          aria-label="افتح الدعوة"
          className={`fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-y-auto bg-linear-to-b from-[#fbe3d6] via-[#fdf3ec] to-[#f6d3c4] px-6 py-10 text-center transition-opacity duration-700 ${
            phase === "leaving"
              ? "pointer-events-none opacity-0"
              : "opacity-100"
          }`}
        >
          <p
            dir="ltr"
            className="text-[10px] font-light uppercase tracking-[0.35em] text-[#b5546a]/80 sm:text-xs sm:tracking-[0.45em]"
          >
            Wedding Invitation
          </p>

          <div className="mt-6 flex h-20 w-20 animate-bounce items-center justify-center rounded-full bg-white/70 shadow-md ring-1 ring-[#b85468]/20 sm:h-24 sm:w-24">
            <MailOpen
              className="h-9 w-9 text-[#b85468] sm:h-11 sm:w-11"
              strokeWidth={1.3}
              aria-hidden="true"
            />
          </div>

          <h1 className="mt-6 font-[family-name:var(--font-ruqaa)] text-5xl font-bold leading-[1.5] text-[#c4687a] sm:text-6xl md:text-7xl">
            {data.groom}{" "}
            <span className="mx-1 text-4xl font-normal sm:text-5xl">&amp;</span>{" "}
            {data.bride}
          </h1>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#b85468]/40 sm:w-16" />
            <Heart
              className="h-4 w-4 fill-[#b85468] text-[#b85468]"
              aria-hidden="true"
            />
            <span className="h-px w-10 bg-[#b85468]/40 sm:w-16" />
          </div>

          <p className="mt-4 max-w-xs text-sm leading-7 text-[#5a4549] sm:max-w-sm sm:text-base sm:leading-8">
            يشرفنا حضوركم ومشاركتنا فرحتنا
          </p>

          <button
            type="button"
            onClick={openInvitation}
            autoFocus
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#b85468] px-10 py-3 text-base font-medium text-white shadow-lg shadow-[#b85468]/30 transition hover:-translate-y-0.5 hover:bg-[#a54759] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b85468] sm:text-lg"
          >
            افتح الدعوة
            <Heart className="h-4 w-4 fill-white" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* زرار الصوت (بيظهر بعد فتح الدعوة) */}
      {phase !== "intro" && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
          aria-pressed={playing}
          className="fixed bottom-4 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#b85468] text-white shadow-lg shadow-[#b85468]/30 ring-2 ring-white/70 transition hover:scale-105 hover:bg-[#a54759] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b85468] sm:bottom-6 sm:left-6"
        >
          {playing ? (
            <Volume2 className="h-5 w-5" aria-hidden="true" />
          ) : (
            <VolumeX className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      )}
    </>
  );
}
