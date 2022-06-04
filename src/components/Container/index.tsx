import { Container } from "@chakra-ui/react";
import { FC } from "react";

export const ContainerCustom: FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <Container
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        py="20px"
        mx="auto"
        maxWidth="1400px"
        px="20px"
    >
        {children}
    </Container>
);
