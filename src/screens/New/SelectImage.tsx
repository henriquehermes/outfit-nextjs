import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";

const SelectImage: React.FC<{ category: string }> = ({ category }) => {
    const fileInput = useRef<HTMLInputElement>(null);
    const [imagePreview, setImagePreview] = useState("");

    function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            const objectUrl = URL.createObjectURL(e.target.files[0]);

            setImagePreview(objectUrl);
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
                ref={fileInput}
                onChange={handleImage}
                style={{ display: "none" }}
                type="file"
                accept="image/png, image/jpg, image/jpeg"
            />

            {imagePreview && (
                <Image
                    maxWidth="500"
                    h="auto"
                    w="full"
                    border="1px solid black"
                    src={imagePreview}
                    alt="image-preview"
                />
            )}

            <Button
                variant="outline"
                onClick={() => {
                    if (fileInput.current) fileInput.current.click();
                }}
                border="1px solid black"
                w="full"
                maxW="500px"
                marginY="20px"
                textTransform="uppercase"
                fontWeight="900"
            >
                select an image
            </Button>

            <Button maxWidth="500px" marginTop="auto" width="full">
                <Text>SAVE</Text>
            </Button>
        </Flex>
    );
};

export default SelectImage;
