"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";

export default function IletisimPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link> / <span>İletişim</span>
          </div>
          <h1>İletişim</h1>
          <p className="hero-subtitle">Sorularınız ve randevu talepleriniz için bize ulaşın.</p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <span className="section-label">Bize Ulaşın</span>
            <h2 className="section-title">İletişim Bilgilerimiz</h2>
            <div className="contact-items">
              <div className="contact-item">
                <div className="icon-box"><MapPin size={20} strokeWidth={1.5} /></div>
                <div>
                  <h4>Adres</h4>
                  <p>Bahçeşehir 1. Kısım Mah. Vali Recep Yazıcıoğlu Cad. No:50 BG, Başakşehir / İstanbul</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box"><Phone size={20} strokeWidth={1.5} /></div>
                <div>
                  <h4>Telefon</h4>
                  <p><a href="tel:+905335165134">0533 516 51 34</a></p>
                  <p><a href="tel:+902129995134">0212 999 51 34</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box"><Mail size={20} strokeWidth={1.5} /></div>
                <div>
                  <h4>E-posta</h4>
                  <p><a href="mailto:info@fyplus.com.tr">info@fyplus.com.tr</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box"><Clock size={20} strokeWidth={1.5} /></div>
                <div>
                  <h4>Çalışma Saatleri</h4>
                  <p>Pazartesi – Cuma: 09:00 – 19:00</p>
                  <p>Cumartesi: 10:00 – 16:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h3 style={{ marginBottom: 24 }}>Randevu Formu</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="text" placeholder="Adınız Soyadınız" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input type="tel" placeholder="Telefon Numaranız" required value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <input type="email" placeholder="E-posta Adresiniz" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <textarea placeholder="Mesajınız" rows={4} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button type="submit" className="btn btn-primary" disabled={status === "sending"} style={{ width: "100%", justifyContent: "center" }}>
                {status === "sending" ? "Gönderiliyor..." : <><Send size={14} /> Gönder</>}
              </button>
              {status === "success" && <p style={{ color: "var(--blue)", fontWeight: 500, textAlign: "center" }}>Mesajınız başarıyla gönderildi!</p>}
              {status === "error" && <p style={{ color: "var(--coral)", fontWeight: 500, textAlign: "center" }}>Bir hata oluştu, lütfen tekrar deneyin.</p>}
            </form>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", height: 400 }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.4158!2d28.69320361122794!3d41.073018446909984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzIyLjkiTiAyOMKwNDEnMzUuNSJF!5e0!3m2!1str!2str!4v1"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="FyPlus Dental Konum" />
      </section>

      <style jsx>{`
        .contact-layout{display:grid;grid-template-columns:1fr 1fr;gap:56px}
        .contact-items{display:flex;flex-direction:column;gap:24px;margin-top:32px}
        .contact-item{display:flex;gap:16px;align-items:flex-start}
        .contact-item h4{font-size:.9rem;margin-bottom:4px}
        .contact-item p{font-size:.86rem;color:var(--gray-500);margin:0}
        .contact-item a{color:var(--gray-600);transition:color .2s}
        .contact-item a:hover{color:var(--blue)}
        .contact-form-wrap{background:var(--off-white);padding:40px;border-radius:var(--radius-2xl);border:1px solid var(--gray-100)}
        .contact-form{display:flex;flex-direction:column;gap:14px}
        .contact-form input,.contact-form textarea{width:100%;padding:14px 18px;border:1px solid var(--gray-100);border-radius:var(--radius-md);font-family:var(--font-body);font-size:.88rem;transition:border-color .2s;outline:none;background:#fff}
        .contact-form input:focus,.contact-form textarea:focus{border-color:var(--blue)}
        .contact-form textarea{resize:vertical}
        @media(max-width:768px){.contact-layout{grid-template-columns:1fr;gap:32px}}
      `}</style>
    </>
  );
}
