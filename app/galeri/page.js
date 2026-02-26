'use client';
import Link from 'next/link';

const categories = ['Tümü', 'Klinik', 'Tedavi Öncesi-Sonrası', 'Ekipmanlar', 'Ekip'];
const galleryItems = [
  { cat: 'Klinik', emoji: '🏥', label: 'Modern Klinik Girişi' },
  { cat: 'Klinik', emoji: '💺', label: 'Tedavi Odası' },
  { cat: 'Klinik', emoji: '🪑', label: 'Bekleme Salonu' },
  { cat: 'Ekipmanlar', emoji: '🔬', label: '3D Tarayıcı' },
  { cat: 'Ekipmanlar', emoji: '🖥️', label: 'Dijital Röntgen' },
  { cat: 'Ekipmanlar', emoji: '⚙️', label: 'CAD/CAM Sistemi' },
  { cat: 'Tedavi Öncesi-Sonrası', emoji: '😁', label: 'Gülüş Tasarımı Sonucu' },
  { cat: 'Tedavi Öncesi-Sonrası', emoji: '💎', label: 'Zirkonyum Kaplama' },
  { cat: 'Tedavi Öncesi-Sonrası', emoji: '✨', label: 'Diş Beyazlatma' },
  { cat: 'Ekip', emoji: '👨‍⚕️', label: 'Uzman Kadromuz' },
  { cat: 'Ekip', emoji: '🤝', label: 'Ekip Çalışması' },
  { cat: 'Klinik', emoji: '🛗', label: 'Sterilizasyon Ünitesi' },
];

export default function GaleriPage() {
  return (
    <>
      <section className="page-hero"><div className="container">
        <nav className="breadcrumb" aria-label="breadcrumb"><Link href="/">Ana Sayfa</Link><span>/</span><span>Galeri</span></nav>
        <h1>Galeri</h1>
        <p>Kliniğimizden kareler, tedavi sonuçlarımız ve modern ekipmanlarımız.</p>
      </div></section>

      <section className="section"><div className="container">
        <div className="gal-grid">
          {galleryItems.map((item, i) => (
            <div key={i} className="gal-card">
              <div className="gal-img"><span>{item.emoji}</span></div>
              <div className="gal-info"><span className="gal-cat">{item.cat}</span><h3>{item.label}</h3></div>
            </div>
          ))}
        </div>
      </div></section>

      <style jsx>{`
        .page-hero{background:linear-gradient(135deg,var(--navy),var(--blue-dark));padding:140px 0 60px;color:var(--white)}
        .breadcrumb{display:flex;align-items:center;gap:8px;font-size:0.85rem;margin-bottom:16px;color:rgba(255,255,255,0.6)}
        .breadcrumb a{color:rgba(255,255,255,0.6)}.breadcrumb a:hover{color:var(--coral)}
        .page-hero h1{margin-bottom:12px}.page-hero p{color:rgba(255,255,255,0.75);font-size:1.05rem;max-width:600px}
        .gal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .gal-card{border-radius:var(--radius-lg);overflow:hidden;border:1px solid var(--gray-200);transition:var(--transition);cursor:pointer}
        .gal-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
        .gal-img{aspect-ratio:4/3;background:linear-gradient(135deg,var(--gray-100),var(--gray-200));display:flex;align-items:center;justify-content:center;font-size:3rem}
        .gal-info{padding:16px 20px}
        .gal-cat{font-size:0.78rem;color:var(--blue);font-weight:600;text-transform:uppercase;letter-spacing:0.05em}
        .gal-info h3{font-family:var(--font-body);font-size:0.95rem;font-weight:600;margin-top:4px;color:var(--navy)}
        @media(max-width:1024px){.gal-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.gal-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
