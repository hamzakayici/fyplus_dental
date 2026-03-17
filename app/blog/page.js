"use client";
import Link from "next/link";
import { blogPosts } from "./data";
import { ArrowRight, Clock, Tag } from "lucide-react";

export default function BlogPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link> / <span>Blog</span>
          </div>
          <h1>Blog</h1>
          <p className="hero-subtitle">Ağız ve diş sağlığı hakkında bilgilendirici yazılar.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((p, i) => (
              <Link href={`/blog/${p.slug}`} key={i} className="blog-card">
                <div className="blog-card__image">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <span className="blog-card__category"><Tag size={12} /> {p.category}</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span>{p.date}</span>
                    <span><Clock size={12} /> {p.readTime}</span>
                  </div>
                  <h3 className="blog-card__title">{p.title}</h3>
                  <p className="blog-card__desc">{p.desc}</p>
                  <span className="blog-card__link">Devamını Oku <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }
        .blog-card {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid var(--gray-100);
          background: var(--white);
          transition: all .3s cubic-bezier(.4,0,.2,1);
          text-decoration: none;
          color: inherit;
        }
        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--gray-200);
        }
        .blog-card__image {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
        }
        .blog-card__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s cubic-bezier(.4,0,.2,1);
        }
        .blog-card:hover .blog-card__image img {
          transform: scale(1.05);
        }
        .blog-card__category {
          position: absolute;
          top: 12px;
          left: 12px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 5px 12px;
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(8px);
          border-radius: var(--radius-full);
          font-size: .72rem;
          font-weight: 600;
          color: var(--blue);
        }
        .blog-card__body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }
        .blog-card__meta {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: .76rem;
          color: var(--gray-400);
          font-weight: 500;
        }
        .blog-card__meta span {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .blog-card__title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.35;
        }
        .blog-card__desc {
          font-size: .86rem;
          line-height: 1.7;
          color: var(--gray-500);
          flex: 1;
        }
        .blog-card__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: .82rem;
          font-weight: 600;
          color: var(--blue);
          margin-top: 4px;
          transition: gap .25s ease;
        }
        .blog-card:hover .blog-card__link {
          gap: 10px;
        }

        @media (max-width: 480px) {
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
