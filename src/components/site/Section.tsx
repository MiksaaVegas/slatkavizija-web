import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}

/** Soft, curved container used to blend a tinted band into the page. */
export function SoftBand({
  children,
  className,
  id,
  tone = "petal",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "petal" | "cream" | "blush";
}) {
  const tones = {
    petal: "gradient-petal",
    cream: "bg-cream",
    blush: "bg-blush",
  } as const;
  return (
    <section id={id} className="px-3 py-8 sm:px-6 sm:py-12">
      <div
        className={cn(
          "rounded-[2.5rem] py-14 sm:rounded-[4rem] sm:py-20",
          tones[tone],
          className,
        )}
      >
        <Container>{children}</Container>
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="script mb-3 text-2xl sm:text-3xl">{children}</p>;
}

export function Heading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        Tag === "h1"
          ? "text-4xl sm:text-5xl lg:text-6xl"
          : "text-3xl sm:text-4xl lg:text-[2.75rem]",
        "text-balance",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mt-4 max-w-2xl text-muted-foreground", className)}>
      {children}
    </p>
  );
}
