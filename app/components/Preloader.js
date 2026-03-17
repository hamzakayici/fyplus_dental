"use client";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/animations/preloader.json";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    /* Sayfa tamamen yüklendikten sonra fade-out başlat */
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          document.body.classList.remove("is-loading");
          window.dispatchEvent(new Event("preloaderDone"));
          setLoading(false);
        }, 600);
      }, 1800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      /* Fallback: max 4sn sonra kapat */
      const fallback = setTimeout(handleLoad, 4000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader ${fadeOut ? "preloader--hide" : ""}`}>
      <div className="preloader__content">
        <div className="preloader__lottie">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: 180, height: 180 }}
          />
        </div>
        <p className="preloader__text">FyPlus Dental</p>
      </div>

      <style jsx>{`
        .preloader {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(160deg, #0a1628 0%, #0e1f38 40%, #162d50 100%);
          transition: opacity 0.6s ease, visibility 0.6s ease;
        }
        .preloader--hide {
          opacity: 0;
          visibility: hidden;
        }
        .preloader__content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .preloader__lottie {
          filter: drop-shadow(0 0 40px rgba(96, 165, 250, 0.15));
        }
        .preloader__text {
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          margin: 0;
          animation: preloaderPulse 1.8s ease-in-out infinite;
        }
        @keyframes preloaderPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
