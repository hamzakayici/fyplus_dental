'use client';
import Link from 'next/link';
import { ChevronRight, Phone, Shield, Users, Award, Clock, Star, ArrowRight, Waypoints, Crown, Sparkles, Smile, AlignHorizontalDistributeCenter, Baby, Check, MapPin, Stethoscope, CalendarCheck } from 'lucide-react';

const featuredServices = [
  { icon: Waypoints, title: 'İmplant Tedavisi', desc: 'Kalıcı ve doğal görünümlü implant çözümleri.', slug: 'implant-tedavisi' },
  { icon: Crown, title: 'Zirkonyum Kaplama', desc: 'Estetik ve dayanıklı zirkonyum kaplamalar.', slug: 'zirkonyum-kaplama' },
  { icon: Sparkles, title: 'Diş Beyazlatma', desc: 'Profesyonel beyazlatma ile parlak gülümseme.', slug: 'dis-beyazlatma' },
  { icon: Smile, title: 'Gülüş Tasarımı', desc: 'Hollywood Smile ile mükemmel estetik.', slug: 'gulus-tasarimi' },
  { icon: AlignHorizontalDistributeCenter, title: 'Ortodonti', desc: 'Tel ve şeffaf plak ile düzgün dişler.', slug: 'ortodonti' },
  { icon: Baby, title: 'Pedodonti', desc: 'Çocuklara özel korkusuz tedavi.', slug: 'pedodonti' },
];

const stats = [
  { value: '15+', label: 'Yıllık Deneyim' },
  { value: '12.000+', label: 'Mutlu Hasta' },
  { value: '6', label: 'Uzman Hekim' },
  { value: '4.9', label: 'Google Puan' },
];

const processSteps = [
  { icon: Phone, title: 'Randevu', desc: 'Online veya telefonla kolay randevu.' },
  { icon: Stethoscope, title: 'Muayene', desc: 'Dijital tarama ve detaylı analiz.' },
  { icon: CalendarCheck, title: 'Tedavi Planı', desc: 'Kişiye özel tedavi planlaması.' },
  { icon: Star, title: 'Sonuç', desc: 'Mükemmel sonuç ve takip.' },
];

