import { api } from "@shared/api/baseApi";
import type { ComplianceSummary } from "@types";

export const dashboardApi = api.injectEndpoints({
  endpoints: (build) => ({
    getComplianceSummary: build.query<ComplianceSummary, void>({
      query: () => "/compliance/summary",
    }),
  }),
});

export const { useGetComplianceSummaryQuery } = dashboardApi;
