'use client';
import Link from 'next/link';
import { ChevronRight, Check, Users, Award, Eye, Heart, Shield, Clock, ArrowRight } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Güven', desc: 'Şeffaf tedavi süreçleri ve yazılı garanti.' },
  { icon: Award, title: 'Uzmanlık', desc: 'Alanında uzman hekim kadrosu.' },
  { icon: Heart, title: 'Hasta Odaklılık', desc: 'Konfor ve memnuniyet önceliğimiz.' },
  { icon: Eye, title: 'Teknoloji', desc: 'Son teknoloji dijital sistemler.' },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Ana Sayfa</Link><ChevronRight size={14} /><span>Hakkımızda</span></div>
          <h1>Hakkımızda</h1>
          <p className="hero-subtitle">Bahçeşehir&apos;de premium diş sağlığı hizmeti sunan FyPlus Dental Clinic&apos;i tanıyın.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <div className="section-label">FyPlus Dental Clinic</div>
            <h2 className="section-title">Bahçeşehir&apos;in Güvenilir Diş Kliniği</h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: '20px', fontSize: '0.95rem' }}>
              FyPlus Dental Clinic, Bahçeşehir&apos;de modern diş hekimliğinin tüm branşlarında hizmet veren premium bir diş kliniğidir. Uzman hekim kadromuz, son teknoloji ekipmanlarımız ve hasta odaklı yaklaşımımızla Bahçeşehir, Başakşehir ve çevre bölgelere kaliteli diş sağlığı hizmeti sunuyoruz.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Kliniğimizde dijital röntgen, 3D intraoral tarayıcı, CAD/CAM üretim sistemi gibi son teknoloji cihazlar kullanılmaktadır. Avrupa standartlarında sterilizasyon protokolleri uygulanmakta, her hasta için kişiye özel tedavi planları hazırlanmaktadır.
            </p>
          </div>
          <div style={{ width: '100%', aspectRatio: '4/3', background: 'linear-gradient(135deg, var(--navy), var(--blue-dark))', borderRadius: 'var(--radius-xl)' }} />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Değerlerimiz</div>
            <h2 className="section-title">Bizi Farklı Kılan Değerler</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="card" style={{ textAlign: 'center', padding: '32px 20px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--navy)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}><Icon size={22} /></div>
                  <h3>{v.title}</h3>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.88rem', marginTop: '8px' }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'center' }}>
            {[{ v: '15+', l: 'Yıllık Deneyim' }, { v: '12.000+', l: 'Mutlu Hasta' }, { v: '6', l: 'Uzman Hekim' }, { v: '4.9', l: 'Google Puan' }].map((s, i) => (
              <div key={i} style={{ padding: '32px 20px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--blue)' }}>{s.v}</div>
                <div style={{ color: 'var(--gray-500)', fontSize: '0.88rem', marginTop: '8px' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Randevu Almak İster Misiniz?</h2>
          <p style={{ color: 'var(--gray-400)', maxWidth: '460px', margin: '0 auto 32px' }}>Ücretsiz muayene ve konsültasyon için hemen iletişime geçin.</p>
          <Link href="/iletisim" className="btn btn-primary">Randevu Al <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
