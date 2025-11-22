import { useTranslation } from "react-i18next";
import { AssetCard, AssetStatus } from "@components/AssetCard";

const mockAssets: { id: string; name: string; status: AssetStatus }[] = [
  { id: "FLT-001", name: "Forklift #1", status: "OK" },
  { id: "TRC-102", name: "Tractor #102", status: "Due soon" },
  { id: "LOD-207", name: "Loader #207", status: "Overdue" },
];

export default function AssetsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{t("header.assetsTitle")}</h2>
      <p className="text-dim mb-4">{t("assets.noEntries")}</p>

      <ul className="space-y-2">
        {mockAssets.map((a) => (
          <AssetCard key={a.id} {...a} />
        ))}
      </ul>
    </div>
  );
}
