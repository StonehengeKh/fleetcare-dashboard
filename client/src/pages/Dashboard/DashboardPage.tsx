import { useMemo } from "react";
import { useGetComplianceSummaryQuery } from "@features/dashboard/api";
import StatCard from "@components/StatCard";
import { useTranslation } from "react-i18next";
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
        label: t("ok"),
        value: data?.ok,
        tone: "ok",
        hint: "assets",
      },
      {
        key: "dueSoon",
        label: t("dueSoon"),
        value: data?.dueSoon,
        tone: "due",
        hint: "assets",
      },
      {
        key: "overdue",
        label: t("overdue"),
        value: data?.overdue,
        tone: "over",
        hint: "assets",
      },
      {
        key: "openReports",
        label: t("openReports"),
        value: data?.openReports,
        tone: "due",
        hint: "reports",
      },
    ],
    [t, data],
  );

  return (
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
  );
}
