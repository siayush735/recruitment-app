// routes/applicationRoutes.js
import express from "express";
import {
  createApplication,
  getApplications,
  updateStatus,
  deleteApplication,
} from "../controllers/applicationController.js";

const router = express.Router();

router.post("/", createApplication);
router.get("/", getApplications);
router.put("/:id", updateStatus);
router.delete("/:id", deleteApplication);

export default router;