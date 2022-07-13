import express from "express";
import { processRequestBody } from "zod-express-middleware";
import requireUser from "../../middleware/requireUser";
import { registerUserHandler } from "./controller";
import { registerUserSchema } from "./schema";

const router = express.Router();
// routed @ /api/users

router.get("/", requireUser, (req, res) => {
    return res.send(res.locals.user);
});

router.post(
    "/",
    processRequestBody(registerUserSchema.body),
    registerUserHandler
);

export default router;
