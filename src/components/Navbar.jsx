import React from "react";
import { Container, Image, Box, Button, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons"
export const NavBar = () => {
    return (
        <>
        <Container marginBottom={"40px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} maxW="82%" border={"2px solid black"}>
        <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} width={"30%"}>
            <Image width={"200px"} src={require('../TravelMojo_logo.png')} />
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    More Travel
                </MenuButton>
                <MenuList>
                    <MenuItem>Stays</MenuItem>
                    <MenuItem>Flights</MenuItem>
                    <MenuItem>Car</MenuItem>
                    <MenuItem>Packages</MenuItem>
                    <MenuItem>Holiday Activities</MenuItem>
                    <MenuItem>Deals</MenuItem>
                    <MenuItem>Group Meetings</MenuItem>
                    <MenuItem>Mobile</MenuItem>
                </MenuList>
            </Menu>
        </Box>
        <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} width={"30%"} textDecoration={"none"}>
            <Link>English</Link>
            <Link>Support</Link>
            <Link>Trips</Link>
            <BellIcon href="#" />
            <Link>Sign In</Link>
        </Box>
        </Container>
        </>
    );
}