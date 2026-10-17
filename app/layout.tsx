import type { Metadata, Viewport } from "next";
import { Tajawal, El_Messiri, Aref_Ruqaa } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

const messiri = El_Messiri({
  variable: "--font-messiri",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const ruqaa = Aref_Ruqaa({
  variable: "--font-ruqaa",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دعوة زفاف محمود & أسماء",
  description: "يشرفنا حضوركم فرحتنا. تفاصيل الحفل وقصة حبنا ومعرض الصور.",
  icons: {
    icon: "/images/heart.png",
    shortcut: "/images/heart.png",
    apple: "/images/heart.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fdf3ec",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${messiri.variable} ${ruqaa.variable} h-full scroll-smooth antialiased`}
    >
      <body className={`${tajawal.className} flex min-h-full flex-col`}>
        {children}
      </body>
    </html>
  );
}
