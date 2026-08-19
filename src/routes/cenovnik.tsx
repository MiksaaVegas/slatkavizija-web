import { createFileRoute } from "@tanstack/react-router";
import { Cake, Sparkles, Cherry, Heart, Leaf } from "lucide-react";
import { ButtonLink } from "@/components/site/Button";
import { CtaSection } from "@/components/site/CtaSection";
import { PriceCard } from "@/components/site/PriceCard";
import { Eyebrow, Heading, Lead, Section, SoftBand } from "@/components/site/Section";

export const Route = createFileRoute("/cenovnik")({
  head: () => ({
    meta: [
      { title: "Ценовник — Слатка Приказна" },
      {
        name: "description",
        content:
          "Цени на торти, свадбени торти, посни торти и дневни слатки во Слатка Приказна, Скопје.",
      },
      { property: "og:title", content: "Ценовник — Слатка Приказна" },
      { property: "og:description", content: "Погледнете ја нашата понуда и цени." },
    ],
  }),
  component: Pricing,
});

const torti = [
  { label: "20–25 парчиња", price: "1.400 ден." },
  { label: "30–35 парчиња", price: "2.000 ден." },
  { label: "30–35 парчиња, дупла", price: "2.500 ден." },
  { label: "40–45 парчиња", price: "2.800 ден." },
  { label: "40–50 парчиња, дупла", price: "3.000 ден." },
  { label: "50–60 парчиња, дупла", price: "3.500 ден." },
  { label: "50–60 парчиња, 2 спрата", price: "3.800 ден." },
  { label: "60 парчиња, дупла", price: "4.000 ден." },
  { label: "60–70 парчиња, 2 спрата", price: "4.500 ден." },
  { label: "80 парчиња, 2 спрата", price: "6.000 ден." },
  { label: "100–120 парчиња, ролат", price: "9.000 ден." },
  { label: "20 парчиња, ролат", price: "1.200 ден." },
];

const specijalni = [
  { label: "20–25 парчиња", price: "1.400 ден." },
  { label: "30–35 парчиња", price: "2.000 ден." },
  { label: "30–35 парчиња, дупла", price: "2.200 ден." },
  { label: "40–45 парчиња", price: "2.500 ден." },
  { label: "40–45 парчиња, дупла", price: "2.800 ден." },
  { label: "50 парчиња", price: "2.800 ден." },
  { label: "50 парчиња, дупла", price: "3.000 ден." },
  { label: "17–18 парчиња, ролат", price: "900 ден." },
];

const dnevni = [
  { label: "Орео", price: "800 ден.", second: "1.300 ден." },
  { label: "Киндер", price: "800 ден.", second: "1.300 ден." },
  { label: "Кранчи", price: "800 ден.", second: "1.300 ден." },
];

const posni = [
  { label: "12–15 парчиња", price: "1.000 ден." },
  { label: "20–25 парчиња", price: "1.500 ден." },
  { label: "30–35 парчиња, дупла", price: "2.600 ден." },
  { label: "40–45 парчиња, дупла", price: "3.300 ден." },
  { label: "50–60 парчиња, дупла", price: "3.600 ден." },
];

function Pricing() {
  return (
    <>
      <section className="px-3 pt-6 pb-4 sm:px-6 sm:pt-10">
        <div className="gradient-petal rounded-[2.5rem] px-6 py-14 text-center sm:rounded-[4rem] sm:py-20">
          <p className="script text-3xl sm:text-4xl">Ценовник</p>
          <Heading as="h1" className="mt-2">
            Цени на нашите слатки
          </Heading>
          <Lead className="mx-auto text-center">
            Погледнете ја нашата понуда и цените за торти и слатки. Цените се во денари. За
            одредени дизајни и специјални нарачки, цената може да варира.
          </Lead>
        </div>
      </section>

      <Section>
        <div className="columns-1 gap-5 lg:columns-2 [&>*]:mb-5">
          <PriceCard icon={<Cake size={22} />} title="Торти" rows={torti} />
          <PriceCard
            icon={<Sparkles size={22} />}
            title="Свадбена торта"
            highlight
            note="За свадбени торти, конечниот дизајн и декорација може да влијаат на цената."
          >
            <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-border/70 pt-4">
              <span className="text-[0.98rem] text-muted-foreground">
                200–250 парчиња, 3 спрата
              </span>
              <span className="font-serif text-2xl font-semibold text-accent">20.000 ден.</span>
            </div>
          </PriceCard>
          <PriceCard icon={<Cherry size={22} />} title="Орео, Киндер, Кранчи" rows={specijalni} />
          <PriceCard
            icon={<Heart size={22} />}
            title="Дневни слободни торти"
            rows={dnevni}
            columns={["Вид", "Мала", "Голема"]}
            note="Цените се однесуваат на мала и голема торта."
          />
          <PriceCard icon={<Leaf size={22} />} title="Посни торти" rows={posni} />
        </div>
      </Section>

      <SoftBand tone="cream">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Посебна желба</Eyebrow>
          <Heading>Имате посебна желба?</Heading>
          <Lead className="mx-auto text-center">
            Доколку сакате персонализиран дизајн, посебна декорација или торта направена
            според ваша идеја, цената може да се разликува од наведените цени.
          </Lead>
          <Lead className="mx-auto text-center">
            За точна цена, контактирајте нè и договорете ги деталите со нас.
          </Lead>
          <div className="mt-8">
            <ButtonLink href="#cta">Контактирајте нè →</ButtonLink>
          </div>
        </div>
      </SoftBand>

      <CtaSection
        eyebrow="Тука сме за вас"
        title="Не сте сигурни која торта да ја изберете?"
        text="Кажете ни за која прилика ви треба торта, за колку луѓе и што би сакале — ќе ви помогнеме да го направите вистинскиот избор."
      />
    </>
  );
}
