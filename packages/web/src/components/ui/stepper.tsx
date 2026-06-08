import { Check } from "lucide-react";
import { cn } from "@halort/utils";

export function Stepper({
  steps,
  currentStep,
  className,
}: {
  steps: string[];
  currentStep: number;
  className?: string;
}) {
  return (
    <ol className={cn("flex flex-wrap items-center gap-2", className)}>
      {steps.map((step, index) => {
        const isComplete = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <li key={step} className="flex items-center gap-2">
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold",
                isComplete && "border-primary bg-primary text-primary-foreground",
                isCurrent && "border-primary text-primary",
                !isComplete && !isCurrent && "border-border text-muted",
              )}
            >
              {isComplete ? <Check className="h-4 w-4" /> : index + 1}
            </span>
            <span
              className={cn(
                "text-sm",
                isCurrent ? "font-semibold text-foreground" : "text-muted",
              )}
            >
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className="mx-2 hidden h-px w-8 bg-border sm:block" />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
