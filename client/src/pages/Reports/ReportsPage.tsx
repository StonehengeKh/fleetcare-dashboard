import { useTranslation } from "react-i18next";
import { Report } from "@types";

const mockReports: Report[] = [];

export default function ReportsPage() {
  const { t } = useTranslation();
  const hasReports = mockReports.length > 0;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{t("header.reportsTitle")}</h2>
      {!hasReports ? (
        <p className="text-dim mb-4">{t("reports.empty")}</p>
      ) : (
        <>
          <p className="text-dim mb-4">{t("reports.tableStub")}</p>
          <div className="rounded-xl2 bg-card border border-card-edge p-4"></div>
        </>
      )}
    </div>
  );
}
