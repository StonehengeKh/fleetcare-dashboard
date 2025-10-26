import { Router } from "express";

export const complianceRouter = Router();

complianceRouter.get("/summary", (_req, res) => {
  res.json({
    ok: 12,
    dueSoon: 4,
    overdue: 2,
    openReports: 5
  });
});
