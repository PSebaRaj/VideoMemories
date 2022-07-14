import { useRouter } from "next/router";
import NavBar from "../../components/NavBar/NavBar";

function WatchVideoPage() {
    const { query } = useRouter();

    // TODO: add title and description to page
    // TODO: maybe even similar videos???

    return (
        <div>
			<NavBar />

            <video
                src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/videos/${query.videoId}`}
                width="100%"
                height="auto"
                controls
                autoPlay
                id="video-player"
            />
        </div>
    );
}

export default WatchVideoPage;
