import { Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";

interface PasswordProps {
    title: String;
    description: String;
    buttonAction: any;
    isConfirmPassword?: boolean;
}

const PasswordComponent: React.FC<PasswordProps> = ({
    title,
    description,
    buttonAction,
    isConfirmPassword = false,
}) => {
    const [passwordError, setPasswordError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        if (inputRef.current)
            buttonAction(
                isConfirmPassword ? "confirmPassword" : "password",
                inputRef.current.value,
            );
        else setPasswordError(true);
    };

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
            <Input type="password" ref={inputRef} />

            <Button onClick={handleSubmit} variant="outline" marginTop="auto">
                CONTINUE
            </Button>
        </Flex>
    );
};

export default PasswordComponent;
