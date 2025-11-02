import { ROUTES } from "./paths";
import type { TFunction } from "i18next";

export type BuiltNavItem = {
  key: "dashboard" | "assets" | "reports";
  to: string;
  label: string;
  end?: boolean;
};

export const getNavItems = (t: TFunction): ReadonlyArray<BuiltNavItem> => [
  {
    key: "dashboard",
    to: ROUTES.dashboard,
    label: t("nav.dashboard"),
    end: true,
  },
  { key: "assets", to: ROUTES.assets, label: t("nav.assets") },
  { key: "reports", to: ROUTES.reports, label: t("nav.reports") },
];
