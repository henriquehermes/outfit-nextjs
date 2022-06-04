export enum routes {
    HOME = "/",
    NEW = "/new",
    NEW_ITEM = "/new-item",
    CREATE = "/create",
    CREATE_OUTFIT = "/create-outfit",
}
export type RouteParams = {};

export type RouteQueries = {};

export type UrlObject = {
    pathname: string;
    query?: string | Record<string, string> | null;
};

export type RouteData<R extends routes> = R extends keyof RouteParams
    ? R extends keyof RouteQueries
        ? RouteParams[R] & RouteQueries[R]
        : RouteParams[R]
    : R extends keyof RouteQueries
    ? RouteQueries[R]
    : Record<string, never>;
