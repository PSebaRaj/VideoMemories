import { AppShell, Navbar } from "@mantine/core";
import React from "react";
import { VideosContextProvider } from "../context/videos";
import NavBar from "../components/NavBar/NavBar";

function HomePageLayout({ children }: { children: React.ReactNode }) {

    return (
        <VideosContextProvider>
            <AppShell
                padding="md"
                navbar={
                    // define within another component
                    <Navbar width={{ base: 200 }} height={500} p="xs">
                        Side items
                    </Navbar>
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
