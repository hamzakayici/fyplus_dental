"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "İmplant tedavisi ağrılı mıdır?", a: "Lokal anestezi altında yapıldığı için işlem sırasında ağrı hissedilmez. İşlem sonrası hafif rahatsızlık normal olup reçeteli ilaçlarla kontrol altına alınır." },
  { q: "Zirkonyum kaplama ne kadar dayanır?", a: "Doğru bakım ile zirkonyum kaplamalar 15-20 yıl ve üzeri dayanabilir." },
  { q: "Diş beyazlatma dişlere zarar verir mi?", a: "Profesyonel kontrol altında yapılan beyazlatma işlemi dişlere zarar vermez." },
  { q: "Gülüş tasarımı doğal görünür mü?", a: "Dijital tasarım sayesinde yüz hatlarınıza uyumlu, tamamen doğal görünümlü sonuçlar elde edilir." },
  { q: "Ortodonti tedavisi kaç yaşında yapılabilir?", a: "Ortodonti tedavisi her yaş grubuna uygulanabilir. Şeffaf plak tedavisi yetişkinler tarafından sıklıkla tercih edilmektedir." },
  { q: "Kliniğe nasıl ulaşabilirim?", a: "Bahçeşehir 1. Kısım Mahallesi, Vali Recep Yazıcıoğlu Caddesi No:50 BG adresimize toplu taşıma veya özel araç ile kolayca ulaşabilirsiniz." },
  { q: "Randevu almadan gelebilir miyim?", a: "Randevusuz hasta kabul edilmektedir ancak randevulu hastalara öncelik verilmektedir. Beklememek için önceden randevu almanızı öneririz." },
  { q: "Ödeme seçenekleriniz nelerdir?", a: "Nakit, kredi kartı ve taksitli ödeme seçenekleri mevcuttur. Anlaşmalı bankalarla vade farksız taksit imkânı sunulmaktadır." },
];

export default function SSSPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link> / <span>Sık Sorulan Sorular</span>
          </div>
          <h1>Sık Sorulan Sorular</h1>
          <p className="hero-subtitle">Merak ettiğiniz soruların yanıtları.</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <div className="faq-q">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`faq-chevron${openIndex === i ? " open" : ""}`} />
                </div>
                {openIndex === i && <p className="faq-a">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .faq-item{border:1px solid var(--gray-100);border-radius:var(--radius-md);overflow:hidden;cursor:pointer;transition:all .2s}
        .faq-item.open{border-color:var(--blue);background:var(--blue-light)}
        .faq-q{display:flex;align-items:center;justify-content:space-between;padding:18px 22px;font-weight:600;font-size:.92rem;color:var(--navy)}
        .faq-chevron{transition:transform .2s;opacity:.5}
        .faq-chevron.open{transform:rotate(180deg);opacity:1}
        .faq-a{padding:0 22px 18px;font-size:.88rem;color:var(--gray-500);line-height:1.8;margin:0}
      `}</style>
    </>
  );
}
