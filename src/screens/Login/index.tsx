import { useRouter } from "next/router";
import { FC, useState } from "react";

import { ContainerCustom } from "../../components/Container";
import EmailComponent from "../../components/Email";
import HeaderComponent from "../../components/Header";
import PasswordComponent from "../../components/Password";
import { routes } from "../../routes";

const EMAIL_ADDRESS = "EMAIL_ADDRESS";
const PASSWORD = "PASSWORD";

const LoginPage: FC = () => {
    const [steps, setSteps] = useState(EMAIL_ADDRESS);
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
                        description="To continue, first verify it’s you"
                        buttonAction={() => {}}
                    />
                );
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
                }}
            />
            {handleSteps()}
        </ContainerCustom>
    );
};

export default LoginPage;
