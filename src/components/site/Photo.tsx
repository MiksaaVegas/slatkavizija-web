import { cn } from "@/lib/utils";

export function Photo({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[2rem] bg-secondary shadow-soft sm:rounded-[2.5rem]",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]",
          imgClassName,
        )}
      />
    </figure>
  );
}
