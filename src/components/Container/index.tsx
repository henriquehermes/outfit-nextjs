import { Container } from "@chakra-ui/react";
import { FC } from "react";

export const ContainerCustom: FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <Container
        display="flex"
        flexDirection="column"
        mx="auto"
        maxWidth="1400px"
        flexGrow="1"
        flexShrink="0"
        px="20px"
        css={{
            "@media(max-width: 768px)": {
                "min-height": "calc(100vh - 70px)",
            },
            "@media(min-width: 769px)": {
                "min-height": "calc(100vh - 20px)",
            },
        }}
        paddingBottom="env(safe-area-inset-bottom)"
    >
        {children}
    </Container>
);
