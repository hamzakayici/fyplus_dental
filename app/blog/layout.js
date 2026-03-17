export const metadata = {
  title: "Blog — Diş Sağlığı Rehberi",
  description:
    "FyPlus Dental Clinic blog. Diş sağlığı, ağız bakımı, implant, zirkonyum, beyazlatma ve estetik diş hekimliği hakkında uzman makaleler ve ipuçları.",
  alternates: { canonical: "https://fyplus.com.tr/blog" },
  keywords: [
    "diş sağlığı blog", "ağız bakımı ipuçları",
    "implant rehberi", "zirkonyum bilgi",
    "diş beyazlatma yöntemleri", "ortodonti rehberi",
    "bahçeşehir diş sağlığı", "diş bakım önerileri",
  ],
  openGraph: {
    title: "Blog — FyPlus Dental | Diş Sağlığı Rehberi",
    description: "Diş sağlığı hakkında uzman makaleler, tedavi rehberleri ve bakım ipuçları.",
    url: "https://fyplus.com.tr/blog",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — FyPlus Dental Bahçeşehir",
    description: "Diş sağlığı rehberi ve uzman makaleleri.",
  },
};
export default function Layout({ children }) {
  return children;
}
