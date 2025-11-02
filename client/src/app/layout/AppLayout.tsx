import { useLocation } from "react-router-dom";
import Header from "@app/layout/Header";
import Footer from "@app/layout/Footer";
import Sidebar from "@app/layout/Sidebar";
import { ROUTES } from "@app/router/paths";

type AppLayoutProps = {
  children: React.ReactNode;
};

function usePageMeta(pathname: string) {
  if (pathname === ROUTES.dashboard)
    return {
      title: "Dashboard",
      subtitle: "Compliance & maintenance overview",
    };
  if (pathname.startsWith(ROUTES.assets))
    return {
      title: "Assets",
      subtitle: "Inventory, status and compliance deadlines",
    };
  if (pathname.startsWith(ROUTES.reports))
    return { title: "Reports", subtitle: "Maintenance and incident reports" };
  return { title: "FleetCare", subtitle: undefined };
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { pathname } = useLocation();
  const meta = usePageMeta(pathname);

  return (
    <div className="min-h-dvh grid grid-cols-[240px_1fr]">
      <Sidebar />

      <main className="p-6 flex flex-col min-h-0">
        <Header title={meta.title} subtitle={meta.subtitle} />

        <div className="relative rounded-2xl bg-card shadow-card p-4 overflow-hidden flex-1 min-h-0">
          <div className="absolute inset-0 bg-soft-gradient pointer-events-none" />
          {children}
        </div>

        <Footer />
      </main>
    </div>
  );
}
