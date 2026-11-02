import { useRef } from "react";

/**
 * PuneMetroHero
 * Renders the Pune Metro animation (metro-hero.html) as a full-width section
 * between the Nav and the Hero. The iframe is clipped 50px from the bottom to
 * hide the metro pillars, matching the reference image.
 */
export function PuneMetroHero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-nudge arrow click → smooth scroll to next section
  const scrollDown = () => {
    const section = sectionRef.current;
    if (!section) return;
    const next = section.nextElementSibling as HTMLElement | null;
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="metro-hero"
      className="relative w-full overflow-hidden bg-white"
      style={{ height: "clamp(450px, 100vh, 620px)" }}
      aria-label="Pune Metro animation"
    >
      {/* ── Heading overlay ── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 flex flex-col items-center justify-start pt-5 sm:pt-6"
        aria-hidden="false"
      >
        <p
          className="rounded-full px-5 py-5 text-center font-display text-2xl font-extrabold tracking-wide sm:text-4xl md:text-5xl"
          style={{
            color: "#2a2540",
            textShadow:
              "0 1px 0 rgba(255,255,255,0.9), 0 2px 12px rgba(255,255,255,0.7)",
          }}
        >
          Next Stop: Pune…
        </p>
      </div>

      {/* ── Animation iframe ── */}
      {/*
        - bottom: -70px  → clips 70px from the bottom (hides pillars + a bit more ground)
        - top: 60px      → shifts the scene down so monuments sit lower, giving
                           the heading clear sky/white space above them
      */}
      <div
        className="absolute inset-x-0"
        style={{ top: "60px", bottom: "-50px" }}
      >
        <iframe
          src="/metro-hero.html"
          title="Pune Metro animation"
          className="h-full w-full border-0"
          style={{ display: "block" }}
          sandbox="allow-scripts allow-same-origin"
          scrolling="no"
        />
      </div>

      {/* ── Scroll-down cue ── */}
      <button
        onClick={scrollDown}
        aria-label="Scroll to content"
        className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 animate-bounce rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
        style={{ pointerEvents: "auto" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#a23fc0"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
