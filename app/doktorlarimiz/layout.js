export const metadata = {
  title: "Doktorlarımız — Uzman Diş Hekimleri",
  description:
    "FyPlus Dental Clinic uzman hekim kadrosu. İmplantoloji, ortodonti, estetik diş hekimliği, endodonti, periodontoloji ve pedodonti alanlarında deneyimli doktorlarımızı tanıyın.",
  alternates: { canonical: "https://fyplus.com.tr/doktorlarimiz" },
  keywords: [
    "bahçeşehir diş hekimi", "bahçeşehir diş doktoru",
    "başakşehir diş hekimi", "en iyi diş hekimi bahçeşehir",
    "implant uzmanı bahçeşehir", "ortodonti uzmanı bahçeşehir",
    "estetik diş hekimi istanbul", "pedodonti uzmanı bahçeşehir",
  ],
  openGraph: {
    title: "Doktorlarımız — FyPlus Dental | Uzman Hekim Kadrosu",
    description: "Alanında uzman diş hekimlerimizle tanışın. İmplant, ortodonti, estetik ve çocuk diş hekimliği uzmanları.",
    url: "https://fyplus.com.tr/doktorlarimiz",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doktorlarımız — FyPlus Dental Bahçeşehir",
    description: "Uzman diş hekimleri kadromuzla tanışın.",
  },
};
export default function Layout({ children }) {
  return children;
}
