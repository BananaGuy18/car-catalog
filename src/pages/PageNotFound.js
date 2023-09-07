import { Text, Box, Center } from "@chakra-ui/react";

const PageNotFound = () => {
    return (
        <Box m={20} h={"100vh"}>
            <Center>
                <Text align={"center"} fontWeight={"bold"} fontSize={"1.2rem"}>
                    page not found sorry! now shoo!
                </Text>
            </Center>
        </Box>
    );
}

export default PageNotFound;