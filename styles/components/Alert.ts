import { ComponentSingleStyleConfig } from "@chakra-ui/theme";
import { mode } from "@chakra-ui/theme-tools";

type Dict = Record<string, any>;

function themeByStatus(status: string) {
    switch (status) {
        case "error":
            return {
                container: { bg: "red.50" },
                description: { color: "red.500" },
            };
        case "warning":
            return {
                container: { bg: "yellow.50", border: "1px solid #EBEBEB" },
                description: { color: "yellow.700" },
            };
        case "success":
            return {
                container: { bg: "green.50" },
                description: { color: "green.700" },
            };
        default:
            return {
                container: { bg: "disabled.base" },
                description: { color: "white" },
            };
    }
}

function variantSubtle(props: Dict): any {
    const { colorScheme: c, status } = props;

    return {
        icon: { color: mode(`${c}.500`, `${c}.200`)(props) },
        ...themeByStatus(status),
    };
}

const variants = {
    subtle: variantSubtle,
};

const Alert: ComponentSingleStyleConfig = {
    baseStyle: {
        container: {
            borderRadius: 4,
            alignItems: "flex-start",
        },
        description: {
            fontSize: 14,
            fontWeight: 400,
        },
    },
    variants,
};

export default Alert;
