import { ArrowRight } from "lucide-react";
import { Suspense, lazy } from "react";

import { m } from "@rs-stack/i18n/messages";
import { Link } from "@rs-stack/i18n/tanstack-start/components/link";

const Warp = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => {
    return { default: mod.Warp };
  })
);

export function HeroSection() {
  return (
    <section
      className="flex w-full items-center justify-center"
      style={{ "--shader-color": "#EC4E02" } as React.CSSProperties}
    >
      <div className="relative w-full">
        <div className="relative -top-[calc(var(--navbar-height)+1.75rem)] flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background pt-(--navbar-height)">
          <Suspense fallback={null}>
            <div className="pointer-events-none absolute inset-0 z-0 animate-in opacity-40 mix-blend-multiply duration-700 ease-out will-change-[opacity] fade-in dark:opacity-60 dark:mix-blend-screen">
              <Warp
                style={{
                  WebkitMaskComposite: "source-in",
                  maskComposite: "intersect",
                  maskImage: `
                    linear-gradient(to top, transparent 4%, black 30%, black 100%),
                    linear-gradient(to bottom, transparent 12%, black 30%, black 100%),
                    linear-gradient(to right, transparent 0%, black 10%, black 75%, transparent 100%),
                    linear-gradient(to left, transparent 0%, black 10%, black 75%, transparent 100%)
                  `
                }}
                colors={["#121212", "#EC4E02", "#121212", "#c43a00"]}
                proportion={0.45}
                softness={1}
                distortion={0.25}
                swirl={0.8}
                swirlIterations={10}
                shape="checks"
                shapeScale={0.1}
                speed={1}
                className="size-full"
              />
            </div>
          </Suspense>

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
            <div className="duraton-500 mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all">
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: "var(--shader-color)" }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--shader-color)" }}
                />
              </span>
              {m.home_page__hero_beta_badge()}
            </div>

            <h2 className="font-display mb-8 text-7xl leading-[0.95] font-medium -tracking-[0.005em] text-balance text-foreground sm:text-8xl 2xl:text-[108px]">
              {m.home_page__hero_title_line_1()} <br />
              <span className="text-foreground">{m.home_page__hero_title_line_2()}</span>
            </h2>

            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-balance text-muted-foreground md:text-xl">
              {m.home_page__hero_description()}
            </p>

            <Link
              className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-foreground px-12! text-base font-medium text-background transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
              href="#"
              target="_blank"
            >
              <span className="relative z-10">{m.home_page__hero_cta()}</span>
              <ArrowRight
                aria-hidden
                className="relative z-10 size-5.5 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
