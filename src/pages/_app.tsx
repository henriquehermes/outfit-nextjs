import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../../styles";
import { CookiesProvider, useCookies } from "react-cookie";
import { useEffect } from "react";
import api from "../config/api";

function MyApp({ Component, pageProps }: AppProps) {
    const [cookie] = useCookies(["token"]);

    useEffect(() => {
        if (cookie["token"]) {
            api.defaults.headers.common["x-access-token"] = cookie["token"];
        }
    }, [cookie]);

    return (
        <>
            <Head>
                <title>Outfit</title>
                <meta
                    id="viewport"
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
            </Head>
            <CookiesProvider>
                <ChakraProvider theme={theme}>
                    <CSSReset />
                    <Component {...pageProps} />
                </ChakraProvider>
            </CookiesProvider>
        </>
    );
}

export default MyApp;
