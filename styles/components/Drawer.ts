import type { ComponentSingleStyleConfig } from "@chakra-ui/theme";

const Drawer: ComponentSingleStyleConfig = {
    baseStyle: {
        dialog: {
            color: "white",
            backgroundColor: "primary.base",
            fontWeight: 400,
        },
        header: {
            paddingTop: "56px",
            paddingBottom: "32px",
            px: "16px",
            display: "flex",
            flexDirection: "column",
        },
        body: {
            px: 0,
        },
    },
};

export default Drawer;
