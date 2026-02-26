"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown, ArrowRight } from "lucide-react";

const faqCategories = [
  {
    title: "Genel",
    items: [
      {
        q: "FyPlus Dental Clinic nerede?",
        a: "Kliniğimiz İstanbul Bahçeşehir 1. Kısım Mahallesi, Başakşehir ilçesinde yer almaktadır.",
      },
      {
        q: "Randevu nasıl alabilirim?",
        a: "Web sitemizden online randevu formu ile veya +90 212 000 00 00 numaralı telefonumuzu arayarak randevu alabilirsiniz.",
      },
      {
        q: "Acil durumlarda hizmet veriyor musunuz?",
        a: "Evet, Bahçeşehir kliniğimiz çalışma saatleri içinde acil diş tedavisi hizmeti sunmaktadır.",
      },
      {
        q: "Sigorta kabul ediyor musunuz?",
        a: "Anlaşmalı özel sigorta kuruluşları ile çalışmaktayız. Detaylı bilgi için iletişime geçiniz.",
      },
    ],
  },
  {
    title: "İmplant Tedavisi",
    items: [
      {
        q: "Bahçeşehir'de implant tedavisi acı verir mi?",
        a: "Lokal anestezi altında yapıldığı için işlem sırasında ağrı hissedilmez.",
      },
      {
        q: "İmplant ne kadar süre dayanır?",
        a: "Doğru bakım ile implantlar ömür boyu kullanılabilir.",
      },
      {
        q: "İmplant tedavisi ne kadar sürer?",
        a: "Tedavi süreci hastanın durumuna göre 3-6 ay arasında değişir.",
      },
    ],
  },
  {
    title: "Estetik Tedaviler",
    items: [
      {
        q: "Zirkonyum kaplama ne kadar dayanır?",
        a: "15-20 yıl ve üzeri dayanıklılık sunar.",
      },
      {
        q: "Diş beyazlatma dişlere zarar verir mi?",
        a: "Profesyonel kontrol altında yapılan beyazlatma dişlere zarar vermez.",
      },
      {
        q: "Hollywood Smile nedir?",
        a: "Dijital gülüş tasarımı ile kişiye özel mükemmel gülüş estetiği oluşturma tedavisidir.",
      },
    ],
  },
  {
    title: "Ortodonti",
    items: [
      {
        q: "Şeffaf plak tedavisi etkili mi?",
        a: "Hafif ve orta düzey çapraşıklıklarda çok etkilidir.",
      },
      {
        q: "Yetişkinler ortodonti tedavisi olabilir mi?",
        a: "Evet, yaş sınırı yoktur. Şeffaf plak yetişkinlerde sıklıkla tercih edilir.",
      },
    ],
  },
];

export default function SSSPage() {
  const [openItems, setOpenItems] = useState({});
  const toggle = (key) =>
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span>SSS</span>
          </div>
          <h1>Sık Sorulan Sorular</h1>
          <p className="hero-subtitle">
            Bahçeşehir FyPlus Dental Clinic hakkında merak edilenler.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          {faqCategories.map((cat, ci) => (
            <div key={ci} style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "16px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid var(--gray-200)",
                }}
              >
                {cat.title}
              </h2>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {cat.items.map((item, ii) => {
                  const key = `${ci}-${ii}`;
                  const isOpen = openItems[key];
                  return (
                    <div
                      key={ii}
                      className="card"
                      style={{
                        padding: 0,
                        overflow: "hidden",
                        borderColor: isOpen ? "var(--blue)" : "var(--gray-200)",
                      }}
                    >
                      <button
                        onClick={() => toggle(key)}
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "16px 20px",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.92rem",
                          fontWeight: 600,
                          color: "var(--navy)",
                          textAlign: "left",
                        }}
                      >
                        {item.q}
                        <ChevronDown
                          size={18}
                          style={{
                            color: "var(--blue)",
                            transition: "var(--transition)",
                            transform: isOpen ? "rotate(180deg)" : "none",
                            flexShrink: 0,
                          }}
                        />
                      </button>
                      {isOpen && (
                        <div
                          style={{
                            padding: "0 20px 16px",
                            color: "var(--gray-600)",
                            fontSize: "0.88rem",
                            lineHeight: 1.7,
                          }}
                        >
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "var(--white)", marginBottom: "16px" }}>
            Sorunuz mu Var?
          </h2>
          <p
            style={{
              color: "var(--gray-400)",
              maxWidth: "460px",
              margin: "0 auto 32px",
            }}
          >
            Bahçeşehir kliniğimize ulaşarak tüm sorularınızın yanıtını
            alabilirsiniz.
          </p>
          <Link href="/iletisim" className="btn btn-primary">
            İletişime Geçin <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
