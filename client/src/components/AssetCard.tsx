import { useTranslation } from "react-i18next";
import { ROUTES } from "@app/router/paths";
import { cn } from "@shared/cn";
import { LinkButton } from "@components/LinkButton";

export type AssetStatus = "OK" | "Due soon" | "Overdue";

export interface AssetCardProps {
  id: string;
  name: string;
  status: AssetStatus;
}

export function AssetCard({ id, name, status }: AssetCardProps) {
  const { t } = useTranslation();

  const statusClass =
    status === "OK"
      ? "text-ok"
      : status === "Due soon"
        ? "text-due"
        : "text-over";

  return (
    <li
      className="rounded-xl2 p-3 shadow-soft
             bg-[var(--asset-card-bg)]
             border border-[var(--asset-card-border)]
             hover:bg-[var(--asset-card-hover-bg)]
             transition-colors"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-dim text-sm">{id}</div>
        </div>
        <div className="flex items-center gap-3">
          <span className={cn("text-sm", statusClass)}>{status}</span>

          <LinkButton to={ROUTES.assetDetails(id)}>
            {t("assets.open")}
          </LinkButton>
        </div>
      </div>
    </li>
  );
}
