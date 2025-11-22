import React from "react";

type ContentShellProps = {
  children: React.ReactNode;
};

export function ContentShell({ children }: ContentShellProps) {
  return (
    <div className="rounded-2xl bg-card shadow-card p-4 relative overflow-hidden flex-1 min-h-0">
      <div className="absolute inset-0 bg-soft-gradient pointer-events-none" />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
