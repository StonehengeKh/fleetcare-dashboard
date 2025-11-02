import { useTranslation } from "react-i18next";

export default function ReportsPage() {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{t("header.reportsTitle")}</h2>
      <p className="text-white/60 mb-4">{t("reports.tableStub")}</p>

      <div className="rounded-xl2 bg-card border border-card-edge p-4">
        <div className="text-white/50">{t("reports.empty")}</div>
      </div>
    </div>
  );
}
