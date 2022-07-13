import express from "express";
import { uploadVideoHandler } from "./controller";
import requireUser from "../../middleware/requireUser";

const router = express.Router();

router.post("/", requireUser, uploadVideoHandler);

export default router;