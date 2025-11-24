import { api } from "@shared/api/baseApi";
import type { Report } from "@types";

export const reportsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getReports: build.query<Report[], void>({
      query: () => "/reports",
    }),
  }),
  overrideExisting: false,
});

export const { useGetReportsQuery } = reportsApi;
