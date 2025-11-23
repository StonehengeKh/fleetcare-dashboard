import BackLink from "@components/BackLink";
import { useTranslation } from "react-i18next";

export default function AssetDetailsPage() {
  const { t } = useTranslation();
  const maintenanceEntries: any[] = [];
  const complianceItems: any[] = [];
  const isEmpty = !maintenanceEntries.length && !complianceItems.length;

  return (
    <div>
      <div className="mb-3">
        <BackLink label={t("assets.back")} />
      </div>

      <h2 className="text-xl font-semibold">{t("header.assetsTitle")}</h2>
      {isEmpty && <p className="text-dim mt-1">{t("assets.detailStub")}</p>}

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
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
