import React from "react";
import {
    Container,
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Input,
    InputGroup,
    InputLeftAddon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Portal,
    useMediaQuery,
    Flex,
    Text,
    HStack,
    Spinner,
  } from "@chakra-ui/react";
  import { ChevronDownIcon } from '@chakra-ui/icons';
  import { useState, useEffect } from "react";
    import { Link, useNavigate } from "react-router-dom";
    import { BoxShadow, hoverColor } from "./box_shadow";
 const Tabs_Homepage = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
    const [isLargerThan492] = useMediaQuery("(min-width: 492px)");

  const Stays = () => {
      const [stayData, setStayData] = useState({
        city: "",
        checkin: "",
        checkout: "",
        room: 1,
        adult: 1,
        children: 1,
      });
  
      const onChangeInput = (e) => {
          const { id, value } = e.target;
          setStayData({ ...stayData, [id]: value });
        };
    
        const onIncrementCounter = (e) => {
          let { id, value } = e.target;
          if (value >= 10) {
            return false;
          }
          value = parseInt(value);
          console.log(value, typeof value);
          setStayData({ ...stayData, [id]: value + 1 });
        };
        
        const onDecrementCounter = (e) => {
          let { id, value } = e.target;
          if (
            (id === "room" && stayData.room <= 1) ||
            (id === "adult" && stayData.adult <= 1)
          ) {
            return false;
          }
          if (value <= 0) {
            return false;
          }
          value = parseInt(value);
          setStayData({ ...stayData, [id]: value - 1 });
        };
    
        const navigate = useNavigate();
        const redirect = (e) => {
          localStorage.setItem("staySearch", JSON.stringify(stayData));
          console.log(`redirecting to /stays/${stayData.city}`);
          navigate(`/hotels`);
        };
    
      return(
          <>
               <Flex
            flexWrap="wrap"
            justify="space-between"
            gap="2"
            w={isLargerThan768 ? "50%" : "90%"}
          >
            <InputGroup>
              <InputLeftAddon children={isLargerThan492 ? "Going to" : "GT"} />
              <Input
                value={stayData.city}
                type="text"
                id="city"
                onChange={(e) => {
                  onChangeInput(e);
                }}
                placeholder="Enter a location e.g.Goa,Delhi,Mumbai,Pune"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children={isLargerThan492 ? "Check-in" : "CI"} />
              <Input
                value={stayData.checkin}
                id="checkin"
                onChange={(e) => {
                  onChangeInput(e);
                }}
                type="date"
                placeholder="Basic usage"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children={isLargerThan492 ? "Check-out" : "CO"} />
              <Input
                value={stayData.checkout}
                id="checkout"
                onChange={(e) => {
                  onChangeInput(e);
                }}
                type="date"
                placeholder="Basic usage"
              />
            </InputGroup>
            <InputGroup>
              <Popover>
                <PopoverTrigger>
                  <Button>
                    Travellers :-{" "}
                    {isLargerThan492
                      ? ` ${stayData.room} room , ${
                          stayData.adult + stayData.children
                        } travellers`
                      : `${stayData.room}R ,  ${
                          stayData.adult + stayData.children
                        }T`}
                        <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Travellers</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                     
                      <Flex align="center" gap="4" justify="space-between">
                        <Text>Adults </Text>
                        <HStack w="150px" m={2}>
                          <Button
                            id="adult"
                            value={stayData.adult}
                            onClick={(e) => {
                              onIncrementCounter(e);
                            }}
                          >
                            +
                          </Button>
                          <Input m={2} value={stayData.adult} readOnly={true} />
                          <Button
                            id="adult"
                            value={stayData.adult}
                            onClick={(e) => {
                              onDecrementCounter(e);
                            }}
                          >
                            -
                          </Button>
                        </HStack>
                      </Flex>
                      <Flex align="center" gap="4" justify="space-between">
                        <Text>Children</Text>
                        <HStack w="150px" m={2}>
                          <Button
                            id="children"
                            value={stayData.children}
                            onClick={(e) => {
                              onIncrementCounter(e);
                            }}
                          >
                            +
                          </Button>
                          <Input
                            m={2}
                            value={stayData.children}
                            readOnly={true}
                          />
                          <Button
                            id="children"
                            value={stayData.children}
                            onClick={(e) => {
                              onDecrementCounter(e);
                            }}
                          >
                            -
                          </Button>
                        </HStack>
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
            </InputGroup>
          </Flex>
          <Button
            colorScheme="blue"
            onClick={(e) => {
              console.log(stayData);
              redirect(e);
            }}
          >
            Search
          </Button>
        </>
      );
    };
    const Packages = () => {
      return (
        <>
          <Flex
            flexWrap="wrap"
            justify="space-between"
            gap="2"
            w={isLargerThan768 ? "50%" : "90%"}
          >
            <InputGroup>
              <InputLeftAddon
                children={isLargerThan492 ? "Leaving from" : "LF"}
              />
              <Input placeholder="Enter a location" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children={isLargerThan492 ? "Going to" : "GT"} />
              <Input placeholder="Enter a location" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children={isLargerThan492 ? "Check-in" : "CI"} />
              <Input type="date" placeholder="Basic usage" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children={isLargerThan492 ? "Check-out" : "CO"} />
              <Input type="date" placeholder="Basic usage" />
            </InputGroup>
          </Flex>
          <Button colorScheme="blue">Search</Button>
        </>
      );
    };
  
    const Cars = () => {
      return (
        <>
          <Flex
            flexWrap="wrap"
            justify="space-between"
            gap="2"
            w={isLargerThan768 ? "50%" : "90%"}
          >
            <InputGroup>
              <InputLeftAddon children={isLargerThan492 ? "Pick-up" : "PL"} />
              <Input placeholder="Enter a location" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                children={isLargerThan492 ? "Pick-up date" : "PD"}
              />
              <Input type="date" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                children={isLargerThan492 ? "Drop-off date" : "DD"}
              />
              <Input type="date" placeholder="Basic usage" />
            </InputGroup>
          </Flex>
          <Button colorScheme="blue">Search</Button>
        </>
      );
    };
  
    const Flights = () => {
      return (
        <>
          <Flex
            flexWrap="wrap"
            justify="space-between"
            gap="2"
            w={isLargerThan768 ? "50%" : "90%"}
          >
            <InputGroup>
              <InputLeftAddon
                children={isLargerThan492 ? "Leaving from" : "LF"}
              />
              <Input placeholder="Enter a location" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children={isLargerThan492 ? "Going to" : "GT"} />
              <Input placeholder="Enter a location" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children={isLargerThan492 ? "Check-in" : "CI"} />
              <Input type="date" placeholder="Basic usage" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children={isLargerThan492 ? "Check-out" : "CO"} />
              <Input type="date" placeholder="Basic usage" />
            </InputGroup>
          </Flex>
          <Button colorScheme="blue">Search</Button>
        </>
      );
    };
    const TabSection = ({ name }) => {
      return (
        <Tab
          _selected={{
            boxShadow: "none",
            borderBottom: "2px solid blue",
            color: hoverColor,
          }}
          _hover={{ borderBottom: "2px solid green", color: hoverColor }}
        >
          {name}
        </Tab>
      );
    };
  
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, []);

    return (
      <Container maxW="container.xl" marginBottom={"50px"}>
        {isLoading ? (
          <Flex justify="center" mt={"5"}>
            <Spinner
              thickness="5px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#3182ce"
              size="lg"
            />
          </Flex>
        ) 
         : (
          <>
            <Box
              border="1px"
              borderColor="gray.200"
              borderRadius="10px"
              overflow={"hidden"}
              marginTop="50"
              boxShadow={BoxShadow}
            >
              <Tabs align="center">
                <TabList w="90%">
                  <Flex
                    flexWrap="wrap"
                    justify="center"
                    // backgroundColor= 'gray'
                    borderRadius="10px"
                    gap={isLargerThan768 ? "2" : null}
                  >
                    <TabSection name={"Stays"} />
                    <TabSection name={"Flights"} />
                    <TabSection name={"Cars"} />
                    <TabSection name={"Packages"} />
                    <TabSection name={"Things to do"} />
                  </Flex>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Stays />
                  </TabPanel>
                  <TabPanel>
                    <Flights />
                  </TabPanel>
                  <TabPanel>
                    <Cars />
                  </TabPanel>
                  <TabPanel>
                    <Packages />
                  </TabPanel>
                  <TabPanel>
                    <Stays />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            </>
            )
            
         }</Container>)}
 
export default Tabs_Homepage;