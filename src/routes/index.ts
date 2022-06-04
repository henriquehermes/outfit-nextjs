import type { NextRouter } from "next/router";
import type { routes, RouteData, UrlObject } from "./interface";

export function composeRoute<R extends routes>(
    route: R,
    data?: RouteData<R>,
): UrlObject {
    return {
        pathname: route,
        query:
            typeof data === "object"
                ? Object.fromEntries(
                      Object.entries(data).filter(([, value]) => !!value),
                  )
                : data,
    };
}

export function parseRouteQuery<R extends routes>(
    router: NextRouter,
): RouteData<R> {
    return router.query as RouteData<R>;
}

export function manualRouter(href: string, replace?: boolean): void {
    if (typeof window !== "undefined") {
        if (replace) {
            window.location.replace(href);
        } else {
            window.location.href = href;
        }
    }
}

export * from "./interface";
