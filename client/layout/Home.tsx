import { AppShell } from "@mantine/core";
import React from "react";
import { VideosContextProvider } from "../context/videos";
import NavBar from "../components/NavBar/NavBar";
import RecentlyWatchedSideBar from "../components/RecentlyWatchedSideBar/RecentlyWatchedSideBar";

function HomePageLayout({ children }: { children: React.ReactNode }) {

    return (
        <VideosContextProvider>
            <AppShell
                padding="md"
                navbar={
					<RecentlyWatchedSideBar />
                }
                header={
					<NavBar />
                }
            >
                {children}
            </AppShell>
        </VideosContextProvider>
    );
}

export default HomePageLayout;
