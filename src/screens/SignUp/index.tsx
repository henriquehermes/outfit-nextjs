import { useRouter } from "next/router";
import { FC, useState } from "react";

import { ContainerCustom } from "../../components/Container";
import EmailComponent from "../../components/Email";
import HeaderComponent from "../../components/Header";
import PasswordComponent from "../../components/Password";
import PasswordConfirmComponent from "../../components/Password/Confirm";

import ProfileComponent from "../../components/Profile";
import { routes } from "../../routes";

const EMAIL_ADDRESS = "EMAIL_ADDRESS";
const PASSWORD = "PASSWORD";
const CONFIRM_PASSWORD = "CONFIRM_PASSWORD";
const PROFILE = "PROFILE";

const SignUpPage: FC = () => {
    const router = useRouter();

    const [steps, setSteps] = useState(EMAIL_ADDRESS);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        inviteCode: "",
        avatar: "",
        password: "",
    });

    const createUser = () => {
        const formData = new FormData();

        formData.append("firstName", user.firstName);
        formData.append("lastName", user.lastName);
        formData.append("email", user.email);
        formData.append("inviteCode", user.inviteCode);
        formData.append("password", user.password);
        formData.append("avatar", user.avatar);

        console.log(formData);

        return true;
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
                        buttonAction={(usr: any) => {
                            setUser(usr);
                        }}
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
