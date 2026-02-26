import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  metadataBase: new URL('https://fyplus.com.tr'),
  title: {
    default: 'FyPlus Dental Clinic | Bahçeşehir Diş Kliniği',
    template: '%s | FyPlus Dental - Bahçeşehir',
  },
  description: 'Bahçeşehir diş kliniği FyPlus Dental Clinic. İmplant, zirkonyum kaplama, diş beyazlatma, ortodonti ve gülüş tasarımı alanlarında uzman kadromuzla Bahçeşehir ve Başakşehir bölgesine premium diş sağlığı hizmeti sunuyoruz.',
  keywords: ['bahçeşehir diş kliniği', 'bahçeşehir diş hekimi', 'implant bahçeşehir', 'zirkonyum kaplama bahçeşehir', 'diş beyazlatma bahçeşehir', 'ortodonti bahçeşehir', 'gülüş tasarımı bahçeşehir', 'hollywood smile bahçeşehir', 'başakşehir diş kliniği', 'bahçeşehir en iyi diş kliniği', 'estetik diş hekimliği bahçeşehir', 'çocuk diş hekimi bahçeşehir', 'fyplus dental'],
  authors: [{ name: 'FyPlus Dental Clinic' }],
  creator: 'FyPlus Dental Clinic',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://fyplus.com.tr',
    siteName: 'FyPlus Dental Clinic',
    title: 'FyPlus Dental Clinic | Bahçeşehir Diş Kliniği',
    description: 'Bahçeşehir ve Başakşehir bölgesinde implant, zirkonyum, gülüş tasarımı ve estetik diş hekimliği alanlarında premium diş sağlığı hizmeti.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'FyPlus Dental Clinic Bahçeşehir' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FyPlus Dental Clinic | Bahçeşehir Diş Kliniği',
    description: 'Bahçeşehir premium diş kliniği — İmplant, Zirkonyum, Gülüş Tasarımı',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://fyplus.com.tr', languages: { 'tr-TR': 'https://fyplus.com.tr' } },
};

export default function RootLayout({ children }) {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'FyPlus Dental Clinic',
    url: 'https://fyplus.com.tr',
    logo: 'https://fyplus.com.tr/images/logo.png',
    image: 'https://fyplus.com.tr/images/clinic.jpg',
    description: 'Bahçeşehir diş kliniği. İmplant, zirkonyum kaplama, diş beyazlatma, ortodonti, gülüş tasarımı ve estetik diş hekimliği alanlarında uzman kadromuzla premium diş sağlığı hizmeti.',
    telephone: '+90 212 000 00 00',
    email: 'info@fyplus.com.tr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bahçeşehir 1. Kısım Mah.',
      addressLocality: 'Başakşehir',
      addressRegion: 'İstanbul',
      postalCode: '34488',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0684,
      longitude: 28.7427,
    },
    areaServed: [
      { '@type': 'City', name: 'Bahçeşehir' },
      { '@type': 'City', name: 'Başakşehir' },
      { '@type': 'City', name: 'Esenyurt' },
      { '@type': 'City', name: 'Küçükçekmece' },
      { '@type': 'City', name: 'Beylikdüzü' },
    ],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '16:00' },
    ],
    priceRange: '₺₺₺',
    sameAs: ['https://instagram.com/fyplusdental', 'https://facebook.com/fyplusdental'],
    medicalSpecialty: ['Dentistry', 'Orthodontics', 'Prosthodontics', 'Endodontics', 'Periodontics', 'PediatricDentistry'],
    availableService: [
      { '@type': 'MedicalProcedure', name: 'İmplant Tedavisi', description: 'Bahçeşehir implant tedavisi' },
      { '@type': 'MedicalProcedure', name: 'Zirkonyum Kaplama', description: 'Bahçeşehir zirkonyum kaplama' },
      { '@type': 'MedicalProcedure', name: 'Ortodonti', description: 'Bahçeşehir ortodonti tedavisi' },
      { '@type': 'MedicalProcedure', name: 'Gülüş Tasarımı', description: 'Bahçeşehir Hollywood Smile gülüş tasarımı' },
      { '@type': 'MedicalProcedure', name: 'Diş Beyazlatma', description: 'Bahçeşehir profesyonel diş beyazlatma' },
      { '@type': 'MedicalProcedure', name: 'Pedodonti', description: 'Bahçeşehir çocuk diş hekimliği' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1250',
      bestRating: '5',
    },
  };

  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A1628" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="Bahçeşehir, Başakşehir, İstanbul" />
        <meta name="geo.position" content="41.0684;28.7427" />
        <meta name="ICBM" content="41.0684, 28.7427" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
