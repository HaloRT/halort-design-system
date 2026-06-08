import { cn } from "@halort/utils";

export function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  className,
}: {
  src?: string;
  alt: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClass = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-base",
  }[size];

  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full",
        "border border-border bg-surface-muted font-semibold text-foreground",
        sizeClass,
        className,
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <span>{fallback ?? alt.slice(0, 2).toUpperCase()}</span>
      )}
    </div>
  );
}
