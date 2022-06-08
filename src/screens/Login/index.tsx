import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useCookies } from "react-cookie";

import { ContainerCustom } from "../../components/Container";
import EmailComponent from "../../components/Email";
import HeaderComponent from "../../components/Header";
import PasswordComponent from "../../components/Password";
import api from "../../config/api";
import {
    useApplicationContext,
    withApplicationContext,
} from "../../contexts/application";
import { routes } from "../../routes";
import { postLogin } from "../../services/user";

const EMAIL_ADDRESS = "EMAIL_ADDRESS";
const PASSWORD = "PASSWORD";

const LoginPage: FC = () => {
    const toast = useToast();
    const router = useRouter();
    const [_, setCookie] = useCookies(["token"]);

    const [isLoading, setIsLoading] = useState(false);
    const [steps, setSteps] = useState(EMAIL_ADDRESS);
    const [user, setUser] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleSubmit = async (type: string, password: string) => {
        setIsLoading(true);

        const response = await postLogin({
            email: user.email,
            password,
            remember: user.remember,
        });

        if (response?.status === 200) {
            const dateToConvertInSeconds = new Date(response.data.expiresAt);

            setCookie("token", JSON.stringify(response.data.token), {
                path: "/",
                maxAge: dateToConvertInSeconds.getTime() / 1000,
                sameSite: true,
            });

            api.defaults.headers.common["x-access-token"] = response.data.token;

            localStorage.setItem("userID", response.data.user._id);

            router.push(routes.HOME);
        } else {
            toast({
                title: "Error",
                description: response?.response?.data?.message,
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top",
            });
        }
        setIsLoading(false);
    };

    const handleFlow = (type: string, value: string) => {
        setUser({ ...user, [type]: value });

        if (steps === EMAIL_ADDRESS) return setSteps(PASSWORD);
    };

    const handleSteps = () => {
        switch (steps) {
            case EMAIL_ADDRESS:
                return (
                    <EmailComponent
                        value={user.email}
                        buttonAction={handleFlow}
                    />
                );
            case PASSWORD:
                return (
                    <PasswordComponent
                        value={user.password}
                        description="To continue, first verify it’s you"
                        buttonAction={handleSubmit}
                        isLoading={isLoading}
                    />
                );
            default:
                return (
                    <EmailComponent
                        value={user.email}
                        buttonAction={() => setSteps(PASSWORD)}
                    />
                );
        }
    };

    return (
        <ContainerCustom>
            <HeaderComponent
                buttonAction={() => {
                    if (steps === EMAIL_ADDRESS) router.push(routes.HOME);
                    if (steps === PASSWORD) setSteps(EMAIL_ADDRESS);
                }}
            />
            {handleSteps()}
        </ContainerCustom>
    );
};

export default withApplicationContext(LoginPage);
