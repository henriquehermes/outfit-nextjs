import { ComponentMultiStyleConfig } from "@chakra-ui/theme";

const Breadcrumb: ComponentMultiStyleConfig = {
    parts: ["container", "separator"],
    baseStyle: {
        container: {
            fontSize: "sm",
        },
        separator: {
            fontSize: "lg",
        },
    },
    variants: {
        cart_active: {
            container: {
                fontWeight: "bold",
                lineHeight: "21px",
                color: "primary.base",
            },
        },
        cart_inactive: {
            container: {
                lineHeight: "21px",
                color: "gray.500",
            },
        },
    },
};

export default Breadcrumb;
