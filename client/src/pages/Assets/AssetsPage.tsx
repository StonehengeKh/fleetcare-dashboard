import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

import { AssetCard, type AssetStatus } from "@components/AssetCard";
import {
  assetFilterSchema,
  type AssetFilterValues,
  type AssetStatusFilter,
} from "@features/assets/filtersSchema";
import { AssetFilters } from "@features/assets/AssetFilters";

const mockAssets: { id: string; name: string; status: AssetStatus }[] = [
  { id: "FLT-001", name: "Forklift #1", status: "OK" },
  { id: "TRC-102", name: "Tractor #102", status: "Due soon" },
  { id: "LOD-207", name: "Loader #207", status: "Overdue" },
];

export default function AssetsPage() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

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
    const q = values.query?.toLowerCase().trim();
    return mockAssets.filter((a) => {
      const matchesQuery =
        !q ||
        a.name.toLowerCase().includes(q) ||
        a.id.toLowerCase().includes(q);
      const matchesStatus =
        values.status === "ALL" || a.status === values.status;
      return matchesQuery && matchesStatus;
    });
  }, [values]);

  const hasAssets = filteredAssets.length > 0;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">{t("header.assetsTitle")}</h2>

      <AssetFilters form={form} />

      {!hasAssets && (
        <p className="text-dim mb-4">{t("assets.noFilteredEntries")}</p>
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
