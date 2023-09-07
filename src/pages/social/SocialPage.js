import { Box, Center, HStack, SimpleGrid, Text, VStack, Image } from "@chakra-ui/react";

const SocialPage = () => {

    const socials = [
        {
            imgLink: "https://i.imgur.com/WUGVqfi.png",
            link: "https://www.instagram.com/ryxn.wxng/",
            type: "Instagram",
            handle: "@ryxn.wxng"
        },
        {
            imgLink: "https://i.imgur.com/WUGVqfi.png",
            link: "https://www.instagram.com/wongsrx/",
            type: "Instagram",
            handle: "@wongsrx"
        },
        {
            imgLink: "https://i.imgur.com/ezIoQGu.png",
            link: "https://twitter.com/bananaaguy18",
            type: "Twitter",
            handle: "@bananaaguy18"
        },
        {
            imgLink: "https://i.imgur.com/sEc0qYf.png",
            link: "https://www.youtube.com/@ryanwoong",
            type: "YouTube",
            handle: "@ryanwoong"
        },
        {
            imgLink: "https://i.imgur.com/p0Ic1xq.png",
            link: "https://www.linkedin.com/in/ryanwongyyc/",
            type: "LinkedIn",
            handle: "@ryanwongyyc"
        },
        {
            imgLink: "https://i.imgur.com/3EVzk0m.png",
            link: "https://github.com/BananaGuy18",
            type: "GitHub",
            handle: "BananaGuy18"
        }
    ];

    return (
        <Box h={"100vh"} m={20}>
            <Center>
                <VStack mt={"5%"}>
                    <Text align={"center"} fontFamily={"heading"} color={"black"} fontWeight={"bold"} fontSize={["2rem", "2rem", "2rem", "2rem"]} mb={"10%"}>connect with me!</Text>
                    <SimpleGrid columns={[1, 1, 1, 2]}>
                    {socials?.length > 0
                        ? (
                            socials.map((social) => (
                                <Box boxShadow={"lg"} pr={"5rem"} pl={3} py={[0, 0, 0, 3]} m={3} rounded={"md"} w={["100%", "100%", "100%", "auto"]} h={"auto"} as={"a"} target={"_blank"} overflow={"hidden"} borderRadius={"lg"} borderWidth={"3px"} borderColor={"transparent"} href={social.link} transition={"all .2s ease-in"} _hover={{ borderColor: "primary.blue" }}>
                                    <HStack>
                                        <Image h={"5rem"} w={["2.3rem", "2.3rem", "2.3rem", "5rem"]} objectFit={"contain"} src={social.imgLink} alt={social.type} />
                                        <Text p={[3, 3, 3, 5]} letterSpacing={0.8} fontSize={["0.9rem", "0.9rem", "0.9rem", "1.2rem"]} >{social.handle}</Text>
                                    </HStack>
                                </Box>
                            ))
                        ) : (
                            <></>
                    )}
                    </SimpleGrid>
                </VStack>
            </Center>
        </Box>
        
    );
}

export default SocialPage;