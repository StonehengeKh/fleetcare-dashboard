import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES } from "./paths";

const DashboardPage = lazy(() => import("@pages/Dashboard/DashboardPage"));
const AssetsPage = lazy(() => import("@pages/Assets/AssetsPage"));
const AssetDetailsPage = lazy(() => import("@pages/Assets/AssetDetailsPage"));
const ReportsPage = lazy(() => import("@pages/Reports/ReportsPage"));
const NotFoundPage = lazy(() => import("@pages/NotFoundPage"));

export function AppRoutes() {
  const { t } = useTranslation();
  const element = useRoutes([
    { path: ROUTES.dashboard, element: <DashboardPage /> },
    {
      path: ROUTES.assets,
      children: [
        { index: true, element: <AssetsPage /> },
        { path: ROUTES.assetDetails(), element: <AssetDetailsPage /> },
      ],
    },
    { path: ROUTES.reports, element: <ReportsPage /> },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return (
    <Suspense
      fallback={<div className="text-dim p-4">{t("common.loading")}</div>}
    >
      {element}
    </Suspense>
  );
}
