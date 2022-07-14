import express from "express";
import {
    findVideosHandler,
    updateVideoHandler,
    uploadVideoHandler,
    streamVideoHandler,
} from "./controller";
import requireUser from "../../middleware/requireUser";

const router = express.Router();

// Strategy:
// Enforce user login for posting / editing videos, but not comsuming them
// for convienience

router.post("/", requireUser, uploadVideoHandler);
router.get("/", findVideosHandler); // not forcing login to view videos for convinience
router.get("/:videoId", streamVideoHandler); // same as above
router.patch("/:videoId", requireUser, updateVideoHandler);

export default router;
