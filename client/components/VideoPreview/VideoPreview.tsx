import { Card, Text } from "@mantine/core";
import Link from "next/link";
import { Video } from "../../types";

function VideoPreview({ video }: { video: Video }) {

	// conv to local time zone if need to, etc.
	let formatDate = new Date(video.updatedAt);


    return (
        <Link href={`/watch/${video.videoId}`} passHref>
            <Card
                shadow="sm"
                p="xl"
                component="a"
                href={`/watch/${video.videoId}`}
            >
                <Text weight={500} size="lg">
                    {video.title}
                </Text>

                <Text size="sm">{video.description}</Text>
                <Text size="sm">Last modified: {formatDate.toDateString()}</Text>
            </Card>
        </Link>
    );
}

export default VideoPreview;
