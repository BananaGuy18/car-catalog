import { HStack, SimpleGrid, Center, Text, VStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Filter from "../../components/carsPage/Filter";
import CarCard from "../../components/carsPage/CarCard";
import { getAllCars } from "../../functions/database/get/all";
import { getHotwheels } from "../../functions/database/get/hotwheels";
import { getLegos } from "../../functions/database/get/legos";
import { getTomicas } from "../../functions/database/get/tomicas";

const CarsGrid = ({ typeToGet }) => {

    const [sortedCars, setSortedCars] = useState([]);
    const [carsArrayOriginal, setCarsArrayOriginal] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [currentBrand, setCurrentBrand] = useState([]);
    const [currentType, setCurrentType] = useState([]);

    useEffect(() => {
        
        function setData(temp, cars) {
            
            setSortedCars(splitArray(cars));
            setCarsArrayOriginal(temp);
        }

        function doData(data) {
            let carData = data.data;
            let temp = [];

            for (var i=0;i<data.data.length; i++) {
                temp.push(data.data[i]);
            } 

            setData(temp, carData);
        }
        
        
        switch (typeToGet) {
            case "hotwheels":
                getHotwheels().then((data) => {
                    doData(data)
                });
                break;
            case "lego":
                getLegos().then((data) => {
                    doData(data)
                });
                break;
            case "tomica":
                getTomicas().then((data) => {
                    doData(data)
                });
                break;
            default:
                getAllCars().then((data) => {
                    doData(data)
                });
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Sorts by brand & type
    useEffect(() => {
        let res = sortArray(carsArrayOriginal, currentBrand, currentType); 
        let temp = [];

        for (var i=0;i<carsArrayOriginal.length; i++) {
            temp.push(carsArrayOriginal[i]);
        } 
        setPageNum(1);
        setCarsArrayOriginal(temp);
        setSortedCars(splitArray(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentBrand, currentType])

    const changeBrandSort = (brand) => {
        setCurrentBrand(brand);
    }

    const changeCollectionTypeSort = (type) => {
        setCurrentType(type);
    }

    return (
        <Box>
            
            {/*Filter*/}
            <Center>
                <Filter changeBrandSort={changeBrandSort} changeCollectionTypeSort={changeCollectionTypeSort}/>
            </Center>

            <Center>
                <VStack>
                    <Box >
                        {sortedCars[pageNum-1]?.length > 0
                            ? (
                                <SimpleGrid columns={[2, 2, 2, 5]} spacing={10}>
                                    {
                                        sortedCars[pageNum-1].map((car) => (
                                            <CarCard car={car} key={car._id} />
                                        ))
                                    }
                                </SimpleGrid>
                            ) : (
                                <Text align={"center"}>No Cars Found!</Text>

                        )
                        }
                    </Box>

                    {/*Page Selector*/}
                    <HStack>
                        {
                            sortedCars.map((car) => (
                                <Text m={5} sx={pageNum === sortedCars.indexOf(car)+1 ? { color: "primary.blue", fontWeight: "bold" } : { } } key={sortedCars.indexOf(car) + 1} as="button" 
                                onClick={() => {
                                    setPageNum(sortedCars.indexOf(car) + 1);
                                    console.log(sortedCars.indexOf(car) + 1);
                                }}>
                                    {sortedCars.indexOf(car) + 1}
                                </Text>
                            ))
                        }
                    </HStack>
                </VStack>
            </Center>
        </Box>
    );
}

const sortArray = (carsArrayOriginal, currentBrand, currentType) => {
    let temp = [];

    if (currentBrand.length === 0 && currentType.length === 0) { // If no selection
        return carsArrayOriginal;
    } else if (currentType.length === 0) { // If no type selected
        for (var i=0; i<carsArrayOriginal.length; i++) {
            for (var k=0; k<currentBrand.length; k++) {
                if (carsArrayOriginal[i].brand === currentBrand[k]) {
                    temp.push(carsArrayOriginal[i]);
                }
            }
        }
        return temp;
    } else if (currentBrand.length === 0) { // If no brand selected
        for (var l=0; l<carsArrayOriginal.length; l++) {
            for (var m=0; m<currentType.length; m++) {
                if (carsArrayOriginal[l].type === currentType[m]) {
                    temp.push(carsArrayOriginal[l]);
                }
            }
        }
        return temp;
    } else { // If type and brand selected
        let sortedArr = [];

        for (var g=0; g<carsArrayOriginal.length; g++) {
            for (var n=0; n<currentType.length; n++) {
                for (var c=0; c<currentBrand.length; c++) {
                    if (carsArrayOriginal[g].type === currentType[n] && carsArrayOriginal[g].brand === currentBrand[c]) {
                        sortedArr.push(carsArrayOriginal[g]);
                    }
                }
                
            }
        }
        temp = sortedArr;
        return temp;
    }
} 

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

const splitArray = (a) => {
    // How many cards on each page
    var arrays = [], size = 15;
    
    while (shuffle(a).length > 0)
    arrays.push(a.splice(0, size));

    return arrays;

}

export default CarsGrid;