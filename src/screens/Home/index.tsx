import { Button, Container, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

import GridOutfits from "./GridOutfits";

const Home: FC = () => {
    return (
        <Container py="20px" mx="auto" maxWidth="1400px" px="20px">
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
                    maxWidth="250px"
                    w="full"
                    marginRight="5px"
                    variant="outline"
                >
                    <Text fontWeight="900">NEW</Text>
                </Button>
                <Button maxWidth="250px" marginLeft="5px" w="full">
                    <Text fontWeight="900">CREATE</Text>
                </Button>
            </Flex>

            <GridOutfits />
        </Container>
    );
};

export default Home;
