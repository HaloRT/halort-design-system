import { cn } from "@halort/utils";
import { X } from "lucide-react";
import { Button } from "./button.js";

export function Drawer({
  open,
  onClose,
  title,
  children,
  side = "right",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  side?: "left" | "right";
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close drawer overlay"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <aside
        className={cn(
          "absolute top-0 flex h-full w-full max-w-md flex-col border-border bg-surface shadow-xl",
          side === "right" ? "right-0 border-l" : "left-0 border-r",
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close drawer">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </aside>
    </div>
  );
}
