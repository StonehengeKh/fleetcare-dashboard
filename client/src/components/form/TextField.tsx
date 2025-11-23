import type { InputHTMLAttributes } from "react";
import { cn } from "@shared/cn";

type TextFieldProps = {
  label: string;
  error?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField({
  label,
  error,
  className,
  ...rest
}: TextFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label className="text-xs text-dim">{label}</label>
      <input
        {...rest}
        className={cn(
          "rounded-md border border-card-edge bg-card px-3 py-2 text-sm text-basecolor",
          "placeholder:text-dim",
          error && "border-[var(--over)]",
        )}
      />
      {error && <p className="text-xs text-over mt-0.5">{error}</p>}
    </div>
  );
}
