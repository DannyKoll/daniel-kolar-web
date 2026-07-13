"use client";

import { useEffect, useRef } from "react";

const PORTRAIT_DELAY_MS = 2180;

export default function MobileHeroIntro({
  className,
  introReadyClassName,
  portraitReadyClassName,
  children,
}) {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;
    if (!window.matchMedia("(max-width: 767px)").matches) return undefined;

    const portraitImage = hero.querySelector("img");
    let firstFrame = 0;
    let secondFrame = 0;
    let portraitTimer = 0;
    let introStartedAt = 0;
    let imageReady = !portraitImage;
    let disposed = false;

    const clearScheduledStart = () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(portraitTimer);
    };

    const schedulePortrait = () => {
      window.clearTimeout(portraitTimer);
      if (!imageReady || !introStartedAt) return;

      const elapsed = window.performance.now() - introStartedAt;
      const remainingDelay = Math.max(0, PORTRAIT_DELAY_MS - elapsed);

      portraitTimer = window.setTimeout(() => {
        if (!disposed) hero.classList.add(portraitReadyClassName);
      }, remainingDelay);
    };

    const startIntro = () => {
      if (document.visibilityState !== "visible") return;

      clearScheduledStart();
      introStartedAt = 0;
      hero.classList.remove(introReadyClassName, portraitReadyClassName);
      void hero.offsetWidth;

      firstFrame = window.requestAnimationFrame(() => {
        secondFrame = window.requestAnimationFrame(() => {
          if (disposed) return;

          introStartedAt = window.performance.now();
          hero.classList.add(introReadyClassName);
          schedulePortrait();
        });
      });
    };

    const preparePortrait = async () => {
      if (!portraitImage) return;

      try {
        await portraitImage.decode();
      } catch {
        if (!portraitImage.complete) {
          await new Promise((resolve) => {
            portraitImage.addEventListener("load", resolve, { once: true });
            portraitImage.addEventListener("error", resolve, { once: true });
          });
        }
      }

      if (disposed) return;

      imageReady = portraitImage.complete && portraitImage.naturalWidth > 0;
      schedulePortrait();
    };

    const handlePageShow = (event) => {
      if (event.persisted) startIntro();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") startIntro();
    };

    startIntro();
    preparePortrait();
    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      disposed = true;
      clearScheduledStart();
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [introReadyClassName, portraitReadyClassName]);

  return (
    <section ref={heroRef} className={className}>
      {children}
    </section>
  );
}
