import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../user/model";
import { customAlphabet } from "nanoid";
const xid = require("xid-js");

// limit video id to these characters
//const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 10);

export class Video {
    @prop()
    public title: string;

    @prop()
    public description: string;

    @prop({ enum: ["mp4"] })
    public extension: string;

    @prop({ required: true, ref: () => User })
    public owner: Ref<User>;

    @prop({ unique: true, default: () => xid.next() })
    public videoId: string;

    @prop({ default: false })
    public published: boolean;
}

export const VideoModel = getModelForClass(Video, {
    schemaOptions: {
        timestamps: true,
    },
});
