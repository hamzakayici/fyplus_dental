"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Shield,
  Users,
  Award,
  Clock,
  Star,
  ArrowRight,
  Waypoints,
  Crown,
  Sparkles,
  Smile,
  AlignHorizontalDistributeCenter,
  Baby,
  Check,
  MapPin,
  Stethoscope,
  CalendarCheck,
  Play,
  Zap,
} from "lucide-react";

const featuredServices = [
  {
    icon: Waypoints,
    title: "İmplant Tedavisi",
    desc: "Eksik dişlerinizi kalıcı, doğal görünümlü titanyum implantlarla tamamlıyoruz.",
    slug: "implant-tedavisi",
    accent: "blue",
  },
  {
    icon: Crown,
    title: "Zirkonyum Kaplama",
    desc: "Metal-free zirkonyum ile doğal diş estetiği sunuyoruz.",
    slug: "zirkonyum-kaplama",
    accent: "gold",
  },
  {
    icon: Sparkles,
    title: "Diş Beyazlatma",
    desc: "Profesyonel whitening ile 8 tona kadar beyazlatma.",
    slug: "dis-beyazlatma",
    accent: "coral",
  },
  {
    icon: Smile,
    title: "Gülüş Tasarımı",
    desc: "Hollywood Smile ile hayalinizdeki gülüşe kavuşun.",
    slug: "gulus-tasarimi",
    accent: "blue",
  },
  {
    icon: AlignHorizontalDistributeCenter,
    title: "Ortodonti",
    desc: "Şeffaf plak ve modern braketlerle düzgün dişler.",
    slug: "ortodonti",
    accent: "gold",
  },
  {
    icon: Baby,
    title: "Pedodonti",
    desc: "Çocuklara özel korkusuz tedavi deneyimi.",
    slug: "pedodonti",
    accent: "coral",
  },
];

const stats = [
  { value: "15+", label: "Yıllık Deneyim", icon: Award },
  { value: "12.000+", label: "Mutlu Hasta", icon: Users },
  { value: "6", label: "Uzman Hekim", icon: Stethoscope },
  { value: "4.9", label: "Google Puan", icon: Star },
];

const processSteps = [
  {
    num: "01",
    icon: Phone,
    title: "Randevu Alın",
    desc: "Online form veya tek tuşla arama ile kolayca randevu oluşturun.",
  },
  {
    num: "02",
    icon: Stethoscope,
    title: "Dijital Muayene",
    desc: "3D intraoral tarayıcı ile detaylı ağız analizi yapılır.",
  },
  {
    num: "03",
    icon: CalendarCheck,
    title: "Tedavi Planı",
    desc: "Size özel tedavi planı ve maliyet bilgisi sunulur.",
  },
  {
    num: "04",
    icon: Star,
    title: "Mükemmel Sonuç",
    desc: "Uzman hekimlerimizle hayalinizdeki gülüşe kavuşun.",
  },
];

