import {
    Button,
    Flex,
    Image,
    Text,
    useToast,
    Input,
    FormLabel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
    useApplicationContext,
    withApplicationContext,
} from "../../contexts/application";
import { routes } from "../../routes";
import { postOutfit } from "../../services/outfit";

const SelectImage: React.FC<{ items?: any }> = ({ items }) => {
    const inputTitle = useRef<HTMLInputElement>(null);
    const toast = useToast();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const { userID } = useApplicationContext();

    const handleSubmit = async () => {
        if (!inputTitle.current) {
            toast({
                title: "Error",
                description: "Select one image and give a title",
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top",
            });
        } else {
            const formData = new FormData();

            // formData.append("image", file);
            formData.append("title", inputTitle?.current.value ?? "");
            formData.append("userID", userID);

            setIsLoading(true);
            const response = await postOutfit(formData);

            if (response?.status === 200) {
                toast({
                    title: "Outfit created",
                    description: "We've created your outfit for you",
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

    console.log(items);

    return (
        <Flex
            maxWidth="500px"
            mx="auto"
            width="full"
            flex="1"
            flexDirection="column"
        >
            <FormLabel marginTop="50px">Title</FormLabel>
            <Input type="text" ref={inputTitle} />

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
