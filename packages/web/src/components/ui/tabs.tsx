import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@halort/utils";

export function Tabs({
  defaultValue,
  items,
  className,
}: {
  defaultValue: string;
  items: { value: string; label: string; content: React.ReactNode }[];
  className?: string;
}) {
  return (
    <TabsPrimitive.Root defaultValue={defaultValue} className={className}>
      <TabsPrimitive.List className="inline-flex gap-1 rounded-xl border border-border bg-surface-muted p-1">
        {items.map((item) => (
          <TabsPrimitive.Trigger
            key={item.value}
            value={item.value}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors",
              "data-[state=active]:bg-surface data-[state=active]:text-foreground data-[state=active]:shadow-sm",
            )}
          >
            {item.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {items.map((item) => (
        <TabsPrimitive.Content key={item.value} value={item.value} className="mt-4">
          {item.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}
