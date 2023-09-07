import { Box, Text } from "@chakra-ui/react";

const TypeSelect = ({ type }) => {
    return (
        <Box onClick={() => {
        }} cursor={"pointer"} h={"15%"}>
            <Text>{type}</Text>
        </Box>
    );
}

export default TypeSelect;