import { createFileRoute } from "@tanstack/react-router";
import { Phone, Heart, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/site/Button";
import { CtaSection } from "@/components/site/CtaSection";
import { Eyebrow, Heading, Lead, Section, SoftBand } from "@/components/site/Section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Контакт — Слатка Приказна" },
      {
        name: "description",
        content:
          "Јавете ни се, пишете ни на Instagram или посетете нè на ул. Македонија 25, Скопје. Работно време и информации за нарачки.",
      },
      { property: "og:title", content: "Контакт — Слатка Приказна" },
      { property: "og:description", content: "Ајде да се договориме за нешто слатко." },
    ],
  }),
  component: Contact,
});

const cards = [
  {
    icon: Phone,
    title: "Јавете ни се",
    text: "Најбрзиот начин да проверите достапност, цена или да договорите нарачка е да ни се јавите.",
    value: site.phone,
    href: site.phoneHref,
    cta: "Јавете се",
    external: false,
  },
  {
    icon: Heart,
    title: "Пишете ни на Instagram",
    text: "Погледнете ги нашите најнови креации и пишете ни директно преку Instagram.",
    value: site.instagram,
    href: site.instagramHref,
    cta: "Отвори Instagram",
    external: true,
  },
  {
    icon: MapPin,
    title: "Посетете нè",
    text: "Доколку сакате да разговараме лично или да ја посетите нашата слаткарница, ќе нè најдете на:",
    value: site.address,
    href: site.mapsHref,
    cta: "Како да нè најдете",
    external: true,
  },
];

function Contact() {
  return (
    <>
      <section className="px-3 pt-6 pb-4 sm:px-6 sm:pt-10">
        <div className="gradient-petal rounded-[2.5rem] px-6 py-14 text-center sm:rounded-[4rem] sm:py-20">
          <p className="script text-3xl sm:text-4xl">Контакт</p>
          <Heading as="h1" className="mt-2">
            Ајде да се договориме за нешто слатко
          </Heading>
          <Lead className="mx-auto text-center">
            Имате прашање, сакате да нарачате торта или веќе имате идеја што сакате да ја
            реализираме? Јавете ни се, пишете ни на Instagram или посетете нè лично.
          </Lead>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="surface-card flex flex-col p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-accent">
                <c.icon size={20} />
              </span>
              <h2 className="mt-4 font-serif text-2xl">{c.title}</h2>
              <p className="mt-3 text-muted-foreground">{c.text}</p>
              <p className="mt-4 font-serif text-xl text-accent">{c.value}</p>
              <div className="mt-6">
                <ButtonLink
                  href={c.href}
                  size="sm"
                  {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {c.cta}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <SoftBand tone="cream">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Работно време</Eyebrow>
            <Heading>Кога сме тука за вас</Heading>
            <ul className="mt-6 divide-y divide-border/70">
              {site.hoursFull.map((h) => (
                <li key={h.day} className="flex justify-between py-3">
                  <span>{h.day}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Нарачки</Eyebrow>
            <Heading>Планирате прослава?</Heading>
            <Lead>
              За поголеми и персонализирани торти препорачуваме да нарачате навреме.
            </Lead>
            <Lead>
              При разговорот ќе договориме сè што е потребно — од големината и вкусот до
              изгледот и датумот на преземање.
            </Lead>
          </div>
        </div>
      </SoftBand>

      <CtaSection
        eyebrow="Со задоволство"
        title="Вашата следна прослава може да биде уште послатка."
        text="За нарачки и дополнителни информации, јавете ни се или пишете ни на Instagram."
      />
    </>
  );
}