const testimonials = [
  { name: 'Ayşe K.', text: 'İmplant tedavim FyPlus Dental\'de çok profesyonelce gerçekleşti. Bahçeşehir\'de bu kalitede bir klinik bulmak harika.', rating: 5 },
  { name: 'Mehmet Y.', text: 'Zirkonyum kaplamalarım çok doğal görünüyor. Tüm ekibe teşekkürler.', rating: 5 },
  { name: 'Zeynep A.', text: 'Çocuğum ilk kez dişçiye korkusuz gitti. Pedodonti bölümü muhteşem.', rating: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge"><MapPin size={14} /> Bahçeşehir, İstanbul</div>
            <h1>Sağlıklı ve Güzel<br />Gülüşler Tasarlıyoruz</h1>
            <p className="hero-desc">Bahçeşehir&apos;de son teknoloji ile donatılmış kliniğimizde, uzman hekim kadromuzla premium diş sağlığı hizmeti sunuyoruz.</p>
            <div className="hero-actions">
              <Link href="/iletisim" className="btn btn-primary">Ücretsiz Muayene <ArrowRight size={16} /></Link>
              <a href="tel:+902120000000" className="btn btn-outline btn-outline-white"><Phone size={16} /> Hemen Arayın</a>
            </div>
            <div className="hero-stats">
              {stats.map((s, i) => (
                <div key={i} className="hero-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-inner">
              <div className="hero-card hero-card-1">
                <Shield size={20} />
                <div><strong>Garantili Tedavi</strong><span>Yazılı garanti belgesi</span></div>
              </div>
              <div className="hero-card hero-card-2">
                <Award size={20} />
                <div><strong>Uzman Kadro</strong><span>6 uzman hekim</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HİZMETLER ═══ */}
      <section className="section" id="hizmetler">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-label">Hizmetlerimiz</div>
              <h2 className="section-title">Uzman Tedavi Hizmetleri</h2>
              <p className="section-desc">Bahçeşehir kliniğimizde modern diş hekimliğinin tüm branşlarında hizmet veriyoruz.</p>
            </div>
            <Link href="/hizmetler" className="btn btn-outline">Tüm Hizmetler <ChevronRight size={16} /></Link>
          </div>
          <div className="services-grid">
            {featuredServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link key={i} href={`/hizmetler/${s.slug}`} className="service-card card">
                  <div className="service-icon"><Icon size={24} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="service-link">Detaylı Bilgi <ArrowRight size={14} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ HAKKIMIZDA ═══ */}
      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-visual-box" />
          </div>
          <div className="about-content">
            <div className="section-label">Neden FyPlus?</div>
            <h2 className="section-title">Bahçeşehir&apos;in Premium Diş Kliniği</h2>
            <p className="section-desc">Son teknoloji ekipmanlarımız, uzman hekim kadromuz ve hasta odaklı yaklaşımımızla Bahçeşehir ve çevresinde fark yaratıyoruz.</p>
            <div className="about-features">
              <div className="about-feature"><Check size={18} /> <span>Son teknoloji 3D tarayıcı ve dijital röntgen</span></div>
              <div className="about-feature"><Check size={18} /> <span>Sterilizasyon standartlarında Avrupa normları</span></div>
              <div className="about-feature"><Check size={18} /> <span>Anlaşmalı sigorta ve taksit imkanı</span></div>
              <div className="about-feature"><Check size={18} /> <span>Ücretsiz ilk muayene ve konsültasyon</span></div>
            </div>
            <Link href="/hakkimizda" className="btn btn-outline" style={{ marginTop: '24px' }}>Daha Fazla Bilgi <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* ═══ TEDAVİ SÜRECİ ═══ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Tedavi Süreci</div>
            <h2 className="section-title">4 Adımda Tedavi</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>Randevunuzdan sonuç almanıza kadar her adımda yanınızdayız.</p>
          </div>
          <div className="process-grid">
            {processSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="process-step">
                  <div className="process-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="process-icon"><Icon size={22} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ YORUMLAR ═══ */}
      <section className="section testimonials-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Hasta Yorumları</div>
            <h2 className="section-title">Hastalarımız Ne Diyor?</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card card">
                <div className="testimonial-stars">{Array.from({ length: t.rating }, (_, j) => <Star key={j} size={16} fill="currentColor" />)}</div>
                <p>{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name[0]}</div>
                  <strong>{t.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Bahçeşehir&apos;de Ücretsiz Muayene</h2>
          <p style={{ color: 'var(--gray-400)', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px' }}>Uzman hekimlerimizle ücretsiz konsültasyon için hemen randevu alın.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/iletisim" className="btn btn-primary">Online Randevu <ArrowRight size={16} /></Link>
            <a href="tel:+902120000000" className="btn btn-white"><Phone size={16} /> +90 212 000 00 00</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero{background:var(--navy);padding:140px 0 80px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;top:-50%;right:-20%;width:60%;height:200%;background:radial-gradient(ellipse,rgba(27,143,206,0.06),transparent 70%);pointer-events:none}
        .hero-inner{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
        .hero-badge{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:100px;background:rgba(27,143,206,0.1);color:var(--blue);font-size:0.82rem;font-weight:600;margin-bottom:24px;border:1px solid rgba(27,143,206,0.15)}
        .hero-content h1{color:var(--white);font-size:clamp(2.2rem,4.5vw,3.2rem);margin-bottom:20px;line-height:1.15}
        .hero-desc{color:var(--gray-400);font-size:1.05rem;line-height:1.7;max-width:480px;margin-bottom:32px}
        .hero-actions{display:flex;gap:12px;margin-bottom:48px;flex-wrap:wrap}
        .btn-outline-white{border-color:rgba(255,255,255,0.15);color:var(--gray-300)}
        .btn-outline-white:hover{border-color:var(--white);color:var(--white)}
        .hero-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;padding-top:32px;border-top:1px solid rgba(255,255,255,0.06)}
        .hero-stat strong{display:block;font-family:var(--font-heading);font-size:1.5rem;color:var(--white);font-weight:800}
        .hero-stat span{font-size:0.78rem;color:var(--gray-500)}
        .hero-visual{display:flex;align-items:center;justify-content:center}
        .hero-visual-inner{position:relative;width:100%;aspect-ratio:1;max-width:420px}
        .hero-card{position:absolute;display:flex;align-items:center;gap:12px;padding:16px 20px;background:rgba(255,255,255,0.06);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:var(--radius-md);color:var(--white)}
        .hero-card strong{display:block;font-size:0.88rem}
        .hero-card span{font-size:0.76rem;color:var(--gray-400)}
        .hero-card svg{color:var(--blue);flex-shrink:0}
        .hero-card-1{top:20%;left:10%;animation:float 6s ease-in-out infinite}
        .hero-card-2{bottom:25%;right:5%;animation:float 6s ease-in-out infinite 3s}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

        .section-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px;gap:24px}
        .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
        .service-card{display:flex;flex-direction:column;gap:12px;cursor:pointer}
        .service-icon{width:48px;height:48px;border-radius:var(--radius-md);background:var(--gray-50);display:flex;align-items:center;justify-content:center;color:var(--blue);transition:var(--transition)}
        .service-card:hover .service-icon{background:var(--blue);color:var(--white)}
        .service-card h3{font-size:1.05rem}
        .service-card p{color:var(--gray-500);font-size:0.88rem;line-height:1.6;flex:1}
        .service-link{display:flex;align-items:center;gap:6px;color:var(--coral);font-size:0.84rem;font-weight:600}

        .about-section{background:var(--gray-50)}
        .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
        .about-visual-box{width:100%;aspect-ratio:4/3;background:linear-gradient(135deg,var(--navy),var(--blue-dark));border-radius:var(--radius-xl);position:relative;overflow:hidden}
        .about-visual-box::after{content:'';position:absolute;bottom:0;right:0;width:60%;height:60%;background:radial-gradient(ellipse,rgba(232,81,61,0.15),transparent)}
        .about-features{display:flex;flex-direction:column;gap:12px;margin-top:24px}
        .about-feature{display:flex;align-items:center;gap:10px;font-size:0.92rem;color:var(--gray-600)}
        .about-feature svg{color:var(--green);flex-shrink:0}

        .process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
        .process-step{text-align:center;padding:32px 20px;border-radius:var(--radius-lg);border:1px solid var(--gray-200);position:relative;background:var(--white);transition:var(--transition)}
        .process-step:hover{border-color:var(--blue);box-shadow:var(--shadow-md)}
        .process-num{font-family:var(--font-heading);font-size:2.5rem;font-weight:800;color:var(--gray-100);position:absolute;top:12px;right:16px}
        .process-icon{width:48px;height:48px;border-radius:50%;background:var(--navy);color:var(--white);display:flex;align-items:center;justify-content:center;margin:0 auto 16px}
        .process-step h3{margin-bottom:8px}
        .process-step p{color:var(--gray-500);font-size:0.85rem}

        .testimonials-section{background:var(--gray-50)}
        .testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
        .testimonial-card{display:flex;flex-direction:column;gap:14px}
        .testimonial-stars{display:flex;gap:2px;color:#F59E0B}
        .testimonial-card p{color:var(--gray-600);font-size:0.9rem;line-height:1.7;flex:1}
        .testimonial-author{display:flex;align-items:center;gap:10px}
        .testimonial-avatar{width:36px;height:36px;border-radius:50%;background:var(--navy);color:var(--white);display:flex;align-items:center;justify-content:center;font-size:0.82rem;font-weight:700}

        @media(max-width:1024px){
          .hero-inner{grid-template-columns:1fr}.hero-visual{display:none}
          .services-grid{grid-template-columns:repeat(2,1fr)}
          .about-grid{grid-template-columns:1fr}.about-visual{display:none}
          .process-grid{grid-template-columns:repeat(2,1fr)}
          .testimonials-grid{grid-template-columns:1fr}
          .section-header{flex-direction:column;align-items:flex-start}
        }
        @media(max-width:600px){
          .services-grid{grid-template-columns:1fr}
          .process-grid{grid-template-columns:1fr}
          .hero-stats{grid-template-columns:repeat(2,1fr)}
        }
      `}</style>
    </>
  );
}
