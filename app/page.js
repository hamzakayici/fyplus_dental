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
  Zap,
} from "lucide-react";

const featuredServices = [
  {
    icon: Waypoints,
    title: "İmplant Tedavisi",
    desc: "Eksik dişlerinizi kalıcı, doğal görünümlü titanyum implantlarla tamamlıyoruz.",
    slug: "implant-tedavisi",
    color: "blue",
    image: "/images/svc-implant.png",
  },
  {
    icon: Crown,
    title: "Zirkonyum Kaplama",
    desc: "Metal-free zirkonyum ile doğal diş estetiği sunuyoruz.",
    slug: "zirkonyum-kaplama",
    color: "gold",
    image: "/images/svc-zirconia.png",
  },
  {
    icon: Sparkles,
    title: "Diş Beyazlatma",
    desc: "Profesyonel whitening ile 8 tona kadar beyazlatma.",
    slug: "dis-beyazlatma",
    color: "coral",
    image: "/images/svc-whitening.png",
  },
  {
    icon: Smile,
    title: "Gülüş Tasarımı",
    desc: "Hollywood Smile ile hayalinizdeki gülüşe kavuşun.",
    slug: "gulus-tasarimi",
    color: "green",
    image: "/images/smile.png",
  },
  {
    icon: AlignHorizontalDistributeCenter,
    title: "Ortodonti",
    desc: "Şeffaf plak ve modern braketlerle düzgün dişler.",
    slug: "ortodonti",
    color: "blue",
    image: "/images/svc-orthodontics.png",
  },
  {
    icon: Baby,
    title: "Pedodonti",
    desc: "Çocuklara özel korkusuz tedavi deneyimi.",
    slug: "pedodonti",
    color: "gold",
    image: "/images/svc-pedodontics.png",
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
            src="/images/hero-clinic.png"
            alt="FyPlus Dental Clinic Bahçeşehir Modern Diş Kliniği"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            quality={90}
          />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <MapPin size={14} /> Bahçeşehir, İstanbul
            </div>
            <h1>
              Sağlıklı ve Güzel
              <br />
              <span className="hero-accent">Gülüşler</span> Tasarlıyoruz
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
          <div className="hero-visual">
            <div className="hero-feature-card">
              <div className="hfc-icon">
                <Shield size={20} />
              </div>
              <div>
                <strong>Garantili Tedavi</strong>
                <span>Yazılı garanti belgesi</span>
              </div>
            </div>
            <div className="hero-feature-card">
              <div className="hfc-icon hfc-gold">
                <Award size={20} />
              </div>
              <div>
                <strong>15+ Yıl Tecrübe</strong>
                <span>6 uzman hekim</span>
              </div>
            </div>
            <div className="hero-feature-card">
              <div className="hfc-icon hfc-coral">
                <Zap size={20} />
              </div>
              <div>
                <strong>Son Teknoloji</strong>
                <span>3D dijital tarama</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-row">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="stat-card">
                  <div className="stat-icon-wrap">
                    <Icon size={20} />
                  </div>
                  <div>
                    <strong className="stat-value">{s.value}</strong>
                    <span className="stat-label">{s.label}</span>
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
          <div className="section-center">
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
                  className="svc-card"
                >
                  <div className="svc-card-image">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="svc-card-overlay" />
                    <div className={`svc-card-icon icon-box-${s.color}`}>
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="svc-card-body">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <span className="svc-link">
                      Detaylı Bilgi <ArrowRight size={14} />
                    </span>
                  </div>
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
          <div className="about-layout">
            <div className="about-images">
              <div className="about-img-main">
                <Image
                  src="/images/about-clinic.png"
                  alt="FyPlus Dental Bahçeşehir Premium Klinik Lobby"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="about-img-secondary">
                <Image
                  src="/images/treatment.png"
                  alt="FyPlus Dental Modern Tedavi Odası"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="about-badge">
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
              <div className="about-checklist">
                {[
                  "Son teknoloji 3D tarayıcı ve dijital röntgen",
                  "Avrupa standartlarında sterilizasyon",
                  "Anlaşmalı sigorta ve taksit imkanı",
                  "Ücretsiz ilk muayene ve konsültasyon",
                ].map((f, i) => (
                  <div key={i} className="about-check-item">
                    <div className="about-check-circle">
                      <Check size={13} />
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

      {/* ═══ GÜLÜŞ TASARIMI ═══ */}
      <section className="smile-section">
        <div className="container">
          <div className="smile-layout">
            <div className="smile-content">
              <div className="section-label" style={{ color: "var(--gold)" }}>Gülüş Tasarımı</div>
              <h2 className="section-title" style={{ color: "var(--white)" }}>
                Hayalinizdeki Gülüşe
                <br />
                Kavuşmanız İçin Buradayız
              </h2>
              <p style={{ color: "var(--gray-400)", marginBottom: "32px", lineHeight: "1.85" }}>
                Dijital gülüş tasarımı ile tedavi öncesi sonucu görün. Laminate
                veneer, zirkonyum kaplama ve beyazlatma seçenekleriyle mükemmel
                gülüşe ulaşın.
              </p>
              <Link href="/hizmetler/gulus-tasarimi" className="btn btn-primary">
                Hollywood Smile <ArrowRight size={16} />
              </Link>
            </div>
            <div className="smile-image-wrap">
              <Image
                src="/images/smile.png"
                alt="FyPlus Dental Gülüş Tasarımı Hollywood Smile"
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
          <div className="section-center">
            <div className="section-label">Tedavi Süreci</div>
            <h2 className="section-title">4 Adımda Tedavi</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Randevunuzdan sonuç almanıza kadar her adımda yanınızdayız.
            </p>
          </div>
          <div className="process-row">
            {processSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="step-card">
                  <div className="step-num">{s.num}</div>
                  <div className="step-icon-wrap">
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
          <div className="doctor-layout">
            <div className="doctor-portrait">
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
              <div className="doctor-tags">
                {[
                  "İmplantoloji",
                  "Ortodonti",
                  "Estetik Diş Hekimliği",
                  "Endodonti",
                  "Periodontoloji",
                  "Pedodonti",
                ].map((s, i) => (
                  <span key={i} className="doctor-tag">
                    {s}
                  </span>
                ))}
              </div>
              <Link
                href="/doktorlarimiz"
                className="btn btn-outline"
                style={{ marginTop: "28px" }}
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
          <div className="section-center">
            <div className="section-label">Hasta Yorumları</div>
            <h2 className="section-title">Hastalarımız Ne Diyor?</h2>
          </div>
          <div className="testimonials-row">
            {testimonials.map((t, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">
                  {Array.from({ length: t.rating }, (_, j) => (
                    <Star key={j} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="review-text">&ldquo;{t.text}&rdquo;</p>
                <div className="review-footer">
                  <div className="review-avatar">{t.name[0]}</div>
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
        <div className="container cta-layout">
          <div className="cta-text">
            <h2 style={{ color: "var(--white)", marginBottom: "14px" }}>
              Ücretsiz Muayene İçin
              <br />
              Randevu Alın
            </h2>
            <p
              style={{
                color: "var(--gray-400)",
                marginBottom: "28px",
                maxWidth: "420px",
                lineHeight: "1.85",
              }}
            >
              Bahçeşehir kliniğimizde uzman hekimlerimizle ücretsiz konsültasyon
              randevusu oluşturun.
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
          <div className="cta-img-wrap">
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
        /* ═══ HERO ═══ */
        .hero {
          position: relative;
          min-height: 92vh;
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
            rgba(10, 22, 40, 0.88) 0%,
            rgba(10, 22, 40, 0.72) 45%,
            rgba(10, 22, 40, 0.45) 100%
          );
        }
        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
          padding-top: 72px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 20px;
          border-radius: var(--radius-full);
          background: rgba(200, 169, 126, 0.1);
          color: var(--gold);
          font-size: 0.78rem;
          font-weight: 600;
          margin-bottom: 24px;
          border: 1px solid rgba(200, 169, 126, 0.15);
        }
        .hero-content h1 {
          color: var(--white);
          font-size: clamp(2.6rem, 5vw, 4rem);
          margin-bottom: 20px;
          line-height: 1.08;
          letter-spacing: -0.03em;
        }
        .hero-accent {
          background: linear-gradient(135deg, var(--gold), #dbb87a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-desc {
          color: var(--gray-300);
          font-size: 1.05rem;
          line-height: 1.8;
          max-width: 480px;
          margin-bottom: 36px;
        }
        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .hero-visual {
          display: flex;
          flex-direction: column;
          gap: 14px;
          align-items: flex-end;
        }
        .hero-feature-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 24px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: var(--radius-lg);
          color: var(--white);
          min-width: 260px;
          transition: var(--transition);
        }
        .hero-feature-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(-4px);
        }
        .hfc-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(43, 124, 173, 0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue-soft);
          flex-shrink: 0;
        }
        .hfc-gold {
          background: rgba(200, 169, 126, 0.14);
          color: var(--gold);
        }
        .hfc-coral {
          background: rgba(212, 99, 75, 0.14);
          color: var(--coral);
        }
        .hero-feature-card strong {
          display: block;
          font-size: 0.88rem;
          margin-bottom: 2px;
          font-weight: 600;
        }
        .hero-feature-card span {
          font-size: 0.75rem;
          color: var(--gray-400);
        }

        /* ═══ STATS ═══ */
        .stats-section {
          background: var(--white);
          border-bottom: 1px solid var(--gray-100);
          padding: 0;
        }
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .stat-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 32px 28px;
          border-right: 1px solid var(--gray-100);
        }
        .stat-card:last-child {
          border-right: none;
        }
        .stat-icon-wrap {
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
        .stat-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--navy);
          line-height: 1.1;
        }
        .stat-label {
          font-size: 0.78rem;
          color: var(--gray-500);
        }

        /* ═══ SECTION CENTER ═══ */
        .section-center {
          text-align: center;
          margin-bottom: 56px;
        }
        .section-center .section-label {
          justify-content: center;
        }
        .section-center .section-label::before {
          display: none;
        }

        /* ═══ SERVICES ═══ */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .svc-card {
          display: flex;
          flex-direction: column;
          background: var(--white);
          border: 1px solid var(--gray-100);
          border-radius: var(--radius-xl);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .svc-card:hover {
          box-shadow: 0 20px 50px rgba(10, 22, 40, 0.1);
          transform: translateY(-6px);
          border-color: transparent;
        }
        .svc-card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .svc-card-image img {
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .svc-card:hover .svc-card-image img {
          transform: scale(1.08);
        }
        .svc-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 30%, rgba(10,22,40,0.15) 100%);
          transition: var(--transition);
        }
        .svc-card:hover .svc-card-overlay {
          background: linear-gradient(180deg, transparent 40%, rgba(10,22,40,0.25) 100%);
        }
        .svc-card-icon {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.85);
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: var(--transition);
        }
        .svc-card:hover .svc-card-icon {
          transform: scale(1.05);
        }
        .svc-card-body {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .svc-card h3 {
          font-size: 1.08rem;
          font-weight: 650;
          letter-spacing: -0.01em;
        }
        .svc-card p {
          color: var(--gray-500);
          font-size: 0.86rem;
          line-height: 1.7;
          flex: 1;
        }
        .svc-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--coral);
          font-size: 0.82rem;
          font-weight: 600;
          margin-top: 6px;
          transition: gap 0.3s ease;
        }
        .svc-card:hover .svc-link {
          gap: 10px;
        }

        /* ═══ ABOUT ═══ */
        .about-section {
          background: var(--off-white);
        }
        .about-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .about-images {
          position: relative;
          height: 520px;
        }
        .about-img-main {
          position: absolute;
          top: 0;
          left: 0;
          width: 70%;
          height: 85%;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
        }
        .about-img-secondary {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 55%;
          height: 55%;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          border: 4px solid var(--white);
        }
        .about-badge {
          position: absolute;
          bottom: 40%;
          left: 58%;
          background: linear-gradient(135deg, var(--gold), var(--gold-dark));
          color: var(--white);
          padding: 16px 20px;
          border-radius: var(--radius-lg);
          text-align: center;
          z-index: 2;
          box-shadow: var(--shadow-glow-gold);
        }
        .about-badge strong {
          display: block;
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          line-height: 1;
        }
        .about-badge span {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .about-checklist {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 28px;
        }
        .about-check-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.92rem;
          color: var(--gray-700);
        }
        .about-check-circle {
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

        /* ═══ SMILE ═══ */
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
            rgba(200, 169, 126, 0.04),
            transparent 60%
          );
        }
        .smile-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .smile-image-wrap {
          position: relative;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          aspect-ratio: 4/3;
          box-shadow: var(--shadow-2xl);
        }

        /* ═══ PROCESS ═══ */
        .process-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .step-card {
          text-align: center;
          padding: 36px 24px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--gray-100);
          position: relative;
          background: var(--white);
          transition: var(--transition);
          overflow: hidden;
        }
        .step-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--blue), var(--gold));
          opacity: 0;
          transition: var(--transition);
        }
        .step-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .step-card:hover::after {
          opacity: 1;
        }
        .step-num {
          position: absolute;
          top: 12px;
          right: 16px;
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 900;
          color: var(--gray-50);
          line-height: 1;
        }
        .step-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: var(--blue-light);
          color: var(--blue);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .step-card h3 {
          margin-bottom: 8px;
        }
        .step-card p {
          color: var(--gray-500);
          font-size: 0.84rem;
          line-height: 1.65;
        }

        /* ═══ DOCTOR ═══ */
        .doctor-section {
          background: var(--off-white);
        }
        .doctor-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .doctor-portrait {
          position: relative;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          aspect-ratio: 3/4;
          box-shadow: var(--shadow-xl);
        }
        .doctor-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }
        .doctor-tag {
          padding: 8px 18px;
          border-radius: var(--radius-full);
          background: var(--white);
          border: 1px solid var(--gray-200);
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--gray-600);
          transition: var(--transition);
        }
        .doctor-tag:hover {
          border-color: var(--gold);
          color: var(--gold-dark);
          background: var(--gold-light);
        }

        /* ═══ TESTIMONIALS ═══ */
        .testimonials-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .review-card {
          background: var(--white);
          border: 1px solid var(--gray-100);
          border-radius: var(--radius-xl);
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: var(--transition);
        }
        .review-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
          border-color: transparent;
        }
        .review-stars {
          display: flex;
          gap: 2px;
          color: #e8a832;
        }
        .review-text {
          color: var(--gray-600);
          font-size: 0.92rem;
          line-height: 1.8;
          flex: 1;
          font-style: italic;
        }
        .review-footer {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .review-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--navy);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
        }
        .review-footer strong {
          display: block;
          font-size: 0.88rem;
          color: var(--navy);
        }
        .review-footer span {
          font-size: 0.76rem;
          color: var(--gray-500);
        }

        /* ═══ CTA ═══ */
        .cta-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .cta-img-wrap {
          position: relative;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          aspect-ratio: 4/3;
          box-shadow: var(--shadow-2xl);
        }

        /* ═══ RESPONSIVE ═══ */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            padding-top: 100px;
          }
          .hero-visual {
            display: none;
          }
          .services-grid,
          .testimonials-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-layout,
          .smile-layout,
          .doctor-layout,
          .cta-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-images {
            height: 380px;
          }
          .smile-image-wrap,
          .doctor-portrait,
          .cta-img-wrap {
            max-height: 400px;
          }
          .process-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .stats-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .stat-card:nth-child(2) {
            border-right: none;
          }
        }
        @media (max-width: 600px) {
          .hero-content h1 {
            font-size: 2.2rem;
          }
          .services-grid,
          .process-row,
          .testimonials-row {
            grid-template-columns: 1fr;
          }
          .stats-row {
            grid-template-columns: 1fr;
          }
          .stat-card {
            border-right: none;
            border-bottom: 1px solid var(--gray-100);
          }
          .stat-card:last-child {
            border-bottom: none;
          }
          .about-images {
            height: 300px;
          }
          .about-img-secondary {
            display: none;
          }
          .about-img-main {
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </>
  );
}
