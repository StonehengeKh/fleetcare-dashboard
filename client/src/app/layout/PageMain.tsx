import React from "react";
import Header from "@app/layout/Header";
import Footer from "@app/layout/Footer";
import { ContentShell } from "@app/layout/ContentShell";
import { cn } from "@shared/cn";

export type PageMeta = {
  title: string;
  subtitle?: string;
};

type PageMainProps = {
  meta: PageMeta;
  children: React.ReactNode;
  className?: string;
};

export function PageMain({ meta, children, className }: PageMainProps) {
  return (
    <main className={cn("flex flex-col min-h-dvh", className)}>
      <Header title={meta.title} subtitle={meta.subtitle} />

      <ContentShell>{children}</ContentShell>

      <Footer />
    </main>
  );
}
