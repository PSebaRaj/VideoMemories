import { VideoModel } from "./model";

export function createVideo({ owner }: { owner: string }) {
    return VideoModel.create({ owner });
}
