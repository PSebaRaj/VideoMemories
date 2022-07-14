import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { NextPage } from "next";
import { ReactElement, ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MeContextProvider } from "../context/me";

const queryClient = new QueryClient();

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppProps) {
    const getLayout = Component.getLayout || ((page) => page);
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    return (
        <>
            <Head>
                <title>Video Memories</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        colorScheme,
                    }}
                >
                    <NotificationsProvider>
                        <QueryClientProvider client={queryClient}>
                            <MeContextProvider>
                                {getLayout(
                                    <main>
                                        <Component {...pageProps} />
                                    </main>
                                )}
                            </MeContextProvider>
                        </QueryClientProvider>
                    </NotificationsProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    );
}

//App.getServerSideProps = function() {

//}

export default MyApp;
