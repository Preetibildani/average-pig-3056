import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import styles from "./Hotels.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// import{Box} from "chakra-ui"
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";

// m={2} refers to the value of `theme.space[2]`

const Hotels = () => {
  const [data, setData] = useState([]);
  const value = "delhi";

  const getdata = () => {
    return axios
      .get(`https://api-knw0.onrender.com/${value}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  //  getdata()
  useEffect(() => {
    getdata();
  }, []);
  const room = 1;

  //

  

  return (
    <Box>
      <Box border="1px solid ">Navigation </Box>
      <Grid
        gridTemplateRows="reapeat(4, 0.1fr)"
        gridTemplateColumns="reapeat(4, 0.1fr)"
        templateAreas={`
  "a a a a"
  "b f f f"
  "c f f f"
  "d f f f"
  `}
        gridRowGap="20px"
        // gridColumnGap='20px'
        minHeight={2}
        // grid-template-columns="auto auto auto auto auto "
        // justifyContent="center"
        marginLeft="10em"
        gap="10px"
        // overflow='visible'
      >
        <GridItem border="1px solid red" area="a">
          <Box>Search Component</Box>
        </GridItem>
        <GridItem w="20em" border="1px solid blue" area="b" h="20%">
          <Box>MAP</Box>
        </GridItem>
        <GridItem
          w="20em"
          border="1px solid black"
          area="c"
          h="10%"
          mt="-115em"
        >
          <Box>Another Search</Box>
        </GridItem>
        <GridItem border="1px solid green" w="20em" area="d" mt="-245em">
          Filter{" "}
        </GridItem>
        {/* <GridItem w='20em' border='1px solid yellow' area='e'>Search Component</GridItem>  */}

        <GridItem gap="20px" className="img-grid" area={"f"} w="58rem">
          {data.map((el, index) => {
            return (
              <Flex key={el.id} boxShadow="lg" borderRadius="20px" mt="20px">
                <Flex alignItems="center">
                  {/* <ChevronLeftIcon fontSize='2xl' borderRadius='50px' bg='black'/> */}
                  <Image
                    // zIndex={1}
                    w="15em"
                    h="12em"
                    borderTopLeftRadius="20px"
                    borderBottomLeftRadius="20px"
                    // border="1px solid"
                    src={el.img1}
                    alt="img"
                  />
                  {/* <ChevronRightIcon fontSize='2xl' borderRadius='50px' bg='black'/> */}
                </Flex>
                <Box  ml={2} w='60%'>
                  <Heading fontWeight="500" fontSize="20px" >
                    {el.heading1}
                  </Heading>

                  <Text>{el.city}</Text>
                  <Flex gap={3}>
                    <Box   w="70%" >
                      <Text fontSize={14} color='#343b53' >{el.text1}</Text>
                      <Text fontSize={14} color='#343b53' >{el.text2}</Text>
                      <Text color="teal" fontSize={13.5} fontWeight='semi-bold' mt='1'>{el.text3}</Text>
                      <Text color="teal" fontSize={13.5} fontWeight='semi-bold'>{el.text4}</Text>
                      <Box>
                        <Text color='#343b53 ' fontWeight='bold'fontSize={13}>
                          {el.rating} {el.review} {el.no_of_reviews}
                        </Text>
                      </Box>
                    </Box>
                    {el.heading3 && (
                      <Box
                      position='absolute'                    
                      right={128}
                      border="1px solid"
                        mt="2em"
                        w="11em"
                        
                        textAlign="center"
                        bg="teal"
                        color="white"
                        fontWeight="bold"
                        borderRadius="50px"
                      >
                        <Text fontSize="14px" >{el.heading3}</Text>
                       
                      </Box>
                    )}
                    <Box mt={'4em'} position='absolute' right={122}>

                    <Heading fontSize={'20'} mr={2}>{el.price1}</Heading>
                    <Text fontSize='13px' mr='2'textAlign='end'>per night </Text>
                    <Text textAlign='end' mr={2} fontSize='13px'>{el.price2} total </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            );
          })}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Hotels;
