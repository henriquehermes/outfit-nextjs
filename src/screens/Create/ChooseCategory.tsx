import { ArrowBackIcon, CheckCircleIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Divider,
    Flex,
    Image,
    Text,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import mock from "../../mocks/categories.json";

const ChooseCategory: React.FC<{ handleCategory: any }> = ({
    handleCategory,
}) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const toast = useToast();

    const handleChooseCategory = (ctgry: string) => {
        let temp = selectedCategories;
        const cIndex = temp.findIndex((c) => c === ctgry);

        if (cIndex === -1) {
            temp = [...temp, ctgry];
        } else {
            temp = temp.filter((c) => c !== ctgry);
        }

        setSelectedCategories(temp);
    };

    const handleContinue = () => {
        if (selectedCategories.length > 0) {
            handleCategory(selectedCategories);
        } else {
            toast({
                title: "Error",
                description: "Select one or more categories",
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top",
            });
        }
    };

    return (
        <Flex flex="1" flexDirection="column" align="center" justify="center">
            <Text
                my="40px"
                fontSize="40px"
                lineHeight="40px"
                textAlign="center"
                fontFamily="Prata"
            >
                Choose the categories
            </Text>

            {mock.categories.map((item) => (
                <Flex
                    w="full"
                    maxWidth="700px"
                    mx="auto"
                    flexDirection="column"
                    key={item.id}
                >
                    <Button
                        onClick={() => handleChooseCategory(item.name)}
                        display="flex"
                        w="full"
                        height="40px"
                        leftIcon={
                            <Image
                                height="25px"
                                src={item.icon}
                                alt={item.name}
                            />
                        }
                        rightIcon={
                            selectedCategories.includes(item.name) ? (
                                <CheckCircleIcon width="20px" height="25px" />
                            ) : (
                                <Box width="20px" height="25px" />
                            )
                        }
                        variant="unstyled"
                    >
                        <Text fontWeight="400" mx="auto">
                            {item.name}
                        </Text>
                    </Button>
                    <Divider my="10px" />
                </Flex>
            ))}

            <Button
                onClick={handleContinue}
                maxWidth="500px"
                marginTop="auto"
                width="full"
            >
                <Text>CONTINUE</Text>
            </Button>
        </Flex>
    );
};

export default ChooseCategory;
