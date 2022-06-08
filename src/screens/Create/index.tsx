import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";

import { ContainerCustom } from "../../components/Container";
import HeaderComponent from "../../components/Header";
import {
    useApplicationContext,
    withApplicationContext,
} from "../../contexts/application";
import { routes } from "../../routes";
import { getItems } from "../../services/item";

import ChooseCategory from "./ChooseCategory";
import { Item } from "./interface";
import SelectImage from "./SelectImage";

const CreatePage: FC = () => {
    const router = useRouter();
    const { userID } = useApplicationContext();
    const toast = useToast();

    const [step, setStep] = useState(0);
    const [items, setItems] = useState<Item[]>([]);

    const handleCategory = async (ctgry: []) => {
        const response = await getItems(userID, ctgry);

        if (Array.isArray(response)) {
            setItems(response);
            setStep(1);
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
    };

    function renderStep() {
        switch (step) {
            case 0:
                return <ChooseCategory handleCategory={handleCategory} />;
            case 1:
                return <SelectImage />;
            default:
                return <ChooseCategory handleCategory={handleCategory} />;
        }
    }

    return (
        <ContainerCustom>
            <HeaderComponent
                buttonAction={() => {
                    if (step === 0) router.push(routes.HOME);
                    else {
                        setStep(0);
                    }
                }}
                title="CREATE"
            />

            {renderStep()}
        </ContainerCustom>
    );
};

export default withApplicationContext(CreatePage);
