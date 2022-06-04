import { Button, Flex, Text } from "@chakra-ui/react";

const SelectImage: React.FC<{ category: string }> = ({ category }) => {
    function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            console.log(URL.createObjectURL(e.target.files[0]));
        }
    }

    return (
        <Flex flex="1" flexDirection="column" align="center" justify="center">
            <Text
                my="40px"
                fontSize="40px"
                lineHeight="40px"
                textAlign="center"
                fontFamily="Prata"
            >
                {category}
            </Text>

            <input
                onChange={handleImage}
                type="file"
                accept="image/x-png,image/jpeg,image/gif"
            />

            <Button maxWidth="500px" marginTop="auto" width="full">
                <Text>SAVE</Text>
            </Button>
        </Flex>
    );
};

export default SelectImage;
