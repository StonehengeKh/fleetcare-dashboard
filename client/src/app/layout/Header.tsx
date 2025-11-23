import type { HeaderProps } from "@types";
import ThemeToggle from "@components/ThemeToggle";
import { LanguageToggle } from "@components/LanguageToggle";

export default function Header({ title, subtitle, rightSlot }: HeaderProps) {
  return (
    <header className="mb-6 flex items-start justify-between gap-3">
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        {subtitle ? <p className="text-dim mt-1">{subtitle}</p> : null}
      </div>
      <div className="shrink-0 flex items-center gap-2">
        {rightSlot}
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
