import type { NextPage } from "next";

import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { manualRouter, routes } from "../../routes";
import { useCookies } from "react-cookie";
import { PrivateRouteContext, PrivateRouteOptions } from "./interface";

export default function PrivateRoute<T>(
    Component: NextPage<T>,
    options: PrivateRouteOptions = {},
): NextPage<T> {
    const PrivateRouteComponent: NextPage<T> = (props) => {
        const [cookies] = useCookies(["token"]);

        const [loading, setLoading] = useState(true);
        const isLoggedIn = useRef(!!cookies["token"]);

        const router = useRouter();
        const pathname = router.pathname;
        const asPath = router.asPath;
        const query = router.query;

        useEffect(() => {
            setLoading(true);
            isLoggedIn.current = !!cookies["token"];
        }, [cookies, pathname, query]);

        useEffect(() => {
            if (isLoggedIn.current) {
                setLoading(false);
            } else {
                if (!options.pathFallback) {
                    manualRouter(routes.HOME, true);
                } else if (typeof options.pathFallback === "string") {
                    manualRouter(options.pathFallback, true);
                } else {
                    router.replace(options.pathFallback);
                }
            }
        }, [cookies, router, pathname, asPath, query]);

        if (loading) return options.loadingComponent ?? <div />;
        return (
            <PrivateRouteContext.Provider
                value={{ isLoggedIn: isLoggedIn.current }}
            >
                <Component {...props} />
            </PrivateRouteContext.Provider>
        );
    };
    PrivateRouteComponent.displayName = `PrivateRoute(${Component.displayName})`;
    return PrivateRouteComponent;
}

export function usePrivateRouteContext(): any {
    return useContext(PrivateRouteContext);
}
