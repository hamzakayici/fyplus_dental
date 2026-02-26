'use client';
import Link from 'next/link';

const services = [
  { icon: '🦷', title: 'İmplant Tedavisi', desc: 'Eksik dişlerinizi kalıcı ve doğal görünümlü implantlarla tamamlıyoruz.', slug: 'implant-tedavisi' },
  { icon: '💎', title: 'Zirkonyum Kaplama', desc: 'Doğal diş görünümünde, dayanıklı ve estetik zirkonyum kaplamalar.', slug: 'zirkonyum-kaplama' },
  { icon: '✨', title: 'Diş Beyazlatma', desc: 'Profesyonel beyazlatma ile parlak ve beyaz bir gülümseme kazanın.', slug: 'dis-beyazlatma' },
  { icon: '😁', title: 'Gülüş Tasarımı', desc: 'Hollywood Smile ile hayalinizdeki gülüşe kavuşun.', slug: 'gulus-tasarimi' },
  { icon: '🔧', title: 'Ortodonti', desc: 'Modern tel ve şeffaf plak tedavileriyle düzgün dişlere sahip olun.', slug: 'ortodonti' },
  { icon: '👶', title: 'Pedodonti', desc: 'Çocuklarınız için özel, korkusuz diş tedavisi deneyimi.', slug: 'pedodonti' },
];

const stats = [
  { number: '15+', label: 'Yıllık Deneyim' },
  { number: '10.000+', label: 'Mutlu Hasta' },
  { number: '25.000+', label: 'Başarılı Tedavi' },
  { number: '8', label: 'Uzman Hekim' },
];

const steps = [
  { num: '01', title: 'Muayene', desc: 'Detaylı ağız içi muayene ve dijital röntgen ile durumunuz değerlendirilir.' },
  { num: '02', title: 'Teşhis & Planlama', desc: '3D tarama ve dijital analiz ile kişiye özel tedavi planı oluşturulur.' },
  { num: '03', title: 'Tedavi', desc: 'Son teknoloji cihazlarla, konforlu ve ağrısız tedavi uygulanır.' },
  { num: '04', title: 'Takip & Kontrol', desc: 'Düzenli kontroller ile tedavi sonrası süreç takip edilir.' },
];

const testimonials = [
  { name: 'Ayşe K.', text: 'FyPlus\'ta implant tedavisi yaptırdım. Sonuçtan çok memnunum, profesyonel ve ilgili bir ekip.', rating: 5 },
  { name: 'Mehmet Y.', text: 'Zirkonyum kaplamalarım çok doğal görünüyor. Gülümsemekten çekinmiyorum artık!', rating: 5 },
  { name: 'Elif S.', text: 'Çocuğumu korkusuz bir şekilde tedavi ettiler. Harika bir deneyimdi, teşekkürler.', rating: 5 },
];

