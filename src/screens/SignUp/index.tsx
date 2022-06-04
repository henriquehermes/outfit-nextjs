import { useRouter } from "next/router";
import { FC, useState } from "react";

import { ContainerCustom } from "../../components/Container";
import EmailComponent from "../../components/Email";
import HeaderComponent from "../../components/Header";
import PasswordComponent from "../../components/Password";
import ProfileComponent from "../../components/Profile";
import { routes } from "../../routes";

const EMAIL_ADDRESS = "EMAIL_ADDRESS";
const PASSWORD = "PASSWORD";
const CONFIRM_PASSWORD = "CONFIRM_PASSWORD";
const PROFILE = "PROFILE";

const SignUpPage: FC = () => {
    const [steps, setSteps] = useState(PROFILE);
    const router = useRouter();

    const handleSteps = () => {
        switch (steps) {
            case EMAIL_ADDRESS:
                return (
                    <EmailComponent buttonAction={() => setSteps(PASSWORD)} />
                );
            case PASSWORD:
                return (
                    <PasswordComponent
                        title="Enter your password"
                        description="Use 8 or more characters with a mix of letters, numbers & symbols"
                        buttonAction={() => setSteps(CONFIRM_PASSWORD)}
                    />
                );
            case CONFIRM_PASSWORD:
                return (
                    <PasswordComponent
                        title="Confirm your password"
                        description="Use 8 or more characters with a mix of letters, numbers & symbols"
                        buttonAction={() => setSteps(PROFILE)}
                    />
                );

            case PROFILE:
                return <ProfileComponent />;
            default:
                return (
                    <EmailComponent buttonAction={() => setSteps(PASSWORD)} />
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
