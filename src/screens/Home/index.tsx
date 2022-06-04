import {
    Alert,
    AlertDescription,
    Button,
    Container,
    FormLabel,
    Input,
    Text,
} from "@chakra-ui/react";
import { FC } from "react";

const Home: FC = () => {
    return (
        <Container>
            <Text fontWeight="900" fontSize="26px" color="primary.base">
                Outfit
            </Text>
            <Button>
                <Text>Primario</Text>
            </Button>
            <Button variant="outline">
                <Text>Secundario</Text>
            </Button>
            <FormLabel>Cancelar</FormLabel>
            <Input />
            {/* <input type="file" accept="image/x-png,image/jpeg,image/gif" /> */}
        </Container>
    );
};

export default Home;