const faqs = [
  { q: 'İmplant tedavisi ağrılı mıdır?', a: 'İmplant tedavisi lokal anestezi altında yapılır ve işlem sırasında ağrı hissedilmez. İşlem sonrası hafif bir rahatsızlık olabilir, ancak reçeteli ağrı kesicilerle kolayca kontrol altına alınabilir.' },
  { q: 'Diş beyazlatma dişlere zarar verir mi?', a: 'Profesyonel diş beyazlatma, uzman hekim kontrolünde yapıldığında dişlere zarar vermez. Kliniğimizde kullandığımız ürünler uluslararası sağlık standartlarına uygundur.' },
  { q: 'Zirkonyum kaplama ne kadar dayanır?', a: 'Doğru bakım ve düzenli kontroller ile zirkonyum kaplamalar 15-20 yıl ve üzeri dayanabilir. Dişlerinizi koruduğunuz sürece uzun yıllar sorunsuz kullanabilirsiniz.' },
  { q: 'İlk muayene ücretli midir?', a: 'Kliniğimizde ilk muayene ve konsültasyon ücretsizdir. Detaylı ağız içi muayene sonrası tedavi planınız ve ücret bilgilendirmesi yapılır.' },
  { q: 'Tedavi sürecinde taksit imkânı var mı?', a: 'Evet, tüm tedavilerimizde kredi kartına taksit imkânı sunuyoruz. Detaylı bilgi için bizimle iletişime geçebilirsiniz.' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient" />
          <div className="hero-pattern" />
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge">✦ Premium Diş Kliniği</span>
            <h1>Sağlıklı Gülüşler İçin <span className="hero-highlight">Güvenilir Adres</span></h1>
            <p>FyPlus Dental Clinic olarak, en son teknolojiyi ve uzman kadromuzu bir araya getirerek size en iyi diş sağlığı hizmetini sunuyoruz.</p>
            <div className="hero-btns">
              <Link href="/iletisim" className="btn btn-primary">Randevu Al →</Link>
              <Link href="/hizmetler" className="btn btn-secondary">Hizmetlerimiz</Link>
            </div>
            <div className="hero-stats">
              {stats.map((s, i) => (
                <div key={i} className="hero-stat">
                  <strong>{s.number}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="section services-section" id="hizmetler">
        <div className="container">
          <div className="section-header">
            <span className="badge">★ Hizmetlerimiz</span>
            <h2>Uzman Kadromuzla <span className="gradient-text">Kapsamlı Tedaviler</span></h2>
            <p>Modern diş hekimliğinin tüm branşlarında hizmet veren kliniğimizde, ihtiyacınıza özel tedavi planları oluşturuyoruz.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <Link href={`/hizmetler/${s.slug}`} key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-link">Detaylı Bilgi →</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/hizmetler" className="btn btn-outline">Tüm Hizmetleri Gör</Link>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-img-wrapper">
              <div className="about-img-placeholder">
                <span>🏥</span>
                <p>Modern Klinik</p>
              </div>
            </div>
            <div className="about-floating-card">
              <strong>15+</strong>
              <span>Yıllık Deneyim</span>
            </div>
          </div>
          <div className="about-text">
            <span className="badge">♦ Hakkımızda</span>
            <h2>Neden <span className="gradient-text">FyPlus Dental?</span></h2>
            <p>FyPlus Dental Clinic olarak, hastalarımıza en yüksek kalitede diş sağlığı hizmeti sunmayı hedefliyoruz. Son teknoloji cihazlarımız ve deneyimli uzman kadromuzla, her hastaya özel tedavi planları oluşturuyoruz.</p>
            <div className="about-features">
              <div className="about-feature"><span className="feature-check">✓</span> Son Teknoloji Cihazlar</div>
              <div className="about-feature"><span className="feature-check">✓</span> Uzman Hekim Kadrosu</div>
              <div className="about-feature"><span className="feature-check">✓</span> Sterilizasyon Standartları</div>
              <div className="about-feature"><span className="feature-check">✓</span> Konforlu Hasta Deneyimi</div>
              <div className="about-feature"><span className="feature-check">✓</span> 3D Dijital Planlama</div>
              <div className="about-feature"><span className="feature-check">✓</span> Uygun Ödeme Seçenekleri</div>
            </div>
            <Link href="/hakkimizda" className="btn btn-outline" style={{ marginTop: '24px' }}>Daha Fazla Bilgi →</Link>
          </div>
        </div>
      </section>

      {/* TEDAVİ SÜRECİ */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <span className="badge">◆ Tedavi Süreci</span>
            <h2>4 Adımda <span className="gradient-text">Mükemmel Sonuç</span></h2>
            <p>Her tedavi sürecimiz titizlikle planlanır ve hastamızın konforu ön planda tutulur.</p>
          </div>
          <div className="process-grid">
            {steps.map((s, i) => (
              <div key={i} className="process-card">
                <div className="process-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YORUMLAR */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="badge">♥ Hasta Yorumları</span>
            <h2>Hastalarımız <span className="gradient-text">Ne Diyor?</span></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name[0]}</div>
                  <strong>{t.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <span className="badge">? Sık Sorulan Sorular</span>
            <h2>Merak <span className="gradient-text">Edilenler</span></h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <details key={i} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Sağlıklı Gülüşünüz İçin İlk Adımı Atın</h2>
          <p>Ücretsiz muayene ve konsültasyon için hemen randevu alın. Uzman ekibimiz sizi bekliyor.</p>
          <div className="cta-btns">
            <Link href="/iletisim" className="btn btn-primary">Randevu Al →</Link>
            <a href="tel:+902120000000" className="btn btn-secondary">Hemen Arayın</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero{position:relative;min-height:90vh;display:flex;align-items:center;overflow:hidden}
        .hero-bg{position:absolute;inset:0;z-index:0}
        .hero-gradient{position:absolute;inset:0;background:linear-gradient(135deg,var(--navy) 0%,var(--blue-dark) 40%,var(--blue) 100%)}
        .hero-pattern{position:absolute;inset:0;background:radial-gradient(circle at 80% 20%,rgba(232,81,61,0.15) 0%,transparent 50%),radial-gradient(circle at 20% 80%,rgba(27,143,206,0.2) 0%,transparent 50%)}
        .hero-content{position:relative;z-index:1;padding:120px 24px 80px}
        .hero-text{max-width:720px}
        .hero-badge{display:inline-block;background:rgba(255,255,255,0.12);color:rgba(255,255,255,0.9);padding:8px 20px;border-radius:50px;font-size:0.85rem;font-weight:600;margin-bottom:24px;letter-spacing:0.05em;backdrop-filter:blur(10px)}
        .hero h1{color:var(--white);margin-bottom:24px}
        .hero-highlight{color:var(--coral);display:inline}
        .hero p{color:rgba(255,255,255,0.8);font-size:1.15rem;margin-bottom:36px;max-width:560px;line-height:1.8}
        .hero-btns{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:48px}
        .hero-stats{display:flex;gap:32px;flex-wrap:wrap}
        .hero-stat{display:flex;flex-direction:column;gap:2px}
        .hero-stat strong{color:var(--white);font-size:1.8rem;font-weight:800;font-family:var(--font-heading)}
        .hero-stat span{color:rgba(255,255,255,0.6);font-size:0.82rem;font-weight:500}
        .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .service-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius-lg);padding:36px 28px;transition:var(--transition);position:relative;overflow:hidden}
        .service-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg);border-color:var(--blue)}
        .service-icon{font-size:2.4rem;margin-bottom:16px}
        .service-card h3{font-family:var(--font-body);font-size:1.1rem;font-weight:700;margin-bottom:10px;color:var(--navy)}
        .service-card p{color:var(--gray-500);font-size:0.9rem;line-height:1.7;margin-bottom:16px}
        .service-link{color:var(--blue);font-weight:600;font-size:0.88rem}
        .about-section{background:var(--gray-50)}
        .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
        .about-visual{position:relative}
        .about-img-wrapper{border-radius:var(--radius-xl);overflow:hidden;aspect-ratio:4/5}
        .about-img-placeholder{width:100%;height:100%;background:linear-gradient(135deg,var(--blue),var(--blue-dark));display:flex;flex-direction:column;align-items:center;justify-content:center;color:white}
        .about-img-placeholder span{font-size:4rem;margin-bottom:12px}
        .about-img-placeholder p{font-size:1.1rem;opacity:0.8}
        .about-floating-card{position:absolute;bottom:30px;right:-20px;background:var(--white);padding:20px 28px;border-radius:var(--radius-md);box-shadow:var(--shadow-lg);text-align:center;animation:float 3s ease-in-out infinite}
        .about-floating-card strong{display:block;font-size:2rem;color:var(--coral);font-family:var(--font-heading)}
        .about-floating-card span{font-size:0.85rem;color:var(--gray-500)}
        .about-text .badge{margin-bottom:16px}
        .about-text h2{margin-bottom:20px}
        .about-text>p{color:var(--gray-600);margin-bottom:28px;line-height:1.8}
        .about-features{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        .about-feature{display:flex;align-items:center;gap:10px;font-size:0.92rem;font-weight:500;color:var(--navy)}
        .feature-check{color:var(--green);font-weight:700;font-size:1.1rem}
        .process-section{background:var(--white)}
        .process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
        .process-card{text-align:center;padding:36px 24px;border-radius:var(--radius-lg);background:var(--gray-50);border:1px solid var(--gray-200);transition:var(--transition);position:relative}
        .process-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md);border-color:var(--blue)}
        .process-num{font-size:2.5rem;font-weight:800;font-family:var(--font-heading);background:linear-gradient(135deg,var(--blue),var(--coral));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px}
        .process-card h3{font-family:var(--font-body);font-size:1.05rem;font-weight:700;margin-bottom:10px}
        .process-card p{color:var(--gray-500);font-size:0.88rem;line-height:1.7}
        .testimonials-section{background:var(--gray-50)}
        .testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .testimonial-card{background:var(--white);padding:32px;border-radius:var(--radius-lg);border:1px solid var(--gray-200);transition:var(--transition)}
        .testimonial-card:hover{box-shadow:var(--shadow-md)}
        .testimonial-stars{color:var(--gold);font-size:1.2rem;margin-bottom:16px;letter-spacing:2px}
        .testimonial-card>p{color:var(--gray-600);font-size:0.95rem;line-height:1.8;margin-bottom:20px;font-style:italic}
        .testimonial-author{display:flex;align-items:center;gap:12px}
        .testimonial-avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--coral));color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.1rem}
        .testimonial-author strong{font-size:0.95rem}
        .faq-section{background:var(--white)}
        .faq-list{max-width:800px;margin:0 auto;display:flex;flex-direction:column;gap:12px}
        .faq-item{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:var(--radius-md);overflow:hidden;transition:var(--transition)}
        .faq-item[open]{background:var(--white);border-color:var(--blue);box-shadow:var(--shadow-sm)}
        .faq-item summary{padding:20px 24px;font-weight:600;font-size:0.98rem;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center}
        .faq-item summary::-webkit-details-marker{display:none}
        .faq-item summary::after{content:'+';font-size:1.4rem;color:var(--blue);font-weight:300;transition:var(--transition)}
        .faq-item[open] summary::after{content:'−'}
        .faq-item p{padding:0 24px 20px;color:var(--gray-600);font-size:0.92rem;line-height:1.8}
        .cta-section{background:linear-gradient(135deg,var(--navy),var(--blue-dark),var(--blue));padding:100px 0;text-align:center;position:relative;overflow:hidden}
        .cta-section::before{content:'';position:absolute;top:-50%;right:-20%;width:500px;height:500px;border-radius:50%;background:rgba(232,81,61,0.1)}
        .cta-content{position:relative;z-index:1}
        .cta-section h2{color:var(--white);margin-bottom:16px;font-size:clamp(1.8rem,4vw,2.5rem)}
        .cta-section p{color:rgba(255,255,255,0.8);font-size:1.1rem;margin-bottom:36px;max-width:560px;margin-left:auto;margin-right:auto}
        .cta-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
        @media(max-width:1024px){
          .services-grid{grid-template-columns:repeat(2,1fr)}
          .process-grid{grid-template-columns:repeat(2,1fr)}
          .testimonials-grid{grid-template-columns:1fr}
          .about-grid{grid-template-columns:1fr;gap:40px}
        }
        @media(max-width:600px){
          .services-grid{grid-template-columns:1fr}
          .process-grid{grid-template-columns:1fr}
          .hero-content{padding:80px 24px 60px}
          .hero-stats{gap:20px}
          .about-features{grid-template-columns:1fr}
        }
      `}</style>
    </>
  );
}
