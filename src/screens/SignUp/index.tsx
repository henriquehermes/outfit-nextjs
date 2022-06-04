import { FC } from "react";

import { ContainerCustom } from "../../components/Container";
import EmailComponent from "../../components/Email";
import HeaderComponent from "../../components/Header";

const SignUpPage: FC = () => {
    return (
        <ContainerCustom>
            <HeaderComponent />
            <EmailComponent />
        </ContainerCustom>
    );
};

export default SignUpPage;
