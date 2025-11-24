import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

import { AssetCard } from "@components/AssetCard";
import {
  assetFilterSchema,
  type AssetFilterValues,
  type AssetStatusFilter,
} from "@features/assets/filtersSchema";
import { AssetFilters } from "@features/assets/AssetFilters";
import { useGetAssetsQuery } from "@features/assets/api";
import type { AssetListItem } from "@types";

export default function AssetsPage() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: assets, isLoading, isError } = useGetAssetsQuery();

  const initialStatus =
    (searchParams.get("status") as AssetStatusFilter | null) ?? "ALL";

  const form = useForm<AssetFilterValues>({
    resolver: zodResolver(assetFilterSchema),
    defaultValues: {
      query: searchParams.get("q") ?? "",
      status: initialStatus,
    },
  });

  const values = useWatch({ control: form.control });

  useEffect(() => {
    const params = new URLSearchParams();
    if (values.query) params.set("q", values.query);
    if (values.status && values.status !== "ALL") {
      params.set("status", values.status);
    }
    setSearchParams(params, { replace: true });
  }, [values, setSearchParams]);

  const filteredAssets = useMemo(() => {
    const list: AssetListItem[] = assets ?? [];
    const q = values.query?.toLowerCase().trim();

    return list.filter((a) => {
      const matchesQuery =
        !q ||
        a.name.toLowerCase().includes(q) ||
        a.id.toLowerCase().includes(q);

      const matchesStatus =
        values.status === "ALL" || a.status === values.status;

      return matchesQuery && matchesStatus;
    });
  }, [assets, values]);

  const hasAssets = filteredAssets.length > 0;
  const hasLoadedList = !isLoading && !isError && (assets?.length ?? 0) > 0;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">{t("header.assetsTitle")}</h2>

      <AssetFilters form={form} />

      {isLoading && <p className="text-dim mb-4">{t("common.loading")}</p>}

      {isError && (
        <p className="text-over mb-4">{t("common.assetsLoadError")}</p>
      )}

      {!isLoading && !isError && !hasAssets && (
        <p className="text-dim mb-4">
          {hasLoadedList
            ? t("assets.noFilteredEntries")
            : t("assets.noEntries")}
        </p>
      )}

      {hasAssets && (
        <ul className="space-y-2">
          {filteredAssets.map((a) => (
            <AssetCard key={a.id} {...a} />
          ))}
        </ul>
      )}
    </div>
  );
}
