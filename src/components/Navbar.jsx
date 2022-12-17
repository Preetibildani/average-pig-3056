import React from "react";
import { Link } from "react-router-dom"
import { Container,Divider, Text, Image, Box, Button, Menu, MenuButton, MenuItem, MenuList, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    List } from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { FaBuilding, FaPlane, FaCar, FaShoppingBag, FaGlobe } from "react-icons/fa";
export const NavBar = () => {
    return (
        <>
        <Container marginBottom={"40px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} maxW="82%">
        <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} width={"30%"}>
        <Link to='/'><Image width={"200px"} src={require('../Images/Logo.png')} /></Link>
            <Menu>
                <MenuButton >
                    More Travel <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                    <MenuItem width={"fit-content"} display={"flex"} gap={"10px"}><FaBuilding />  Stays</MenuItem>
                    <MenuItem width={"fit-content"} display={"flex"} gap={"10px"}><FaPlane />Flights</MenuItem>
                    <MenuItem width={"fit-content"} display={"flex"} gap={"10px"}><FaCar />Car</MenuItem>
                    <MenuItem width={"fit-content"} display={"flex"} gap={"10px"}><FaShoppingBag />Packages</MenuItem>
                    <MenuItem>Holiday Activities</MenuItem>
                    <MenuItem>Deals</MenuItem>
                    <MenuItem>Group Meetings</MenuItem>
                    <MenuItem>Mobile</MenuItem>
                </MenuList>
            </Menu>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"30%"} textDecoration={"none"}>
            <Link>English</Link>
            <Link>Support</Link>
            <Link to="/">Trips</Link>
            <Link>Notifications</Link>
            <Popover>
                <PopoverTrigger>
                    <Button>Sign In</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} width={"300px"}>
                            <Image src="https://a.travel-assets.com/pricing-claim/sparkle_white.svg" width={"200px"} height={"200px"} />
                            <Text>Save an average of 15% on thousands of hotels when you're signed in</Text>
                                <List>
                                <Divider orientation='horizontal' colorScheme={"gray"} marginBottom={"20px"} marginTop={"20px"} />
                                <Link to='/adminlogin'>Admin Sign In</Link>
                                <Divider orientation='horizontal' colorScheme={"gray"} marginBottom={"20px"} marginTop={"20px"} />
                                <Link to='/login' p>User Sign In</Link>
                                <Divider orientation='horizontal' colorScheme={"gray"} marginBottom={"20px"} marginTop={"20px"} />
                                <Link to='/SignUp'>Create Account</Link>
                                </List>
                            
                        </Box>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
        </Container>
        <Divider orientation='horizontal' colorScheme={"gray"} />
        </>
    );
}