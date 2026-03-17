import "./globals.css";
import "lenis/dist/lenis.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";

export const metadata = {
  metadataBase: new URL("https://fyplus.com.tr"),
  title: {
    default: "FyPlus Dental Clinic | Bahçeşehir Diş Kliniği",
    template: "%s | FyPlus Dental — Bahçeşehir",
  },
  description:
    "Bahçeşehir diş kliniği FyPlus Dental Clinic. İmplant, zirkonyum kaplama, diş beyazlatma, ortodonti ve gülüş tasarımı alanlarında 15 yılı aşkın deneyimle Bahçeşehir, Başakşehir ve çevre bölgelerine premium diş sağlığı hizmeti sunuyoruz. ☎ 0533 516 51 34",
  keywords: [
    "bahçeşehir diş kliniği", "bahçeşehir diş hekimi", "bahçeşehir dişçi",
    "implant bahçeşehir", "implant tedavisi başakşehir",
    "zirkonyum kaplama bahçeşehir", "zirkonyum diş fiyat",
    "diş beyazlatma bahçeşehir", "profesyonel diş beyazlatma",
    "ortodonti bahçeşehir", "şeffaf plak tedavisi",
    "gülüş tasarımı bahçeşehir", "hollywood smile bahçeşehir", "hollywood smile istanbul",
    "başakşehir diş kliniği", "başakşehir dişçi",
    "bahçeşehir en iyi diş kliniği", "en iyi diş hekimi bahçeşehir",
    "estetik diş hekimliği bahçeşehir", "estetik diş hekimi istanbul",
    "çocuk diş hekimi bahçeşehir", "pedodonti bahçeşehir",
    "kanal tedavisi bahçeşehir", "diş dolgu bahçeşehir",
    "diş protez bahçeşehir", "diş kaplama fiyatları",
    "all on 4 implant bahçeşehir", "tek günde implant",
    "fyplus dental", "fyplus diş kliniği",
  ],
  authors: [{ name: "FyPlus Dental Clinic" }],
  creator: "FyPlus Dental Clinic",
  publisher: "FyPlus Dental Clinic",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://fyplus.com.tr",
    siteName: "FyPlus Dental Clinic",
    title: "FyPlus Dental | Bahçeşehir Diş Kliniği — İmplant, Zirkonyum, Gülüş Tasarımı",
    description: "Bahçeşehir ve Başakşehir bölgesinde 15+ yıl deneyimle implant, zirkonyum, gülüş tasarımı ve estetik diş hekimliği. Ücretsiz muayene için hemen arayın.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "FyPlus Dental Clinic — Bahçeşehir Diş Kliniği" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FyPlus Dental | Bahçeşehir Diş Kliniği",
    description: "Bahçeşehir premium diş kliniği — İmplant, Zirkonyum, Gülüş Tasarımı. 15+ yıl deneyim, 12.000+ mutlu hasta.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fyplus.com.tr",
    languages: { "tr-TR": "https://fyplus.com.tr" },
  },
  verification: {
    // Google Search Console doğrulama kodu buraya eklenecek
    // google: "google-site-verification-code",
  },
  category: "dental clinic",
};

