import { Router } from "express";

import jobRoutes from "./jobRoutes";

const router = Router();

export default () => {
  router.use("/api/v1/job", jobRoutes);
  return router;
};
