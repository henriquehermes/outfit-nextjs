import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { FC } from "react";
import { GridItem } from "./interface";

import mock from "../../mocks/home.json";
import { getItems } from "../../services/item";
import {
    useApplicationContext,
    withApplicationContext,
} from "../../contexts/application";

const GridOutfits: FC = () => {
    const { userID } = useApplicationContext();

    const handleItems = async () => {
        await getItems(userID);
    };

    return (
        <SimpleGrid
            my={{ base: "25px", lg: "30px" }}
            columns={{ base: 2, md: 3, lg: 4, xl: 5 }}
            spacing={{ base: 4, md: 5, lg: 7 }}
        >
            {mock.outfits.map((item: GridItem) => (
                <Box
                    key={item.id}
                    backgroundPosition="center"
                    backgroundSize="cover"
                >
                    <Image
                        height={{ base: "270px", md: "350px", lg: "400px" }}
                        w="full"
                        src={item.image}
                        alt={item.title}
                    />
                    <Flex marginTop="10px" flexDirection="column">
                        <Text
                            fontSize={{ base: "16px", lg: "20px" }}
                            textOverflow="ellipsis"
                            overflow="hidden"
                            whiteSpace="nowrap"
                            fontFamily="Prata"
                            noOfLines={1}
                        >
                            {item.title}
                        </Text>
                        <Text
                            marginTop="2px"
                            fontSize={{ base: "12px", lg: "15px" }}
                            noOfLines={3}
                        >
                            {item.description}
                        </Text>
                    </Flex>
                </Box>
            ))}
        </SimpleGrid>
    );
};

export default withApplicationContext(GridOutfits);
