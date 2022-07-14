import { Anchor, Box, Header, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useMe } from "../../context/me";
import React from "react";
import UploadVideo from "../UploadVideo/UploadVideo";
import { VideosContextProvider } from "../../context/videos";
import ColorSchemeToggler from "../ColorSchemeToggler/ColorSchemeToggler";

function NavBar() {
    const { user, refetch } = useMe();

    return (
        <VideosContextProvider>
            <Header height={60} p="xs">
                <Box sx={() => ({ display: "flex" })}>
                    <Box sx={() => ({ flex: "1" })}>
                        <Link href="/" passHref>
                            <a>
                                <Image
                                    src="/from_midjourney.png"
                                    alt="logo"
                                    width="40px"
                                    height="40px"
                                />
                            </a>
                        </Link>
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
							<Anchor ml="md" mr="lr">
							<ColorSchemeToggler />
							</Anchor>
                        </>
                    )}

                    {user && (
                        <>
                            <Anchor ml="lg" mr="lr">
                                <UploadVideo />
                            </Anchor>
                            <Anchor ml="md" mr="lr">
                                <ColorSchemeToggler />
                            </Anchor>
                        </>
                    )}
                </Box>
            </Header>
        </VideosContextProvider>
    );
}

export default NavBar;
