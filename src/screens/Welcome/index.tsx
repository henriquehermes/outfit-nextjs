import { Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { ContainerCustom } from "../../components/Container";
import { routes } from "../../routes";

const WelcomePage: FC = () => {
    const router = useRouter();

    return (
        <ContainerCustom>
            <Text
                my="40px"
                fontSize="40px"
                lineHeight="45px"
                textAlign="center"
                fontFamily="Prata"
                marginTop="150px"
            >
                Welcome,
                <br />
                Outfit
            </Text>

            <Button
                onClick={() => router.push(routes.LOGIN)}
                marginTop="auto"
                variant="outline"
            >
                <Text>Login</Text>
            </Button>

            <Button
                onClick={() => router.push(routes.SIGN_UP)}
                variant="outline"
                my="15px"
            >
                <Text>Sign Up</Text>
            </Button>
        </ContainerCustom>
    );
};

export default WelcomePage;
