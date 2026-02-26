import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  metadataBase: new URL('https://fyplus.com.tr'),
  title: {
    default: 'FyPlus Dental Clinic | Premium Diş Kliniği',
    template: '%s | FyPlus Dental Clinic',
  },
  description: 'FyPlus Dental Clinic - İmplant, zirkonyum, estetik diş hekimliği, ortodonti ve gülüş tasarımı alanlarında uzman kadromuzla premium diş sağlığı hizmeti sunuyoruz.',
  keywords: ['diş kliniği', 'implant', 'zirkonyum', 'ortodonti', 'diş beyazlatma', 'gülüş tasarımı', 'hollywood smile', 'estetik diş hekimliği', 'fyplus dental'],
  authors: [{ name: 'FyPlus Dental Clinic' }],
  creator: 'FyPlus Dental Clinic',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://fyplus.com.tr',
    siteName: 'FyPlus Dental Clinic',
    title: 'FyPlus Dental Clinic | Premium Diş Kliniği',
    description: 'İmplant, zirkonyum, estetik diş hekimliği ve gülüş tasarımı alanlarında uzman kadromuzla premium diş sağlığı hizmeti.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'FyPlus Dental Clinic' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FyPlus Dental Clinic | Premium Diş Kliniği',
    description: 'Premium diş sağlığı hizmeti - İmplant, Zirkonyum, Gülüş Tasarımı',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://fyplus.com.tr', languages: { 'tr-TR': 'https://fyplus.com.tr' } },
  other: {
    'ai-content-declaration': 'This website contains information about FyPlus Dental Clinic services',
  },
};

export default function RootLayout({ children }) {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'FyPlus Dental Clinic',
    url: 'https://fyplus.com.tr',
    logo: 'https://fyplus.com.tr/images/logo.png',
    description: 'Premium diş kliniği - İmplant, zirkonyum, estetik diş hekimliği ve gülüş tasarımı hizmetleri.',
    telephone: '+90 212 000 00 00',
    email: 'info@fyplus.com.tr',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'İstanbul',
      addressCountry: 'TR',
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '16:00' },
    ],
    priceRange: '₺₺₺',
    sameAs: ['https://instagram.com/fyplusdental', 'https://facebook.com/fyplusdental'],
    medicalSpecialty: ['Dentistry', 'Orthodontics', 'Prosthodontics', 'Endodontics', 'Periodontics'],
    availableService: [
      { '@type': 'MedicalProcedure', name: 'İmplant Tedavisi' },
      { '@type': 'MedicalProcedure', name: 'Zirkonyum Kaplama' },
      { '@type': 'MedicalProcedure', name: 'Ortodonti' },
      { '@type': 'MedicalProcedure', name: 'Gülüş Tasarımı' },
      { '@type': 'MedicalProcedure', name: 'Diş Beyazlatma' },
    ],
  };

  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1B8FCE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
