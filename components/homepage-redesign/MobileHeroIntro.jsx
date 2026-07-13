"use client";

import { useEffect, useRef } from "react";

export default function MobileHeroIntro({ className, resetClassName, children }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    let restartFrame;

    const restartIntro = () => {
      if (!window.matchMedia("(max-width: 767px)").matches) return;

      window.cancelAnimationFrame(restartFrame);
      hero.classList.add(resetClassName);
      void hero.offsetWidth;

      restartFrame = window.requestAnimationFrame(() => {
        hero.classList.remove(resetClassName);
      });
    };

    const handlePageShow = (event) => {
      if (event.persisted) restartIntro();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") restartIntro();
    };

    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.cancelAnimationFrame(restartFrame);
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [resetClassName]);

  return (
    <section ref={heroRef} className={className}>
      {children}
    </section>
  );
}
