export function SectionHeader({
  eyebrow,
  heading,
  sub,
  align = "center",
}: {
  eyebrow: string;
  heading?: string;
  sub?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignCls}`}>
      <p className="eyebrow text-primary">{eyebrow}</p>
      {heading && (
        <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">{heading}</h2>
      )}
      {sub && <p className="text-base leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}
