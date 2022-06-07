import type { ReactElement } from "react";
import { createContext } from "react";

import type { UrlObject } from "../../routes/interface";

export type PrivateRouteOptions = {
    loadingComponent?: ReactElement;
    pathFallback?: string | UrlObject;
};

export type TPrivateRouteContext = {
    isLoggedIn: boolean;
};

export const PrivateRouteContext = createContext<TPrivateRouteContext>({
    isLoggedIn: false,
});
