import { AssetStatus } from "@components/AssetCard";

export interface ComplianceSummary {
  ok: number;
  dueSoon: number;
  overdue: number;
  openReports: number;
}
export type AssetListItem = {
  id: string;
  name: string;
  status: AssetStatus;
};

export type AssetDetails = {
  id: string;
  name: string;
  status: AssetStatus;
  nextInspection?: string | null;
  notes?: string | null;
};
