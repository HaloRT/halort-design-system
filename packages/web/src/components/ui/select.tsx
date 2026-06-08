import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@halort/utils";

export function Select({
  label,
  placeholder = "Select option",
  options,
  value,
  onValueChange,
  className,
}: {
  label?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      {label ? <p className="text-sm font-medium text-foreground">{label}</p> : null}
      <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
        <SelectPrimitive.Trigger
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-xl border border-border bg-surface px-4 text-sm",
            "text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
          )}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon>
            <ChevronDown className="h-4 w-4 text-muted" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className="z-50 overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
            <SelectPrimitive.Viewport className="p-1">
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  className={cn(
                    "relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2 text-sm",
                    "text-foreground outline-none focus:bg-surface-muted data-[highlighted]:bg-surface-muted",
                  )}
                >
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className="absolute right-3">
                    <Check className="h-4 w-4 text-primary" />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  );
}
