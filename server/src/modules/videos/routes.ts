import express from "express";
import {
    findVideosHandler,
    updateVideoHandler,
    uploadVideoHandler,
    streamVideoHandler,
} from "./controller";
import requireUser from "../../middleware/requireUser";

const router = express.Router();

router.post("/", requireUser, uploadVideoHandler);
router.get("/", findVideosHandler); // not forcing login to view videos
router.get("/:videoId", streamVideoHandler);
router.patch("/:videoId", requireUser, updateVideoHandler);

export default router;
