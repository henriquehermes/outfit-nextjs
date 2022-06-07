import { Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import isEmail from "validator/lib/isEmail";

interface EmailProps {
    buttonAction: any;
}

const EmailComponent: React.FC<EmailProps> = ({ buttonAction }) => {
    const [emailError, setEmailError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        if (inputRef.current && isEmail(inputRef.current?.value))
            buttonAction("email", inputRef.current.value);
        else setEmailError(true);
    };

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
            <Input type="email" ref={inputRef} />

            <Button onClick={handleSubmit} variant="outline" marginTop="auto">
                CONTINUE
            </Button>
        </Flex>
    );
};

export default EmailComponent;
