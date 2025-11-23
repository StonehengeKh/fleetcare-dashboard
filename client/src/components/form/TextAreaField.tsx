import type { TextareaHTMLAttributes } from "react";
import { cn } from "@shared/cn";

type TextAreaFieldProps = {
  label: string;
  error?: string;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaField({
  label,
  error,
  className,
  ...rest
}: TextAreaFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label className="text-xs text-dim">{label}</label>
      <textarea
        {...rest}
        className={cn(
          "w-full rounded-md border border-card-edge bg-card px-3 py-2 text-sm text-basecolor",
          error && "border-[var(--over)]",
        )}
      />
      {error && <p className="text-xs text-over mt-0.5">{error}</p>}
    </div>
  );
}
