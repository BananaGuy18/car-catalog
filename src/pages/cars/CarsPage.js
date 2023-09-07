import CarsGrid from "./CarsGrid";
import { Box, Text, Flex, VStack, Stack, Center } from "@chakra-ui/react";

const CarsPage = () => {

    const text = "not all car specifications have been added! please be paitent, it'll take me a bit <3";
    
    return (
        <Box>
            <Flex
            w={"full"}
            h={"100vh"}
            backgroundImage={"url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
            >
            <VStack w={"full"} backgroundColor={"rgba(0, 0, 0, 0.5)"}>
                <Stack maxW={"5xl"} align={"flex-start"} spacing={6}>
                    <Text
                    color={"white"}
                    fontWeight={"bold"}
                    fontFamily={"heading"}
                    mt={["20rem", "20rem", "20rem", "90%"]}
                    fontSize={["1.8rem", "1.8rem", "1.8rem", "3rem"]}>
                    browse my collection.
                    </Text>
                </Stack>
            </VStack>
        </Flex>
            <Box p={[0, 0, 0, 50]}>
                <Center>
                    <Text letterSpacing={1} align={"center"} m={4} fontSize={["0.9rem", "0.9rem", "0.9rem", "1rem"]}>{text}</Text> 
                </Center>
                <CarsGrid />
            </Box>
        </Box>
    )
}

export default CarsPage;

