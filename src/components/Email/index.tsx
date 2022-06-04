import { Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";

const EmailComponent: React.FC = () => {
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

            <FormLabel>Email</FormLabel>
            <Input type="email" />

            <Button variant="outline" marginTop="auto">
                CONTINUE
            </Button>
        </Flex>
    );
};

export default EmailComponent;
