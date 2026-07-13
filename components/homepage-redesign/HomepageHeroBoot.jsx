const homepageHeroBoot = String.raw`
(() => {
  if (window.__danielKolarHeroBoot) return;
  window.__danielKolarHeroBoot = true;

  var heroSelector = "[data-homepage-hero]";
  var mobileQuery = window.matchMedia("(max-width: 767px)");
  var reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var controllers = new WeakMap();

  function now() {
    return window.performance && typeof window.performance.now === "function"
      ? window.performance.now()
      : Date.now();
  }

  function showFinalState(hero) {
    hero.setAttribute("data-intro-ready", "true");
    hero.setAttribute("data-portrait-ready", "true");
    hero.setAttribute("data-story-ready", "true");
  }

  function initHero(hero) {
    if (controllers.has(hero)) return;

    var started = false;
    var startedAt = 0;
    var imageSettled = false;
    var portraitQueued = false;
    var storyQueued = false;
    var startTimer = 0;
    var portraitTimer = 0;
    var storyTimer = 0;
    var imageFallbackTimer = 0;
    var imageAttempts = 0;

    hero.setAttribute("data-intro-booted", "true");

    function queuePortrait() {
      if (!startedAt || !imageSettled || portraitQueued || !hero.isConnected) return;

      portraitQueued = true;
      var elapsed = now() - startedAt;
      var remaining = Math.max(0, 420 - elapsed);

      portraitTimer = window.setTimeout(() => {
        if (!hero.isConnected) return;

        hero.setAttribute("data-portrait-ready", "true");
      }, remaining);
    }

    function queueStory() {
      if (!startedAt || storyQueued || !hero.isConnected) return;

      storyQueued = true;
      var elapsed = now() - startedAt;
      var remaining = Math.max(0, 180 - elapsed);

      storyTimer = window.setTimeout(() => {
        if (hero.isConnected) hero.setAttribute("data-story-ready", "true");
      }, remaining);
    }

    function settleImage(state) {
      if (imageSettled) return;

      imageSettled = true;
      window.clearTimeout(imageFallbackTimer);
      hero.setAttribute("data-image-ready", state);
      queuePortrait();
    }

    function prepareImage() {
      var image = hero.querySelector("img");

      if (!image) {
        imageAttempts += 1;
        if (imageAttempts < 10) {
          window.setTimeout(prepareImage, 50);
        } else {
          settleImage("missing");
        }
        return;
      }

      function handleImageReady() {
        if (image.complete && image.naturalWidth > 0) settleImage("true");
      }

      if (image.complete) {
        if (image.naturalWidth > 0) settleImage("true");
        else settleImage("error");
        return;
      }

      image.addEventListener("load", handleImageReady, { once: true });
      image.addEventListener("error", () => settleImage("error"), { once: true });

      if (typeof image.decode === "function") {
        image.decode().then(handleImageReady).catch(() => {});
      }

      imageFallbackTimer = window.setTimeout(() => settleImage("timeout"), 5000);
    }

    function start() {
      window.clearTimeout(startTimer);
      if (started || !hero.isConnected) return;

      if (!mobileQuery.matches || reducedMotionQuery.matches) {
        started = true;
        showFinalState(hero);
        return;
      }

      if (document.visibilityState === "hidden") return;
      started = true;
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (!hero.isConnected) return;

          startedAt = now();
          hero.setAttribute("data-intro-ready", "true");
          queueStory();
          queuePortrait();
        });
      });
    }

    function scheduleStart(delay) {
      if (started) return;
      window.clearTimeout(startTimer);
      startTimer = window.setTimeout(start, delay);
    }

    controllers.set(hero, { start: start });
    prepareImage();

    if (!mobileQuery.matches || reducedMotionQuery.matches) {
      start();
      return;
    }

    scheduleStart(40);

    function handleVisibilityChange() {
      if (document.visibilityState !== "visible" || started) return;
      scheduleStart(20);
    }

    function handlePageShow(event) {
      if (!hero.isConnected) return;

      if (event.persisted && started) {
        showFinalState(hero);
        return;
      }

      scheduleStart(20);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pageshow", handlePageShow);
  }

  function scan(root) {
    if (!root) return;

    if (root.nodeType === 1 && typeof root.matches === "function" && root.matches(heroSelector)) {
      initHero(root);
    }

    if (typeof root.querySelectorAll !== "function") return;
    var heroes = root.querySelectorAll(heroSelector);
    for (var index = 0; index < heroes.length; index += 1) initHero(heroes[index]);
  }

  function boot() {
    scan(document);

    if (!document.documentElement) {
      document.addEventListener("DOMContentLoaded", boot, { once: true });
      return;
    }

    var observer = new MutationObserver((records) => {
      for (var recordIndex = 0; recordIndex < records.length; recordIndex += 1) {
        var addedNodes = records[recordIndex].addedNodes;
        for (var nodeIndex = 0; nodeIndex < addedNodes.length; nodeIndex += 1) {
          scan(addedNodes[nodeIndex]);
        }
      }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  boot();
})();
`;

export default function HomepageHeroBoot() {
  return (
    <script
      id="homepage-hero-boot"
      dangerouslySetInnerHTML={{ __html: homepageHeroBoot }}
    />
  );
}
