import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../../styles";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link
                        rel="apple-touch-icon"
                        href="/icons/icon-logo.png"
                    ></link>
                    <meta name="theme-color" content="#f7f7f3" />

                    <meta name="application-name" content="Outfit" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="default"
                    />
                    <meta name="apple-mobile-web-app-title" content="Outfit" />
                    <meta
                        name="description"
                        content="Best Outfit in the world"
                    />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta
                        name="msapplication-config"
                        content="/icons/browserconfig.xml"
                    />
                    <meta name="msapplication-TileColor" content="#2B5797" />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta name="theme-color" content="#000000" />

                    <link
                        rel="apple-touch-icon"
                        href="/icons/touch-icon-iphone.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/icons/touch-icon-ipad.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/icons/touch-icon-iphone-retina.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="167x167"
                        href="/icons/touch-icon-ipad-retina.png"
                    />

                    <link
                        href="splashscreens/iphone5_splash.png"
                        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
                        rel="apple-touch-startup-image"
                    />
                    <link
                        href="splashscreens/iphone6_splash.png"
                        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
                        rel="apple-touch-startup-image"
                    />
                    <link
                        href="splashscreens/iphoneplus_splash.png"
                        media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
                        rel="apple-touch-startup-image"
                    />
                    <link
                        href="splashscreens/iphonex_splash.png"
                        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
                        rel="apple-touch-startup-image"
                    />
                    <link
                        href="splashscreens/iphonexr_splash.png"
                        media="(device-width: 4B8r3B4p7yhRXuBWLqsQ546WR43cqQwrbXMDFnBi6vSJBeif8tPW85a7r7DM961Jvk4hdryZoByEp8GC8HzsqJpRN4FxGM9-image"
                    />
                    <link
                        href="splashscreens/iphonexsmax_splash.png"
                        media="(device-width: 4B8r3B4p7yhRXuBWLqsQ546WR43cqQwrbXMDFnBi6vSJBeif8tPW85a7r7DM961Jvk4hdryZoByEp8GC8HzsqJpRN4FxGM9-image"
                    />
                    <link
                        href="splashscreens/ipad_splash.png"
                        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
                        rel="apple-touch-startup-image"
                    />
                    <link
                        href="splashscreens/ipadpro1_splash.png"
                        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
                        rel="apple-touch-startup-image"
                    />
                    <link
                        href="splashscreens/ipadpro3_splash.png"
                        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
                        rel="apple-touch-startup-image"
                    />
                    <link
                        href="splashscreens/ipadpro2_splash.png"
                        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
                        rel="apple-touch-startup-image"
                    />

                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/icons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/icons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <link
                        rel="mask-icon"
                        href="/icons/safari-pinned-tab.svg"
                        color="#f7f7f3"
                    />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Inter:300,400,500,700,900&display=swap"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Prata&display=swap"
                        rel="stylesheet"
                    />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:url" content="https://yourdomain.com" />
                    <meta name="twitter:title" content="Outfit" />
                    <meta
                        name="twitter:description"
                        content="Best Outfit in the world"
                    />
                    <meta
                        name="twitter:image"
                        content="https://yourdomain.com/icons/android-chrome-192x192.png"
                    />
                    <meta name="twitter:creator" content="@DavidWShadow" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Outfit" />
                    <meta
                        property="og:description"
                        content="Best Outfit in the world"
                    />
                    <meta property="og:site_name" content="Outfit" />
                    <meta property="og:url" content="https://yourdomain.com" />
                    <meta
                        property="og:image"
                        content="https://yourdomain.com/icons/apple-touch-icon.png"
                    />
                </Head>
                <body>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