const testimonials = [
  {
    name: "Ayşe K.",
    text: "İmplant tedavim FyPlus Dental'de çok profesyonelce gerçekleşti. Bahçeşehir'de bu kalitede bir klinik bulmak harika.",
    rating: 5,
    treatment: "İmplant Tedavisi",
  },
  {
    name: "Mehmet Y.",
    text: "Zirkonyum kaplamalarım o kadar doğal görünüyor ki, herkes gerçek dişlerim sanıyor. Kesinlikle tavsiye ederim.",
    rating: 5,
    treatment: "Zirkonyum Kaplama",
  },
  {
    name: "Zeynep A.",
    text: "Çocuğum ilk kez dişçiye korkusuz gitti. Pedodonti bölümünün ilgisi muhteşemdi, çok teşekkürler.",
    rating: 5,
    treatment: "Pedodonti",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/images/real/lobby.png"
            alt="FyPlus Dental Clinic Bahçeşehir Modern Diş Kliniği Lobi"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <MapPin size={14} /> Bahçeşehir, İstanbul
            </div>
            <h1>
              Sağlıklı ve Güzel
              <br />
              <span>Gülüşler</span> Tasarlıyoruz
            </h1>
            <p className="hero-desc">
              Son teknoloji ekipmanlarımız ve uzman hekim kadromuzla,
              Bahçeşehir&apos;de premium diş sağlığı hizmeti sunuyoruz.
            </p>
            <div className="hero-actions">
              <Link href="/iletisim" className="btn btn-primary">
                Ücretsiz Muayene <ArrowRight size={16} />
              </Link>
              <a href="tel:+905335165134" className="btn btn-glass">
                <Phone size={16} /> 0533 516 51 34
              </a>
            </div>
          </div>
          <div className="hero-cards">
            <div className="hero-float-card">
              <div className="hfc-icon">
                <Shield size={22} />
              </div>
              <div>
                <strong>Garantili Tedavi</strong>
                <span>Yazılı garanti belgesi</span>
              </div>
            </div>
            <div className="hero-float-card">
              <div className="hfc-icon hfc-gold">
                <Award size={22} />
              </div>
              <div>
                <strong>15+ Yıl Tecrübe</strong>
                <span>6 uzman hekim</span>
              </div>
            </div>
            <div className="hero-float-card">
              <div className="hfc-icon hfc-coral">
                <Zap size={22} />
              </div>
              <div>
                <strong>Son Teknoloji</strong>
                <span>3D dijital tarama</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="stat-item">
                  <div className="stat-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ HİZMETLER ═══ */}
      <section className="section" id="hizmetler">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">Hizmetlerimiz</div>
            <h2 className="section-title">Uzman Tedavi Hizmetleri</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Modern diş hekimliğinin tüm branşlarında, son teknoloji ile
              donatılmış kliniğimizde hizmet veriyoruz.
            </p>
          </div>
          <div className="services-grid">
            {featuredServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  key={i}
                  href={`/hizmetler/${s.slug}`}
                  className="service-card"
                >
                  <div className={`icon-box icon-box-${s.accent}`}>
                    <Icon size={24} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="service-link">
                    Detaylı Bilgi <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/hizmetler" className="btn btn-outline">
              Tüm Hizmetlerimiz <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ HAKKIMIZDA ═══ */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-images">
              <div className="about-img-main">
                <Image
                  src="/images/real/exterior.png"
                  alt="FyPlus Dental Clinic Bahçeşehir Dış Cephe"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="about-img-small">
                <Image
                  src="/images/real/treatment.png"
                  alt="FyPlus Dental Modern Tedavi Odası"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="about-exp-badge">
                <strong>15+</strong>
                <span>Yıl</span>
              </div>
            </div>
            <div className="about-content">
              <div className="section-label">Neden FyPlus?</div>
              <h2 className="section-title">
                Bahçeşehir&apos;in Premium
                <br />
                Diş Kliniği
              </h2>
              <p className="section-desc">
                Son teknoloji ekipmanlarımız, uzman hekim kadromuz ve hasta
                odaklı yaklaşımımızla Bahçeşehir, Başakşehir ve çevre bölgelere
                kaliteli diş sağlığı hizmeti sunuyoruz.
              </p>
              <div className="about-features">
                {[
                  "Son teknoloji 3D tarayıcı ve dijital röntgen",
                  "Avrupa standartlarında sterilizasyon",
                  "Anlaşmalı sigorta ve taksit imkanı",
                  "Ücretsiz ilk muayene ve konsültasyon",
                ].map((f, i) => (
                  <div key={i} className="about-feature">
                    <div className="af-check">
                      <Check size={14} />
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/hakkimizda"
                className="btn btn-outline"
                style={{ marginTop: "32px" }}
              >
                Kliniğimizi Keşfedin <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE/AFTER SMILE ═══ */}
      <section className="smile-section">
        <div className="container">
          <div className="smile-grid">
            <div className="smile-content">
              <div className="section-label">Gülüş Tasarımı</div>
              <h2 className="section-title" style={{ color: "var(--white)" }}>
                Hayalinizdeki Gülüşe
                <br />
                Kavuşmanız İçin Buradayız
              </h2>
              <p style={{ color: "var(--gray-400)", marginBottom: "32px" }}>
                Dijital gülüş tasarımı ile tedavi öncesi sonucu görün. Laminate
                veneer, zirkonyum kaplama ve beyazlatma seçenekleriyle mükemmel
                gülüşe ulaşın.
              </p>
              <Link
                href="/hizmetler/gulus-tasarimi"
                className="btn btn-primary"
              >
                Hollywood Smile <ArrowRight size={16} />
              </Link>
            </div>
            <div className="smile-image">
              <Image
                src="/images/smile.png"
                alt="FyPlus Dental Gülüş Tasarımı Hollywood Smile Sonucu"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TEDAVİ SÜRECİ ═══ */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">Tedavi Süreci</div>
            <h2 className="section-title">4 Adımda Tedavi</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Randevunuzdan sonuç almanıza kadar her adımda yanınızdayız.
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="process-card">
                  <div className="process-num">{s.num}</div>
                  <div className="icon-box">
                    <Icon size={22} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ DOKTOR ═══ */}
      <section className="section doctor-section">
        <div className="container">
          <div className="doctor-grid">
            <div className="doctor-image">
              <Image
                src="/images/doctor.png"
                alt="FyPlus Dental Bahçeşehir Uzman Diş Hekimi"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="doctor-content">
              <div className="section-label">Uzman Kadro</div>
              <h2 className="section-title">
                Alanında Uzman
                <br />
                Hekim Kadromuz
              </h2>
              <p className="section-desc">
                İmplantoloji, ortodonti, estetik diş hekimliği, endodonti,
                periodontoloji ve pedodonti alanlarında uzmanlaşmış 6 deneyimli
                hekimimiz sizlere hizmet vermektedir.
              </p>
              <div className="doctor-specs">
                {[
                  "İmplantoloji",
                  "Ortodonti",
                  "Estetik Diş Hekimliği",
                  "Endodonti",
                  "Periodontoloji",
                  "Pedodonti",
                ].map((s, i) => (
                  <span key={i} className="doctor-spec">
                    {s}
                  </span>
                ))}
              </div>
              <Link
                href="/doktorlarimiz"
                className="btn btn-outline"
                style={{ marginTop: "32px" }}
              >
                Hekimlerimizi Tanıyın <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ YORUMLAR ═══ */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">Hasta Yorumları</div>
            <h2 className="section-title">Hastalarımız Ne Diyor?</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card card">
                <div className="t-stars">
                  {Array.from({ length: t.rating }, (_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="t-footer">
                  <div className="t-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.treatment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div className="cta-content">
            <h2 style={{ color: "var(--white)", marginBottom: "12px" }}>
              Ücretsiz Muayene İçin
              <br />
              Randevu Alın
            </h2>
            <p
              style={{
                color: "var(--gray-400)",
                marginBottom: "32px",
                maxWidth: "400px",
              }}
            >
              Bahçeşehir kliniğimizde uzman hekimlerimizle ücretsiz
              konsültasyon.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/iletisim" className="btn btn-primary">
                Online Randevu <ArrowRight size={16} />
              </Link>
              <a href="tel:+905335165134" className="btn btn-white">
                <Phone size={16} /> 0533 516 51 34
              </a>
            </div>
          </div>
          <div className="cta-image">
            <Image
              src="/images/patient-happy.png"
              alt="Mutlu Hasta FyPlus Dental Bahçeşehir"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        /* HERO */
        .hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(11, 29, 46, 0.92) 0%,
            rgba(11, 29, 46, 0.75) 50%,
            rgba(11, 29, 46, 0.5) 100%
          );
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: center;
          padding-top: 80px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          border-radius: 100px;
          background: rgba(201, 169, 110, 0.12);
          color: var(--gold);
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 28px;
          border: 1px solid rgba(201, 169, 110, 0.2);
        }
        .hero-content h1 {
          color: var(--white);
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          margin-bottom: 20px;
          line-height: 1.1;
        }
        .hero-content h1 span {
          background: linear-gradient(135deg, var(--gold), #e8b458);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-desc {
          color: var(--gray-300);
          font-size: 1.05rem;
          line-height: 1.75;
          max-width: 500px;
          margin-bottom: 36px;
        }
        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .hero-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .hero-float-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 24px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          color: var(--white);
          min-width: 240px;
          animation: float 6s ease-in-out infinite;
        }
        .hero-float-card:nth-child(2) {
          animation-delay: 2s;
        }
        .hero-float-card:nth-child(3) {
          animation-delay: 4s;
        }
        .hfc-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(27, 143, 206, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue);
          flex-shrink: 0;
        }
        .hfc-gold {
          background: rgba(201, 169, 110, 0.15);
          color: var(--gold);
        }
        .hfc-coral {
          background: rgba(232, 81, 61, 0.15);
          color: var(--coral);
        }
        .hero-float-card strong {
          display: block;
          font-size: 0.9rem;
          margin-bottom: 2px;
        }
        .hero-float-card span {
          font-size: 0.76rem;
          color: var(--gray-400);
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        /* STATS BAR */
        .stats-bar {
          background: var(--white);
          border-bottom: 1px solid var(--gray-100);
          padding: 0;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 32px 24px;
          border-right: 1px solid var(--gray-100);
        }
        .stat-item:last-child {
          border-right: none;
        }
        .stat-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--blue-light);
          color: var(--blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .stat-item strong {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--navy);
        }
        .stat-item span {
          font-size: 0.78rem;
          color: var(--gray-500);
        }

        /* SECTION HEADER CENTER */
        .section-header-center {
          text-align: center;
          margin-bottom: 56px;
        }
        .section-header-center .section-label {
          justify-content: center;
        }
        .section-header-center .section-label::before {
          display: none;
        }

        /* SERVICES */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .service-card {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 36px;
          background: var(--white);
          border: 1px solid var(--gray-100);
          border-radius: var(--radius-xl);
          transition: var(--transition);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--gold));
          opacity: 0;
          transition: var(--transition);
        }
        .service-card:hover {
          box-shadow: var(--shadow-xl);
          transform: translateY(-6px);
          border-color: transparent;
        }
        .service-card:hover::before {
          opacity: 1;
        }
        .service-card h3 {
          font-size: 1.1rem;
        }
        .service-card p {
          color: var(--gray-500);
          font-size: 0.88rem;
          line-height: 1.65;
          flex: 1;
        }
        .service-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--coral);
          font-size: 0.82rem;
          font-weight: 600;
          margin-top: 4px;
        }

        /* ABOUT */
        .about-section {
          background: var(--gray-25);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-images {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          height: 500px;
        }
        .about-img-main {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          grid-row: 1/3;
        }
        .about-img-small {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          align-self: end;
        }
        .about-exp-badge {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, var(--gold), #e8b458);
          color: var(--white);
          padding: 16px 20px;
          border-radius: var(--radius-lg);
          text-align: center;
          z-index: 2;
          box-shadow: var(--shadow-glow-gold);
        }
        .about-exp-badge strong {
          display: block;
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          line-height: 1;
        }
        .about-exp-badge span {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .about-features {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 28px;
        }
        .about-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.92rem;
          color: var(--gray-700);
        }
        .af-check {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--green);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* SMILE */
        .smile-section {
          background: var(--navy);
          padding: 100px 0;
          overflow: hidden;
          position: relative;
        }
        .smile-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 20% 50%,
            rgba(201, 169, 110, 0.05),
            transparent 60%
          );
        }
        .smile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .smile-image {
          position: relative;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          aspect-ratio: 4/3;
          box-shadow: var(--shadow-xl);
        }

        /* PROCESS */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .process-card {
          text-align: center;
          padding: 40px 24px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--gray-100);
          position: relative;
          background: var(--white);
          transition: var(--transition);
          overflow: hidden;
        }
        .process-card::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--gold));
          opacity: 0;
          transition: var(--transition);
        }
        .process-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .process-card:hover::before {
          opacity: 1;
        }
        .process-num {
          position: absolute;
          top: 12px;
          right: 16px;
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 900;
          color: var(--gray-50);
          line-height: 1;
        }
        .process-card .icon-box {
          margin: 0 auto 16px;
        }
        .process-card h3 {
          margin-bottom: 8px;
        }
        .process-card p {
          color: var(--gray-500);
          font-size: 0.84rem;
          line-height: 1.6;
        }

        /* DOCTOR */
        .doctor-section {
          background: var(--gray-25);
        }
        .doctor-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .doctor-image {
          position: relative;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          aspect-ratio: 3/4;
          box-shadow: var(--shadow-xl);
        }
        .doctor-specs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }
        .doctor-spec {
          padding: 8px 18px;
          border-radius: 100px;
          background: var(--white);
          border: 1px solid var(--gray-200);
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--gray-600);
          transition: var(--transition);
        }
        .doctor-spec:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        /* TESTIMONIALS */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .testimonial-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .t-stars {
          display: flex;
          gap: 2px;
          color: #f59e0b;
        }
        .testimonial-card p {
          color: var(--gray-600);
          font-size: 0.92rem;
          line-height: 1.75;
          flex: 1;
          font-style: italic;
        }
        .t-footer {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .t-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--navy), var(--blue-dark));
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
        }
        .t-footer strong {
          display: block;
          font-size: 0.9rem;
        }
        .t-footer span {
          font-size: 0.78rem;
          color: var(--gray-500);
        }

        /* CTA */
        .cta-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .cta-image {
          position: relative;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          aspect-ratio: 4/3;
          box-shadow: var(--shadow-xl);
        }

        @media (max-width: 1024px) {
          .hero-inner {
            grid-template-columns: 1fr;
          }
          .hero-cards {
            display: none;
          }
          .services-grid,
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-grid,
          .smile-grid,
          .doctor-grid,
          .cta-inner {
            grid-template-columns: 1fr;
          }
          .about-images {
            height: 360px;
          }
          .smile-image,
          .doctor-image,
          .cta-image {
            display: none;
          }
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stat-item:nth-child(2) {
            border-right: none;
          }
        }
        @media (max-width: 600px) {
          .services-grid,
          .process-grid {
            grid-template-columns: 1fr;
          }
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .stat-item {
            border-right: none;
            border-bottom: 1px solid var(--gray-100);
          }
          .stat-item:last-child {
            border-bottom: none;
          }
          .about-images {
            height: 280px;
            grid-template-columns: 1fr;
          }
          .about-img-small {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
