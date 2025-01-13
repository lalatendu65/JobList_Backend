import express from "express";
import { validateRequestBody } from "../middlewares/validateBody";

import {
  createNewJob,
  getAllJob,
  getJobById,
  updatedJobById,
  deleteJobById,
} from "../controller/jobposting.controller";

const router = express.Router();

router.post("/createJob", validateRequestBody, createNewJob);
router.get("/", getAllJob);
router.get("/:id", getJobById);
router.put("/updateJob/:id", validateRequestBody, updatedJobById);
router.delete("/delete/:id", deleteJobById);

export default router;
