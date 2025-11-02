import { app } from "./app";

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`FleetCare API running on http://localhost:${PORT}`);
});
