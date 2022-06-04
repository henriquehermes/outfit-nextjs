import { ComponentMultiStyleConfig } from "@chakra-ui/theme";

const Input: ComponentMultiStyleConfig = {
    parts: ["field", "addon"],
    baseStyle: {
        field: {
            _disabled: {
                bg: "gray.100",
                borderColor: "gray.300",
                color: "gray.600",
                _placeholder: {
                    color: "gray.600",
                },
            },
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
                borderColor: "gray.100",
                borderWidth: 1,
                borderRadius: "3xl",
            },
        },
    },
};

export default Input;
