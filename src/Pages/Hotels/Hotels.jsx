import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import styles from "./Hotels.css";
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// import{Box} from "chakra-ui"
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import Map from "./Map";
import Filter from "./Filter";
// import Map from "./Map";

// m={2} refers to the value of `theme.space[2]`

const Hotels = () => {
  const [data, setData] = useState([]);
  const value = "Delhi";
  const filterTitle = {
    Delhi: [
      {
        popular: [
          "Delhi (DEL-Indira Gandhi Intl.)",
          "Free airport shuttle",
          "Breakfast included",
          "Free Canacelation",
          "Hotel Resort",
        ],
     
     
        neighbour: [
          "Delhi (and vicinity)",
          "Delhi (DEL-Indira Gandhi Intl.)",
          "Aerocity",
          "Connaught Place",
          "Mahipalpur",
          "Mayur Vihar",
          "Noida",

          "Dwarka",

          "Saket",

          "Chanakyapuri",

          "Paharganj",
          "Nehru Place",

          "Okhla Phase",

          "Rajouri Garden",
          "Vasant Kunj",

          "Shivaji Stadium Station",

          "Indirapuram",

          "Karol Bagh",

          "Rohini",

          "Chhatarpur",
        ],
      },
    ],
    Goa:[
      {
      "popular":[
        "Ocean view",

"Breakfast included",

"Pool",

"Hotel",
"Genoa Historical Centre"
      ],
  
  "neighbour":[
 "   Genoa",

"Genoa Historical Centre",

"Carignano",

"San Teodoro",

"Prè",

"Voltri",

"San Vincenzo",

"Pegli",

"Centro Est",

"Medio Ponente",

"Medio Levante",

"Centro Ovest",

"Ponente",

"Molassana",

"Boccadasse",

"Foce",

"Castelletto",

"Marassi",

"Nervi",

"Levante"
  ]
}    
  ],
  Mumbai:[
    {
      "popular":[
        "Free airport shuttle",
        
        "Breakfast included",
        
        "Hot tub",
        
        "Free cancellation",
        
        "Mumbai (BOM-Chhatrapati Shivaji Intl.)",
      ],
      "neighbour":[
          "Mumbai(and vicinity)",
          "Mumabi (BOM-Chattrapati Shivaji Intl.)",
          "Colaba",
          "Malad",
          "Thane",
          "Bandra",
          " Virar",
          "Kamathipura",
          "Chattrapati Shivaji Mhahraj Terminal",
          "Navi Mumbai",
          "Powai",
          "Goregaon",
          "Uttan",
          "Andheri East",
          "Bandra West",
          "Vashi",
          "Panvel",
          "Dadar",
          "Andheri West",
          

      ]
    },

  ],
  Pune :[{
    "popular":[
      "Hot Tub",
      "Pool",
      "Shivajinagar",
      "Breakfast Included",
      "Cabin",
    ],
"neighbour":[
  "Pune",

  "Shivajinagar",
  
  "Viman Nagar",
  
  "Kharadi",
  
  "Wagholi",
  
  "Model Colony",
  
  "Deccan Gymkhana",
  
  "Koregaon Park",
  
  "Kondhwa",
  
"  Aundh",
  
  "Pimpri Colony",
  
  "Kalyani Nagar",
  
  "Erandwane",
  
"  Undri",
  
 " Katraj",
  
  "Budhwar Peth",
  
  "Magarpatta City",
  
  "Mundhwa",
  
  "Yerawada",
  
  "Swargate",

]
  }
  ]

  };

// For Filter 
const [city,setCity] = useState("")

const filterByCity = (e)=>{
setCity(e.target.value)
}


  const getdata = () => {
    return axios
      .get(`https://api-knw0.onrender.com/hoteldata?city=${value}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  //  getdata()
  useEffect(() => {
    getdata();
  }, []);

  const handleSort = (e) => {
    // let data=e.target.value;
    let selected = e.target.value;
    if (selected === "high") {
      data.sort(function (a, b) {
        if (Number(a.price2) > Number(b.price2)) return 1;
        if (Number(a.price2) < Number(b.price2)) return -1;
        return 0;
      });
      console.log(data);
      setData([...data]);
    }
    if (selected === "low") {
      data.sort(function (a, b) {
        if (Number(a.price2) > Number(b.price2)) return -1;
        if (Number(a.price2) < Number(b.price2)) return 1;
        return 0;
      });
      console.log(data);
      setData([...data]);
    }
  };
  // const room = 1;

const[ price,setPrice] = useState(0);
const handleInput = (e)=>{

  setPrice(e.target.value)
}



  //

  return (
    <Box>
      <Box border="1px solid ">Navigation </Box>
      <Grid
        templateAreas={`
  "a a a a"
  "b f f f"
  "c f f f"
  "d f f f"
  `}
        // gridColumnGap='20px'

        // grid-template-columns="auto auto auto auto auto "
        // justifyContent="center"
        marginLeft="10em"
        gap="px"
        // overflow='visible'
      >
        {/* SEARCH COMPONENT HERE */}
        <GridItem border="1px solid red" area="a">
          <Box>Search Component</Box>
        </GridItem>
        <GridItem w="16.5em" area="b" h="2.3%" mt="3em">
          {/* MAP COMPONENT HERE */}
          <Box boxShadow="xl" w="16em" borderRadius="20px">
            <Map />
          </Box>
        </GridItem>
        <GridItem
          w="20em"
          border="1px solid black"
          area="c"
          h="10%"
          // mt="-145em"
        >
          {/* ANOTHER SERACH COMPONENT */}
          <Box>Another Search</Box>
        </GridItem>

        {/* FILTER */}
        <GridItem border="1px solid green" w="20em" area="d" >
          <Filter title = {filterTitle} city ={value} handleInput = {handleInput} value= {price} fitcity={city} fil = {filterByCity} />
          


        </GridItem>

        {/* HOTELS DATA HERE */}
        {/* <GridItem w='20em' border='1px solid yellow' area='e'>Search Component</GridItem>  */}

        <GridItem gap="20px" className="img-grid" area={"f"} w="58rem">
          <label
            style={{ position: "absolute", right: "32.3em", fontSize: "12px" }}
          >
            {" "}
            Sort By
          </label>
          <Select
            onChange={handleSort}
            width="20em"
            h="3em"
            position="absolute"
            right="120"
            placeholder="RECOMMENDED"
            mb="5em"
          >
            <option value="low">HIGH TO LOW</option>
            <option value="high">LOW TO HIGH</option>
          </Select>
          {price>0 ?data.filter((item)=>Number(item.price2)<=price || item.heading2).map((el, index) => {
            return (
              <Flex key={el.id} boxShadow="lg" borderRadius="20px" mt="2.8em">
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
                <Box ml={2} w="60%">
                  <Heading fontWeight="500" fontSize="20px">
                    {el.heading1}
                  </Heading>

                  <Text>{el.city}</Text>
                  <Flex gap={3}>
                    <Box w="70%">
                      <Text fontSize={14} color="#343b53">
                        {el.text1}
                      </Text>
                      <Text fontSize={14} color="#343b53">
                        {el.text2}
                      </Text>
                      <Text
                        color="teal"
                        fontSize={13.5}
                        fontWeight="semi-bold"
                        mt="1"
                      >
                        {el.text3}
                      </Text>
                      <Text color="teal" fontSize={13.5} fontWeight="semi-bold">
                        {el.text4}
                      </Text>
                      <Box>
                        <Text color="#343b53 " fontWeight="bold" fontSize={13}>
                          {el.rating} {el.review} {el.no_of_reviews}
                        </Text>
                      </Box>
                    </Box>
                    {el.heading3 && (
                      <Box
                        position="absolute"
                        right={128}
                        border="1px solid"
                        mt="2em"
                        w="12em"
                        textAlign="center"
                        bg="teal"
                        color="white"
                        fontWeight="bold"
                        borderRadius="50px"
                      >
                        <Text fontSize="14px">{el.heading3}</Text>
                      </Box>
                    )}
                    <Box mt={"4em"} position="absolute" right={122}>
                      <Heading fontSize={"20"} mr={2}>
                        {el.price1}
                      </Heading>
                      <Text fontSize="13px" mr="2" textAlign="end">
                        per night{" "}
                      </Text>
                      <Text textAlign="end" mr={2} fontSize="13px">
                        {el.price2} total{" "}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            );
          }):data.map((el, index) => {
              return (
                <Flex key={el.id} boxShadow="lg" borderRadius="20px" mt="2.8em">
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
                  <Box ml={2} w="60%">
                    <Heading fontWeight="500" fontSize="20px">
                      {el.heading1}
                    </Heading>
  
                    <Text>{el.city}</Text>
                    <Flex gap={3}>
                      <Box w="70%">
                        <Text fontSize={14} color="#343b53">
                          {el.text1}
                        </Text>
                        <Text fontSize={14} color="#343b53">
                          {el.text2}
                        </Text>
                        <Text
                          color="teal"
                          fontSize={13.5}
                          fontWeight="semi-bold"
                          mt="1"
                        >
                          {el.text3}
                        </Text>
                        <Text color="teal" fontSize={13.5} fontWeight="semi-bold">
                          {el.text4}
                        </Text>
                        <Box>
                          <Text color="#343b53 " fontWeight="bold" fontSize={13}>
                            {el.rating} {el.review} {el.no_of_reviews}
                          </Text>
                        </Box>
                      </Box>
                      {el.heading3 && (
                        <Box
                          position="absolute"
                          right={128}
                          border="1px solid"
                          mt="2em"
                          w="12em"
                          textAlign="center"
                          bg="teal"
                          color="white"
                          fontWeight="bold"
                          borderRadius="50px"
                        >
                          <Text fontSize="14px">{el.heading3}</Text>
                        </Box>
                      )}
                      <Box mt={"4em"} position="absolute" right={122}>
                        <Heading fontSize={"20"} mr={2}>
                          {el.price1}
                        </Heading>
                        <Text fontSize="13px" mr="2" textAlign="end">
                          per night{" "}
                        </Text>
                        <Text textAlign="end" mr={2} fontSize="13px">
                          {el.price2} total{" "}
                        </Text>
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
