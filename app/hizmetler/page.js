'use client';
import Link from 'next/link';
import { allServices } from '@/app/data/services';

export default function HizmetlerPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'FyPlus Dental Clinic - Hizmetler',
    medicalSpecialty: allServices.map(s => s.title),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb"><Link href="/">Ana Sayfa</Link> <span>/</span> <span>Hizmetlerimiz</span></nav>
          <h1>Hizmetlerimiz</h1>
          <p>Modern diş hekimliğinin tüm branşlarında uzman kadromuzla premium tedavi hizmetleri sunuyoruz.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="srv-grid">
            {allServices.map(s => (
              <Link href={`/hizmetler/${s.slug}`} key={s.slug} className="srv-card">
                <div className="srv-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
                <span className="srv-link">Detaylı Bilgi →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        .page-hero{background:linear-gradient(135deg,var(--navy),var(--blue-dark));padding:140px 0 60px;color:var(--white)}
        .breadcrumb{display:flex;align-items:center;gap:8px;font-size:0.85rem;margin-bottom:16px;color:rgba(255,255,255,0.6)}
        .breadcrumb a{color:rgba(255,255,255,0.6);transition:var(--transition)}
        .breadcrumb a:hover{color:var(--coral)}
        .page-hero h1{margin-bottom:12px}
        .page-hero p{color:rgba(255,255,255,0.75);font-size:1.05rem;max-width:600px}
        .srv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
        .srv-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius-lg);padding:36px 28px;transition:var(--transition)}
        .srv-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg);border-color:var(--blue)}
        .srv-icon{font-size:2.4rem;margin-bottom:16px}
        .srv-card h3{font-family:var(--font-body);font-size:1.1rem;font-weight:700;margin-bottom:10px}
        .srv-card p{color:var(--gray-500);font-size:0.9rem;line-height:1.7;margin-bottom:16px}
        .srv-link{color:var(--blue);font-weight:600;font-size:0.88rem}
        @media(max-width:1024px){.srv-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.srv-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
