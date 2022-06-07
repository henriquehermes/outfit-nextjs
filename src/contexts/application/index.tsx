import {
    ComponentType,
    createContext,
    FC,
    ReactElement,
    useContext,
    useState,
} from "react";

import { ContextType, Props } from "./interface";

const ApplicationContext = createContext<ContextType>({
    userData: null,
});

const ApplicationContextProvider: FC<Props> = ({ children }): ReactElement => {
    const [userData, setUserData] = useState();

    return (
        <ApplicationContext.Provider
            value={{
                setUserData,
                userData,
            }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};

export function withApplicationContext<T>(Component: ComponentType<T>): FC<T> {
    const withProductsContextFC: FC<T> = (props: T) => (
        <ApplicationContextProvider>
            <Component {...props} />
        </ApplicationContextProvider>
    );
    return withProductsContextFC;
}

export const useApplicationContext = (): ContextType =>
    useContext(ApplicationContext);
