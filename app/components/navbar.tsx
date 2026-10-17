"use client";

import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const brand = "محمود & أسماء";
const links = [
  { id: "home", label: "الرئيسية" },
  { id: "details", label: "تفاصيل الحفل" },
  { id: "story", label: "قصة حبنا" },
  { id: "gallery", label: "معرض الصور" },
  { id: "mes", label: "رسالة" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      dir="rtl"
      className={`fixed inset-x-0 top-0 z-10 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#fdf3ec]/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="flex items-center gap-2 font-script text-2xl text-[#c4687a]"
        >
          <Heart className="h-4 w-4 fill-[#c4687a]" />
          {brand}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative pb-1 text-sm transition-colors hover:text-[#b85468] ${
                  active === l.id ? "text-[#b85468]" : "text-[#5a4549]"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded bg-[#b85468] transition-transform duration-300 ${
                    active === l.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <Heart className="hidden h-5 w-5 fill-white/90 text-white/90 md:block" />

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
          className="text-[#5a4549] md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-4">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm ${
                  active === l.id
                    ? "bg-[#b85468]/10 text-[#b85468]"
                    : "text-[#5a4549]"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
