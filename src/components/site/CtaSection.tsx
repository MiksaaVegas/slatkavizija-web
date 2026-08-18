import { Phone, Heart, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "./Section";

export function CtaSection({
  eyebrow = "Ајде да се запознаеме",
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text: string;
}) {
  const actions = [
    {
      icon: Phone,
      label: "Јавете се",
      value: site.phone,
      href: site.phoneHref,
      external: false,
    },
    {
      icon: Heart,
      label: "Instagram",
      value: site.instagram,
      href: site.instagramHref,
      external: true,
    },
    {
      icon: MapPin,
      label: "Како да нè најдете",
      value: site.address,
      href: site.mapsHref,
      external: true,
    },
  ];

  return (
    <section id="cta" className="px-3 pt-8 pb-4 sm:px-6 sm:pt-12">
      <div className="gradient-cta rounded-[2.5rem] px-5 py-16 text-center sm:rounded-[4rem] sm:px-10 sm:py-24">
        <Container>
          <p className="script text-3xl text-primary-foreground sm:text-4xl">{eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl text-primary-foreground sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/85">{text}</p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {actions.map((a) => (
              <a
                key={a.label}
                href={a.href}
                {...(a.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="surface-card group flex flex-col items-center gap-2 px-6 py-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-accent">
                  <a.icon size={20} />
                </span>
                <span className="font-serif text-xl">{a.label}</span>
                <span className="text-sm text-muted-foreground">{a.value}</span>
              </a>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
