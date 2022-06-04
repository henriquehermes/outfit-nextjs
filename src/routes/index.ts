import type { NextRouter } from "next/router";
import type {
    routes,
    RouteParams,
    RouteQueries,
    RouteData,
    UrlObject,
} from "./interface";

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

export function composeManualRoute<R extends routes>(
    route: R,
    {
        params,
        queries,
    }: {
        params?: RouteParams[Extract<keyof RouteParams, R>];
        queries?: RouteQueries[Extract<keyof RouteQueries, R>];
    },
): string {
    let href = route as string;
    if (params)
        Object.entries(params).forEach(
            ([key, value]) =>
                (href = href.replace(`[${key}]`, value.toString())),
        );
    const search = new URLSearchParams(queries).toString();
    href = search ? `${href}?${search}` : href;
    return href;
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
