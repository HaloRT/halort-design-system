import * as React from "react";
import { cn } from "@halort/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1.5">
        {label ? (
          <label htmlFor={inputId} className="text-sm font-medium text-foreground">
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "box-border flex h-10 min-h-10 w-full items-center rounded-xl border border-border bg-surface px-4 py-2 text-sm leading-normal text-foreground",
            "placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-danger focus-visible:ring-danger",
            className,
          )}
          {...props}
        />
        {error ? <p className="text-xs text-danger">{error}</p> : null}
      </div>
    );
  },
);
Input.displayName = "Input";
