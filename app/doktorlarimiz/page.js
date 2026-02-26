'use client';
import Link from 'next/link';
import { ChevronRight, GraduationCap, Award, ArrowRight } from 'lucide-react';

const doctors = [
  { name: 'Prof. Dr. Ahmet Yılmaz', title: 'İmplantoloji Uzmanı', exp: '20 yıl', specialties: ['İmplant Tedavisi', 'Ağız Cerrahisi', 'Kemik Grefti'] },
  { name: 'Dr. Elif Kaya', title: 'Ortodonti Uzmanı', exp: '15 yıl', specialties: ['Ortodonti', 'Şeffaf Plak', 'Çene Ortopedisi'] },
  { name: 'Dt. Fatma Demir', title: 'Estetik Diş Hekimi', exp: '12 yıl', specialties: ['Gülüş Tasarımı', 'Laminate Veneer', 'Diş Beyazlatma'] },
  { name: 'Dr. Mehmet Öz', title: 'Endodonti Uzmanı', exp: '14 yıl', specialties: ['Kanal Tedavisi', 'Mikroskobik Endodonti', 'Re-Treatment'] },
  { name: 'Dr. Zeynep Aksoy', title: 'Periodontoloji Uzmanı', exp: '11 yıl', specialties: ['Diş Eti Tedavisi', 'Lazer Periodontoloji', 'Cerrahi'] },
  { name: 'Dr. Ayşe Korkmaz', title: 'Pedodonti Uzmanı', exp: '10 yıl', specialties: ['Çocuk Diş Hekimliği', 'Koruyucu Tedaviler', 'Sedasyon'] },
];

export default function DoktorlarimizPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Ana Sayfa</Link><ChevronRight size={14} /><span>Doktorlarımız</span></div>
          <h1>Uzman Hekim Kadromuz</h1>
          <p className="hero-subtitle">Bahçeşehir FyPlus Dental Clinic&apos;te alanında uzman, deneyimli hekim kadromuz sizi bekliyor.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {doctors.map((d, i) => (
              <div key={i} className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ height: '220px', background: 'linear-gradient(135deg, var(--navy), var(--blue-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700 }}>{d.name.split(' ').pop()[0]}</div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ marginBottom: '4px' }}>{d.name}</h3>
                  <p style={{ color: 'var(--blue)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>{d.title}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gray-500)', fontSize: '0.82rem', marginBottom: '14px' }}>
                    <GraduationCap size={15} /> {d.exp} deneyim
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {d.specialties.map((s, j) => (
                      <span key={j} style={{ padding: '4px 10px', borderRadius: '100px', background: 'var(--gray-50)', border: '1px solid var(--gray-200)', fontSize: '0.76rem', color: 'var(--gray-600)' }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Uzmanlarımızla Tanışın</h2>
          <p style={{ color: 'var(--gray-400)', maxWidth: '460px', margin: '0 auto 32px' }}>Bahçeşehir&apos;de ücretsiz muayene için randevu alın.</p>
          <Link href="/iletisim" className="btn btn-primary">Randevu Al <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
