import Link from "next/link";
import { allServices } from "../data/services";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";

export const metadata = {
  title: "Hizmetlerimiz",
  description: "FyPlus Dental Clinic Bahçeşehir — İmplant, zirkonyum kaplama, diş beyazlatma, ortodonti ve tüm diş tedavi hizmetleri.",
};

export default function HizmetlerPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link> / <span>Hizmetlerimiz</span>
          </div>
          <h1>Hizmetlerimiz</h1>
          <p className="hero-subtitle">
            Kliniğimizde sunduğumuz tüm tedavi hizmetleri ile sağlıklı gülüşlere kavuşun.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
            {allServices.map((s) => {
              const Icon = LucideIcons[s.iconName] || LucideIcons.Star;
              return (
                <Link href={`/hizmetler/${s.slug}`} key={s.slug} className="card" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div className="icon-box"><Icon size={22} strokeWidth={1.5} /></div>
                  <h3 style={{ fontSize: "1.05rem" }}>{s.title}</h3>
                  <p style={{ fontSize: ".88rem", lineHeight: 1.7, flex: 1 }}>{s.shortDesc}</p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: ".82rem", fontWeight: 600, color: "var(--blue)" }}>
                    Detaylı Bilgi <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
