import express from "express";
import { processRequestBody } from "zod-express-middleware";
import { loginSchema } from "./schema";
import { loginHandler } from "./controller";

const router = express.Router();

router.post("/", processRequestBody(loginSchema.body), loginHandler);

export default router;
