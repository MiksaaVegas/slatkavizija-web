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
import shop from "@/assets/shop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Слатка Приказна — Торти по нарачка во Скопје" },
      {
        name: "description",
        content:
          "Мала локална слаткарница во Скопје. Торти и слатки подготвени со љубов за родендени, свадби и посебни моменти.",
      },
      { property: "og:title", content: "Слатка Приказна — Торти по нарачка во Скопје" },
      {
        property: "og:description",
        content: "Торти и слатки создадени за вашите најубави моменти.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="px-3 pt-6 pb-4 sm:px-6 sm:pt-10">
        <div className="gradient-petal rounded-[2.5rem] px-6 py-14 sm:rounded-[4rem] sm:px-12 sm:py-20">
          <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <p className="script text-3xl sm:text-4xl">Добредојдовте кај нас</p>
              <Heading as="h1" className="mt-3">
                Слатки создадени за вашите најубави моменти
              </Heading>
              <Lead>
                Торти и слатки подготвени со љубов, внимание и посебно внимание на секој
                детаљ. Без разлика дали славите роденден, свадба или едноставно сакате да
                израдувате некого — ние ќе се погрижиме вашиот момент да биде уште посладок.
              </Lead>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#cta" size="lg">
                  Нарачајте торта →
                </ButtonLink>
                <ButtonLink to="/galerija" variant="outline" size="lg">
                  Погледнете ја галеријата
                </ButtonLink>
              </div>
            </div>
            <Photo
              src={heroCake}
              alt="Розова двоспратна торта со малини"
              priority
              className="mx-auto max-w-[520px] rounded-[3rem] lg:max-w-none"
            />
          </div>
        </div>
      </section>

      <Section className="text-center">
        <Eyebrow>За секој повод</Eyebrow>
        <Heading>За секоја прилика има по една совршена торта</Heading>
        <Lead className="mx-auto text-center">
          Од класични вкусови до торти направени според вашата идеја, подготвуваме слатки за
          големи и мали прослави. Изберете од нашата понуда или споделете ја вашата замисла
          со нас.
        </Lead>
        <div className="mt-8">
          <ButtonLink to="/cenovnik" variant="outline">
            Погледнете го ценовникот
          </ButtonLink>
        </div>
      </Section>

      <SoftBand tone="cream">
        <div className="text-center">
          <Eyebrow>Наши омилени</Eyebrow>
          <Heading>Направено со љубов. Уживајте со мерак.</Heading>
          <Lead className="mx-auto text-center">
            Секоја наша торта е подготвена со внимание — од првата подготовка до последниот
            детаљ на декорацијата.
          </Lead>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Photo src={cake3} alt="Торта со свежи јагоди" className="lg:col-span-2 aspect-[4/3]" />
          <Photo src={cake5} alt="Орео торта со чоколаден прелив" className="aspect-[3/4]" />
          <Photo src={cake1} alt="Парче чоколадна торта" className="aspect-square" />
          <Photo src={cake4} alt="Роденденска торта со шарени посипки" className="aspect-square" />
          <Photo src={cake2} alt="Свадбена торта со свежи цветови" className="aspect-square" />
        </div>
        <div className="mt-10 text-center">
          <ButtonLink to="/galerija">Погледнете ја галеријата</ButtonLink>
        </div>
      </SoftBand>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Photo src={shop} alt="Внатрешност на слаткарницата" className="aspect-[4/3]" />
          <div>
            <Eyebrow>Нашата приказна</Eyebrow>
            <Heading>Зад секоја торта стои една слатка приказна</Heading>
            <Lead>
              Слатка Приказна започна од едноставна љубов кон печењето и желбата да создадеме
              торти што ќе бидат дел од вашите најубави спомени.
            </Lead>
            <Lead>
              Денес со истата љубов подготвуваме торти и слатки за родендени, свадби, прослави
              и сите посебни моменти.
            </Lead>
            <div className="mt-8">
              <ButtonLink to="/za-nas" variant="outline">
                Дознајте повеќе за нас
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <SoftBand tone="blush">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <Eyebrow>Пронајдете ја вашата омилена</Eyebrow>
            <Heading>Погледнете ги нашите цени</Heading>
            <Lead>
              Погледнете ги цените на нашите торти и слатки и изберете ја онаа што најмногу
              одговара на вашиот повод.
            </Lead>
          </div>
          <ButtonLink to="/cenovnik" size="lg">
            Погледнете го ценовникот →
          </ButtonLink>
        </div>
      </SoftBand>

      <CtaSection
        eyebrow="Да направиме нешто слатко?"
        title="Планирате прослава или имате посебна идеја за торта?"
        text="За нарачки и дополнителни информации, јавете ни се, пишете ни на Instagram или посетете нè лично."
      />
    </>
  );
}
