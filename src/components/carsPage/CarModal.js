import { UnorderedList, ListItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Box, SimpleGrid, Text, Image, Center,} from "@chakra-ui/react";

const CarModal = ({ isOpen, onClose, car, picture }) => {

    let data = car?.specifications;

    return (
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"} size={"full"}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{car?.year} {car?.brand} {car?.carModel}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <SimpleGrid columns={[1, 1, 1, 3]} spacing={6}>
                        <Box>
                            <Text m={5} fontWeight={"bold"} fontSize={"1.3rem"}>Specifications</Text>
                            <Box borderRadius={"lg"} p={5} m={5} backgroundColor={"primary.grey"}>
                                <UnorderedList fontWeight={"medium"}>
                                    <Text fontWeight={"bold"}>Engine</Text>
                                    <ListItem ml={4}>Type: {data?.engine.type}</ListItem>
                                    <ListItem ml={4}>Drive Train: {data?.engine.driveTrain}</ListItem>
                                        <ListItem ml={4}>Horsepower: {data?.engine.hp}</ListItem>
                                        <ListItem ml={4}>Torque: {data?.engine.torque}</ListItem>
                                        <ListItem ml={4}>Position: {data?.engine.position}</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box borderRadius={"lg"} p={5} m={5} backgroundColor={"primary.grey"}>
                                <UnorderedList fontWeight={"medium"}>
                                    <Text fontWeight={"bold"}>Information</Text>
                                        <ListItem ml={4}>Body Type: {data?.bodyType}</ListItem>
                                        <ListItem ml={4}>Acceleration (0-100km): {data?.accelerations.zeroToOneHundred} seconds</ListItem>
                                        <ListItem ml={4}>Top Speed: {data?.topSpeed}km/h</ListItem>
                                        <ListItem ml={4}>Weight: {data?.weight}kg / {Math.round(data?.weight * 2.2046)}lb  </ListItem>
                                </UnorderedList>
                            </Box>
                            <Box borderRadius={"lg"} p={5} m={5} backgroundColor={"primary.grey"}>
                                <UnorderedList fontWeight={"medium"}>
                                    <Text fontWeight={"bold"}>Brakes</Text>
                                        <ListItem ml={4}>Front: {data?.brakes.front}</ListItem>
                                        <ListItem ml={4}>Rear: {data?.brakes.rear}</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box borderRadius={"lg"} p={5} m={5} backgroundColor={"primary.grey"}>
                                <UnorderedList fontWeight={"medium"}>
                                    <Text fontWeight={"bold"}>Tires</Text>
                                        <ListItem ml={4}>Front: {data?.tires.front}</ListItem>
                                        <ListItem ml={4}>Rear: {data?.tires.rear}</ListItem>
                                </UnorderedList>
                            </Box>
                        </Box>
                        <Box>
                            <Center>
                                <Image w={["80%", "80%", "80%", "70%"]} m={[0, 0, 0, 20]} src={picture} alt={"image is broken"} overflow={"hidden"} borderRadius={"lg"} />  
                            </Center>       
                        </Box>
                        <Box>
                            <Text m={5} fontWeight={"bold"} fontSize={"1.3rem"}>Description</Text>
                            <Box borderRadius={"lg"} p={5} m={5} backgroundColor={"primary.grey"}>
                                <Text>{car?.description}</Text>
                            </Box>
                        </Box>
                    </SimpleGrid>
                </ModalBody>

            </ModalContent>
        </Modal>
    );
}

export default CarModal;