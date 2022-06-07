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

import { ProfileProps } from "./interface";

const ProfileComponent: React.FC<ProfileProps> = ({
    user,
    handleCreateUser,
}) => {
    const fileInput = useRef<HTMLInputElement>(null);
    const firstNameInput = useRef<HTMLInputElement>(null);
    const lastNameInput = useRef<HTMLInputElement>(null);
    const inviteCodeInput = useRef<HTMLInputElement>(null);

    const [imagePreview, setImagePreview] = useState("");
    const [file, setFile] = useState<any>(null);

    function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            const objectUrl = URL.createObjectURL(e.target.files[0]);

            setFile(e.target.files[0]);
            setImagePreview(objectUrl);
        }
    }

    function handleSubmit() {
        if (
            firstNameInput.current &&
            lastNameInput.current &&
            inviteCodeInput.current
        ) {
            handleCreateUser({
                ...user,
                firstName: firstNameInput?.current.value,
                lastName: lastNameInput?.current.value,
                inviteCode: inviteCodeInput?.current.value,
                image: file,
            });
        }
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

            <Box marginTop="50px" mx="auto" w="full" maxW="500px">
                <FormLabel>First Name</FormLabel>
                <Input ref={firstNameInput} type="text" />

                <FormLabel marginTop="24px">Last Name</FormLabel>
                <Input ref={lastNameInput} type="text" />

                <FormLabel marginTop="24px">Invitation Code</FormLabel>
                <Input ref={inviteCodeInput} type="text" />

                <FormLabel marginTop="24px">Email</FormLabel>
                <Input value={user.email} disabled />
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
