import { useTheme } from "@app/providers/theme";
import { useTranslation } from "react-i18next";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useTranslation();
  const title = theme === "dark" ? t("theme.toLight") : t("theme.toDark");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={title}
      title={title}
      className="
        px-3 py-2 rounded-md text-sm
        bg-[var(--btn-bg)] text-[var(--btn-text)]
        border border-[var(--btn-border)]
        hover:bg-[var(--btn-hover-bg)]
        transition-colors
      "
    >
      {theme === "dark" ? "☀︎" : "🌙"}
    </button>
  );
}
