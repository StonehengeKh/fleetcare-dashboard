import type { SelectHTMLAttributes } from "react";
import { cn } from "@shared/cn";

type SelectFieldProps = {
  label: string;
  error?: string;
  className?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export function SelectField({
  label,
  error,
  className,
  children,
  ...rest
}: SelectFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label className="text-xs text-dim">{label}</label>
      <select
        {...rest}
        className={cn(
          "rounded-md border border-card-edge bg-card px-3 py-2 text-sm text-basecolor",
          error && "border-[var(--over)]",
        )}
      >
        {children}
      </select>
      {error && <p className="text-xs text-over mt-0.5">{error}</p>}
    </div>
  );
}
