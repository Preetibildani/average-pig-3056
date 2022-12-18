import React from "react";
import { Link } from "react-router-dom"
import { Container, Show, Divider, Text, Image, Box, Button, Menu, MenuButton, MenuItem, MenuList, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    List } from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { FaBuilding, FaPlane, FaCar, FaShoppingBag, FaGlobe, FaUser,FaBell  } from "react-icons/fa";
export const NavBar = () => {
    return (
        <>
        <Container marginBottom={"40px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} maxW="82%">
        <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} width={"30%"}>
        <Link to='/'><Image width={"200px"} src={require('../Images/Logo.png')} /></Link>
        <Show breakpoint="(min-width: 920px)">
            <Menu>
                <MenuButton width={"200px"} boxSizing={"border-box"}>
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
            </Show>
        </Box>
        <Show breakpoint="(min-width: 920px)">
        <Box display={"flex"} gap={"7%"} alignItems={"center"} width={"35%"} textDecoration={"none"}>
            <Link>English</Link>
            <Link>Support</Link>
            <Link to="/">Trips</Link>
            <Link><FaBell size={"22px"} /></Link>
            <Popover>
                <PopoverTrigger>
                    <Button background={"transparent"}>Sign In</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
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
        </Show>
        <Show breakpoint="(max-width: 919px)">
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"30%"}>
            <Link><FaShoppingBag  size={"40%"} /></Link>
            <Link><FaBell size={"40%"} /></Link>
            <Popover>
                <PopoverTrigger>
                    <Link><FaUser size={"40%"}  /></Link>
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
        </Show>
        </Container>
        <Divider orientation='horizontal' colorScheme={"gray"} />
        </>
    );
}