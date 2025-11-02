export type StatTone = "ok" | "due" | "over";

export interface StatCardProps {
  label: string;
  value?: number;
  hint?: string;
  tone: StatTone;
  loading?: boolean;
  error?: boolean;
}

export type NavItem = {
  key: string;
  label: string;
  to: string;
  end?: boolean;
};

export interface HeaderProps {
  title: string;
  subtitle?: string;
  rightSlot?: React.ReactNode;
}
