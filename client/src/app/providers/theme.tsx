import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeCtx = { theme: Theme; toggle: () => void; setTheme: (t: Theme) => void };

const Ctx = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const initial: Theme =
    (localStorage.getItem("theme") as Theme) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const [theme, setTheme] = useState<Theme>(initial);

  useEffect(() => {
    const el = document.documentElement;
    el.classList.remove("light", "dark");
    el.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return <Ctx.Provider value={{ theme, toggle, setTheme }}>{children}</Ctx.Provider>;
}

export function useTheme() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
