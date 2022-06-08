import { Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
    useApplicationContext,
    withApplicationContext,
} from "../../contexts/application";
import { routes } from "../../routes";
import { postItem } from "../../services/item";

const SelectImage: React.FC<{ category: string }> = ({ category }) => {
    const fileInput = useRef<HTMLInputElement>(null);
    const toast = useToast();
    const router = useRouter();

    const [imagePreview, setImagePreview] = useState("");
    const [file, setFile] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const { userID } = useApplicationContext();

    function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            const objectUrl = URL.createObjectURL(e.target.files[0]);

            setFile(e.target.files[0]);
            setImagePreview(objectUrl);
        }
    }

    const handleSubmit = async () => {
        if (!file || !category) {
            toast({
                title: "Error",
                description: "Select one image",
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top",
            });
        } else {
            const formData = new FormData();

            formData.append("category", category);
            formData.append("image", file);
            formData.append("userID", userID);

            setIsLoading(true);
            const response = await postItem(formData);

            if (response?.status === 200) {
                toast({
                    title: "Item created",
                    description: "We've created your item for you",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });

                router.push(routes.HOME);
            } else {
                toast({
                    title: "Error",
                    description: response?.response?.data?.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });
            }
            setIsLoading(false);
        }
    };

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
                    maxHeight="500"
                    objectFit="cover"
                    h="auto"
                    w="full"
                    border="1px solid black"
                    src={imagePreview}
                    alt="image-preview"
                />
            )}

            <Button
                disabled={isLoading}
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

            <Button
                isLoading={isLoading}
                onClick={handleSubmit}
                maxWidth="500px"
                marginTop="auto"
                width="full"
            >
                <Text>SAVE</Text>
            </Button>
        </Flex>
    );
};

export default withApplicationContext(SelectImage);
