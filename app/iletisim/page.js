'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function IletisimPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <section className="page-hero"><div className="container">
        <nav className="breadcrumb" aria-label="breadcrumb"><Link href="/">Ana Sayfa</Link><span>/</span><span>İletişim</span></nav>
        <h1>İletişim</h1>
        <p>Randevu almak veya bilgi edinmek için bizimle iletişime geçin.</p>
      </div></section>

      <section className="section"><div className="container ct-grid">
        <div className="ct-form-wrap">
          <h2>Randevu Formu</h2>
          <p style={{ color: 'var(--gray-500)', marginBottom: '24px' }}>Formu doldurun, sizi en kısa sürede arayalım.</p>
          {sent && <div className="ct-success">✓ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</div>}
          <form onSubmit={handleSubmit} className="ct-form">
            <div className="ct-row">
              <div className="ct-field"><label htmlFor="name">Ad Soyad *</label><input id="name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Adınız Soyadınız" /></div>
              <div className="ct-field"><label htmlFor="phone">Telefon *</label><input id="phone" type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="05XX XXX XX XX" /></div>
            </div>
            <div className="ct-row">
              <div className="ct-field"><label htmlFor="email">E-posta</label><input id="email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="ornek@mail.com" /></div>
              <div className="ct-field"><label htmlFor="service">Hizmet</label>
                <select id="service" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                  <option value="">Seçiniz</option>
                  <option>İmplant Tedavisi</option><option>Zirkonyum Kaplama</option><option>Diş Beyazlatma</option>
                  <option>Gülüş Tasarımı</option><option>Ortodonti</option><option>Kanal Tedavisi</option>
                  <option>Diş Eti Tedavisi</option><option>Pedodonti</option><option>Diğer</option>
                </select>
              </div>
            </div>
            <div className="ct-field"><label htmlFor="message">Mesajınız</label><textarea id="message" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Mesajınızı yazın..." /></div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Randevu Talebi Gönder</button>
          </form>
        </div>
        <div className="ct-info">
          <div className="ct-info-card">
            <h3>📍 Adres</h3>
            <p>İstanbul, Türkiye</p>
          </div>
          <div className="ct-info-card">
            <h3>📞 Telefon</h3>
            <a href="tel:+902120000000">+90 212 000 00 00</a>
          </div>
          <div className="ct-info-card">
            <h3>✉️ E-posta</h3>
            <a href="mailto:info@fyplus.com.tr">info@fyplus.com.tr</a>
          </div>
          <div className="ct-info-card">
            <h3>🕐 Çalışma Saatleri</h3>
            <p>Pzt - Cum: 09:00 - 19:00</p>
            <p>Cumartesi: 10:00 - 16:00</p>
            <p>Pazar: Kapalı</p>
          </div>
          <div className="ct-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3211892698!2d28.731993399999997!3d41.00495585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1" width="100%" height="200" style={{ border: 0, borderRadius: '12px' }} allowFullScreen loading="lazy" title="FyPlus Konum" />
          </div>
        </div>
      </div></section>

      <style jsx>{`
        .page-hero{background:linear-gradient(135deg,var(--navy),var(--blue-dark));padding:140px 0 60px;color:var(--white)}
        .breadcrumb{display:flex;align-items:center;gap:8px;font-size:0.85rem;margin-bottom:16px;color:rgba(255,255,255,0.6)}
        .breadcrumb a{color:rgba(255,255,255,0.6)}.breadcrumb a:hover{color:var(--coral)}
        .page-hero h1{margin-bottom:12px}.page-hero p{color:rgba(255,255,255,0.75);font-size:1.05rem;max-width:600px}
        .ct-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:48px;align-items:start}
        .ct-form-wrap{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius-lg);padding:40px}
        .ct-form-wrap h2{margin-bottom:8px;font-size:1.5rem}
        .ct-success{background:rgba(16,185,129,0.1);color:var(--green);padding:14px 20px;border-radius:var(--radius-md);margin-bottom:20px;font-weight:500;font-size:0.92rem}
        .ct-form{display:flex;flex-direction:column;gap:16px}
        .ct-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .ct-field{display:flex;flex-direction:column;gap:6px}
        .ct-field label{font-size:0.85rem;font-weight:600;color:var(--navy)}
        .ct-field input,.ct-field select,.ct-field textarea{padding:12px 16px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:0.92rem;font-family:var(--font-body);transition:var(--transition);background:var(--gray-50);outline:none}
        .ct-field input:focus,.ct-field select:focus,.ct-field textarea:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(27,143,206,0.1)}
        .ct-info{display:flex;flex-direction:column;gap:16px}
        .ct-info-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius-md);padding:24px}
        .ct-info-card h3{font-family:var(--font-body);font-size:1rem;font-weight:700;margin-bottom:8px}
        .ct-info-card p,.ct-info-card a{color:var(--gray-600);font-size:0.9rem;line-height:1.7}
        .ct-info-card a:hover{color:var(--blue)}
        @media(max-width:1024px){.ct-grid{grid-template-columns:1fr}.ct-row{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
