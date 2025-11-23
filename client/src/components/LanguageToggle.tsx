import { useTranslation } from "react-i18next";
import { cn } from "@shared/cn";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "uk", label: "UK" },
] as const;

export function LanguageToggle() {
  const { i18n, t } = useTranslation();

  const current = (i18n.language || "en").split("-")[0];

  const handleChange = (code: string) => {
    if (code === current) return;

    i18n.changeLanguage(code);

    try {
      localStorage.setItem("lang", code);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.warn("Failed to persist language", error);
      }
    }
  };

  return (
    <div
      aria-label={t("theme.languageSwitcher", "Language")}
      className={cn(
        "inline-flex items-center",
        "h-9 px-1 rounded-md text-sm",
        "border border-[var(--btn-border)]",
        "bg-[var(--btn-bg)] text-[var(--btn-text)]",
      )}
    >
      {LANGS.map((lang) => {
        const isActive = lang.code === current;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => handleChange(lang.code)}
            className={cn(
              "px-2 py-1 rounded-md transition-colors",
              "flex items-center justify-center",
              isActive
                ? "bg-[var(--btn-hover-bg)] text-[var(--btn-text)]"
                : "bg-transparent text-[var(--btn-text)]/70 hover:bg-[var(--btn-hover-bg)]/60",
            )}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
