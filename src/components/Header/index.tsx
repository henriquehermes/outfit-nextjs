import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

type HeaderProps = {
    title?: string;
    buttonAction?: any;
};

const HeaderComponent: FC<HeaderProps> = ({ title, buttonAction }) => {
    return (
        <Flex marginTop="20px" marginBottom="10px" w="full" align="center">
            <ArrowBackIcon
                w="8"
                h="7"
                cursor="pointer"
                onClick={buttonAction}
            />
            <Text fontSize="18px" fontWeight="700" mx="14px">
                {title}
            </Text>
        </Flex>
    );
};

export default HeaderComponent;
