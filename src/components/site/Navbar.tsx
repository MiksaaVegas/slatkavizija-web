import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { buttonStyles } from "./Button";
import { Container } from "./Section";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur-md">
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Link
          to="/"
          className="font-serif text-xl font-semibold tracking-tight sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Главна навигација">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.95rem] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#cta" className={buttonStyles({ size: "sm", className: "hidden sm:inline-flex" })}>
            Нарачајте торта
          </a>
          <button
            type="button"
            aria-label={open ? "Затвори мени" : "Отвори мени"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-foreground lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border/50 bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-lg text-foreground transition-colors hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className={buttonStyles({ size: "md", className: "mt-2" })}
            >
              Нарачајте торта
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
