import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

const RING_R = 38; // % radius of the ring
const DOT_R = 38;
const LABEL_R = 50;

function polar(angleDeg: number, r: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: 50 + r * Math.cos(a), y: 50 + r * Math.sin(a) };
}

// SVG arc path on a 100x100 viewBox between two angles at radius r
function arcPath(angleDeg: number, span: number, r: number) {
  const start = polar(angleDeg - span / 2, r);
  const end = polar(angleDeg + span / 2, r);
  return `M ${start.x} ${start.y} A ${r} ${r} 0 0 1 ${end.x} ${end.y}`;
}

export function CapabilityWheel() {
  const { t } = useLanguage();
  const w = t.wheel;
  const n = w.items.length;
  const step = 360 / n;
  const [active, setActive] = useState(0);
  const activeItem = w.items[active] ?? w.items[0]!;

  return (
    <section className="section-dark border-b border-border px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow text-primary">{w.eyebrow}</p>
          <h2 className="font-display mt-2 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            {w.heading}
          </h2>
        </div>

        {/* Wheel — desktop */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-3xl select-none lg:block">
          {/* Ring + active arc */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <circle
              cx="50"
              cy="50"
              r={RING_R}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.18"
              strokeWidth="0.35"
            />
            <path
              d={arcPath(active * step, step * 0.7, RING_R)}
              fill="none"
              className="stroke-primary transition-all duration-300"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </svg>

          {/* Dots + labels */}
          {w.items.map((item, i) => {
            const angle = i * step;
            const dot = polar(angle, DOT_R);
            const label = polar(angle, LABEL_R);
            const isActive = i === active;
            const cos = Math.cos(((angle - 90) * Math.PI) / 180);

            let labelStyle: React.CSSProperties;
            let align: string;
            if (cos > 0.35) {
              labelStyle = { left: `${label.x}%`, top: `${label.y}%`, transform: "translate(0.75rem, -50%)" };
              align = "text-left";
            } else if (cos < -0.35) {
              labelStyle = { right: `${100 - label.x}%`, top: `${label.y}%`, transform: "translate(-0.75rem, -50%)" };
              align = "text-right";
            } else {
              labelStyle = { left: `${label.x}%`, top: `${label.y}%`, transform: "translate(-50%, -50%)" };
              align = "text-center";
            }

            return (
              <div key={item.title}>
                <button
                  type="button"
                  aria-label={item.title}
                  aria-pressed={isActive}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full p-2"
                  style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
                >
                  <span
                    className={`block h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                      isActive ? "bg-primary" : "bg-current opacity-40"
                    }`}
                  />
                </button>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`absolute max-w-[11rem] text-sm leading-snug tracking-tight transition-colors duration-200 sm:text-base ${align} ${
                    isActive ? "font-semibold text-primary" : "text-current opacity-70 hover:opacity-100"
                  }`}
                  style={labelStyle}
                >
                  {item.title}
                </button>
              </div>
            );
          })}

          {/* Center card */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="flex h-[46%] w-[46%] flex-col items-center justify-center rounded-full bg-background px-8 text-center text-foreground shadow-[0_0_80px_-20px_hsl(var(--primary)/0.35)]">
              <span className="mb-3 block h-1.5 w-10 rounded-full bg-primary" aria-hidden="true" />
              <p className="font-display text-base leading-tight tracking-tight sm:text-lg">
                {w.items[active].title}
              </p>
              <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {w.items[active].desc}
              </p>
              <p className="mt-3 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                {w.centerTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Compact list — mobile/tablet */}
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:hidden">
          {w.items.map((item, i) => (
            <div key={item.title} className="bg-background p-5 text-foreground">
              <span className="font-display text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-semibold tracking-tight">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
