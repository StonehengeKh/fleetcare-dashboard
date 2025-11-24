import { useTranslation } from "react-i18next";
import { useGetReportsQuery } from "@features/reports/api";

export default function ReportsPage() {
  const { t } = useTranslation();
  const { data: reports, isLoading, isError } = useGetReportsQuery();

  const hasReports = (reports?.length ?? 0) > 0;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{t("header.reportsTitle")}</h2>

      {isLoading && <p className="text-dim mb-4">{t("common.loading")}</p>}

      {isError && (
        <p className="text-over mb-4">{t("common.reportsLoadError")}</p>
      )}

      {!isLoading && !isError && !hasReports && (
        <p className="text-dim mb-4">{t("reports.empty")}</p>
      )}

      {hasReports && (
        <>
          <p className="text-dim mb-4">{t("reports.tableStub")}</p>

          <div className="rounded-xl2 bg-card border border-card-edge p-4">
            <ul className="divide-y divide-card-edge">
              {reports!.map((r) => (
                <li
                  key={r.id}
                  className="py-2 flex items-center justify-between"
                >
                  <div>
                    <div className="font-medium">{r.title}</div>
                    <div className="text-dim text-xs">{r.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
