import {
  CalendarDays,
  Clock,
  MapPin,
  Sparkles,
  Coffee,
  Gem,
  CalendarHeart,
} from "lucide-react";

export const data = {
  groom: "محمود",
  bride: "أسماء",

  title: "فرحتنا مش هتكمل غير بيكم ❤️",

  subtitle:
    "بكل الحب، مستنيينكم تشاركونا أجمل يوم في حياتنا، ونبدأ مع بعض حكاية جديدة مليانة حب وفرحة.. وجودكم هو اللي هيحلّي فرحتنا ويخلّي اليوم ذكرى عمرنا ما ننساها.",

  dateDay: "الإثنين",
  dateFull: "9 نوفمبر 2026",

  dateTime: "2026-11-09T20:00:00+02:00",

  venue: "قاعة جراند بالاس",
  city: "الإسكندرية",

  cta: "ابعتولنا رسالة حب ❤️",

  mapUrl: "https://maps.app.goo.gl/uBUuCy79z9LVWaWG8",

  images: {
    hero: "/images/hero-bg.png",
    details: "/images/flower.png",
    countdown: "/images/countdown-bg.png",
  },
};

export const items = [
  {
    icon: CalendarDays,
    label: "التاريخ",
    lines: [data.dateDay, data.dateFull],
  },
  {
    icon: Clock,
    label: "الوقت",
    lines: ["الساعة 8:00 مساءً"],
  },
  {
    icon: MapPin,
    label: "المكان",
    lines: [data.venue, data.city],
    link: {
      text: "Google Maps",
      href: data.mapUrl,
    },
  },
];

export const story = [
  {
    icon: Sparkles,
    date: "البداية",
    title: "أول لقاء",
    text: "جمعتنا العيلة من زمان، وربنا كتب لنا نكمّل الحكاية سوا ❤️",
  },
  {
    icon: Coffee,
    date: "الأيام الحلوة",
    title: "بقينا أقرب",
    text: "خروجات وحكايات وضحك كتير، واكتشفنا إن بينا تفاهم.",
  },
  {
    icon: Gem,
    date: "الخطوة الكبيرة",
    title: "الخطوبة",
    text: "قررنا نكمل الطريق سوا، والفرحة يومها كانت أكبر من أي كلام.",
  },
  {
    icon: CalendarHeart,
    date: data.dateDay,
    title: "يوم فرحنا",
    text: "وبقى عندنا يوم نستنى فيه كل اللي بنحبهم يشاركونا أجمل لحظات حكايتنا.",
  },
];
