export const ROUTES = {
  dashboard: "/",
  assets: "/assets",
  assetDetails: (id = ":id") => `/assets/${id}`,
  reports: "/reports",
} as const;
