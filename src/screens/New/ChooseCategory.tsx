import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";

import mock from "../../mocks/categories.json";

const ChooseCategory: React.FC<{ handleSubmit: any }> = ({ handleSubmit }) => {
    return (
        <Box>
            <Text
                my="40px"
                fontSize="40px"
                lineHeight="40px"
                textAlign="center"
                fontFamily="Prata"
            >
                Choose one category
            </Text>

            {mock.categories.map((item) => (
                <Flex
                    maxWidth="700px"
                    mx="auto"
                    flexDirection="column"
                    key={item.id}
                >
                    <Button
                        onClick={() => handleSubmit(item.name)}
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
                            <ArrowBackIcon
                                width="20px"
                                height="25px"
                                transform="rotateZ(180deg)"
                            />
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
        </Box>
    );
};

export default ChooseCategory;
