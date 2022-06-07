import { Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import isStrongPassword from "validator/lib/isStrongPassword";
interface PasswordProps {
    buttonAction: any;
    value: string;
    description?: string;
}

const PasswordComponent: React.FC<PasswordProps> = ({
    buttonAction,
    description,
    value,
}) => {
    const [passwordError, setPasswordError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        if (inputRef.current)
            if (!isStrongPassword(inputRef.current.value)) {
                return setPasswordError(true);
            } else {
                buttonAction("password", inputRef.current.value);
            }
        else setPasswordError(true);
    };

    return (
        <Flex
            mx="auto"
            w="full"
            maxW="500px"
            flexDirection="column"
            flex="1"
            paddingTop="40px"
        >
            <Text
                marginTop="40px"
                fontSize="40px"
                textAlign="center"
                fontFamily="Prata"
            >
                Enter your password
            </Text>

            <Text
                opacity="0.6"
                marginTop="30px"
                marginBottom="60px"
                fontSize="15px"
            >
                {`${
                    description ||
                    "Use 8 or more characters with a mix of letters, numbers & symbols"
                }`}
            </Text>

            <FormLabel color={passwordError ? "#9D2C2C" : "#000"}>{`Password ${
                passwordError ? " • Invaild password" : ""
            }`}</FormLabel>
            <Input defaultValue={value} type="password" ref={inputRef} />

            <Button onClick={handleSubmit} variant="outline" marginTop="auto">
                CONTINUE
            </Button>
        </Flex>
    );
};

export default PasswordComponent;
