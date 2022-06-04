import { Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

interface EmailProps {
    buttonAction: any;
}

const EmailComponent: React.FC<EmailProps> = ({ buttonAction }) => {
    const [emailError, setEmailError] = useState(false);

    return (
        <Flex flexDirection="column" flex="1">
            <Text
                marginTop="40px"
                fontSize="40px"
                textAlign="center"
                fontFamily="Prata"
            >
                Enter your
                <br />
                email Address
            </Text>

            <Text
                opacity="0.6"
                marginTop="30px"
                marginBottom="60px"
                fontSize="15px"
            >
                Please input your email address to continue
            </Text>

            <FormLabel color={emailError ? "#9D2C2C" : "#000"}>{`Email ${
                emailError ? " • Invaild email address" : ""
            }`}</FormLabel>
            <Input type="email" />

            <Button onClick={buttonAction} variant="outline" marginTop="auto">
                CONTINUE
            </Button>
        </Flex>
    );
};

export default EmailComponent;
