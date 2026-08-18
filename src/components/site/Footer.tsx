import { Link } from "@tanstack/react-router";
import { navLinks, site } from "@/lib/site";
import { Container } from "./Section";

export function Footer() {
  return (
    <footer className="mt-4 rounded-t-[2.5rem] bg-cream pt-14 pb-10 sm:rounded-t-[4rem]">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl font-semibold">{site.name}</p>
            <p className="mt-3 text-sm text-muted-foreground">{site.tagline}</p>
          </div>

          <nav aria-label="Footer навигација">
            <p className="script text-xl">Страници</p>
            <ul className="mt-3 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="script text-xl">Контакт</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a className="transition-colors hover:text-foreground" href={site.phoneHref}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-foreground"
                  href={site.instagramHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {site.instagram}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-foreground"
                  href={site.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {site.address}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="script text-xl">Работно време</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {site.hoursShort.map((h) => (
                <li key={h.days}>
                  <span className="block text-foreground">{h.days}</span>
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © 2026 {site.name}. Сите права задржани.
        </p>
      </Container>
    </footer>
  );
}
