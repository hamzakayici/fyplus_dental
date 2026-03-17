export const metadata = {
  title: "Galeri — Klinik ve Tedavi Görselleri",
  description:
    "FyPlus Dental Clinic galeri. Modern kliniğimiz, son teknoloji ekipmanlarımız ve tedavi öncesi/sonrası görseller. Bahçeşehir diş kliniği fotoğrafları.",
  alternates: { canonical: "https://fyplus.com.tr/galeri" },
  keywords: [
    "bahçeşehir diş kliniği galeri", "diş kliniği fotoğrafları",
    "tedavi öncesi sonrası", "fyplus dental fotoğraflar",
    "modern diş kliniği istanbul",
  ],
  openGraph: {
    title: "Galeri — FyPlus Dental | Klinik Görselleri",
    description: "Modern kliniğimizi ve tedavi sonuçlarımızı keşfedin.",
    url: "https://fyplus.com.tr/galeri",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeri — FyPlus Dental Bahçeşehir",
    description: "Klinik görselleri ve tedavi sonuçları.",
  },
};
export default function Layout({ children }) {
  return children;
}
