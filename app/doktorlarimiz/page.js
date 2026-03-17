import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Doktorlarımız",
  description: "FyPlus Dental Clinic Bahçeşehir — Uzman diş hekimi kadromuz.",
};

export default function DoktorlarimizPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link> / <span>Doktorlarımız</span>
          </div>
          <h1>Doktorlarımız</h1>
          <p className="hero-subtitle">Alanında uzman hekim kadromuzla tanışın.</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, textAlign: "center" }}>
          <img src="/images/doctor.png" alt="FyPlus Dental Doktor" style={{ width: "100%", maxWidth: 400, margin: "0 auto 40px", borderRadius: "var(--radius-2xl)" }} />
          <span className="section-label" style={{ justifyContent: "center" }}>Baş Hekim</span>
          <h2 className="section-title">Dt. FyPlus Dental</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            FyPlus Dental Clinic&apos;in kurucusu ve baş hekimi olarak, 15 yılı aşkın deneyimi ile implant, zirkonyum kaplama ve gülüş tasarımı alanlarında uzmanlaşmıştır. Hastalarına kişiye özel tedavi planları sunarak en güncel teknolojilerle premium diş sağlığı hizmeti vermektedir.
          </p>
          <Link href="/iletisim" className="btn btn-primary" style={{ marginTop: 32 }}>
            Randevu Al <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
