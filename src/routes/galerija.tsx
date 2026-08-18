import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink } from "@/components/site/Button";
import { CtaSection } from "@/components/site/CtaSection";
import { Photo } from "@/components/site/Photo";
import { Eyebrow, Heading, Lead, Section, SoftBand } from "@/components/site/Section";
import heroCake from "@/assets/hero-cake.jpg";
import cake1 from "@/assets/cake-1.jpg";
import cake2 from "@/assets/cake-2.jpg";
import cake3 from "@/assets/cake-3.jpg";
import cake4 from "@/assets/cake-4.jpg";
import cake5 from "@/assets/cake-5.jpg";
import cake6 from "@/assets/cake-6.jpg";
import cake7 from "@/assets/cake-7.jpg";
import cake8 from "@/assets/cake-8.jpg";

export const Route = createFileRoute("/galerija")({
  head: () => ({
    meta: [
      { title: "Галерија — Слатка Приказна" },
      {
        name: "description",
        content:
          "Мал дел од тортите и слатките што ги создадовме за нашите клиенти — инспирација за вашата следна прослава.",
      },
      { property: "og:title", content: "Галерија — Слатка Приказна" },
      { property: "og:description", content: "Погледнете што подготвуваме." },
    ],
  }),
  component: Gallery,
});

const photos = [
  { src: heroCake, alt: "Розова двоспратна торта со малини", span: "sm:row-span-2" },
  { src: cake3, alt: "Торта со свежи јагоди", span: "" },
  { src: cake1, alt: "Парче чоколадна торта", span: "" },
  { src: cake2, alt: "Свадбена торта со свежи цветови", span: "sm:row-span-2" },
  { src: cake8, alt: "Чоколаден ролат", span: "" },
  { src: cake4, alt: "Роденденска торта со свеќички", span: "" },
  { src: cake5, alt: "Орео торта со чоколаден прелив", span: "sm:row-span-2" },
  { src: cake7, alt: "Мали колачиња со розов крем", span: "" },
  { src: cake6, alt: "Елегантна бела торта со златен детаљ", span: "" },
];

function Gallery() {
  return (
    <>
      <section className="px-3 pt-6 pb-4 sm:px-6 sm:pt-10">
        <div className="gradient-petal rounded-[2.5rem] px-6 py-14 text-center sm:rounded-[4rem] sm:py-20">
          <p className="script text-3xl sm:text-4xl">Галерија</p>
          <Heading as="h1" className="mt-2">
            Погледнете што подготвуваме
          </Heading>
          <Lead className="mx-auto text-center">
            Мал дел од тортите и слатките што ги создадовме за нашите клиенти.
          </Lead>
        </div>
      </section>

      <Section>
        <div className="text-center">
          <Eyebrow>Инспирација</Eyebrow>
          <Heading>Инспирација за вашата следна прослава</Heading>
          <Lead className="mx-auto text-center">
            Од нежни и едноставни дизајни до шарени и уникатни креации — секоја торта е
            направена за посебен повод.
          </Lead>
        </div>

        <div className="mt-12 grid auto-rows-[220px] gap-5 sm:auto-rows-[240px] sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <Photo
              key={p.alt}
              src={p.src}
              alt={p.alt}
              className={p.span}
              imgClassName="h-full"
            />
          ))}
        </div>
      </Section>

      <SoftBand tone="cream">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Вашата идеја</Eyebrow>
          <Heading>Вашата идеја, наша слатка креација</Heading>
          <Lead className="mx-auto text-center">Не мора да имате готов дизајн.</Lead>
          <Lead className="mx-auto text-center">
            Можете да ни испратите фотографија за инспирација, да ни кажете тема, боја или
            едноставно да ни опишете што замислувате. Ќе ви помогнеме да го пронајдете изгледот
            што најмногу одговара на вашиот повод.
          </Lead>
          <div className="mt-8">
            <ButtonLink href="#cta">Разговарајте со нас →</ButtonLink>
          </div>
        </div>
      </SoftBand>

      <CtaSection
        eyebrow="Подготвени сте?"
        title="Подготвени сте за вашата торта?"
        text="Кажете ни што прославувате и што сте замислиле. За нарачки и дополнителни информации, јавете ни се или пишете ни на Instagram."
      />
    </>
  );
}
