import { SimpleGrid } from "@mantine/core";
// import Head from "next/head";
// import Image from "next/image";
import { ReactElement } from "react";
import VideoPreview from "../components/VideoPreview/VideoPreview";
import { useVideo } from "../context/videos";
import HomePageLayout from "../layout/Home";
import styles from "../styles/Home.module.css";

const Home = () => {
    const { videos } = useVideo();

    return (
        <div className={styles.container}>
            <SimpleGrid cols={3}>
                {(videos || []).map((video) => {
                    return <VideoPreview key={video.videoId} video={video} />;
                })}
            </SimpleGrid>
        </div>
    );
};
Home.getLayout = function (page: ReactElement) {
    return <HomePageLayout>{page}</HomePageLayout>;
};

export default Home;
