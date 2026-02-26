"use client";
import Link from "next/link";
import { allServices } from "@/app/data/services";
import { ArrowRight, ChevronRight } from "lucide-react";
import * as LucideIcons from "lucide-react";

export default function HizmetlerPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span>Hizmetlerimiz</span>
          </div>
          <h1>Tedavi Hizmetlerimiz</h1>
          <p className="hero-subtitle">
            Bahçeşehir kliniğimizde modern diş hekimliğinin tüm branşlarında
            uzman kadromuzla hizmet veriyoruz.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {allServices.map((s, i) => {
              const Icon = LucideIcons[s.iconName] || LucideIcons.Stethoscope;
              const accents = ["blue", "gold", "coral"];
              const accent = accents[i % 3];
              return (
                <Link
                  key={i}
                  href={`/hizmetler/${s.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                      height: "100%",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "3px",
                        background:
                          "linear-gradient(90deg, var(--blue), var(--gold))",
                        opacity: 0,
                        transition: "var(--transition)",
                      }}
                    />
                    <div className={`icon-box icon-box-${accent}`}>
                      <Icon size={24} />
                    </div>
                    <h3>{s.title}</h3>
                    <p
                      style={{ fontSize: "0.88rem", lineHeight: 1.65, flex: 1 }}
                    >
                      {s.shortDesc}
                    </p>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "var(--coral)",
                        fontWeight: 600,
                        fontSize: "0.82rem",
                      }}
                    >
                      Detaylı Bilgi <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div
          className="container"
          style={{ textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <h2 style={{ color: "var(--white)", marginBottom: "16px" }}>
            Hangi Tedaviye İhtiyacınız Var?
          </h2>
          <p
            style={{
              color: "var(--gray-400)",
              maxWidth: "460px",
              margin: "0 auto 32px",
              fontSize: "0.95rem",
            }}
          >
            Ücretsiz muayene ile ihtiyacınıza uygun tedavi planını birlikte
            oluşturalım.
          </p>
          <Link href="/iletisim" className="btn btn-primary">
            Ücretsiz Muayene <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
