import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useCookies } from "react-cookie";

import { ContainerCustom } from "../../components/Container";
import EmailComponent from "../../components/Email";
import HeaderComponent from "../../components/Header";
import PasswordComponent from "../../components/Password";
import PasswordConfirmComponent from "../../components/Password/Confirm";

import ProfileComponent from "../../components/Profile";
import { routes } from "../../routes";
import { postUser } from "../../services/user";

const EMAIL_ADDRESS = "EMAIL_ADDRESS";
const PASSWORD = "PASSWORD";
const CONFIRM_PASSWORD = "CONFIRM_PASSWORD";
const PROFILE = "PROFILE";

const SignUpPage: FC = () => {
    const router = useRouter();
    const toast = useToast();
    const [_, setCookie] = useCookies(["token"]);

    const [steps, setSteps] = useState(EMAIL_ADDRESS);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        inviteCode: "",
        image: {
            key: "",
            originalname: "",
            location: "",
        },
        password: "",
    });

    const createUser = async (usr: any) => {
        const formData = new FormData();

        formData.append("firstName", usr.firstName);
        formData.append("lastName", usr.lastName);
        formData.append("email", user.email);
        formData.append("inviteCode", usr.inviteCode);
        formData.append("password", user.password);
        formData.append("image", usr.image);

        const response = await postUser(formData);

        if (response?.status === 200) {
            const dateToConvertInSeconds = new Date(response.data.expiresAt);

            setCookie("token", JSON.stringify(response.data.token), {
                path: "/",
                maxAge: dateToConvertInSeconds.getTime() / 1000,
                sameSite: true,
            });

            toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 9000,
                isClosable: true,
            });

            router.push(routes.HOME);
        } else {
            setUser({ ...user, ...usr });

            toast({
                title: "Error.",
                description: response?.response?.data?.message,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
    };

    const handleFlow = (type: string, value: string) => {
        setUser({ ...user, [type]: value });

        if (steps === EMAIL_ADDRESS) return setSteps(PASSWORD);
        if (steps === PASSWORD) return setSteps(CONFIRM_PASSWORD);
        if (steps === CONFIRM_PASSWORD) return setSteps(PROFILE);
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
                        buttonAction={handleFlow}
                    />
                );
            case CONFIRM_PASSWORD:
                return (
                    <PasswordConfirmComponent
                        password={user.password}
                        buttonAction={() => setSteps(PROFILE)}
                    />
                );

            case PROFILE:
                return (
                    <ProfileComponent
                        user={user}
                        handleCreateUser={createUser}
                    />
                );
            default:
                return (
                    <EmailComponent
                        value={user.email}
                        buttonAction={handleFlow}
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
                    if (steps === CONFIRM_PASSWORD) setSteps(PASSWORD);
                    if (steps === PROFILE) setSteps(CONFIRM_PASSWORD);
                }}
            />
            {handleSteps()}
        </ContainerCustom>
    );
};

export default SignUpPage;
