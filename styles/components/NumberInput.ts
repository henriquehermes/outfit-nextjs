import { ComponentMultiStyleConfig } from "@chakra-ui/theme";

const NumberInput: ComponentMultiStyleConfig = {
    parts: ["field"],
    baseStyle: {
        field: {
            fontWeight: "bold",
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
};

export default NumberInput;
