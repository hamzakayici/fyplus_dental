"use client";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function HakkimizdaPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link> / <span>Hakkımızda</span>
          </div>
          <h1>Hakkımızda</h1>
          <p className="hero-subtitle">
            Bahçeşehir&apos;de 15 yılı aşkın deneyimimizle premium diş sağlığı hizmeti sunuyoruz.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container about-layout">
          <div className="about-img">
            <img src="/images/about-clinic.png" alt="FyPlus Dental Klinik" style={{ borderRadius: "var(--radius-2xl)", width: "100%" }} />
          </div>
          <div className="about-text">
            <span className="section-label">Hikayemiz</span>
            <h2 className="section-title">Modern Diş Hekimliğinin Bahçeşehir&apos;deki Adresi</h2>
            <p className="section-desc">
              FyPlus Dental Clinic, Bahçeşehir&apos;de kurulduğu 2010 yılından bu yana, hastalarına en yüksek kalitede diş sağlığı hizmeti sunma misyonuyla çalışmaktadır.
            </p>
            <p className="section-desc" style={{ marginTop: 16 }}>
              Son teknoloji dijital ekipmanlarımız, sterilizasyon standartlarımız ve alanında uzman hekim kadromuzla İstanbul&apos;un batı yakasının en güvenilir diş kliniklerinden biri olma hedefimize her geçen gün daha da yaklaşıyoruz.
            </p>
            <div className="about-checks" style={{ marginTop: 24 }}>
              {["15 yılı aşkın deneyim", "Son teknoloji dijital ekipmanlar", "Uzman hekim kadrosu", "Garantili tedavi hizmeti", "Steril ortam standardı", "Tüm branşlarda hizmet"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: ".88rem", fontWeight: 500, color: "var(--gray-600)", padding: "4px 0" }}>
                  <CheckCircle2 size={16} color="var(--blue)" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Kliniğimiz</span>
            <h2 className="section-title">Modern ve Konforlu Ortam</h2>
          </div>
          <div className="clinic-images">
            <img src="/images/real/lobby.png" alt="FyPlus Lobi" />
            <img src="/images/real/treatment.png" alt="FyPlus Tedavi Odası" />
            <img src="/images/real/exterior.png" alt="FyPlus Dış Görünüm" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: "center", maxWidth: 600 }}>
          <h2 className="section-title">Sağlıklı Gülüşler İçin</h2>
          <p className="section-desc" style={{ margin: "0 auto 28px" }}>
            Ücretsiz muayene için hemen randevu alın.
          </p>
          <Link href="/iletisim" className="btn btn-primary">
            Randevu Al <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <style jsx>{`
        .about-layout{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
        .about-checks{display:grid;grid-template-columns:1fr 1fr;gap:6px}
        .clinic-images{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .clinic-images img{width:100%;border-radius:var(--radius-xl);height:280px;object-fit:cover}
        @media(max-width:768px){
          .about-layout{grid-template-columns:1fr;gap:32px}
          .about-checks{grid-template-columns:1fr}
          .clinic-images{grid-template-columns:1fr}
        }
      `}</style>
    </>
  );
}
