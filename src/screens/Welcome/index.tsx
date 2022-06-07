import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { ContainerCustom } from "../../components/Container";
import { routes } from "../../routes";

const WelcomePage: FC = () => {
    const router = useRouter();

    return (
        <ContainerCustom>
            <Flex
                flexDirection="column"
                flex={1}
                mx="auto"
                w="full"
                maxW="500px"
            >
                <Text
                    paddingTop="100px"
                    fontSize="40px"
                    lineHeight="45px"
                    textAlign="center"
                    fontFamily="Prata"
                    my="50px"
                    flexGrow="1"
                >
                    Welcome,
                    <br />
                    Outfit
                </Text>

                <Button
                    onClick={() => router.push(routes.LOGIN)}
                    variant="outline"
                >
                    <Text>Login</Text>
                </Button>

                <Button
                    onClick={() => router.push(routes.SIGN_UP)}
                    variant="outline"
                    marginTop="15px"
                >
                    <Text>Sign Up</Text>
                </Button>
            </Flex>
        </ContainerCustom>
    );
};

export default WelcomePage;
