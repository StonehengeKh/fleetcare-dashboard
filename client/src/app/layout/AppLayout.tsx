import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@app/layout/Header";
import Footer from "@app/layout/Footer";
import Sidebar from "@app/layout/Sidebar";
import { ROUTES } from "@app/router/paths";
import { PageMain } from "@app/layout/PageMain";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <div className="min-h-dvh bg-app text-basecolor">
      <div className="hidden lg:grid lg:grid-cols-[240px_1fr] text-basecolor">
        <Sidebar />
        <PageMain meta={meta} className="p-6">
          {children}
        </PageMain>
      </div>

      <div className="lg:hidden min-h-dvh flex flex-col">
        <div className="p-4 flex items-center justify-between border-b border-card-edge">
          <button
            className="px-3 py-2 rounded-md border border-card-edge"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            ☰
          </button>
          <div className="font-semibold">FleetCare</div>
          <div className="w-9 h-9" />
        </div>

        {open && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setOpen(false)}
            />
            <div className="fixed inset-y-0 left-0 w-[80%] max-w-[280px] bg-card shadow-card border-r border-card-edge p-2 z-50 overflow-y-auto">
              <div className="flex justify-end p-2">
                <button
                  className="px-3 py-2 rounded-md border border-card-edge"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation"
                >
                  ✕
                </button>
              </div>
              <Sidebar />
            </div>
          </>
        )}

        <PageMain meta={meta} className="p-4 flex-1 min-h-0">
          {children}
        </PageMain>
      </div>
    </div>
  );
}
