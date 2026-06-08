import { cn } from "@halort/utils";

export function Table({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-xl border border-border", className)}>
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  );
}

export function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <thead className="border-b border-border bg-surface-muted text-xs uppercase tracking-wide text-muted">
      {children}
    </thead>
  );
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody className="divide-y divide-border">{children}</tbody>;
}

export function TableRow({ children }: { children: React.ReactNode }) {
  return <tr className="transition-colors hover:bg-surface-muted/50">{children}</tr>;
}

export function TableHead({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <th className={cn("px-4 py-3 font-semibold", className)}>{children}</th>;
}

export function TableCell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <td className={cn("px-4 py-3 text-foreground", className)}>{children}</td>;
}
