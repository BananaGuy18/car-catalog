import { Box, Button } from "@chakra-ui/react";
import { GiBowlOfRice } from "react-icons/gi";

const SocialButton = () => {
    return (
        <Box zIndex={10} position="fixed" bottom={0} right={0} m={10}>
            <Button
            as={"a"}
            fontWeight={400}
            variant={"link"}
            color={"gray.300"}
            href={"/socials"}
            _hover={{ color: "primary.blue" }}>
            <GiBowlOfRice size={35} />
          </Button>
        </Box>
    );
}

export default SocialButton;