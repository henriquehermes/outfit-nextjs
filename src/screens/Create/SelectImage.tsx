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

const SelectImage: React.FC<{ items?: any; categories: string[] }> = ({
    items,
    categories,
}) => {
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

    const keys = Object.values(items);

    // const renderSlide = () => {
    //     let temp = [];

    //     for (let x = 0; x < keys.length; x++) {
    //         const renderChildren: any = keys[x];

    //         temp.push(
    //             <Carousel
    //                 autoPlay
    //                 centerMode
    //                 infiniteLoop
    //                 swipeable
    //                 showArrows={false}
    //                 axis="horizontal"
    //                 centerSlidePercentage={80}
    //             >
    //                 {renderChildren?.map((chld: any) => (
    //                     <Flex key={chld._id} height="200px">
    //                         <Image src={chld.image.location} alt={chld._id} />
    //                     </Flex>
    //                 ))}
    //             </Carousel>,
    //         );
    //     }

    //     return temp;
    // };

    return (
        <Flex
            maxWidth="500px"
            mx="auto"
            width="full"
            flex="1"
            flexDirection="column"
        >
            {/* <Flex flexDirection="column">{renderSlide()}</Flex> */}

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
