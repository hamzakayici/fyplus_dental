'use client';
import Link from 'next/link';
import { allServices } from '@/app/data/services';
import { ArrowRight, ChevronRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export default function HizmetlerPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span>Hizmetlerimiz</span>
          </div>
          <h1>Tedavi Hizmetlerimiz</h1>
          <p className="hero-subtitle">Bahçeşehir kliniğimizde modern diş hekimliğinin tüm branşlarında uzman kadromuzla hizmet veriyoruz.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="all-services">
            {allServices.map((s, i) => {
              const Icon = LucideIcons[s.iconName] || LucideIcons.Stethoscope;
              return (
                <Link key={i} href={`/hizmetler/${s.slug}`} className="service-list-card card">
                  <div className="slc-icon"><Icon size={24} /></div>
                  <div className="slc-content">
                    <h3>{s.title}</h3>
                    <p>{s.shortDesc}</p>
                  </div>
                  <div className="slc-arrow"><ArrowRight size={18} /></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Hangi Tedaviye İhtiyacınız Var?</h2>
          <p style={{ color: 'var(--gray-400)', maxWidth: '460px', margin: '0 auto 32px', fontSize: '0.95rem' }}>Ücretsiz muayene ile ihtiyacınıza uygun tedavi planını birlikte oluşturalım.</p>
          <Link href="/iletisim" className="btn btn-primary">Ücretsiz Muayene <ArrowRight size={16} /></Link>
        </div>
      </section>

      <style jsx>{`
        .all-services{display:flex;flex-direction:column;gap:12px}
        .service-list-card{display:flex;align-items:center;gap:20px;padding:24px 28px;cursor:pointer}
        .slc-icon{width:52px;height:52px;border-radius:var(--radius-md);background:var(--gray-50);display:flex;align-items:center;justify-content:center;color:var(--blue);flex-shrink:0;transition:var(--transition)}
        .service-list-card:hover .slc-icon{background:var(--blue);color:var(--white)}
        .slc-content{flex:1}
        .slc-content h3{font-size:1.05rem;margin-bottom:4px}
        .slc-content p{color:var(--gray-500);font-size:0.88rem;line-height:1.5}
        .slc-arrow{color:var(--gray-300);transition:var(--transition)}
        .service-list-card:hover .slc-arrow{color:var(--coral);transform:translateX(4px)}
        @media(max-width:600px){.service-list-card{flex-direction:column;text-align:center}.slc-arrow{display:none}}
      `}</style>
    </>
  );
}
