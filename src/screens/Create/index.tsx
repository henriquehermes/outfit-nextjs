import { FC } from "react";
import { ContainerCustom } from "../../components/Container";
import HeaderComponent from "../../components/Header";

const CreatePage: FC = () => {
    return (
        <ContainerCustom>
            <HeaderComponent title="CREATE" />
        </ContainerCustom>
    );
};

export default CreatePage;
