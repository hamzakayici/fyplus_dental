"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight, Phone, ShieldCheck, Sparkles, Clock, Star,
  Smile, AlignLeft, HeartPulse, Award, Zap, Users, CheckCircle2,
  ClipboardList, Stethoscope, CalendarCheck,
  MapPin, ChevronDown, ChevronUp, Quote
} from "lucide-react";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

const services = [
  { icon: ShieldCheck, title: "İmplant Tedavisi", desc: "Kalıcı titanyum implantlar ile doğal diş konforu.", href: "/hizmetler/implant-tedavisi" },
  { icon: Star, title: "Zirkonyum Kaplama", desc: "Metal-free, doğal görünümlü estetik kaplamalar.", href: "/hizmetler/zirkonyum-kaplama" },
  { icon: Sparkles, title: "Diş Beyazlatma", desc: "Tek seansta 8 tona kadar profesyonel beyazlatma.", href: "/hizmetler/dis-beyazlatma" },
  { icon: Smile, title: "Gülüş Tasarımı", desc: "Hollywood Smile ile hayalinizdeki gülüşe kavuşun.", href: "/hizmetler/gulus-tasarimi" },
  { icon: AlignLeft, title: "Ortodonti", desc: "Şeffaf plak ve braketlerle düzgün dişler.", href: "/hizmetler/ortodonti" },
  { icon: HeartPulse, title: "Kanal Tedavisi", desc: "Modern tekniklerle ağrısız kök kanal tedavisi.", href: "/hizmetler/kanal-tedavisi" },
];
const stats = [
  { value: 15, suffix: "+", label: "Yıl Tecrübe" },
  { value: 12000, suffix: "+", label: "Mutlu Hasta" },
  { value: 4.9, suffix: "", label: "Google Puan", decimal: true },
  { value: 25, suffix: "+", label: "Tedavi Alanı" },
];
const features = [
  { icon: Award, title: "Uzman Kadro", desc: "Alanında uzman, deneyimli diş hekimleri ile güvenilir ve kalıcı tedavi sonuçları.", num: "01" },
  { icon: Zap, title: "Son Teknoloji", desc: "3D ağız tarayıcı, dijital röntgen ve CAD/CAM ile hassas tedavi.", num: "02" },
  { icon: ShieldCheck, title: "Garantili Tedavi", desc: "Tüm tedavilerimiz yazılı garanti kapsamındadır.", num: "03" },
  { icon: Users, title: "Kişiye Özel Plan", desc: "Her hastaya özel, detaylı tedavi planı ve maliyet bilgisi.", num: "04" },
];
const processSteps = [
  { icon: ClipboardList, num: "01", title: "Ücretsiz Muayene", desc: "Dijital röntgen ve 3D ağız taraması ile kapsamlı muayene." },
  { icon: Stethoscope, num: "02", title: "Kişisel Tedavi Planı", desc: "Size özel tedavi planı, maliyet ve süre bilgisi." },
  { icon: Sparkles, num: "03", title: "Tedavi Uygulama", desc: "Son teknoloji ile konforlu ve ağrısız tedavi." },
  { icon: CalendarCheck, num: "04", title: "Kontrol ve Takip", desc: "Düzenli kontroller ile sonuçları takip ediyoruz." },
];
const homeFaqs = [
  { q: "Bahçeşehir'de implant tedavisi fiyatları ne kadardır?", a: "İmplant fiyatları kullanılan marka ve tedavi planına göre değişir. Ücretsiz muayene ile kişiye özel fiyat bilgisi alabilirsiniz." },
  { q: "Diş beyazlatma işlemi ne kadar sürer?", a: "Profesyonel beyazlatma tek seansta 45-60 dakika sürer. Tek seansta 6-8 ton beyazlama elde edebilirsiniz." },
  { q: "Zirkonyum mu, laminat mı tercih etmeliyim?", a: "Zirkonyum arka dişler için, laminat ön dişler için idealdir. Muayene sonrası doktorumuz size en uygun seçeneği önerir." },
  { q: "Ortodonti tedavisi ne kadar sürer?", a: "Şeffaf plak tedavisi 6-18 ay sürebilir. Plaklar neredeyse görünmezdir." },
  { q: "Hangi ödeme yöntemleri kabul edilir?", a: "Nakit, kredi kartı, havale kabul ediyoruz. 12 aya kadar taksit imkânı sunuyoruz." },
];
const testimonials = [
  { name: "Ayşe K.", treatment: "İmplant Tedavisi", rating: 5, text: "FyPlus'ı tercih ettim ve çok memnun kaldım. Doktorlar ilgili, klinik tertemiz ve modern.", date: "Aralık 2025" },
  { name: "Mehmet Y.", treatment: "Zirkonyum Kaplama", rating: 5, text: "Sonuç beklentilerimin üzerinde! Doğal görünümlü ve dayanıklı. En iyi diş kliniği.", date: "Kasım 2025" },
  { name: "Elif S.", treatment: "Gülüş Tasarımı", rating: 5, text: "Hollywood Smile yaptırdım ve gülüşüm tamamen değişti. Profesyonel yaklaşım!", date: "Ekim 2025" },
  { name: "Ali R.", treatment: "Diş Beyazlatma", rating: 5, text: "Tek seansta 6 ton beyazlama! İşlem ağrısız ve hızlıydı. Teknoloji etkileyici.", date: "Ocak 2026" },
  { name: "Zeynep D.", treatment: "Ortodonti", rating: 5, text: "Şeffaf plak tedavisi harika! Plaklar neredeyse görünmüyor.", date: "Şubat 2026" },
];

