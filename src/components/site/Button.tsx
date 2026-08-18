import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-offset-4",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:bg-accent hover:text-accent-foreground",
        outline:
          "border border-primary/60 bg-card/70 text-foreground hover:bg-secondary",
        ghost: "text-accent hover:text-foreground",
        light:
          "bg-card text-foreground shadow-soft hover:bg-cream",
      },
      size: {
        md: "px-6 py-3 text-[0.95rem]",
        lg: "px-8 py-4 text-base",
        sm: "px-5 py-2.5 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Styles = VariantProps<typeof buttonStyles>;

export function ButtonLink({
  to,
  href,
  children,
  className,
  variant,
  size,
  ...rest
}: Styles & {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"a">, "href">) {
  const cls = cn(buttonStyles({ variant, size }), className);
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}
