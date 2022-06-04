import type { ComponentSingleStyleConfig } from "@chakra-ui/theme";

const Button: ComponentSingleStyleConfig = {
    baseStyle: {
        borderRadius: "0",
        fontWeight: "semibold",
        whiteSpace: "pre-wrap",
        px: 6,
        py: 3,
        _disabled: {
            border: "none",
            bg: "disabled.base",
            color: "disabled.dark",
        },
    },
    sizes: {
        lg: {
            fontSize: "lg",
            height: 14,
        },
        md: {
            fontSize: "lg",
            height: 12,
        },
        sm: {
            fontSize: "base",
            height: 10,
        },
    },
    variants: {
        solid: {
            bg: "black",
            color: "white",
            _hover: {
                bg: "black",
                filter: "invert(0.2)",
            },
        },
        outline: {
            borderColor: "#37372D",
            bg: "#eeede7",
            color: "black",
            _hover: {
                bg: "#eeede7",
                filter: "invert(0.1)",
            },
        },
        ghost: {
            color: "primary.base",
        },
        link: {
            color: "primary.base",
            fontSize: "sm",
            fontWeight: "normal",
            width: "max-content",
        },
        error: {
            bg: "red.50",
            color: "red.500",
            fontWeight: "normal",
            _disabled: {
                opacity: 1,
                bg: "red.50",
                color: "red.500",
            },
            _hover: {
                bg: "red.50",
                color: "red.500",
            },
        },
    },
    defaultProps: {
        size: "lg",
    },
};

export default Button;
