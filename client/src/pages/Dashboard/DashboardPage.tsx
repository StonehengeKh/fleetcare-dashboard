import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useGetComplianceSummaryQuery } from "@features/dashboard/api";
import StatCard from "@components/StatCard";
import type { StatTone } from "@types";

export default function DashboardPage() {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGetComplianceSummaryQuery();

  const cards = useMemo<
    Array<{
      key: string;
      label: string;
      value?: number;
      tone: StatTone;
      hint: string;
    }>
  >(
    () => [
      {
        key: "ok",
        label: t("dashboard.ok"),
        value: data?.ok,
        tone: "ok",
        hint: t("nav.assets"),
      },
      {
        key: "dueSoon",
        label: t("dashboard.dueSoon"),
        value: data?.dueSoon,
        tone: "due",
        hint: t("nav.assets"),
      },
      {
        key: "overdue",
        label: t("dashboard.overdue"),
        value: data?.overdue,
        tone: "over",
        hint: t("nav.assets"),
      },
      {
        key: "openReports",
        label: t("dashboard.openReports"),
        value: data?.openReports,
        tone: "due",
        hint: t("nav.reports"),
      },
    ],
    [t, data],
  );

  const hasData =
    !!data &&
    [data.ok, data.dueSoon, data.overdue, data.openReports].some(
      (value) => (value ?? 0) > 0,
    );

  return (
    <div>
      {isError && (
        <p className="text-over mb-4">{t("common.dashboardLoadError")}</p>
      )}

      {!isLoading && !isError && !hasData && (
        <p className="text-dim mb-4">{t("dashboard.empty")}</p>
      )}

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ key, label, value, tone, hint }) => (
          <StatCard
            key={key}
            label={label}
            value={value}
            tone={tone}
            hint={hint}
            loading={isLoading}
            error={isError}
          />
        ))}
      </div>
    </div>
  );
}
