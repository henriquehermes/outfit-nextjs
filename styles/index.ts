import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import components from "./components";
import styles from "./styles";

const theme = {
    colors,
    components,
    styles,
};

export default extendTheme(theme);