/* ═══ Number Counter Helper ═══ */
function CountUp({ target, suffix = "", decimal = false }) {
  const ref = useRef(null);
  const counted = useRef(false);
  useEffect(() => {
    if (!ref.current || counted.current) return;
    const el = ref.current;
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !counted.current) {
        counted.current = true;
        gsap.fromTo(el, { innerText: 0 }, {
          innerText: target, duration: 2, ease: "power2.out",
          snap: { innerText: decimal ? 0.1 : 1 },
          onUpdate() {
            const v = parseFloat(el.innerText);
            el.innerText = decimal ? v.toFixed(1) : Math.floor(v).toLocaleString("tr-TR");
          },
          onComplete() { el.innerText = decimal ? target.toFixed(1) : target.toLocaleString("tr-TR"); }
        });
        ob.disconnect();
      }
    }, { threshold: 0.5 });
    ob.observe(el);
    return () => ob.disconnect();
  }, [target, decimal]);
  return <><span ref={ref}>0</span>{suffix}</>;
}

export default function HomePage() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const doctorRef = useRef(null);
  const featuresRef = useRef(null);
  const processRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);
  const locationRef = useRef(null);
  const ctaRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const initAnimations = () => {
    const mm = ScrollTrigger.matchMedia({
      /* ═══ DESKTOP ═══ */
      "(min-width: 769px)": function () {
        /* ACT 1 — HERO CINEMATIC (auto-play on load) */
        const heroTl = gsap.timeline({ delay: 0.2 });
        heroTl
          .fromTo(".hero__badge", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0)
          .fromTo(".hero__title-line", { opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" }, { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 0.9, stagger: 0.15, ease: "expo.out" }, 0.1)
          .fromTo(".hero__subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, 0.5)
          .fromTo(".hero__actions", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.7)
          .fromTo(".hero__visual", { opacity: 0, scale: 0.88, x: 60 }, { opacity: 1, scale: 1, x: 0, duration: 1, ease: "expo.out" }, 0.3)
          .fromTo(".hero__float", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }, 0.8);

        /* Hero parallax depth (scroll-driven) */
        gsap.to(".hero__bg-layer", { y: 80, scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 2 } });

        /* ACT 2 — STATS (pinned counter reveal) */
        const statsTl = gsap.timeline({
          scrollTrigger: { trigger: statsRef.current, start: "top 80%", end: "bottom 60%", scrub: 1, toggleActions: "play none none none" }
        });
        statsTl
          .fromTo(".stats__card", { opacity: 0, y: 60, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, stagger: 0.12, ease: "power2.out" });

        /* ACT 3 — SERVICES (stagger + skew) */
        gsap.fromTo(".svc-card", { y: 80, opacity: 0, skewY: 3, scale: 0.95 }, {
          y: 0, opacity: 1, skewY: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: servicesRef.current, start: "top 82%", toggleActions: "play none none none" }
        });

        /* ACT 4a — ABOUT (parallax slide) */
        gsap.fromTo(".about__image", { x: -100, opacity: 0, scale: 0.92 }, {
          x: 0, opacity: 1, scale: 1, duration: 1, ease: "expo.out",
          scrollTrigger: { trigger: aboutRef.current, start: "top 78%", toggleActions: "play none none none" }
        });
        gsap.fromTo(".about__content", { x: 80, opacity: 0 }, {
          x: 0, opacity: 1, duration: 1, ease: "expo.out",
          scrollTrigger: { trigger: aboutRef.current, start: "top 78%", toggleActions: "play none none none" }
        });
        gsap.to(".about__image img", { y: -40, scrollTrigger: { trigger: aboutRef.current, start: "top bottom", end: "bottom top", scrub: 1.5 } });

        /* ACT 4b — DOCTOR (parallax + fade) */
        gsap.fromTo(".doctor__content", { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, ease: "expo.out",
          scrollTrigger: { trigger: doctorRef.current, start: "top 78%", toggleActions: "play none none none" }
        });
        gsap.fromTo(".doctor__image", { y: 40, opacity: 0, scale: 0.95 }, {
          y: 0, opacity: 1, scale: 1, ease: "expo.out",
          scrollTrigger: { trigger: doctorRef.current, start: "top 78%", toggleActions: "play none none none" }
        });
        gsap.to(".doctor-section__pattern", { y: -50, scrollTrigger: { trigger: doctorRef.current, start: "top bottom", end: "bottom top", scrub: 2 } });

        /* ACT 5 — FEATURES (scale + rotateX) */
        gsap.fromTo(".feat-card", { y: 60, opacity: 0, scale: 0.88, rotateX: 8 }, {
          y: 0, opacity: 1, scale: 1, rotateX: 0, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: featuresRef.current, start: "top 82%", toggleActions: "play none none none" }
        });

        /* ACT 6 — PROCESS (timeline scrub + stagger) */
        gsap.fromTo(".process-timeline__line", { scaleY: 0 }, {
          scaleY: 1, scrollTrigger: { trigger: processRef.current, start: "top 70%", end: "bottom 60%", scrub: 1 }
        });
        gsap.fromTo(".process-step", { x: -60, opacity: 0 }, {
          x: 0, opacity: 1, stagger: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: processRef.current, start: "top 75%", toggleActions: "play none none none" }
        });

        /* ACT 7 — TESTIMONIALS (horizontal stagger) */
        gsap.fromTo(".testimonial-card", { x: 80, opacity: 0, scale: 0.92 }, {
          x: 0, opacity: 1, scale: 1, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: testimonialsRef.current, start: "top 82%", toggleActions: "play none none none" }
        });
        gsap.to(".testimonials-section__pattern", { y: -35, scrollTrigger: { trigger: testimonialsRef.current, start: "top bottom", end: "bottom top", scrub: 2 } });

        /* FAQ */
        gsap.fromTo(".faq-item", { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: faqRef.current, start: "top 85%", toggleActions: "play none none none" }
        });

        /* LOCATION */
        gsap.fromTo(".location-map", { scale: 0.9, opacity: 0 }, {
          scale: 1, opacity: 1, ease: "power2.out",
          scrollTrigger: { trigger: locationRef.current, start: "top 82%", toggleActions: "play none none none" }
        });
        gsap.fromTo(".location-info", { x: 60, opacity: 0 }, {
          x: 0, opacity: 1, ease: "power2.out",
          scrollTrigger: { trigger: locationRef.current, start: "top 82%", toggleActions: "play none none none" }
        });

        /* CTA (scale-up reveal) */
        const ctaTl = gsap.timeline({
          scrollTrigger: { trigger: ctaRef.current, start: "top 88%", toggleActions: "play none none none" }
        });
        ctaTl
          .fromTo(".cta__inner", { y: 60, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, ease: "expo.out" })
          .fromTo(".cta__glow", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, ease: "power2.out" }, "-=0.5");
      },

      /* ═══ MOBILE (no pinning, simple fades) ═══ */
      "(max-width: 768px)": function () {
        gsap.fromTo(".hero__badge", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
        gsap.fromTo(".hero__title-line", { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.7 });
        gsap.fromTo(".hero__subtitle", { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.3 });
        gsap.fromTo(".hero__actions", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.4 });
        gsap.fromTo(".hero__visual", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 });

        const mobileSections = [".stats__card", ".svc-card", ".about__image", ".about__content",
          ".doctor__content", ".doctor__image", ".feat-card", ".process-step",
          ".testimonial-card", ".faq-item", ".location-map", ".location-info"];
        mobileSections.forEach(sel => {
          gsap.fromTo(sel, { opacity: 0, y: 30 }, {
            opacity: 1, y: 0, stagger: 0.08, ease: "power2.out",
            scrollTrigger: { trigger: sel, start: "top 90%", toggleActions: "play none none none" }
          });
        });
      }
    });

    return mm;
    }; /* initAnimations sonu */

    let mmRef = null;
    /* Preloader bittiyse direkt başla, yoksa event'i bekle */
    if (!document.body.classList.contains("is-loading")) {
      mmRef = initAnimations();
    } else {
      const handler = () => { mmRef = initAnimations(); };
      window.addEventListener("preloaderDone", handler, { once: true });
      return () => {
        window.removeEventListener("preloaderDone", handler);
        if (mmRef) mmRef.revert();
      };
    }
    return () => { if (mmRef) mmRef.revert(); };
  }, []);

  return (<>
    {/* ═══ ACT 1: CINEMATIC HERO (FULLSCREEN) ═══ */}
    <section className="hero" ref={heroRef}>
      <div className="hero__bg-layer" />
      <div className="hero__overlay" />
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__badge"><CheckCircle2 size={14} /> Bahçeşehir&apos;in Güvenilir Diş Kliniği</div>
          <h1 className="hero__title">
            <span className="hero__title-line">Sağlıklı ve Güzel</span>
            <span className="hero__title-line hero__accent">Gülüşler</span>
            <span className="hero__title-line">Tasarlıyoruz</span>
          </h1>
          <p className="hero__subtitle">Son teknoloji ekipmanlarımız ve uzman hekim kadromuzla Bahçeşehir&apos;de premium diş sağlığı hizmeti sunuyoruz.</p>
          <div className="hero__actions">
            <Link href="/iletisim" className="btn btn-primary" style={{padding:'16px 36px',fontSize:'1rem'}}>Ücretsiz Muayene <ArrowRight size={18}/></Link>
            <div className="hero__call"><span>Hızlı İletişim:</span><a href="tel:+905335165134">0533 516 51 34</a></div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__img-wrap"><img src="/images/hero-clinic.jpg" alt="FyPlus Dental Clinic" /></div>
          <div className="hero__float hero__float--1"><div className="hero__float-icon hero__float-icon--coral"><Star fill="var(--coral)" color="var(--coral)" size={20}/></div><div><strong>4.9/5</strong><span>Google Puanı</span></div></div>
          <div className="hero__float hero__float--2"><div className="hero__float-icon hero__float-icon--b"><ShieldCheck size={20}/></div><div><strong>Garantili</strong><span>Tedavi Hizmeti</span></div></div>
        </div>
      </div>
      <button className="hero__scroll-indicator" onClick={() => statsRef.current?.scrollIntoView({behavior:'smooth'})} aria-label="Aşağı kaydır">
        <div className="hero__mouse"><span className="hero__wheel"/></div>
        <span className="hero__scroll-text">AŞaĞI KAYDIR</span>
      </button>
    </section>

    {/* ═══ ACT 2: STATS WITH COUNTER ═══ */}
    <section className="stats-section" ref={statsRef}>
      <div className="container"><div className="stats__grid">
        {stats.map((s,i) => (
          <div key={i} className="stats__card">
            <span className="stats__value"><CountUp target={s.value} suffix={s.suffix} decimal={s.decimal} /></span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div></div>
    </section>

    {/* ═══ ACT 3: SERVICES ═══ */}
    <section className="section" ref={servicesRef} style={{background:"var(--off-white)"}}>
      <div className="container">
        <div style={{textAlign:"center",marginBottom:56}}>
          <span className="section-label" style={{justifyContent:"center"}}>Hizmetlerimiz</span>
          <h2 className="section-title">Uzman Tedavi Hizmetleri</h2>
          <p className="section-desc" style={{margin:"0 auto"}}>Kliniğimizde sunduğumuz başlıca tedavi hizmetleri ile sağlıklı ve güzel gülüşlere kavuşun.</p>
        </div>
        <div className="svc-grid">
          {services.map((s,i) => { const Icon=s.icon; return (
            <Link href={s.href} key={i} className="card svc-card">
              <div className="svc-card__num">0{i+1}</div>
              <div className="svc-card__icon"><Icon size={24} strokeWidth={1.5}/></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="svc-card__link">Detaylı Bilgi <ArrowRight size={14}/></span>
            </Link>
          );})}
        </div>
        <div style={{textAlign:"center",marginTop:48}}><Link href="/hizmetler" className="btn btn-outline">Tüm Hizmetleri Görüntüle <ArrowRight size={14}/></Link></div>
      </div>
    </section>

    {/* ═══ ACT 4a: ABOUT ═══ */}
    <section className="section" ref={aboutRef}>
      <div className="container about">
        <div className="about__image"><img src="/images/about-clinic.png" alt="FyPlus Dental Klinik"/>
          <div className="about__exp"><span className="about__exp-num">15+</span><span className="about__exp-text">Yıl<br/>Tecrübe</span></div>
        </div>
        <div className="about__content">
          <span className="section-label">Hakkımızda</span>
          <h2 className="section-title">Bahçeşehir&apos;in Güvenilir<br/>Diş Kliniği</h2>
          <p className="section-desc">FyPlus Dental Clinic olarak, 15 yılı aşkın deneyimimizle hastalarımıza premium diş sağlığı hizmeti sunuyoruz.</p>
          <p className="section-desc" style={{marginTop:12}}>Dijital diş hekimliği, 3D tarayıcı ve CAD/CAM teknolojileri ile tedavi sürecini daha konforlu hale getiriyoruz.</p>
          <div className="about__checks">
            {["Garantili tedavi","Son teknoloji","Uzman kadro","Kişiye özel plan"].map((t,i)=>(
              <div key={i} className="about__check"><CheckCircle2 size={16}/> {t}</div>
            ))}
          </div>
          <Link href="/hakkimizda" className="btn btn-secondary" style={{marginTop:28}}>Daha Fazla Bilgi <ArrowRight size={14}/></Link>
        </div>
      </div>
    </section>

    {/* ═══ ACT 4b: DOCTOR ═══ */}
    <section className="section doctor-section" ref={doctorRef}>
      <div className="doctor-section__pattern"/>
      <div className="container doctor">
        <div className="doctor__content">
          <span className="section-label" style={{color:'rgba(255,255,255,.5)',borderColor:'rgba(255,255,255,.1)'}}>Uzman Kadro</span>
          <h2 className="section-title" style={{color:'#fff'}}>Deneyimli Hekim Kadromuz</h2>
          <p className="section-desc" style={{color:'rgba(255,255,255,.6)'}}>FyPlus Dental Clinic&apos;te alanında uzman diş hekimlerimiz, her hastaya özel yaklaşımla en iyi tedavi sonuçlarını elde etmek için çalışmaktadır.</p>
          <Link href="/doktorlarimiz" className="btn btn-glass" style={{marginTop:24}}>Doktorlarımızı Tanıyın <ArrowRight size={14}/></Link>
        </div>
        <div className="doctor__image"><img src="/images/doctor.png" alt="FyPlus Dental Doktor"/></div>
      </div>
    </section>

    {/* ═══ ACT 5: FEATURES (BENTO DARK) ═══ */}
    <section className="section feat-section" ref={featuresRef}>
      <div className="feat-section__pattern"/>
      <div className="container" style={{position:'relative',zIndex:2}}>
        <div style={{textAlign:'center',marginBottom:64}}>
          <span className="section-label" style={{justifyContent:'center',color:'rgba(255,255,255,.4)',borderColor:'rgba(255,255,255,.08)'}}>Neden Biz?</span>
          <h2 className="section-title" style={{color:'#fff'}}>FyPlus&apos;ı Tercih Etmeniz İçin</h2>
          <p className="section-desc" style={{margin:'0 auto',color:'rgba(255,255,255,.5)'}}>Modern teknoloji, uzman kadro ve hasta odaklı yaklaşımımızla fark yaratıyoruz.</p>
        </div>
        <div className="feat-bento">
          {/* Büyük ana kart */}
          <div className="feat-card feat-card--hero">
            <div className="feat-card__glow"/>
            <span className="feat-card__num">{features[0].num}</span>
            <div className="feat-card__icon">
              <Award size={28} strokeWidth={1.5}/>
            </div>
            <h3>{features[0].title}</h3>
            <p>{features[0].desc}</p>
            <div className="feat-card__badge">15+ Yıl Deneyim</div>
          </div>
          {/* Sağ taraf: 3 küçük kart */}
          {features.slice(1).map((f, i) => { const Icon = f.icon; return (
            <div key={i} className="feat-card">
              <div className="feat-card__glow"/>
              <span className="feat-card__num">{f.num}</span>
              <div className="feat-card__icon">
                <Icon size={22} strokeWidth={1.5}/>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          );})}
        </div>
      </div>
    </section>

    {/* ═══ ACT 6a: PROCESS ═══ */}
    <section className="section process-section" ref={processRef}>
      <div className="container">
        <div className="process-header"><div><span className="section-label">Tedavi Sürecimiz</span><h2 className="section-title">Tedaviniz Nasıl İlerler?</h2></div>
          <p className="section-desc" style={{maxWidth:400,margin:0}}>Baştan sona profesyonel ve şeffaf bir tedavi süreci.</p>
        </div>
        <div className="process-timeline"><div className="process-timeline__line" style={{transformOrigin:'top'}}/>
          {processSteps.map((step,i) => { const Icon=step.icon; return (
            <div key={i} className="process-step">
              <div className="process-step__marker"><span className="process-step__num">{step.num}</span></div>
              <div className="process-step__content card"><div className="process-step__icon"><Icon size={22} strokeWidth={1.5}/></div>
                <div><h3>{step.title}</h3><p>{step.desc}</p></div>
              </div>
            </div>
          );})}
        </div>
      </div>
    </section>

    {/* ═══ ACT 6b: TESTIMONIALS ═══ */}
    <section className="section testimonials-section" ref={testimonialsRef}>
      <div className="testimonials-section__pattern"/>
      <div className="container" style={{position:'relative',zIndex:2}}>
        <div style={{textAlign:"center",marginBottom:56}}>
          <span className="section-label" style={{justifyContent:"center",color:'rgba(255,255,255,.5)',borderColor:'rgba(255,255,255,.1)'}}>Hasta Yorumları</span>
          <h2 className="section-title" style={{color:'#fff'}}>Hastalarımız Ne Diyor?</h2>
          <p className="section-desc" style={{margin:"0 auto",color:'rgba(255,255,255,.55)'}}>12.000&apos;den fazla mutlu hastamızın deneyimlerini okuyun.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t,i)=>(
            <div key={i} className="testimonial-card" style={{background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.08)',backdropFilter:'blur(12px)',borderRadius:'var(--radius-xl)'}}>
              <div className="testimonial-card__header">
                <div className="testimonial-card__avatar">{t.name.charAt(0)}</div>
                <div><strong className="testimonial-card__name" style={{color:'#fff'}}>{t.name}</strong><span className="testimonial-card__treatment" style={{color:'rgba(255,255,255,.4)'}}>{t.treatment}</span></div>
                <div className="testimonial-card__stars">{[...Array(t.rating)].map((_,j)=><Star key={j} size={14} fill="#d4634b" color="#d4634b"/>)}</div>
              </div>
              <p className="testimonial-card__text" style={{color:'rgba(255,255,255,.6)'}}><Quote size={16} className="testimonial-card__quote" style={{color:'rgba(255,255,255,.15)'}}/>{t.text}</p>
              <span className="testimonial-card__date" style={{color:'rgba(255,255,255,.3)'}}>{t.date}</span>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:40}}><a href="https://maps.app.goo.gl/FyPlusDental" target="_blank" rel="noopener noreferrer" className="btn btn-glass">Google Yorumlarını Gör <ArrowRight size={14}/></a></div>
      </div>
    </section>

    {/* ═══ FAQ ═══ */}
    <section className="section" style={{background:"var(--white)"}} itemScope itemType="https://schema.org/FAQPage" ref={faqRef}>
      <div className="container">
        <div style={{textAlign:"center",marginBottom:56}}>
          <span className="section-label" style={{justifyContent:"center"}}>SSS</span>
          <h2 className="section-title">Sıkça Sorulan Sorular</h2>
          <p className="section-desc" style={{margin:"0 auto"}}>Diş tedavisi hakkında en çok merak edilen sorular.</p>
        </div>
        <div className="faq-list">
          {homeFaqs.map((faq,i)=>(
            <div key={i} className={`faq-item${openFaq===i?" faq-item--open":""}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <button className="faq-item__q" onClick={()=>setOpenFaq(openFaq===i?null:i)} itemProp="name" aria-expanded={openFaq===i}>{faq.q}{openFaq===i?<ChevronUp size={18}/>:<ChevronDown size={18}/>}</button>
              <div className="faq-item__a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" style={{maxHeight:openFaq===i?300:0,opacity:openFaq===i?1:0}}><p itemProp="text">{faq.a}</p></div>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:40}}><Link href="/sss" className="btn btn-outline">Tüm Soruları Görüntüle <ArrowRight size={14}/></Link></div>
      </div>
    </section>

    {/* ═══ LOCATION ═══ */}
    <section className="section" style={{background:"var(--off-white)"}} ref={locationRef}>
      <div className="container">
        <div style={{textAlign:"center",marginBottom:56}}>
          <span className="section-label" style={{justifyContent:"center"}}>Konum</span>
          <h2 className="section-title">Bahçeşehir&apos;de Bize Ulaşın</h2>
          <p className="section-desc" style={{margin:"0 auto"}}>Bahçeşehir 1. Kısım&apos;da merkezi konumumuzla kolayca ulaşabileceğiniz kliniğimize bekleriz.</p>
        </div>
        <div className="location-grid">
          <div className="location-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8228502858574!2d28.690660876650927!3d41.07286477134162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x82668ef22be57ad9%3A0x2f4ed13fb8afa0a8!2zRlkgUGx1cyBBxJ_EsXogdmUgRGnFnyBTYcSfbMSxxJ_EsSBQb2xpa2xpbmnEn2k!5e0!3m2!1str!2sus!4v1772544352005!5m2!1str!2sus" width="100%" height="400" style={{border:0,borderRadius:"var(--radius-xl)"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="FyPlus Dental Clinic Konum"/></div>
          <div className="location-info"><div className="location-info__card card">
            <div className="location-info__item"><MapPin size={20} className="location-info__icon"/><div><strong>Adres</strong><p>Bahçeşehir 1. Kısım Mah. Vali Recep Yazıcıoğlu Cad. No:50 BG, Başakşehir / İstanbul</p></div></div>
            <div className="location-info__item"><Phone size={20} className="location-info__icon"/><div><strong>Telefon</strong><p><a href="tel:+905335165134">0533 516 51 34</a> — <a href="tel:+902129995134">0212 999 51 34</a></p></div></div>
            <div className="location-info__item"><Clock size={20} className="location-info__icon"/><div><strong>Çalışma Saatleri</strong><p>Pazartesi – Cuma: 09:00 – 19:00<br/>Cumartesi: 10:00 – 16:00</p></div></div>
          </div><div style={{marginTop:20}}><Link href="/iletisim" className="btn btn-secondary" style={{width:"100%",justifyContent:"center"}}>Online Randevu Al <ArrowRight size={14}/></Link></div></div>
        </div>
      </div>
    </section>

    {/* ═══ ACT 7: FINAL CTA ═══ */}
    <section className="cta" ref={ctaRef}>
      <div className="cta__glow"/>
      <div className="container cta__inner">
        <h2>Sağlıklı Gülüşler İçin<br/>Hemen Randevu Alın</h2>
        <p>Ücretsiz muayene ve dijital tedavi planlaması için bizi arayın veya online randevu oluşturun.</p>
        <div className="cta__actions">
          <Link href="/iletisim" className="btn btn-primary">Online Randevu <ArrowRight size={16}/></Link>
          <a href="tel:+905335165134" className="btn btn-glass"><Phone size={16}/> 0533 516 51 34</a>
        </div>
      </div>
    </section>

    <style jsx>{`
      /* ═══ HERO FULLSCREEN ═══ */
      .hero{position:relative;height:100svh;min-height:600px;display:flex;align-items:center;background:radial-gradient(circle at top right,#f0f7fb 0%,#fff 80%);overflow:hidden;padding:0;will-change:transform;margin-top:-121px;padding-top:121px}
      .hero__bg-layer{position:absolute;inset:0;background:radial-gradient(ellipse at 80% 20%,rgba(43,124,173,.06),transparent 60%);will-change:transform;pointer-events:none}
      .hero__overlay{position:absolute;inset:0;background:radial-gradient(ellipse at 20% 80%,rgba(43,124,173,.03),transparent 50%);pointer-events:none}
      .hero__grid{display:grid;grid-template-columns:1.1fr 0.9fr;gap:60px;align-items:center;height:100%}
      .hero__content{will-change:transform}
      .hero__badge{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:var(--blue-light);color:var(--blue-dark);border-radius:var(--radius-full);font-size:.85rem;font-weight:600;margin-bottom:28px;will-change:transform,opacity}
      .hero__title{color:var(--navy);font-size:clamp(2.4rem,4.5vw,4rem);font-weight:800;line-height:1.1;margin-bottom:24px;letter-spacing:-.03em}
      .hero__title-line{display:block;will-change:transform,opacity,clip-path}
      .hero__accent{color:var(--blue)}
      .hero__subtitle{color:var(--gray-500);font-size:1.1rem;line-height:1.8;max-width:520px;margin-bottom:44px;will-change:transform,opacity}
      .hero__actions{display:flex;align-items:center;gap:32px;flex-wrap:wrap;will-change:transform,opacity}
      .hero__call{display:flex;flex-direction:column}
      .hero__call span{font-size:.8rem;color:var(--gray-400);font-weight:500}
      .hero__call a{font-family:var(--font-heading);font-weight:700;color:var(--navy);font-size:1.25rem;line-height:1.2}
      .hero__visual{position:relative;margin-left:20px;will-change:transform,opacity}
      .hero__img-wrap{position:relative;z-index:2;border-radius:40px;overflow:hidden;box-shadow:var(--shadow-xl);aspect-ratio:4/5;max-height:65vh}
      .hero__img-wrap img{width:100%;height:100%;object-fit:cover}
      .hero__float{position:absolute;z-index:3;background:rgba(255,255,255,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);padding:16px 24px;border-radius:var(--radius-lg);box-shadow:0 12px 32px rgba(10,22,40,.08);display:flex;align-items:center;gap:16px;border:1px solid #fff;will-change:transform,opacity}
      .hero__float--1{bottom:50px;left:-50px}
      .hero__float--2{top:60px;right:-40px}
      .hero__float-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center}
      .hero__float-icon--coral{background:var(--coral-light);color:var(--coral)}
      .hero__float-icon--b{background:var(--blue-light);color:var(--blue)}
      .hero__float strong{display:block;font-size:1.15rem;font-family:var(--font-heading);color:var(--navy);line-height:1.2}
      .hero__float span{font-size:.75rem;color:var(--gray-500);font-weight:500}
      .hero__scroll-indicator{position:absolute;bottom:40px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:10px;z-index:4;cursor:pointer;background:none;border:none;padding:12px;transition:opacity .3s}
      .hero__scroll-indicator:hover{opacity:.7}
      .hero__mouse{width:26px;height:40px;border:1.5px solid rgba(43,124,173,.35);border-radius:100px;position:relative;display:flex;justify-content:center;background:rgba(255,255,255,.4);backdrop-filter:blur(4px)}
      .hero__wheel{width:3px;height:8px;background:var(--blue);border-radius:2px;position:absolute;top:7px;animation:scrollWheel 2s cubic-bezier(.15,.41,.69,.94) infinite}
      .hero__scroll-text{font-size:.65rem;font-weight:700;color:var(--gray-400);text-transform:uppercase;letter-spacing:.15em}
      @keyframes scrollWheel{0%{opacity:0;transform:translateY(-4px)}20%{opacity:1;transform:translateY(0)}60%{opacity:1;transform:translateY(12px)}100%{opacity:0;transform:translateY(16px)}}

      /* ═══ STATS COUNTER ═══ */
      .stats-section{background:var(--white);border-bottom:1px solid var(--gray-100);padding:48px 0;position:relative;z-index:5}
      .stats__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
      .stats__card{display:flex;flex-direction:column;border-right:1px solid var(--gray-100);padding-left:20px;will-change:transform,opacity}
      .stats__card:last-child{border-right:none}
      .stats__value{font-family:var(--font-heading);font-size:2.2rem;font-weight:800;color:var(--blue);line-height:1.1;letter-spacing:-.03em}
      .stats__label{font-size:.85rem;color:var(--gray-500);font-weight:500;margin-top:4px}

      /* ═══ SERVICES ═══ */
      .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
      .svc-card{display:flex;flex-direction:column;gap:16px;text-align:left;will-change:transform,opacity;padding:32px 28px;position:relative;transition:transform .35s cubic-bezier(.4,0,.2,1),box-shadow .35s;border-top:3px solid var(--blue)}
      .svc-card:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(10,22,40,.1)}
      .svc-card__num{position:absolute;top:20px;right:24px;font-family:var(--font-heading);font-size:2.4rem;font-weight:800;color:rgba(0,0,0,.04);line-height:1;letter-spacing:-.03em;pointer-events:none}
      .svc-card__icon{width:56px;height:56px;border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;background:var(--blue-light);color:var(--blue);transition:transform .3s,box-shadow .3s}
      .svc-card:hover .svc-card__icon{transform:scale(1.08);box-shadow:0 6px 20px rgba(43,124,173,.15)}
      .svc-card h3{font-size:1.1rem;margin:0;font-weight:700;color:var(--navy)}
      .svc-card p{font-size:.88rem;line-height:1.7;margin:0;flex:1;color:var(--gray-500)}
      .svc-card__link{display:inline-flex;align-items:center;gap:6px;font-size:.84rem;font-weight:600;margin-top:auto;transition:gap .25s,opacity .25s;opacity:.7;color:var(--blue)}
      .svc-card:hover .svc-card__link{gap:10px;opacity:1}

      /* ═══ ABOUT ═══ */
      .about{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
      .about__image{position:relative;border-radius:var(--radius-2xl);overflow:hidden;will-change:transform,opacity}
      .about__image img{width:100%;height:auto;display:block;will-change:transform}
      .about__exp{position:absolute;bottom:24px;right:24px;background:#fff;padding:16px 20px;border-radius:var(--radius-lg);box-shadow:var(--shadow-lg);display:flex;align-items:center;gap:10px}
      .about__exp-num{font-family:var(--font-heading);font-size:2rem;font-weight:800;color:var(--coral);line-height:1}
      .about__exp-text{font-size:.72rem;font-weight:600;color:var(--gray-500);line-height:1.3;text-transform:uppercase;letter-spacing:.05em}
      .about__checks{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:24px}
      .about__check{display:flex;align-items:center;gap:8px;font-size:.88rem;font-weight:500;color:var(--gray-600)}
      .about__check svg{color:var(--blue);flex-shrink:0}

      /* ═══ DOCTOR ═══ */
      .doctor-section{background:linear-gradient(135deg,#0a1628 0%,#132742 100%);position:relative;overflow:hidden}
      .doctor-section__pattern{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.03) 1px,transparent 1px);background-size:32px 32px;pointer-events:none;will-change:transform}
      .doctor{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;position:relative;z-index:2}
      .doctor__image{border-radius:var(--radius-2xl);overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,.3);will-change:transform,opacity}
      .doctor__image img{width:100%;height:auto}

      /* ═══ FEATURES (BENTO DARK) ═══ */
      .feat-section{background:linear-gradient(160deg,#0a1628 0%,#0e1f38 40%,#162d50 100%);position:relative;overflow:hidden}
      .feat-section__pattern{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.015) 1px,transparent 1px);background-size:40px 40px;pointer-events:none}
      .feat-bento{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:auto auto;gap:20px}
      .feat-card--hero{grid-row:1/3;grid-column:1/2}
      .feat-card{position:relative;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:var(--radius-xl);padding:32px 28px;display:flex;flex-direction:column;gap:14px;overflow:hidden;transition:transform .35s,border-color .35s,background .35s;will-change:transform,opacity}
      .feat-card:hover{transform:translateY(-4px);border-color:rgba(43,124,173,.25);background:rgba(255,255,255,.06)}
      .feat-card__glow{position:absolute;inset:0;pointer-events:none;opacity:.6;transition:opacity .3s;background:radial-gradient(circle at 30% 30%,rgba(43,124,173,.08),transparent 60%)}
      .feat-card:hover .feat-card__glow{opacity:1}
      .feat-card__num{font-family:var(--font-heading);font-size:3rem;font-weight:800;line-height:1;letter-spacing:-.04em;opacity:.25;color:var(--blue)}
      .feat-card--hero .feat-card__num{font-size:4.5rem}
      .feat-card__icon{width:52px;height:52px;border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;border:1px solid rgba(43,124,173,.2);background:rgba(43,124,173,.1);color:var(--blue-soft);transition:transform .3s}
      .feat-card:hover .feat-card__icon{transform:scale(1.08)}
      .feat-card--hero .feat-card__icon{width:64px;height:64px}
      .feat-card h3{color:#fff;font-size:1.05rem;margin:0;font-weight:700}
      .feat-card--hero h3{font-size:1.25rem}
      .feat-card p{color:rgba(255,255,255,.45);font-size:.86rem;line-height:1.7;margin:0}
      .feat-card--hero p{font-size:.92rem;max-width:300px}
      .feat-card__badge{display:inline-flex;align-items:center;padding:8px 16px;background:rgba(43,124,173,.12);border:1px solid rgba(43,124,173,.2);border-radius:var(--radius-full);color:var(--blue-soft);font-size:.78rem;font-weight:600;margin-top:auto;width:fit-content}

      /* ═══ PROCESS ═══ */
      .process-section{background:var(--white)}
      .process-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:56px;gap:40px}
      .process-timeline{position:relative;display:flex;flex-direction:column;gap:24px;padding-left:40px}
      .process-timeline__line{position:absolute;left:19px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--blue-light),var(--blue),var(--blue-light));border-radius:2px;will-change:transform}
      .process-step{display:flex;align-items:flex-start;gap:28px;position:relative;will-change:transform,opacity}
      .process-step__marker{width:40px;height:40px;border-radius:50%;background:var(--blue);color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:var(--font-heading);font-weight:800;font-size:.8rem;box-shadow:0 0 0 6px #fff,0 0 0 8px var(--blue-light);position:relative;z-index:2}
      .process-step__content{display:flex;gap:20px;align-items:flex-start;padding:24px 28px;flex:1}
      .process-step__icon{width:48px;height:48px;border-radius:var(--radius-lg);background:var(--blue-light);color:var(--blue);display:flex;align-items:center;justify-content:center;flex-shrink:0}
      .process-step__content h3{font-size:1.05rem;margin:0 0 6px}
      .process-step__content p{font-size:.86rem;line-height:1.7;color:var(--gray-500);margin:0}

      /* ═══ TESTIMONIALS ═══ */
      .testimonials-section{background:linear-gradient(135deg,#0a1628 0%,#0e1f38 50%,#132742 100%);position:relative;overflow:hidden}
      .testimonials-section__pattern{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.02) 1px,transparent 1px);background-size:24px 24px;pointer-events:none;will-change:transform}
      .testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
      .testimonial-card{padding:28px;display:flex;flex-direction:column;gap:16px;will-change:transform,opacity}
      .testimonial-card__header{display:flex;align-items:center;gap:12px}
      .testimonial-card__avatar{width:44px;height:44px;border-radius:var(--radius-full);background:linear-gradient(135deg,var(--blue),var(--coral));color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.1rem;flex-shrink:0}
      .testimonial-card__name{display:block;font-size:.92rem}
      .testimonial-card__treatment{display:block;font-size:.75rem;font-weight:500}
      .testimonial-card__stars{margin-left:auto;display:flex;gap:2px}
      .testimonial-card__text{font-size:.88rem;line-height:1.8;position:relative;flex:1}
      .testimonial-card__quote{margin-right:6px;vertical-align:text-top;flex-shrink:0}
      .testimonial-card__date{font-size:.72rem;font-weight:500}

      /* ═══ FAQ ═══ */
      .faq-list{max-width:780px;margin:0 auto;display:flex;flex-direction:column;gap:10px}
      .faq-item{background:var(--off-white);border-radius:var(--radius-lg);overflow:hidden;transition:all .3s;will-change:transform,opacity}
      .faq-item--open{background:#fff;box-shadow:var(--shadow-md)}
      .faq-item__q{display:flex;align-items:center;justify-content:space-between;width:100%;padding:18px 22px;font-size:.92rem;font-weight:600;color:var(--gray-700);background:none;border:none;cursor:pointer;text-align:left;gap:16px;font-family:inherit;transition:color .2s}
      .faq-item__q:hover{color:var(--blue)}
      .faq-item--open .faq-item__q{color:var(--blue)}
      .faq-item__a{overflow:hidden;transition:max-height .4s cubic-bezier(.4,0,.2,1),opacity .3s;padding:0 22px}
      .faq-item__a p{font-size:.88rem;line-height:1.8;color:var(--gray-500);padding-bottom:18px}

      /* ═══ LOCATION ═══ */
      .location-grid{display:grid;grid-template-columns:1.2fr 0.8fr;gap:32px;align-items:start}
      .location-map{border-radius:var(--radius-xl);overflow:hidden;box-shadow:var(--shadow-lg);will-change:transform,opacity}
      .location-info__card{padding:28px}
      .location-info__item{display:flex;gap:14px;padding:14px 0;border-bottom:1px solid var(--gray-100)}
      .location-info__item:last-child{border-bottom:none}
      .location-info__icon{color:var(--blue);flex-shrink:0;margin-top:2px}
      .location-info__item strong{display:block;font-size:.88rem;margin-bottom:4px}
      .location-info__item p{font-size:.84rem;line-height:1.6;color:var(--gray-500);margin:0}
      .location-info__item a{color:var(--blue);font-weight:500}

      /* ═══ CTA ═══ */
      .cta{background:var(--navy);padding:100px 0;position:relative;overflow:hidden;text-align:center}
      .cta__glow{position:absolute;top:50%;left:50%;width:600px;height:600px;background:radial-gradient(circle,rgba(43,124,173,.15),transparent 70%);transform:translate(-50%,-50%);pointer-events:none;will-change:transform,opacity}
      .cta__inner{position:relative;z-index:2;max-width:600px;margin:0 auto;will-change:transform,opacity}
      .cta h2{color:#fff;margin-bottom:16px}
      .cta p{color:rgba(255,255,255,.6);margin-bottom:32px;font-size:.95rem;line-height:1.8}
      .cta__actions{display:flex;justify-content:center;gap:14px;flex-wrap:wrap}

      /* ═══ RESPONSIVE ═══ */
      @media(max-width:1024px){
        .hero{height:auto;min-height:100vh;padding:100px 0 80px}
        .hero__grid{grid-template-columns:1fr;gap:40px;text-align:center;height:auto}
        .hero__content{margin:0 auto;display:flex;flex-direction:column;align-items:center}
        .hero__actions{justify-content:center}
        .hero__visual{margin-left:0;max-width:500px;margin:0 auto}
        .hero__img-wrap{aspect-ratio:1/1;max-height:none}
        .hero__float--1{left:10px;bottom:10px}
        .hero__float--2{right:10px;top:10px}
        .hero__scroll-indicator{bottom:24px}
        .stats__card{padding-left:10px}
        .svc-grid{grid-template-columns:repeat(2,1fr)}
        .feat-bento{grid-template-columns:1fr 1fr;gap:16px}
        .feat-card--hero{grid-row:auto;grid-column:1/-1}
        .about,.doctor{grid-template-columns:1fr;gap:40px}
        .features-header,.process-header{flex-direction:column;align-items:flex-start}
        .process-timeline{padding-left:30px}
        .testimonials-grid{grid-template-columns:repeat(2,1fr)}
        .location-grid{grid-template-columns:1fr}
      }
      @media(max-width:768px){
        .section{padding:80px 0}
        .hero{padding:120px 0 50px}
        .hero__title{font-size:2.8rem}
        .stats-section{padding:24px 0}
        .stats__value{font-size:1.8rem}
        .section-title{font-size:2rem}
      }
      @media(max-width:640px){
        .section{padding:60px 0}
        .hero{padding:110px 0 40px;min-height:auto}
        .hero__title{font-size:2.2rem}
        .hero__subtitle{font-size:1rem}
        .hero__actions{flex-direction:column;width:100%;gap:20px}
        .hero__actions .btn{width:100%;justify-content:center}
        .hero__float{display:none}
        .stats__grid{grid-template-columns:repeat(2,1fr);gap:24px}
        .stats__card{border-right:none;padding-left:0;align-items:center;text-align:center}
        .svc-grid{grid-template-columns:1fr}
        .feat-bento{grid-template-columns:1fr}
        .feat-card--hero{grid-column:auto}
        .feat-card{padding:24px 20px}
        .feat-card--hero .feat-card__num{font-size:3rem}
        .process-timeline{padding-left:20px}
        .process-step{gap:16px}
        .process-step__content{flex-direction:column;gap:12px;padding:20px}
        .testimonials-grid{grid-template-columns:1fr}
        .features-header__text{max-width:100%;text-align:center;margin:0 auto}
        .features-header{align-items:center}
        .faq-item__q{font-size:.85rem;padding:16px}
      }
      @media(max-width:480px){
        .stats__grid{grid-template-columns:1fr;gap:20px}
        .hero__title{font-size:1.8rem}
        .section-title{font-size:1.6rem}
      }
    `}</style>
  </>);
}
