import { Container, Text } from "@chakra-ui/react";
import { FC } from "react";

const Home: FC = () => {
    return (
        <Container>
            <Text fontWeight="900" fontSize="26px" color="primary.base">
                Outfit
            </Text>
            <input type="file" accept="image/x-png,image/jpeg,image/gif" />
        </Container>
    );
};

export default Home;
