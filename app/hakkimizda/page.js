'use client';
import Link from 'next/link';

const values = [
  { icon: '🎯', title: 'Hasta Odaklı Yaklaşım', desc: 'Her hastamıza bireysel tedavi planı oluşturarak kişiye özel çözümler sunuyoruz.' },
  { icon: '🔬', title: 'Son Teknoloji', desc: '3D tarayıcılar, dijital röntgen ve CAD/CAM sistemleri ile hassas tedavi.' },
  { icon: '🏆', title: 'Deneyimli Kadro', desc: '15+ yıllık deneyime sahip uzman hekimlerimizle güvenilir tedavi.' },
  { icon: '🤝', title: 'Şeffaf İletişim', desc: 'Tedavi sürecinin her aşamasında hastalarımızı detaylı bilgilendiriyoruz.' },
  { icon: '🛡️', title: 'Sterilizasyon', desc: 'En yüksek hijyen standartlarında, tam steril ortamda tedavi.' },
  { icon: '💳', title: 'Esnek Ödeme', desc: 'Taksit imkânı ve anlaşmalı kurumlarla uygun ödeme seçenekleri.' },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className="page-hero"><div className="container">
        <nav className="breadcrumb" aria-label="breadcrumb"><Link href="/">Ana Sayfa</Link><span>/</span><span>Hakkımızda</span></nav>
        <h1>Hakkımızda</h1>
        <p>15 yılı aşkın deneyimimizle, en son teknolojiyi kullanarak premium diş sağlığı hizmeti sunuyoruz.</p>
      </div></section>

      <section className="section"><div className="container abt-grid">
        <div className="abt-text">
          <span className="badge">♦ Hikayemiz</span>
          <h2>FyPlus Dental <span className="gradient-text">Clinic</span></h2>
          <p>FyPlus Dental Clinic, hastaların konforunu ve sağlığını ön planda tutarak, estetik ve fonksiyonel diş hekimliğinin tüm branşlarında hizmet vermek amacıyla kurulmuştur. Kliniğimiz, son teknoloji cihazlar ve uzman hekim kadromuzla, her hastaya özel tedavi planları oluşturarak en yüksek kalitede sağlık hizmeti sunmayı hedefler.</p>
          <p>Misyonumuz, hastalarımızın gülümseme güvenini artırarak yaşam kalitelerini yükseltmektir. Vizyonumuz ise diş hekimliği alanında referans bir klinik olmaktır.</p>
          <div className="abt-stats">
            <div className="abt-stat"><strong>15+</strong><span>Yıllık Deneyim</span></div>
            <div className="abt-stat"><strong>10K+</strong><span>Mutlu Hasta</span></div>
            <div className="abt-stat"><strong>25K+</strong><span>Tedavi</span></div>
            <div className="abt-stat"><strong>8</strong><span>Uzman Hekim</span></div>
          </div>
        </div>
        <div className="abt-visual">
          <div className="abt-img"><span>🏥</span><p>FyPlus Dental Clinic</p></div>
        </div>
      </div></section>

      <section className="section" style={{ background: 'var(--gray-50)' }}><div className="container">
        <div className="section-header">
          <span className="badge">★ Değerlerimiz</span>
          <h2>Neden <span className="gradient-text">Bizi Tercih Etmelisiniz?</span></h2>
        </div>
        <div className="val-grid">
          {values.map((v, i) => (
            <div key={i} className="val-card">
              <div className="val-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      <style jsx>{`
        .page-hero{background:linear-gradient(135deg,var(--navy),var(--blue-dark));padding:140px 0 60px;color:var(--white)}
        .breadcrumb{display:flex;align-items:center;gap:8px;font-size:0.85rem;margin-bottom:16px;color:rgba(255,255,255,0.6)}
        .breadcrumb a{color:rgba(255,255,255,0.6)}.breadcrumb a:hover{color:var(--coral)}
        .page-hero h1{margin-bottom:12px}
        .page-hero p{color:rgba(255,255,255,0.75);font-size:1.05rem;max-width:600px}
        .abt-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
        .abt-text .badge{margin-bottom:16px}
        .abt-text h2{margin-bottom:20px}
        .abt-text p{color:var(--gray-600);line-height:1.8;margin-bottom:16px}
        .abt-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:28px}
        .abt-stat{text-align:center;padding:16px;background:var(--gray-50);border-radius:var(--radius-md);border:1px solid var(--gray-200)}
        .abt-stat strong{display:block;font-size:1.6rem;color:var(--blue);font-family:var(--font-heading)}
        .abt-stat span{font-size:0.8rem;color:var(--gray-500)}
        .abt-visual .abt-img{aspect-ratio:4/5;border-radius:var(--radius-xl);background:linear-gradient(135deg,var(--blue),var(--blue-dark));display:flex;flex-direction:column;align-items:center;justify-content:center;color:white}
        .abt-img span{font-size:4rem;margin-bottom:12px}.abt-img p{opacity:0.8}
        .val-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .val-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius-lg);padding:32px;text-align:center;transition:var(--transition)}
        .val-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md);border-color:var(--blue)}
        .val-icon{font-size:2.2rem;margin-bottom:16px}
        .val-card h3{font-family:var(--font-body);font-size:1.05rem;font-weight:700;margin-bottom:10px}
        .val-card p{color:var(--gray-500);font-size:0.88rem;line-height:1.7}
        @media(max-width:1024px){.abt-grid{grid-template-columns:1fr;gap:40px}.val-grid{grid-template-columns:repeat(2,1fr)}.abt-stats{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.val-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
