import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES } from "@app/router/paths";

const mockAssets = [
  { id: "FLT-001", name: "Forklift #1", status: "OK" },
  { id: "TRC-102", name: "Tractor #102", status: "Due soon" },
  { id: "LOD-207", name: "Loader #207", status: "Overdue" },
];

export default function AssetsPage() {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{t("header.assetsTitle")}</h2>
      <p className="text-white/60 mb-4">{t("assets.noEntries")}</p>

      <ul className="space-y-2">
        {mockAssets.map((a) => (
          <li
            key={a.id}
            className="rounded-xl2 bg-card/80 border border-card-edge p-3 hover:bg-card-edge"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{a.name}</div>
                <div className="text-white/50 text-sm">{a.id}</div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={
                    "text-sm " +
                    (a.status === "OK"
                      ? "text-ok"
                      : a.status === "Due soon"
                        ? "text-due"
                        : "text-over")
                  }
                >
                  {a.status}
                </span>
                <Link
                  to={ROUTES.assetDetails(a.id)}
                  className="px-3 py-1 rounded-md bg-card-edge hover:opacity-90"
                >
                  {t("assets.open")}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
