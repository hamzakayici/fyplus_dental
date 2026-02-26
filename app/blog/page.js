'use client';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock4, ArrowRight, Tag } from 'lucide-react';

const posts = [
  { title: 'Bahçeşehir\'de İmplant Tedavisi: Bilmeniz Gerekenler', slug: 'bahcesehir-implant-tedavisi', category: 'İmplant', date: '2025-02-20', readTime: '6 dk' },
  { title: 'Zirkonyum Kaplama mı Porselen mi? Hangisi Doğru Seçim?', slug: 'zirkonyum-porselen-karsilastirma', category: 'Protez', date: '2025-02-15', readTime: '5 dk' },
  { title: 'Diş Beyazlatma Hakkında Sık Sorulan Sorular', slug: 'dis-beyazlatma-sss', category: 'Estetik', date: '2025-02-10', readTime: '4 dk' },
  { title: 'Çocuklarda Diş Bakımı: Anne Babalara Öneriler', slug: 'cocuklarda-dis-bakimi', category: 'Pedodonti', date: '2025-02-05', readTime: '5 dk' },
  { title: 'Ortodonti Tedavisinde Şeffaf Plak Avantajları', slug: 'seffaf-plak-avantajlari', category: 'Ortodonti', date: '2025-01-28', readTime: '4 dk' },
  { title: 'Diş Eti Hastalıkları: Belirtiler ve Tedavi Yöntemleri', slug: 'dis-eti-hastaliklari', category: 'Periodontoloji', date: '2025-01-20', readTime: '6 dk' },
];

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Ana Sayfa</Link><ChevronRight size={14} /><span>Blog</span></div>
          <h1>Blog</h1>
          <p className="hero-subtitle">Diş sağlığı, ağız bakımı ve tedavi yöntemleri hakkında uzman makaleleri.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {posts.map((p, i) => (
              <article key={i} className="card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ height: '180px', background: `linear-gradient(135deg, var(--navy), hsl(${200 + i * 20}, 50%, 30%))` }} />
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '0.78rem', color: 'var(--gray-500)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Tag size={12} /> {p.category}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={12} /> {p.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock4 size={12} /> {p.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '12px', lineHeight: 1.4 }}>{p.title}</h3>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--coral)', fontSize: '0.84rem', fontWeight: 600 }}>Devamını Oku <ArrowRight size={14} /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
