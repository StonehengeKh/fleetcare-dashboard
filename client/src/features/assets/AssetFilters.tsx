import type { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TextField } from "@components/form/TextField";
import { SelectField } from "@components/form/SelectField";
import type { AssetFilterValues } from "@features/assets/filtersSchema";

type AssetFiltersProps = {
  form: Pick<UseFormReturn<AssetFilterValues>, "register">;
};

export function AssetFilters({ form }: AssetFiltersProps) {
  const { t } = useTranslation();
  const { register } = form;

  return (
    <form className="mb-4 grid gap-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
      <TextField
        label={t("assets.filters.searchLabel")}
        placeholder={t(
          "assets.filters.searchPlaceholder",
          "Search by name or ID…",
        )}
        {...register("query")}
      />

      <SelectField
        label={t("assets.filters.statusLabel")}
        {...register("status")}
      >
        <option value="ALL">{t("assets.filters.statusAll")}</option>
        <option value="OK">{t("dashboard.ok")}</option>
        <option value="Due soon">{t("dashboard.dueSoon")}</option>
        <option value="Overdue">{t("dashboard.overdue")}</option>
      </SelectField>
    </form>
  );
}
