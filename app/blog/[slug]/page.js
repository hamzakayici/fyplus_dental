"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../data";
import { ArrowLeft, Clock, Tag, Calendar, ArrowRight } from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== params.slug);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link> / <Link href="/blog">Blog</Link> / <span>{post.title}</span>
          </div>
        </div>
      </div>

      <article className="blog-detail section">
        <div className="container">
          <div className="blog-detail__layout">
            {/* Ana İçerik */}
            <div className="blog-detail__main">
              <Link href="/blog" className="blog-detail__back">
                <ArrowLeft size={16} /> Tüm Yazılar
              </Link>

              <div className="blog-detail__hero-img">
                <img src={post.image} alt={post.title} />
              </div>

              <div className="blog-detail__meta">
                <span><Calendar size={13} /> {post.date}</span>
                <span><Clock size={13} /> {post.readTime} okuma</span>
                <span><Tag size={13} /> {post.category}</span>
              </div>

              <h1 className="blog-detail__title">{post.title}</h1>
              <p className="blog-detail__excerpt">{post.desc}</p>

              <div className="blog-detail__content" dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />

              {/* CTA */}
              <div className="blog-detail__cta">
                <h3>Sorularınız mı Var?</h3>
                <p>Uzman hekimlerimiz size yardımcı olmaktan mutluluk duyar.</p>
                <Link href="/iletisim" className="btn btn-primary">Ücretsiz Muayene <ArrowRight size={16} /></Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-detail__sidebar">
              <div className="sidebar-card">
                <h4>Diğer Yazılar</h4>
                {otherPosts.map((p, i) => (
                  <Link href={`/blog/${p.slug}`} key={i} className="sidebar-post">
                    <img src={p.image} alt={p.title} />
                    <div>
                      <span className="sidebar-post__date">{p.date}</span>
                      <h5>{p.title}</h5>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="sidebar-card sidebar-card--cta">
                <h4>Randevu Alın</h4>
                <p>Ücretsiz muayene için hemen arayın.</p>
                <a href="tel:+905335165134" className="sidebar-phone">0533 516 51 34</a>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <style jsx>{`
        .blog-detail__layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 48px;
          align-items: start;
        }
        .blog-detail__back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: .85rem;
          font-weight: 600;
          color: var(--blue);
          margin-bottom: 24px;
          transition: gap .2s;
        }
        .blog-detail__back:hover { gap: 10px; }
        .blog-detail__hero-img {
          border-radius: var(--radius-xl);
          overflow: hidden;
          margin-bottom: 28px;
          aspect-ratio: 16/9;
        }
        .blog-detail__hero-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .blog-detail__meta {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .blog-detail__meta span {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: .78rem;
          color: var(--gray-400);
          font-weight: 500;
        }
        .blog-detail__title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          color: var(--navy);
          line-height: 1.25;
          margin-bottom: 12px;
        }
        .blog-detail__excerpt {
          font-size: 1.05rem;
          color: var(--gray-500);
          line-height: 1.8;
          margin-bottom: 32px;
          padding-bottom: 28px;
          border-bottom: 1px solid var(--gray-100);
        }
        .blog-detail__content {
          font-size: .95rem;
          line-height: 1.85;
          color: var(--gray-600);
        }
        .blog-detail__content :global(h2) {
          font-size: 1.35rem;
          color: var(--navy);
          margin: 36px 0 14px;
          font-weight: 700;
        }
        .blog-detail__content :global(h3) {
          font-size: 1.1rem;
          color: var(--navy);
          margin: 24px 0 10px;
          font-weight: 600;
        }
        .blog-detail__content :global(ul),
        .blog-detail__content :global(ol) {
          margin: 12px 0 12px 20px;
        }
        .blog-detail__content :global(li) {
          margin-bottom: 6px;
        }
        .blog-detail__content :global(blockquote) {
          border-left: 3px solid var(--blue);
          padding: 16px 20px;
          margin: 24px 0;
          background: var(--blue-light);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          font-weight: 500;
          color: var(--navy);
        }
        .blog-detail__content :global(strong) {
          color: var(--navy);
          font-weight: 600;
        }

        /* CTA Card */
        .blog-detail__cta {
          margin-top: 48px;
          padding: 36px;
          background: linear-gradient(135deg, #0a1628, #162d50);
          border-radius: var(--radius-xl);
          text-align: center;
        }
        .blog-detail__cta h3 {
          color: #fff;
          font-size: 1.3rem;
          margin-bottom: 8px;
        }
        .blog-detail__cta p {
          color: rgba(255,255,255,.6);
          font-size: .9rem;
          margin-bottom: 20px;
        }

        /* Sidebar */
        .blog-detail__sidebar {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .sidebar-card {
          padding: 24px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--gray-100);
          background: var(--white);
        }
        .sidebar-card h4 {
          font-size: 1rem;
          color: var(--navy);
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--gray-100);
        }
        .sidebar-card--cta {
          background: linear-gradient(135deg, #f0f7fb, #e8f1f8);
          border-color: transparent;
          text-align: center;
        }
        .sidebar-card--cta p {
          font-size: .85rem;
          color: var(--gray-500);
          margin-bottom: 12px;
        }
        .sidebar-phone {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--blue);
        }
        .sidebar-post {
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid var(--gray-50);
          text-decoration: none;
          transition: opacity .2s;
        }
        .sidebar-post:last-child { border-bottom: none; }
        .sidebar-post:hover { opacity: .7; }
        .sidebar-post img {
          width: 64px;
          height: 48px;
          object-fit: cover;
          border-radius: var(--radius-md);
          flex-shrink: 0;
        }
        .sidebar-post__date {
          font-size: .7rem;
          color: var(--gray-400);
          font-weight: 500;
        }
        .sidebar-post h5 {
          font-size: .82rem;
          color: var(--navy);
          font-weight: 600;
          line-height: 1.35;
        }

        @media (max-width: 900px) {
          .blog-detail__layout {
            grid-template-columns: 1fr;
          }
          .blog-detail__sidebar {
            position: static;
          }
        }
      `}</style>
    </>
  );
}

/* Basit markdown → HTML dönüştürücü */
function markdownToHtml(md) {
  if (!md) return "";
  return md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^\> (.+)$/gm, "<blockquote>$1</blockquote>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[hublop])(.+)$/gm, (_, t) => t.trim() ? `<p>${t}</p>` : "");
}
