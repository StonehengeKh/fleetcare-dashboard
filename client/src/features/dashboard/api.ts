import { api } from "@shared/api/baseApi";

export interface ComplianceSummary {
  ok: number;
  dueSoon: number;
  overdue: number;
  openReports: number;
}

export const dashboardApi = api.injectEndpoints({
  endpoints: (build) => ({
    getComplianceSummary: build.query<ComplianceSummary, void>({
      query: () => "/dashboard/summary",
    }),
  }),
  overrideExisting: false,
});

export const { useGetComplianceSummaryQuery } = dashboardApi;
