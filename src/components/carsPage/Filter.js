import { Box, Flex, Text, IconButton, VStack, Stack, Collapse, useColorModeValue, useDisclosure, Checkbox, SimpleGrid, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { FaFilter } from "react-icons/fa";
import { getCarBrands } from "../../functions/database/get/carBrands";
import BrandSelect from "./BrandSelect";

const Filter = ({ changeBrandSort, changeCollectionTypeSort }) => {

    const [carBrands, setCarBrands] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [collectionTypes, setCollectionTypes] = useState([]);
    const [selectedCollectionTypes, setSelectedCollectionTypes] = useState([]);
    const { isOpen, onToggle } = useDisclosure();

    useEffect(() => {

        const types = ["Hotwheel", "Lego", "Tomica"];

        getCarBrands().then((data) => {
            const finalArr = [];
            const sortedArr = [];

            // Sort the brands alphabetically
            for (var i=0; i<data.length; i++) {
                sortedArr.push(data[i].brand);
            }
            sortedArr.sort();

            // Sort the brand data alphabetically
            for (var k=0; k<sortedArr.length; k++) {
                for (var l=0; l<data.length; l++) {
                    if (sortedArr[k] === data[l].brand) {
                        finalArr.push(data[l]);
                    }
                    
                }
            }
            setCarBrands(finalArr);
        });

        types.sort();
        setCollectionTypes(types);
        

    }, []);

    useEffect(() => {
        changeBrandSort(selectedBrands);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedBrands])

    useEffect(() => {
        changeCollectionTypeSort(selectedCollectionTypes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCollectionTypes])

    return (
        <Box mt={[5, 5, 5, 0]} mb={10}>
            <Flex
                bg={useColorModeValue("primary.bg", "gray.800")}
                color={useColorModeValue("gray.600", "white")}
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.900")}
                align={"center"}
                top={"0"}
                width={"100%"}>
                <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={"flex"}>
                    <VStack>
                        <IconButton
                            onClick={onToggle}
                            icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <FaFilter w={5} h={5} />
                            }
                            variant={"ghost"}
                            aria-label={"Toggle Navigation"}
                        />
                        <Collapse in={isOpen} animateOpacity>
                            <DesktopFilter setSelectedCollectionTypes={setSelectedCollectionTypes} selectedCollectionTypes={selectedCollectionTypes} collectionTypes={collectionTypes} setSelectedBrands={setSelectedBrands} selectedBrands={selectedBrands} carBrands={ carBrands }/>
                        </Collapse>
                    </VStack>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Filter;

const DesktopFilter = ({ setSelectedCollectionTypes, selectedCollectionTypes, collectionTypes, setSelectedBrands, selectedBrands, carBrands }) => {

    return (
      <Stack>
        {/* Collection Type */}
        <Text align={"center"} fontWeight={"bold"}>Type</Text>
        <Box
          align={"center"}>
            <SimpleGrid columns={[2, 1, 1, collectionTypes?.length]} w={["100%", "100%", "100%", "25%"]}>
            {collectionTypes?.length > 0
                ? (
                    collectionTypes.map((type) => (
                        <Center>
                                <Checkbox m={3} key={type} value={type} onChange={(e) => { 
                                const index = selectedCollectionTypes.indexOf(e.target.value);
                                if (!selectedCollectionTypes.includes(e.target.value)) {
                                    setSelectedCollectionTypes([...selectedCollectionTypes, e.target.value])
                                } else if (index > -1) {
                                    selectedCollectionTypes.splice(index, 1);
                                    setSelectedCollectionTypes([...selectedCollectionTypes]);
                                }
                            }}>{type}</Checkbox>
                        </Center>
                    ))
                ) : (
                    <></>
            )}
            </SimpleGrid>
        </Box>

        {/* Car Brands */}
        <Text align={"center"} fontWeight={"bold"}>Brands</Text>
        <Flex
          justify={"space-between"}
          align={"center"}>
            <SimpleGrid columns={[2, 1, 1, carBrands?.length]} w={"100%"}>
            {carBrands?.length > 0
                ? (
                    carBrands.map((car) => (
                        <Center>
                            <Checkbox m={3} key={car._id} value={car.brand} onChange={(e) => { 
                                const index = selectedBrands.indexOf(e.target.value);
                                if (!selectedBrands.includes(e.target.value)) {
                                    setSelectedBrands([...selectedBrands, e.target.value])
                                } else if (index > -1) {
                                    selectedBrands.splice(index, 1);
                                    setSelectedBrands([...selectedBrands]);
                                }
                            }}><BrandSelect car={car} key={car._id} /></Checkbox>
                        </Center>
                        
                    ))
                ) : (
                    <></>
            )}
            </SimpleGrid>
            
        </Flex>
        
      </Stack>
    );
  };
