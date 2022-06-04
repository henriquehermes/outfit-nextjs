import { ComponentMultiStyleConfig } from "@chakra-ui/theme";

const Select: ComponentMultiStyleConfig = {
    parts: ["field"],
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
};

export default Select;
