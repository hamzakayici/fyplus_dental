'use client';
import Link from 'next/link';

const doctors = [
  { name: 'Dr. Ahmet Yılmaz', title: 'Ağız, Diş ve Çene Cerrahisi Uzmanı', exp: '18 yıl deneyim', education: 'İstanbul Üniversitesi Diş Hekimliği Fakültesi', specialties: ['İmplant Cerrahisi', 'Çene Cerrahisi', 'Kemik Greftleme'] },
  { name: 'Dr. Elif Kaya', title: 'Protetik Diş Tedavisi Uzmanı', exp: '15 yıl deneyim', education: 'Hacettepe Üniversitesi Diş Hekimliği Fakültesi', specialties: ['Zirkonyum Kaplama', 'Gülüş Tasarımı', 'Laminate Veneer'] },
  { name: 'Dr. Mehmet Demir', title: 'Ortodonti Uzmanı', exp: '12 yıl deneyim', education: 'Ankara Üniversitesi Diş Hekimliği Fakültesi', specialties: ['Şeffaf Plak', 'Metal Braket', 'Çocuk Ortodontisi'] },
  { name: 'Dr. Zeynep Arslan', title: 'Endodonti Uzmanı', exp: '14 yıl deneyim', education: 'Marmara Üniversitesi Diş Hekimliği Fakültesi', specialties: ['Kanal Tedavisi', 'Mikroskobik Endodonti', 'Retreatment'] },
  { name: 'Dr. Can Öztürk', title: 'Periodontoloji Uzmanı', exp: '10 yıl deneyim', education: 'Ege Üniversitesi Diş Hekimliği Fakültesi', specialties: ['Diş Eti Tedavisi', 'Lazer Tedavi', 'İmplant Çevresi Tedavi'] },
  { name: 'Dr. Selin Yıldız', title: 'Pedodonti Uzmanı', exp: '8 yıl deneyim', education: 'Gazi Üniversitesi Diş Hekimliği Fakültesi', specialties: ['Çocuk Diş Tedavisi', 'Koruyucu Tedaviler', 'Sedasyon'] },
];

export default function DoktorlarimizPage() {
  return (
    <>
      <section className="page-hero"><div className="container">
        <nav className="breadcrumb" aria-label="breadcrumb"><Link href="/">Ana Sayfa</Link><span>/</span><span>Doktorlarımız</span></nav>
        <h1>Uzman Kadromuz</h1>
        <p>Alanında deneyimli, sürekli kendini geliştiren uzman hekimlerimizle tanışın.</p>
      </div></section>

      <section className="section"><div className="container">
        <div className="doc-grid">
          {doctors.map((d, i) => (
            <div key={i} className="doc-card">
              <div className="doc-avatar">{d.name.split(' ').map(n => n[0]).join('')}</div>
              <h3>{d.name}</h3>
              <span className="doc-title">{d.title}</span>
              <span className="doc-exp">{d.exp}</span>
              <p className="doc-edu">{d.education}</p>
              <div className="doc-specs">
                {d.specialties.map((s, j) => <span key={j} className="doc-spec">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div></section>

      <style jsx>{`
        .page-hero{background:linear-gradient(135deg,var(--navy),var(--blue-dark));padding:140px 0 60px;color:var(--white)}
        .breadcrumb{display:flex;align-items:center;gap:8px;font-size:0.85rem;margin-bottom:16px;color:rgba(255,255,255,0.6)}
        .breadcrumb a{color:rgba(255,255,255,0.6)}.breadcrumb a:hover{color:var(--coral)}
        .page-hero h1{margin-bottom:12px}.page-hero p{color:rgba(255,255,255,0.75);font-size:1.05rem;max-width:600px}
        .doc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
        .doc-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius-lg);padding:36px;text-align:center;transition:var(--transition)}
        .doc-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg);border-color:var(--blue)}
        .doc-avatar{width:90px;height:90px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--coral));color:white;display:flex;align-items:center;justify-content:center;font-size:1.4rem;font-weight:700;margin:0 auto 20px}
        .doc-card h3{font-family:var(--font-body);font-size:1.1rem;font-weight:700;margin-bottom:6px}
        .doc-title{display:block;color:var(--blue);font-size:0.88rem;font-weight:600;margin-bottom:4px}
        .doc-exp{display:block;color:var(--gray-400);font-size:0.82rem;margin-bottom:12px}
        .doc-edu{color:var(--gray-500);font-size:0.85rem;margin-bottom:16px;line-height:1.5}
        .doc-specs{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
        .doc-spec{background:rgba(27,143,206,0.08);color:var(--blue);padding:4px 12px;border-radius:50px;font-size:0.78rem;font-weight:500}
        @media(max-width:1024px){.doc-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.doc-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
