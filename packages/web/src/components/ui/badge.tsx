import { cn } from "@halort/utils";

export function Badge({
  className,
  children,
  variant = "default",
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "alt" | "outline" | "success" | "warning" | "danger";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        variant === "default" && "badge-default",
        variant === "alt" && "badge-alt",
        variant === "outline" && "badge-outline",
        variant === "success" && "border border-success/30 bg-success/10 text-success",
        variant === "warning" && "border border-warning/30 bg-warning/10 text-warning",
        variant === "danger" && "border border-danger/30 bg-danger/10 text-danger",
        className,
      )}
    >
      {children}
    </span>
  );
}
