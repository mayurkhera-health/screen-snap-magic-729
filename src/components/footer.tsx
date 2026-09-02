import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

/**
 * TWO LOGO FILES, AND THEY ARE NOT INTERCHANGEABLE.
 *
 *   /zedventures-logo.png            black wordmark, white background, no alpha
 *                                    -> light grounds only (the header)
 *   /zedventures-logo-knockout.png   white wordmark, red mark, transparent
 *                                    -> dark grounds only (anything .section-dark)
 *
 * Put the knockout on a light surface and the wordmark disappears, leaving three
 * red bars floating on their own. Put the original on a dark surface and you get
 * a white box. There is no single file that covers both, because the mark is
 * black-on-white and the site has no OS-driven dark mode — .section-dark is an
 * opt-in utility, so a component always knows which ground it is on.
 *
 * The knockout was derived from the original raster (798x208), not supplied by a
 * designer. If a real white or SVG version ever arrives, replace the file rather
 * than re-deriving it.
 */
const LOGO_KNOCKOUT_SRC = "/zedventures-logo-knockout.png";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="section-dark border-t border-border pb-24 sm:pb-0">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {/* Knockout variant, so the mark sits straight on the footer ground
              instead of inside a white chip that read as a sticker. 28px rather
              than the old 20px: with the chip gone there is nothing framing it,
              and at 20px it read as small rather than restrained.

              Measured on #0a0a0b: the white wordmark is 19.79:1 and the red
              mark 4.72:1, both clear of what a graphic element needs. */}
          <img
            src={LOGO_KNOCKOUT_SRC}
            alt={t.a11y.logoAlt}
            width={798}
            height={208}
            className="h-7 w-auto"
          />
          <p className="mt-3 text-sm text-muted-foreground">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <LanguageToggle dark />
          <p className="text-xs text-muted-foreground">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
