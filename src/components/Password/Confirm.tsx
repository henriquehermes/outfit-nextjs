import { Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import isStrongPassword from "validator/lib/isStrongPassword";
interface PasswordProps {
    buttonAction: any;
    password: string;
}

const PasswordConfirmComponent: React.FC<PasswordProps> = ({
    buttonAction,
    password,
}) => {
    const [passwordError, setPasswordError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        if (inputRef.current)
            if (
                !isStrongPassword(inputRef.current.value) ||
                password !== inputRef.current.value
            ) {
                return setPasswordError(true);
            } else {
                buttonAction();
            }
        else setPasswordError(true);
    };

    return (
        <Flex mx="auto" w="full" maxW="500px" flexDirection="column" flex="1">
            <Text
                marginTop="40px"
                fontSize="40px"
                textAlign="center"
                fontFamily="Prata"
            >
                Confirm your password
            </Text>

            <Text
                opacity="0.6"
                marginTop="30px"
                marginBottom="60px"
                fontSize="15px"
            >
                Repeat your password
            </Text>

            <FormLabel color={passwordError ? "#9D2C2C" : "#000"}>{`Password ${
                passwordError ? " • Didn't match" : ""
            }`}</FormLabel>
            <Input type="password" ref={inputRef} />

            <Button onClick={handleSubmit} variant="outline" marginTop="auto">
                CONTINUE
            </Button>
        </Flex>
    );
};

export default PasswordConfirmComponent;
