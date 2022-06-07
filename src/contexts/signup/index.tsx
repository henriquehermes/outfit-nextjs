import {
    ComponentType,
    createContext,
    FC,
    ReactElement,
    useContext,
} from "react";

import { ContextType, Props } from "./interface";

const SignUpContext = createContext<ContextType>({
    email: "",
    password: "",
    confirm_password: "",
});

const SignUpContextProvider: FC<Props> = ({ children }): ReactElement => {
    return (
        <SignUpContext.Provider
            value={{
                email: "",
                password: "",
                confirm_password: "",
            }}
        >
            {children}
        </SignUpContext.Provider>
    );
};

export function withSignUpContext<T>(Component: ComponentType<T>): FC<T> {
    const withProductsContextFC: FC<T> = (props: T) => (
        <SignUpContextProvider>
            <Component {...props} />
        </SignUpContextProvider>
    );
    return withProductsContextFC;
}

export const useSignUpContext = (): ContextType => useContext(SignUpContext);
