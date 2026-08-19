import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type PriceRow = { label: string; price: string; second?: string };

export function PriceCard({
  icon,
  title,
  rows,
  note,
  columns,
  highlight,
  children,
  className,
}: {
  icon: ReactNode;
  title: string;
  rows?: PriceRow[];
  note?: string;
  columns?: [string, string, string];
  highlight?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "surface-card break-inside-avoid p-7 sm:p-9",
        highlight && "gradient-petal",
        className,
      )}
    >
      <span aria-hidden className="text-2xl">
        {icon}
      </span>
      <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{title}</h3>

      {columns && (
        <div className="mt-5 flex items-baseline justify-between text-xs tracking-wide text-muted-foreground uppercase">
          <span>{columns[0]}</span>
          <span className="flex gap-8">
            <span>{columns[1]}</span>
            <span>{columns[2]}</span>
          </span>
        </div>
      )}

      {rows && (
        <ul className="mt-4 divide-y divide-border/70">
          {rows.map((r) => (
            <li key={r.label} className="flex items-baseline justify-between gap-4 py-3">
              <span className="text-[0.98rem] text-muted-foreground">{r.label}</span>
              <span className="flex shrink-0 items-baseline gap-6 font-medium text-accent">
                <span>{r.price}</span>
                {r.second && <span>{r.second}</span>}
              </span>
            </li>
          ))}
        </ul>
      )}

      {children}

      {note && <p className="mt-5 text-sm text-muted-foreground italic">{note}</p>}
    </article>
  );
}
