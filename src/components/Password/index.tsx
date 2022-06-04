import { Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

interface PasswordProps {
    title: String;
    description: String;
    buttonAction: any;
}

const EmailComponent: React.FC<PasswordProps> = ({
    title,
    description,
    buttonAction,
}) => {
    const [passwordError, setPasswordError] = useState(false);

    return (
        <Flex flexDirection="column" flex="1">
            <Text
                marginTop="40px"
                fontSize="40px"
                textAlign="center"
                fontFamily="Prata"
            >
                {title}
            </Text>

            <Text
                opacity="0.6"
                marginTop="30px"
                marginBottom="60px"
                fontSize="15px"
            >
                {description}
            </Text>

            <FormLabel color={passwordError ? "#9D2C2C" : "#000"}>{`Password ${
                passwordError ? " • Invaild password" : ""
            }`}</FormLabel>
            <Input type="password" />

            <Button onClick={buttonAction} variant="outline" marginTop="auto">
                CONTINUE
            </Button>
        </Flex>
    );
};

export default EmailComponent;
