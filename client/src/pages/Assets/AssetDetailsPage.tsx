import BackLink from "@components/BackLink";
import { useTranslation } from "react-i18next";

export default function AssetDetailsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mb-3">
        <BackLink label={t("assets.back")} />
      </div>

      <h2 className="text-xl font-semibold">{t("header.assetsTitle")}</h2>
      <p className="text-dim mt-1">{t("assets.detailStub")}</p>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div className="rounded-xl2 bg-card border border-card-edge p-4">
          <h3 className="font-medium mb-2">{t("assets.maintenanceLog")}</h3>
          <div className="text-dim text-sm">{t("assets.noEntries")}</div>
        </div>
        <div className="rounded-xl2 bg-card border border-card-edge p-4">
          <h3 className="font-medium mb-2">{t("assets.compliance")}</h3>
          <div className="text-dim text-sm">
            {t("assets.nextInspection")}
          </div>
        </div>
      </div>
    </div>
  );
}
