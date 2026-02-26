'use client';
import Link from 'next/link';

const faqCategories = [
  {
    category: 'Genel',
    questions: [
      { q: 'İlk muayene ücretli midir?', a: 'Hayır, kliniğimizde ilk muayene ve konsültasyon ücretsizdir. Detaylı ağız içi muayene sonrası tedavi planınız ve ücret bilgilendirmesi yapılır.' },
      { q: 'Randevu almadan gelebilir miyim?', a: 'Randevusuz hastalarımızı da kabul ediyoruz, ancak randevulu hastalara öncelik verilmektedir. Bekleme süresini minimuma indirmek için önceden randevu almanızı öneriyoruz.' },
      { q: 'Taksit imkânınız var mı?', a: 'Evet, tüm kredi kartlarına taksit imkânı sunuyoruz. Ayrıca anlaşmalı bankalarla özel taksit seçeneklerimiz mevcuttur.' },
      { q: 'Hangi sigorta kurumlarıyla anlaşmanız var?', a: 'SGK ve birçok özel sağlık sigortası kurumu ile anlaşmamız bulunmaktadır. Detaylı bilgi için bizimle iletişime geçebilirsiniz.' },
    ],
  },
  {
    category: 'İmplant Tedavisi',
    questions: [
      { q: 'İmplant tedavisi ağrılı mıdır?', a: 'İmplant tedavisi lokal anestezi altında yapılır ve işlem sırasında ağrı hissedilmez. İşlem sonrası hafif bir rahatsızlık olabilir.' },
      { q: 'İmplant ne kadar sürede tamamlanır?', a: 'Standart implant tedavisi 3-6 ay sürer. All-on-4 gibi ileri tekniklerle tek günde dişlere kavuşmak mümkündür.' },
      { q: 'Her yaşta implant yaptırılabilir mi?', a: 'Çene kemiği gelişimini tamamlamış her yetişkin implant tedavisinden faydalanabilir. Üst yaş sınırı yoktur.' },
    ],
  },
  {
    category: 'Estetik Tedaviler',
    questions: [
      { q: 'Diş beyazlatma dişlere zarar verir mi?', a: 'Profesyonel diş beyazlatma, uzman hekim kontrolünde yapıldığında dişlere zarar vermez.' },
      { q: 'Zirkonyum kaplama ne kadar dayanır?', a: 'Doğru bakım ve düzenli kontroller ile zirkonyum kaplamalar 15-20 yıl ve üzeri dayanabilir.' },
      { q: 'Hollywood Smile doğal görünür mü?', a: 'Dijital tasarım sayesinde yüz hatlarınıza uyumlu, tamamen doğal görünümlü sonuçlar elde edilir.' },
    ],
  },
  {
    category: 'Ortodonti',
    questions: [
      { q: 'Yetişkinler de ortodonti tedavisi olabilir mi?', a: 'Evet, ortodonti tedavisi her yaş grubuna uygulanabilir. Şeffaf plak seçeneği yetişkinler tarafından sıklıkla tercih edilmektedir.' },
      { q: 'Şeffaf plak tedavisi ne kadar sürer?', a: 'Vakanın durumuna göre 6-18 ay arasında değişir.' },
    ],
  },
];

export default function SSSPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap(c => c.questions.map(f => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    }))),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="page-hero"><div className="container">
        <nav className="breadcrumb" aria-label="breadcrumb"><Link href="/">Ana Sayfa</Link><span>/</span><span>SSS</span></nav>
        <h1>Sık Sorulan Sorular</h1>
        <p>Tedavilerimiz hakkında en çok merak edilen soruların cevapları.</p>
      </div></section>

      <section className="section"><div className="container">
        <div className="sss-list">
          {faqCategories.map((cat, ci) => (
            <div key={ci} className="sss-category">
              <h2>{cat.category}</h2>
              <div className="sss-items">
                {cat.questions.map((f, fi) => (
                  <details key={fi} className="sss-item">
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
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
        .sss-list{max-width:860px;margin:0 auto;display:flex;flex-direction:column;gap:40px}
        .sss-category h2{font-size:1.4rem;margin-bottom:16px;color:var(--navy);padding-bottom:12px;border-bottom:2px solid var(--blue)}
        .sss-items{display:flex;flex-direction:column;gap:10px}
        .sss-item{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:var(--radius-md);overflow:hidden;transition:var(--transition)}
        .sss-item[open]{background:var(--white);border-color:var(--blue);box-shadow:var(--shadow-sm)}
        .sss-item summary{padding:18px 24px;font-weight:600;font-size:0.95rem;cursor:pointer;list-style:none}
        .sss-item summary::-webkit-details-marker{display:none}
        .sss-item summary::after{content:'+';float:right;color:var(--blue);font-size:1.4rem;font-weight:300}
        .sss-item[open] summary::after{content:'−'}
        .sss-item p{padding:0 24px 18px;color:var(--gray-600);font-size:0.92rem;line-height:1.8}
      `}</style>
    </>
  );
}
