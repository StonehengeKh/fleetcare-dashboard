import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getNavItems } from "@app/router/nav";
import { cn } from "@shared/cn";

export default function Sidebar() {
  const { t } = useTranslation();
  const NAV_ITEMS = getNavItems(t);

  return (
    <aside className="bg-card shadow-soft border-r border-card-edge">
      <div className="p-4 text-xl font-semibold">
        {t("app.name", "FleetCare")}
      </div>
      <nav className="p-2 space-y-1">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.key}
            to={item.to}
            end={!!item.end}
            className={({ isActive }) =>
              cn(
                "block rounded-md px-3 py-2 transition-colors text-basecolor",
                "hover:bg-[var(--nav-hover-bg)] hover:no-underline",
                isActive &&
                  "bg-[var(--nav-active-bg)] text-[var(--nav-active-text)] font-medium border-l-2 border-[var(--due)]",
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
