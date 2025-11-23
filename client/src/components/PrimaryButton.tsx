import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@shared/cn";

type PrimaryButtonProps = {
  children: ReactNode;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton({
  children,
  fullWidth,
  className,
  ...rest
}: PrimaryButtonProps) {
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-center",
        "h-9 rounded-md text-sm",
        "bg-[var(--btn-bg)] text-[var(--btn-text)]",
        "border border-[var(--btn-border)]",
        "hover:bg-[var(--btn-hover-bg)]",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        "transition-colors",
        fullWidth && "w-full",
        className,
      )}
    >
      {children}
    </button>
  );
}
