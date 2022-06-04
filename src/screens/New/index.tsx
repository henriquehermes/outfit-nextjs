import { useRouter } from "next/router";
import { FC, useState } from "react";

import { ContainerCustom } from "../../components/Container";
import HeaderComponent from "../../components/Header";
import { routes } from "../../routes";

import ChooseCategory from "./ChooseCategory";
import SelectImage from "./SelectImage";

const NewPage: FC = () => {
    const router = useRouter();

    const [step, setStep] = useState(0);
    const [category, setCategory] = useState("");

    const handleChooseCategory = (ctgry: string) => {
        setStep(1);
        setCategory(ctgry);
    };

    function renderStep() {
        switch (step) {
            case 0:
                return <ChooseCategory handleSubmit={handleChooseCategory} />;
            case 1:
                return <SelectImage category={category} />;
            default:
                return <ChooseCategory handleSubmit={handleChooseCategory} />;
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
                title="NEW"
            />

            {renderStep()}
        </ContainerCustom>
    );
};

export default NewPage;
