export const metadata = {
  title: "Sıkça Sorulan Sorular — Diş Tedavisi SSS",
  description:
    "Bahçeşehir FyPlus Dental Clinic sıkça sorulan sorular. İmplant, zirkonyum kaplama, diş beyazlatma, ortodonti fiyatları ve tedavi süreçleri hakkında merak ettikleriniz.",
  alternates: { canonical: "https://fyplus.com.tr/sss" },
  keywords: [
    "implant fiyat bahçeşehir", "zirkonyum fiyat", "diş beyazlatma fiyat",
    "ortodonti fiyat bahçeşehir", "diş tedavisi fiyatları istanbul",
    "implant ağrılı mı", "zirkonyum ne kadar dayanır",
    "diş beyazlatma ne kadar sürer", "bahçeşehir diş fiyatları",
  ],
  openGraph: {
    title: "SSS — FyPlus Dental | Diş Tedavisi Soruları",
    description: "İmplant, zirkonyum, beyazlatma ve ortodonti hakkında sıkça sorulan sorular ve cevapları.",
    url: "https://fyplus.com.tr/sss",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSS — FyPlus Dental Bahçeşehir",
    description: "Diş tedavisi hakkında merak edilen sorular ve cevapları.",
  },
};
export default function Layout({ children }) {
  return children;
}
