import { z } from "zod";

export const assetFilterSchema = z.object({
  query: z.string().max(100),
  status: z.enum(["ALL", "OK", "Due soon", "Overdue"]),
});

export type AssetFilterValues = z.infer<typeof assetFilterSchema>;
export type AssetStatusFilter = AssetFilterValues["status"];

export const assetDetailsSchema = z.object({
  name: z.string().min(1),
  status: z.enum(["OK", "Due soon", "Overdue"]),
  nextInspection: z
    .string()
    .optional()
    .refine(
      (val) => !val || !Number.isNaN(Date.parse(val)),
      "Invalid date",
    ),
  notes: z.string().max(1000).optional(),
});

export type AssetDetailsFormValues = z.infer<typeof assetDetailsSchema>;
