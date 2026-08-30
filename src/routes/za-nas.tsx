import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink } from "@/components/site/Button";
import { CtaSection } from "@/components/site/CtaSection";
import { Photo } from "@/components/site/Photo";
import { Eyebrow, Heading, Lead, Section, SoftBand } from "@/components/site/Section";
import baker from "@/assets/baker.jpg";
import shop from "@/assets/shop.jpg";
import cake6 from "@/assets/cake-6.jpg";

export const Route = createFileRoute("/za-nas")({
  head: () => ({
    meta: [
      { title: "За нас — Слатка Приказна" },
      {
        name: "description",
        content:
          "Приказната зад нашите слатки: мала слаткарница од Скопје создадена од љубов кон домашните вкусови и убавите детали.",
      },
      { property: "og:title", content: "За нас — Слатка Приказна" },
      {
        property: "og:description",
        content: "Од љубов кон печењето до вашата омилена торта.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="px-3 pt-6 pb-4 sm:px-6 sm:pt-10">
        <div className="gradient-petal rounded-[2.5rem] px-6 py-14 text-center sm:rounded-[4rem] sm:py-20">
          <p className="script text-3xl sm:text-4xl">За нас</p>
          <Heading as="h1" className="mt-2">
            Приказната зад нашите слатки
          </Heading>
          <Lead className="mx-auto text-center">
            Сè започна со љубов кон слатките, креативноста и желбата секој повод да биде уште
            посебен.
          </Lead>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Нашата приказна</Eyebrow>
            <Heading>Од љубов кон печењето до вашата омилена торта</Heading>
            <Lead>
              Слатка Приказна е мала локална слаткарница од Скопје создадена од љубов кон
              домашните вкусови и убавите детали.
            </Lead>
            <Lead>
              Нашата приказна започна во 2018 година, кога Марија Стојановска започна да
              подготвува торти за семејството и блиските. Она што започна како хоби, постепено
              прерасна во мала слаткарница која денес создава торти за стотици посебни моменти.
            </Lead>
            <Lead>
              Иако пораснавме, една работа остана иста — секоја торта ја подготвуваме со истото
              внимание како да е за некој наш близок.
            </Lead>
          </div>
          <Photo src={shop} alt="Нашата слаткарница во Скопје" className="aspect-[4/3]" />
        </div>
      </Section>

      <SoftBand tone="cream">
        <div className="text-center">
          <Eyebrow>Со мерак и со срце</Eyebrow>
          <Heading>Секој детал е важен</Heading>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            {
              t: "Со внимание",
              d: "Од подготовката на бисквитите до финалната декорација, секоја торта добива посебно внимание.",
            },
            {
              t: "Квалитетни состојки",
              d: "Избираме состојки во кои веруваме за да добиете вкус во кој навистина можете да уживате.",
            },
            {
              t: "Направено за вас",
              d: "Вашата прослава е уникатна, па затоа и вашата торта може да биде токму таква.",
            },
          ].map((v) => (
            <div key={v.t} className="surface-card p-8">
              <h3 className="font-serif text-2xl">{v.t}</h3>
              <p className="mt-3 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </SoftBand>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Photo src={baker} alt="Марија Стојановска украсува торта" className="aspect-[4/5] max-w-[520px]" />
          <div>
            <Eyebrow>Запознајте ја Марија</Eyebrow>
            <Heading>Марија Стојановска, основач и слаткар</Heading>
            <blockquote className="mt-6 border-l-2 border-primary pl-5 font-serif text-2xl leading-snug">
              „Отсекогаш сум верувала дека најубавите моменти се оние што ги споделуваме со
              луѓето што ги сакаме. А ако можеме да ги направиме малку послатки, тогаш уште
              подобро.“
            </blockquote>
            <Lead>
              За Марија, секоја нарачка е можност да создаде нешто што ќе стане дел од нечиј
              убав спомен.
            </Lead>
          </div>
        </div>
      </Section>

      <SoftBand tone="blush">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Персонализирани торти</Eyebrow>
            <Heading>Замисливте нешто посебно?</Heading>
            <Lead>
              Имате фотографија, идеја или едноставно знаете како сакате да изгледа вашата
              торта?
            </Lead>
            <Lead>
              Кажете ни што сте замислиле. Ќе разговараме за деталите и ќе се обидеме вашата
              идеја да ја претвориме во слатка креација.
            </Lead>
            <div className="mt-8">
              <ButtonLink href="#cta">Разговарајте со нас →</ButtonLink>
            </div>
          </div>
          <Photo src={cake6} alt="Елегантна бела торта со златен детаљ" className="aspect-[4/3]" />
        </div>
      </SoftBand>

      <CtaSection
        eyebrow="Ајде да разговараме"
        title="Вашата следна торта започнува со еден разговор"
        text="Јавете ни се, пишете ни на Instagram или посетете нè лично и кажете ни што сте замислиле."
      />
    </>
  );
}
