import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allServices } from '@/app/data/services';

export async function generateStaticParams() {
  return allServices.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = allServices.find(s => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | FyPlus Dental`,
    description: service.description.slice(0, 160),
    alternates: { canonical: `https://fyplus.com.tr/hizmetler/${slug}` },
    openGraph: {
      title: `${service.title} | FyPlus Dental Clinic`,
      description: service.shortDesc,
      type: 'article',
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = allServices.find(s => s.slug === slug);
  if (!service) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://fyplus.com.tr' },
      { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://fyplus.com.tr/hizmetler' },
      { '@type': 'ListItem', position: 3, name: service.title },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Ana Sayfa</Link><span>/</span>
            <Link href="/hizmetler">Hizmetler</Link><span>/</span>
            <span>{service.title}</span>
          </nav>
          <div className="hero-icon">{service.icon}</div>
          <h1>{service.title}</h1>
          <p>{service.shortDesc}</p>
        </div>
      </section>

      <section className="section sd-section">
        <div className="container sd-layout">
          <article className="sd-main">
            <div className="sd-block">
              <h2>Tedavi Hakkında</h2>
              <p>{service.description}</p>
            </div>

            <div className="sd-block">
              <h2>Avantajları</h2>
              <div className="sd-benefits">
                {service.benefits.map((b, i) => (
                  <div key={i} className="sd-benefit"><span className="check">✓</span> {b}</div>
                ))}
              </div>
            </div>

            <div className="sd-block">
              <h2>Tedavi Süreci</h2>
              <div className="sd-steps">
                {service.process.map((p, i) => (
                  <div key={i} className="sd-step">
                    <div className="sd-step-num">{String(i + 1).padStart(2, '0')}</div>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sd-block">
              <h2>Sık Sorulan Sorular</h2>
              <div className="sd-faqs">
                {service.faqs.map((f, i) => (
                  <details key={i} className="sd-faq">
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </article>

          <aside className="sd-sidebar">
            <div className="sd-info-card">
              <h4>Tedavi Bilgileri</h4>
              <div className="sd-info-row"><span>Süre</span><strong>{service.duration}</strong></div>
              <Link href="/iletisim" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>Randevu Al</Link>
            </div>
            <div className="sd-info-card">
              <h4>Diğer Hizmetler</h4>
              <ul className="sd-other">
                {allServices.filter(s => s.slug !== slug).slice(0, 5).map(s => (
                  <li key={s.slug}><Link href={`/hizmetler/${s.slug}`}>{s.icon} {s.title}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Hemen Randevu Alın</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>Ücretsiz muayene için bizimle iletişime geçin.</p>
          <Link href="/iletisim" className="btn btn-primary">Randevu Al →</Link>
        </div>
      </section>
    </>
  );
}
