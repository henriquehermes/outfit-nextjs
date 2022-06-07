import { AttachmentIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    FormLabel,
    Image,
    Input,
    Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

const ProfileComponent: React.FC<{ buttonAction: any }> = ({
    buttonAction,
}) => {
    const fileInput = useRef<HTMLInputElement>(null);
    const [imagePreview, setImagePreview] = useState("");

    function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            const objectUrl = URL.createObjectURL(e.target.files[0]);

            setImagePreview(objectUrl);
        }
    }

    function handleSubmit() {
        //todo
        buttonAction();
    }

    return (
        <Flex flexDirection="column" flex="1" paddingTop="40px">
            <Button
                display={imagePreview ? "none" : "block"}
                variant="unstyled"
                onClick={() => {
                    if (fileInput.current) fileInput.current.click();
                }}
                border="1px solid black"
                w="111px"
                height="111px"
                borderRadius="50%"
                mx="auto"
            >
                <AttachmentIcon />
            </Button>
            <input
                ref={fileInput}
                onChange={handleImage}
                style={{ display: "none" }}
                type="file"
                accept="image/png, image/jpg, image/jpeg"
            />

            {imagePreview && (
                <Image
                    onClick={() => {
                        if (fileInput.current) fileInput.current.click();
                    }}
                    objectFit="cover"
                    w="111px"
                    h="111px"
                    borderRadius="50%"
                    src={imagePreview}
                    alt="user-picture"
                    mx="auto"
                />
            )}

            <Text
                textAlign="center"
                fontSize="15px"
                marginTop="15px"
                marginBottom="35px"
                fontFamily="Prata"
            >
                Lorem Ipsum
            </Text>

            <Box mx="auto" w="full" maxW="500px">
                <FormLabel>First Name</FormLabel>
                <Input />

                <FormLabel marginTop="24px">Last Name</FormLabel>
                <Input />

                <FormLabel marginTop="24px">Email</FormLabel>
                <Input disabled />
            </Box>

            <Button
                onClick={handleSubmit}
                mx="auto"
                w="full"
                maxW="500px"
                marginTop="auto"
            >
                <Text>CONTINUE</Text>
            </Button>
        </Flex>
    );
};

export default ProfileComponent;
