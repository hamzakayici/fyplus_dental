export const metadata = {
  title: "Hizmetlerimiz — Bahçeşehir Diş Tedavileri",
  description:
    "FyPlus Dental Clinic hizmetleri: İmplant tedavisi, zirkonyum kaplama, diş beyazlatma, gülüş tasarımı (Hollywood Smile), ortodonti, kanal tedavisi, pedodonti ve diş eti tedavisi. Bahçeşehir ve Başakşehir.",
  alternates: { canonical: "https://fyplus.com.tr/hizmetler" },
  keywords: [
    "bahçeşehir diş tedavisi", "başakşehir diş tedavisi",
    "implant bahçeşehir", "implant tedavisi istanbul",
    "zirkonyum bahçeşehir", "zirkonyum kaplama fiyat",
    "diş beyazlatma bahçeşehir", "hollywood smile bahçeşehir",
    "ortodonti bahçeşehir", "kanal tedavisi bahçeşehir",
    "bahçeşehir diş kliniği hizmetleri", "diş tedavi fiyatları",
  ],
  openGraph: {
    title: "Hizmetlerimiz — FyPlus Dental | Bahçeşehir Diş Tedavileri",
    description: "İmplant, zirkonyum, beyazlatma, gülüş tasarımı, ortodonti ve daha fazlası. Bahçeşehir'de premium diş tedavisi.",
    url: "https://fyplus.com.tr/hizmetler",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hizmetlerimiz — FyPlus Dental Bahçeşehir",
    description: "İmplant, zirkonyum, beyazlatma, gülüş tasarımı ve daha fazlası.",
  },
};

export default function Layout({ children }) {
  return children;
}
