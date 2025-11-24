import { api } from "@shared/api/baseApi";
import type { AssetListItem, AssetDetails } from "@types";

export const assetsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAssets: build.query<AssetListItem[], void>({
      query: () => "assets",
    }),

    getAssetById: build.query<AssetDetails, string>({
      query: (id) => `assets/${id}`,
    }),

    updateAsset: build.mutation<
      AssetDetails,
      { id: string; body: Partial<AssetDetails> }
    >({
      query: ({ id, body }) => ({
        url: `assets/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAssetsQuery,
  useGetAssetByIdQuery,
  useUpdateAssetMutation,
} = assetsApi;
