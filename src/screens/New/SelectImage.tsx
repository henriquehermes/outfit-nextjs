import { Flex } from "@chakra-ui/react";

const SelectImage: React.FC<{ category: string }> = ({ category }) => {
    return <Flex>{category}</Flex>;
};

export default SelectImage;
