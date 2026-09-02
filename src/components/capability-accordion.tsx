import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Plus, Minus } from "lucide-react";

export function CapabilityAccordion() {
  const { t } = useLanguage();
  const w = t.wheel;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-dark border-b border-border px-5 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="eyebrow text-primary">{w.eyebrow}</p>
          <h2 className="font-display mt-2 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            {w.heading}
          </h2>
        </div>

        <div className="border-t border-border">
          {w.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.title}
                className="border-b border-border transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left sm:py-6"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span
                      className={`font-display text-xl leading-none transition-colors duration-200 sm:text-2xl ${
                        isOpen ? "text-primary" : "text-muted-foreground"
                      }`}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-lg leading-snug tracking-tight transition-colors duration-200 sm:text-xl ${
                        isOpen ? "text-foreground" : "text-foreground/90"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={`mt-0.5 shrink-0 transition-colors duration-200 ${
                      isOpen ? "text-primary" : "text-muted-foreground"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 pl-[2.75rem] sm:pl-[3.75rem]">
                      <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
