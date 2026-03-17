export const metadata = {
  title: "İletişim ve Randevu — Bahçeşehir Dişçi",
  description:
    "FyPlus Dental Clinic iletişim bilgileri ve online randevu. Bahçeşehir, Başakşehir diş kliniği. Adres, telefon, çalışma saatleri ve ücretsiz muayene randevusu. ☎ 0533 516 51 34",
  alternates: { canonical: "https://fyplus.com.tr/iletisim" },
  keywords: [
    "bahçeşehir diş randevu", "bahçeşehir dişçi randevu",
    "başakşehir diş kliniği iletişim", "bahçeşehir dişçi telefon",
    "fyplus dental iletişim", "bahçeşehir diş kliniği adres",
    "diş randevu online", "ücretsiz diş muayene bahçeşehir",
  ],
  openGraph: {
    title: "İletişim — FyPlus Dental | Bahçeşehir Diş Kliniği",
    description: "Ücretsiz muayene randevusu için arayın veya online form doldurun. ☎ 0533 516 51 34",
    url: "https://fyplus.com.tr/iletisim",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim — FyPlus Dental Bahçeşehir",
    description: "Ücretsiz muayene randevusu. ☎ 0533 516 51 34",
  },
};
export default function Layout({ children }) {
  return children;
}
