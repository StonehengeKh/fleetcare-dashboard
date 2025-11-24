import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";

import BackLink from "@components/BackLink";
import { AssetDetailsForm } from "@features/assets/AssetDetailsForm";
import { ComplianceItem, MaintenanceEntry } from "@types";
import {
  assetDetailsSchema,
  type AssetDetailsFormValues,
} from "@features/assets/formTypes";
import {
  useGetAssetByIdQuery,
  useUpdateAssetMutation,
} from "@features/assets/api";

export default function AssetDetailsPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const {
    data: asset,
    isLoading,
    isError,
  } = useGetAssetByIdQuery(id ?? "", {
    skip: !id,
  });

  const [updateAsset, { isLoading: isSaving }] = useUpdateAssetMutation();

  const maintenanceEntries: MaintenanceEntry[] = [];
  const complianceItems: ComplianceItem[] = [];
  const isEmptyLists =
    maintenanceEntries.length === 0 && complianceItems.length === 0;

  const form = useForm<AssetDetailsFormValues>({
    resolver: zodResolver(assetDetailsSchema),
    defaultValues: {
      name: asset?.name ?? "",
      status: asset?.status ?? "OK",
      nextInspection: asset?.nextInspection ?? "",
      notes: asset?.notes ?? "",
    },
    values: asset
      ? {
          name: asset.name,
          status: asset.status,
          nextInspection: asset.nextInspection ?? "",
          notes: asset.notes ?? "",
        }
      : undefined,
  });

  const onSubmit = async (values: AssetDetailsFormValues) => {
    if (!id) return;
    try {
      await updateAsset({ id, body: values }).unwrap();
      console.log("Submitted asset", { id, ...values });
    } catch (error) {
      console.error("Failed to update asset", error);
    }
  };

  if (!id) {
    return (
      <div>
        <BackLink label={t("assets.back")} />
        <p className="text-over mt-2">{t("common.invalidAssetId")}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <BackLink label={t("assets.back")} />
        <p className="text-dim mt-2">{t("common.loading")}</p>
      </div>
    );
  }

  if (isError || !asset) {
    return (
      <div>
        <BackLink label={t("assets.back")} />
        <p className="text-over mt-2">{t("common.assetDetailsLoadError")}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-3">
        <BackLink label={t("assets.back")} />
      </div>

      <h2 className="text-xl font-semibold">{asset.name}</h2>

      {isEmptyLists && (
        <p className="text-dim mt-1">{t("assets.detailStub")}</p>
      )}

      <AssetDetailsForm form={form} onSubmit={onSubmit} isSaving={isSaving} />

      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        <div className="rounded-xl2 bg-card border border-card-edge p-4">
          <h3 className="font-medium mb-2">{t("assets.maintenanceLog")}</h3>
          {!maintenanceEntries.length ? (
            <div className="text-dim text-sm">{t("assets.noEntries")}</div>
          ) : (
            <div className="text-sm"></div>
          )}
        </div>

        <div className="rounded-xl2 bg-card border border-card-edge p-4">
          <h3 className="font-medium mb-2">{t("assets.compliance")}</h3>
          {!complianceItems.length ? (
            <div className="text-dim text-sm">{t("assets.nextInspection")}</div>
          ) : (
            <div className="text-sm"></div>
          )}
        </div>
      </div>
    </div>
  );
}