export default function RootLayout({ children }) {
  /* ═══ Dentist / LocalBusiness Schema.org ═══ */
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://fyplus.com.tr/#dentist",
    name: "FyPlus Dental Clinic",
    alternateName: "FyPlus Diş Kliniği",
    url: "https://fyplus.com.tr",
    logo: {
      "@type": "ImageObject",
      url: "https://fyplus.com.tr/images/logo.png",
      width: 300,
      height: 80,
    },
    image: [
      "https://fyplus.com.tr/images/clinic.jpg",
      "https://fyplus.com.tr/images/hero-clinic.png",
    ],
    description:
      "Bahçeşehir'de 15 yılı aşkın deneyimle implant, zirkonyum kaplama, diş beyazlatma, ortodonti, gülüş tasarımı ve estetik diş hekimliği alanlarında premium diş sağlığı hizmeti sunan FyPlus Dental Clinic.",
    telephone: "+90 533 516 51 34",
    email: "info@fyplus.com.tr",
    foundingDate: "2010",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 25 },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bahçeşehir 1. Kısım Mah. Vali Recep Yazıcıoğlu Cad. No:50 BG",
      addressLocality: "Bahçeşehir",
      addressRegion: "İstanbul",
      postalCode: "34488",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.073018446909984,
      longitude: 28.69320361122794,
    },
    hasMap: "https://maps.google.com/?q=FyPlus+Dental+Clinic+Bahçeşehir",
    areaServed: [
      { "@type": "City", name: "Bahçeşehir" },
      { "@type": "City", name: "Başakşehir" },
      { "@type": "City", name: "Esenyurt" },
      { "@type": "City", name: "Küçükçekmece" },
      { "@type": "City", name: "Beylikdüzü" },
      { "@type": "City", name: "Büyükçekmece" },
      { "@type": "City", name: "Avcılar" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "₺₺₺",
    currenciesAccepted: "TRY",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    sameAs: [
      "https://instagram.com/fyplusdental",
      "https://facebook.com/fyplusdental",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ayşe K." },
        datePublished: "2025-12-15",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "İmplant tedavim için FyPlus'ı tercih ettim ve çok memnun kaldım. Doktorlar çok ilgili, klinik tertemiz.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Mehmet Y." },
        datePublished: "2025-11-20",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Zirkonyum kaplama yaptırdım, sonuç harika! Bahçeşehir'de en iyi diş kliniği diyebilirim.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Elif S." },
        datePublished: "2025-10-08",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Hollywood smile yaptırdım, gülüşüm tamamen değişti. FyPlus ekibine sonsuz teşekkürler!",
      },
    ],
    medicalSpecialty: [
      "Dental Implantology",
      "Prosthodontics",
      "Orthodontics",
      "Cosmetic Dentistry",
      "Endodontics",
      "Pedodontics",
    ],
    availableService: [
      { "@type": "MedicalProcedure", name: "İmplant Tedavisi", url: "https://fyplus.com.tr/hizmetler/implant-tedavisi" },
      { "@type": "MedicalProcedure", name: "Zirkonyum Kaplama", url: "https://fyplus.com.tr/hizmetler/zirkonyum-kaplama" },
      { "@type": "MedicalProcedure", name: "Diş Beyazlatma", url: "https://fyplus.com.tr/hizmetler/dis-beyazlatma" },
      { "@type": "MedicalProcedure", name: "Gülüş Tasarımı", url: "https://fyplus.com.tr/hizmetler/gulus-tasarimi" },
      { "@type": "MedicalProcedure", name: "Ortodonti", url: "https://fyplus.com.tr/hizmetler/ortodonti" },
      { "@type": "MedicalProcedure", name: "Kanal Tedavisi", url: "https://fyplus.com.tr/hizmetler/kanal-tedavisi" },
      { "@type": "MedicalProcedure", name: "Pedodonti", url: "https://fyplus.com.tr/hizmetler/pedodonti" },
      { "@type": "MedicalProcedure", name: "Diş Eti Tedavisi", url: "https://fyplus.com.tr/hizmetler/dis-eti-tedavisi" },
      { "@type": "MedicalProcedure", name: "Porselen Laminate", url: "https://fyplus.com.tr/hizmetler/porselen-laminate" },
    ],
  };

  /* ═══ WebSite Schema (Sitelinks Search Box) ═══ */
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://fyplus.com.tr/#website",
    name: "FyPlus Dental Clinic",
    url: "https://fyplus.com.tr",
    publisher: { "@id": "https://fyplus.com.tr/#dentist" },
    inLanguage: "tr-TR",
  };

  /* ═══ Organization Schema ═══ */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://fyplus.com.tr/#organization",
    name: "FyPlus Dental Clinic",
    url: "https://fyplus.com.tr",
    logo: "https://fyplus.com.tr/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-533-516-51-34",
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish", "English"],
    },
  };

  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0A1628" />
        <meta name="apple-mobile-web-app-title" content="FyPlus Dental" />

        {/* Geo Tags — Local SEO */}
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="Bahçeşehir, Başakşehir, İstanbul" />
        <meta name="geo.position" content="41.073018;28.693204" />
        <meta name="ICBM" content="41.073018, 28.693204" />

        {/* Performance: Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className="is-loading">
        <Preloader />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
