import { Box, Text } from "@chakra-ui/react";

const BrandSelect = ({ car }) => {
    return (
        <Box onClick={() => {
        }} cursor={"pointer"} h={"15%"}>
            <Text>{car.brand}</Text>
        </Box>
    );
}

export default BrandSelect;