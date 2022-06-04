import { ComponentMultiStyleConfig } from "@chakra-ui/theme";

const Input: ComponentMultiStyleConfig = {
    parts: ["field", "addon"],
    baseStyle: {
        field: {
            _disabled: {
                bg: "transparent",
                border: "none",
                borderBottom: "1px solid",
                borderColor: "black",
                color: "gray.600",
                _placeholder: {
                    color: "gray.600",
                },
            },
            border: "none",
            borderBottom: "1px solid",
            borderColor: "black",
        },
        addon: {
            color: "gray.700",
        },
    },
    sizes: {
        lg: {
            field: {
                borderRadius: "md",
                height: 14,
            },
        },
        md: {
            field: {
                borderRadius: "md",
                height: 12,
            },
        },
        sm: {
            field: {
                borderRadius: "md",
                height: 10,
            },
        },
    },
    variants: {
        round: {
            field: {
                borderColor: "black",
                borderWidth: 1,
                borderRadius: "3xl",
            },
        },
    },
};

export default Input;
