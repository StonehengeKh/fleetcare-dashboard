import { useTranslation } from "react-i18next";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useTranslation();
  return (
    <footer className="mt-6 text-sm text-dim border-t border-card-edge pt-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span>© {year} FleetCare</span>
        <span className="text-dim">{t("footer.tagline")}</span>
      </div>
    </footer>
  );
}
