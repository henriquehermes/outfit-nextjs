import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../../styles";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Outfit</title>
                <meta
                    id="viewport"
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
                />
            </Head>
            <ChakraProvider theme={theme}>
                <CSSReset />
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp;
