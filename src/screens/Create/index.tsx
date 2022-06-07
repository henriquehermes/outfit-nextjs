import { useRouter } from "next/router";
import { FC } from "react";
import { ContainerCustom } from "../../components/Container";
import HeaderComponent from "../../components/Header";
import { routes } from "../../routes";

const CreatePage: FC = () => {
    const router = useRouter();

    return (
        <ContainerCustom>
            <HeaderComponent
                buttonAction={() => router.push(routes.HOME)}
                title="CREATE"
            />
        </ContainerCustom>
    );
};

export default CreatePage;
