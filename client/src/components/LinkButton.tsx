import { Link, LinkProps } from "react-router-dom";
import { cn } from "@shared/cn";

type LinkButtonProps = LinkProps & {
  children: React.ReactNode;
};

export function LinkButton({ className, children, ...rest }: LinkButtonProps) {
  return (
    <Link
      {...rest}
      className={cn(
        "px-3 py-1 rounded-md text-sm",
        "bg-[var(--btn-bg)] text-[var(--btn-text)]",
        "hover:bg-[var(--btn-hover-bg)] transition-colors",
        className,
      )}
    >
      {children}
    </Link>
  );
}
