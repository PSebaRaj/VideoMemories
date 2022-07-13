import { VideoModel, Video } from "./model";

export function createVideo({ owner }: { owner: string }) {
    return VideoModel.create({ owner });
}

export function findVideo(videoId: Video["videoId"]) {
    return VideoModel.findOne({ videoId });
}

// find videos that are published (to display on videos page)
export function findVideos() {
    return VideoModel.find({
        published: true,
    }).lean();
}
