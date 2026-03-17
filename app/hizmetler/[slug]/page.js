import Link from "next/link";
import { notFound } from "next/navigation";
import { allServices } from "../../data/services";
import * as LucideIcons from "lucide-react";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export async function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const p = await params;
  const service = allServices.find((s) => s.slug === p.slug);
  if (!service) return {};

  const title = `${service.title} — Bahçeşehir | FyPlus Dental`;
  const description = service.description.slice(0, 155) + "…";
  const url = `https://fyplus.com.tr/hizmetler/${service.slug}`;

  return {
    title,
    description,
    keywords: [
      `${service.title.toLowerCase()} bahçeşehir`,
      `${service.title.toLowerCase()} başakşehir`,
      `${service.title.toLowerCase()} fiyat`,
      `${service.title.toLowerCase()} istanbul`,
      "bahçeşehir diş kliniği",
      "fyplus dental",
    ],
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "FyPlus Dental Clinic",
      locale: "tr_TR",
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${service.title} — FyPlus Dental Bahçeşehir` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const p = await params;
  const service = allServices.find((s) => s.slug === p.slug);
  if (!service) notFound();

  const otherServices = allServices.filter((s) => s.slug !== service.slug).slice(0, 6);

  /* ═══ Schema.org: BreadcrumbList ═══ */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://fyplus.com.tr" },
      { "@type": "ListItem", position: 2, name: "Hizmetlerimiz", item: "https://fyplus.com.tr/hizmetler" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://fyplus.com.tr/hizmetler/${service.slug}` },
    ],
  };

  /* ═══ Schema.org: MedicalProcedure ═══ */
  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.description,
    url: `https://fyplus.com.tr/hizmetler/${service.slug}`,
    procedureType: "http://schema.org/NoninvasiveProcedure",
    howPerformed: service.process?.join(". "),
    preparation: "Dijital ağız taraması ve 3D planlama ile tedavi öncesi hazırlık yapılır.",
    followup: "Düzenli kontrol ve bakım ile uzun ömürlü sonuçlar elde edilir.",
    status: "http://schema.org/ActiveActionStatus",
    bodyLocation: "Ağız ve Diş",
    provider: {
      "@type": "Dentist",
      name: "FyPlus Dental Clinic",
      url: "https://fyplus.com.tr",
      telephone: "+90 533 516 51 34",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bahçeşehir 1. Kısım Mah. Vali Recep Yazıcıoğlu Cad. No:50 BG",
        addressLocality: "Bahçeşehir, Başakşehir",
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
    },
  };

  /* ═══ Schema.org: FAQPage ═══ */
  const faqSchema = service.faqs?.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  } : null;

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Ana Sayfa</Link> / <Link href="/hizmetler">Hizmetlerimiz</Link> / <span>{service.title}</span>
          </nav>
          <h1>{service.title}</h1>
          <p className="hero-subtitle">{service.shortDesc}</p>
        </div>
      </div>

      <section className="section sd-section">
        <div className="container sd-layout">
          <article className="sd-main" itemScope itemType="https://schema.org/MedicalProcedure">
            <meta itemProp="name" content={service.title} />
            <meta itemProp="description" content={service.description} />

            <div className="sd-block">
              <h2>Tedavi Hakkında</h2>
              <p>{service.description}</p>
            </div>

            <div className="sd-block">
              <h2>Avantajları</h2>
              <div className="sd-benefits">
                {service.benefits.map((b, i) => (
                  <div key={i} className="sd-benefit">
                    <CheckCircle2 size={16} /> {b}
                  </div>
                ))}
              </div>
            </div>

            <div className="sd-block">
              <h2>Tedavi Süreci</h2>
              <div className="sd-steps">
                {service.process.map((step, i) => (
                  <div key={i} className="sd-step">
                    <div className="sd-step-num">{i + 1}</div>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {service.faqs?.length > 0 && (
              <div className="sd-block">
                <h2>Sıkça Sorulan Sorular</h2>
                <div className="sd-faqs">
                  {service.faqs.map((faq, i) => (
                    <details key={i} className="sd-faq" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <summary itemProp="name">{faq.q}</summary>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p itemProp="text">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </article>

          <aside className="sd-sidebar">
            <div className="sd-info-card">
              <h4>Tedavi Bilgileri</h4>
              <div className="sd-info-row">
                <span>Süre</span>
                <strong>{service.duration}</strong>
              </div>
            </div>

            <div className="sd-info-card" style={{ background: "var(--navy)", border: "none" }}>
              <h4 style={{ color: "#fff", borderColor: "rgba(255,255,255,.1)" }}>Randevu Alın</h4>
              <p style={{ color: "rgba(255,255,255,.6)", fontSize: ".86rem", marginBottom: 16 }}>
                Ücretsiz muayene için hemen arayın.
              </p>
              <a href="tel:+905335165134" className="btn btn-primary btn-sm" style={{ width: "100%", justifyContent: "center" }}>
                <Phone size={14} /> 0533 516 51 34
              </a>
            </div>

            <div className="sd-info-card">
              <h4>Diğer Hizmetler</h4>
              <ul className="sd-other">
                {otherServices.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/hizmetler/${o.slug}`}>
                      <ArrowRight size={14} /> {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
