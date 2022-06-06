import { Container } from "@chakra-ui/react";
import { FC } from "react";

export const ContainerCustom: FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <Container
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        mx="auto"
        maxWidth="1400px"
        px="20px"
        paddingBottom="env(safe-area-inset-bottom)"
    >
        {children}
    </Container>
);
