export type StatTone = "ok" | "due" | "over";

export interface StatCard {
  label: string;
  value?: number;
  hint?: string;
  tone: StatTone;
  loading?: boolean;
  error?: boolean;
}

export type Report = {
  id: string;
  title: string;
  date: string;
};

export type ComplianceItem = {
  id: string;
  type: string;
  dueDate: string;
};

export type MaintenanceEntry = {
  id: string;
  date: string;
  description: string;
};
