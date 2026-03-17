export const metadata = {
  title: "Hakkımızda — Bahçeşehir Diş Kliniği",
  description:
    "FyPlus Dental Clinic hakkında bilgi edinin. 15 yılı aşkın deneyim, uzman hekim kadrosu ve son teknoloji ekipmanlarla Bahçeşehir ve Başakşehir'de premium diş sağlığı hizmeti sunuyoruz.",
  alternates: { canonical: "https://fyplus.com.tr/hakkimizda" },
  keywords: [
    "bahçeşehir diş kliniği hakkında", "fyplus dental hakkında",
    "bahçeşehir başakşehir diş hekimi", "en iyi diş kliniği bahçeşehir",
    "diş kliniği tanıtım", "bahçeşehir dişçi",
  ],
  openGraph: {
    title: "Hakkımızda — FyPlus Dental | Bahçeşehir Diş Kliniği",
    description: "15+ yıl deneyim, 12.000+ mutlu hasta. Bahçeşehir'in güvenilir diş kliniği FyPlus Dental'i tanıyın.",
    url: "https://fyplus.com.tr/hakkimizda",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımızda — FyPlus Dental Bahçeşehir",
    description: "15+ yıl deneyim, uzman kadro. Bahçeşehir'in premium diş kliniği.",
  },
};
export default function Layout({ children }) {
  return children;
}
