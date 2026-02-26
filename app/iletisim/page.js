'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';

export default function IletisimPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Ana Sayfa</Link><ChevronRight size={14} /><span>İletişim</span></div>
          <h1>İletişim ve Randevu</h1>
          <p className="hero-subtitle">Bahçeşehir FyPlus Dental Clinic&apos;e ulaşın veya online randevu alın.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
          <div>
            <div className="section-label">İletişim Bilgileri</div>
            <h2 className="section-title" style={{ marginBottom: '32px' }}>Bize Ulaşın</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              {[
                { icon: MapPin, title: 'Adres', text: 'Bahçeşehir 1. Kısım Mah.\nBaşakşehir / İstanbul' },
                { icon: Phone, title: 'Telefon', text: '+90 212 000 00 00', href: 'tel:+902120000000' },
                { icon: Mail, title: 'E-posta', text: 'info@fyplus.com.tr', href: 'mailto:info@fyplus.com.tr' },
                { icon: Clock, title: 'Çalışma Saatleri', text: 'Pzt-Cum: 09:00-19:00\nCumartesi: 10:00-16:00\nPazar: Kapalı' },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '20px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: 'var(--gray-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', flexShrink: 0 }}><Icon size={20} /></div>
                    <div>
                      <strong style={{ display: 'block', marginBottom: '4px', fontSize: '0.92rem' }}>{c.title}</strong>
                      {c.href ? <a href={c.href} style={{ color: 'var(--gray-600)', fontSize: '0.88rem' }}>{c.text}</a> : <span style={{ color: 'var(--gray-600)', fontSize: '0.88rem', whiteSpace: 'pre-line' }}>{c.text}</span>}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ width: '100%', height: '240px', borderRadius: 'var(--radius-lg)', background: 'var(--gray-100)', overflow: 'hidden', border: '1px solid var(--gray-200)' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12030.839!2d28.7427!3d41.0684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQmFoxLFlxZ9laGly!5e0!3m2!1str!2str" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="FyPlus Dental Bahçeşehir Harita" />
            </div>
          </div>

          <div>
            <div className="section-label">Online Randevu</div>
            <h2 className="section-title" style={{ marginBottom: '32px' }}>Randevu Formu</h2>

            {sent ? (
              <div className="card" style={{ textAlign: 'center', padding: '48px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--green)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}><Send size={24} /></div>
                <h3 style={{ marginBottom: '8px' }}>Mesajınız Alındı</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.92rem' }}>En kısa sürede size dönüş yapacağız.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'name', label: 'Adınız Soyadınız', type: 'text' },
                  { name: 'phone', label: 'Telefon', type: 'tel' },
                  { name: 'email', label: 'E-posta', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--navy)' }}>{f.label}</label>
                    <input type={f.type} value={form[f.name]} onChange={e => setForm({ ...form, [f.name]: e.target.value })} required style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', fontFamily: 'var(--font-body)', transition: 'var(--transition)', outline: 'none' }} onFocus={e => e.target.style.borderColor = 'var(--blue)'} onBlur={e => e.target.style.borderColor = 'var(--gray-200)'} />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--navy)' }}>Hizmet Seçin</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', fontFamily: 'var(--font-body)', background: 'var(--white)' }}>
                    <option value="">Seçiniz</option>
                    <option>İmplant Tedavisi</option>
                    <option>Zirkonyum Kaplama</option>
                    <option>Diş Beyazlatma</option>
                    <option>Gülüş Tasarımı</option>
                    <option>Ortodonti</option>
                    <option>Kanal Tedavisi</option>
                    <option>Diğer</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--navy)' }}>Mesajınız</label>
                  <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', fontFamily: 'var(--font-body)', resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Randevu Talebi Gönder <Send size={16} /></button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
