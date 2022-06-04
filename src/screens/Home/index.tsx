import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { ContainerCustom } from "../../components/Container";
import { routes } from "../../routes";

import GridOutfits from "./GridOutfits";

const Home: FC = () => {
    const router = useRouter();

    return (
        <ContainerCustom>
            <Text
                textAlign="center"
                fontFamily="Prata"
                fontSize="50px"
                color="black"
            >
                Outfit
            </Text>

            <Flex marginTop="25px" justify="center">
                <Button
                    onClick={() => router.push(routes.NEW)}
                    maxWidth="250px"
                    w="full"
                    marginRight="5px"
                    variant="outline"
                >
                    <Text fontWeight="900">NEW</Text>
                </Button>
                <Button
                    onClick={() => router.push(routes.CREATE)}
                    maxWidth="250px"
                    marginLeft="5px"
                    w="full"
                >
                    <Text fontWeight="900">CREATE</Text>
                </Button>
            </Flex>

            <GridOutfits />
        </ContainerCustom>
    );
};

export default Home;
