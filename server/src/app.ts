import express from "express";
import cors from "cors";
import { complianceRouter } from "./routes/compliance.route.js";
import { errorHandler } from "./middlewares/errorHandler.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/compliance", complianceRouter);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use(errorHandler);

app.use((_req, res) => {
  res.status(404).json({
    error: { message: "Not found", code: "NOT_FOUND" }
  });
});
