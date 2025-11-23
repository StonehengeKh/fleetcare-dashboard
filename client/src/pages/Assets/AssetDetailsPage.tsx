import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import BackLink from "@components/BackLink";
import type { AssetStatus } from "@components/AssetCard";
import { AssetDetailsForm } from "@features/assets/AssetDetailsForm";
import { ComplianceItem, MaintenanceEntry } from "@types";
import {
  assetDetailsSchema,
  type AssetDetailsFormValues,
} from "@features/assets/formTypes";

const asset = {
  id: "TRC-102",
  name: "Tractor #102",
  status: "Due soon" as AssetStatus,
  nextInspection: "",
  notes: "",
};

export default function AssetDetailsPage() {
  const { t } = useTranslation();

  const maintenanceEntries: MaintenanceEntry[] = [];
  const complianceItems: ComplianceItem[] = [];
  const isEmptyLists =
    maintenanceEntries.length === 0 && complianceItems.length === 0;

  const form = useForm<AssetDetailsFormValues>({
    resolver: zodResolver(assetDetailsSchema),
    defaultValues: {
      name: asset.name,
      status: asset.status,
      nextInspection: asset.nextInspection,
      notes: asset.notes,
    },
  });

  const onSubmit = (values: AssetDetailsFormValues) => {
    console.log("Submitted asset", { id: asset.id, ...values });
  };

  return (
    <div>
      <div className="mb-3">
        <BackLink label={t("assets.back")} />
      </div>

      <h2 className="text-xl font-semibold">{t("header.assetsTitle")}</h2>

      {isEmptyLists && (
        <p className="text-dim mt-1">{t("assets.detailStub")}</p>
      )}

      <AssetDetailsForm form={form} onSubmit={onSubmit} />

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
