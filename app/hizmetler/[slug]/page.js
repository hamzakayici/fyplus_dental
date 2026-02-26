'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { allServices } from '@/app/data/services';
import { ChevronRight, Check, ArrowRight, Phone } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = allServices.find(s => s.slug === slug);
  if (!service) return <div className="container section"><h1>Hizmet Bulunamadı</h1></div>;

  const Icon = LucideIcons[service.iconName] || LucideIcons.Stethoscope;
  const otherServices = allServices.filter(s => s.slug !== slug).slice(0, 5);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <Link href="/hizmetler">Hizmetler</Link>
            <ChevronRight size={14} />
            <span>{service.title}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-md)', background: 'rgba(27,143,206,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)' }}><Icon size={26} /></div>
            <h1 style={{ margin: 0 }}>{service.title}</h1>
          </div>
          <p className="hero-subtitle">{service.shortDesc}</p>
        </div>
      </section>

      <section className="section sd-section">
        <div className="container sd-layout">
          <div className="sd-main">
            <div className="sd-block">
              <h2>Tedavi Hakkında</h2>
              <p>{service.description}</p>
            </div>

            {service.benefits && (
              <div className="sd-block">
                <h2>Avantajları</h2>
                <div className="sd-benefits">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="sd-benefit"><Check size={18} /> <span>{b}</span></div>
                  ))}
                </div>
              </div>
            )}

            {service.process && (
              <div className="sd-block">
                <h2>Tedavi Aşamaları</h2>
                <div className="sd-steps">
                  {service.process.map((p, i) => (
                    <div key={i} className="sd-step">
                      <div className="sd-step-num">{i + 1}</div>
                      <p>{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {service.faqs && service.faqs.length > 0 && (
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
            )}
          </div>

          <aside className="sd-sidebar">
            <div className="sd-info-card">
              <h4>Tedavi Bilgileri</h4>
              <div className="sd-info-row"><span>Süre</span><strong>{service.duration}</strong></div>
              <div style={{ marginTop: '16px' }}>
                <Link href="/iletisim" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Randevu Al <ArrowRight size={15} /></Link>
              </div>
              <div style={{ marginTop: '8px' }}>
                <a href="tel:+902120000000" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}><Phone size={15} /> Hemen Ara</a>
              </div>
            </div>
            <div className="sd-info-card">
              <h4>Diğer Hizmetler</h4>
              <ul className="sd-other">
                {otherServices.map((os, i) => {
                  const OIcon = LucideIcons[os.iconName] || LucideIcons.Stethoscope;
                  return (
                    <li key={i}><Link href={`/hizmetler/${os.slug}`}><OIcon size={18} /> {os.title}</Link></li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Bahçeşehir&apos;de {service.title}</h2>
          <p style={{ color: 'var(--gray-400)', maxWidth: '460px', margin: '0 auto 32px', fontSize: '0.95rem' }}>Ücretsiz muayene için hemen randevu alın.</p>
          <Link href="/iletisim" className="btn btn-primary">Randevu Al <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
