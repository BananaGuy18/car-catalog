import { Box, Image, useDisclosure } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { getCar } from "../../functions/database/get/carData";
import CarModal from "./CarModal";
const CarCard = ({ car }) => {

    const [carData, setCarData] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const fetchData = useCallback(() => {
        getCar(car.carModel, car.year).then((data) => {
            setCarData(data);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Box position={"relative"} w={["10rem", "10rem", "10rem", "15rem"]} h={["19rem", "19rem", "19rem", "25rem"]} overflow={"hidden"} borderRadius={"lg"} borderWidth={"1px"} as={"a"} cursor={"pointer"} className={"container"}
                onClick={() => {
                    onOpen()
                    fetchData()
                }}
                >
                <Image src={car.picture} alt={"image is broken"} objectFit={"cover"} w={"100%"} h={"70%"} mb={["0", "0", "0", "3"]} />         
                <Box
                    ml={3}
                    mt={2}
                    fontWeight={"semibold"}
                    as={"h4"}
                    lineHeight={"tight"}
                    noOfLines={1}
                    fontSize={["0.9rem", "0.9rem", "0.9rem", "1.2rem"]}>
                    {car.brand}
                </Box>
                <Box
                    ml={3}
                    fontSize={["0.8rem", "0.8rem", "0.8rem", "0.9rem"]}
                    color={"gray.600"}>
                    {car.carModel}
                </Box>
                <Box 
                    ml={3}
                    mb={3}
                    position={"absolute"}
                    bottom={0}
                    fontSize={["0.7rem", "0.7rem", "0.7rem", "0.8rem"]}
                    color={"gray.400"}>
                    {car.type}
                </Box>

                <CarModal isOpen={isOpen} onClose={onClose} car={carData} picture={car.picture} />
            </Box>
        </>
       
            

        
    );
}

export default CarCard;