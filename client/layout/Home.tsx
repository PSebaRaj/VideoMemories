import { Anchor, AppShell, Box, Header, Navbar } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useMe } from "../context/me";
import React from "react";
import UploadVideo from "../components/UploadVideo/UploadVideo";
import { VideosContextProvider } from "../context/videos";

function HomePageLayout({ children }: { children: React.ReactNode }) {
    const { user, refetch } = useMe();

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
                    // define within another component
                    <Header height={60} p="xs">
                        <Box sx={() => ({ display: "flex" })}>
                            <Box sx={() => ({ flex: "1" })}>
                                <Image
                                    src="/logo.png"
                                    alt="logo"
                                    width="100px"
                                    height="40px"
                                />
                            </Box>

                            {!user && (
                                <>
                                    <Link href="/login" passHref>
                                        <Anchor ml="lg" mr="lr">
                                            Login
                                        </Anchor>
                                    </Link>
                                    <Link href="/register" passHref>
                                        <Anchor ml="lg" mr="lr">
                                            Register
                                        </Anchor>
                                    </Link>
                                </>
                            )}

                            {user && <UploadVideo />}
                        </Box>
                    </Header>
                }
            >
                {children}
            </AppShell>
        </VideosContextProvider>
    );
}

export default HomePageLayout;
