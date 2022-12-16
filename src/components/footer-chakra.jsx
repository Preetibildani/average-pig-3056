import {Container, SimpleGrid, Box, Link, Text, Card, Image, Divider} from "@chakra-ui/react";
export const Footer1 = () => {

const LinkStyle = {
    fontSize : "small"
}
const BoxStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    lineHeight: "30px"
}
    return (
    <>
        <Card height = {["250px", "300px", "400px"]} marginBottom = {"30px"} >
            <Image src="https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg" width={"80%"} height = {"100%"} margin = {"auto"} borderRadius = {"20px"} />
            <Box position={"absolute"} left = {"12%"} top = {"80%"} textAlign = {"left"} textColor = {"white"} fontWeight = {"medium"}>
            <Text>Plan Ahead and Save</Text>
            <Text>Book 60 days in advance for 20% off select stays</Text>
            </Box>
        </Card>
<Container marginTop={"60px"} maxW = '100%'>
    <Image width={"200px"} marginLeft = {"10%"} src={require('../TravelMojo_logo.png')} />
<SimpleGrid columns={[2, 2, 4]} rows = {[2, 2, 1]} boxSize = {"80%"} margin = {"auto"} spacingY = "50px" marginBottom={"40px"} >
<Box style = {BoxStyle}> 
    <Text>Company</Text>
    <Link style={LinkStyle}>About us</Link>
    <Link style={LinkStyle}>Jobs</Link>
    <Link style={LinkStyle}>List your property</Link>
    <Link style={LinkStyle}>Partnerships</Link>
</Box >
<Box style = {BoxStyle}>
    <Text>Explore</Text>
    <Link style={LinkStyle}>India Travel Guide</Link>
    <Link  style={LinkStyle}>Hotels in India</Link>
    <Link  style={LinkStyle}>Holiday Rentals in India</Link>
    <Link  style={LinkStyle}>Domestic Flights</Link>
    <Link  style={LinkStyle}>Car Hire in India</Link>
    <Link  style={LinkStyle}>All Accomodation Types</Link>
    <Link  style={LinkStyle}>Travel Blog</Link>
</Box >
<Box style = {BoxStyle}>
    <Text>Policy</Text>
    <Link  style={LinkStyle}>Privacy Statement</Link>
    <Link  style={LinkStyle}>Terms of Use</Link>
    <Link  style={LinkStyle}>Vrbo Terms & Conditions</Link>
</Box >
<Box style = {BoxStyle}>
    <Text>Help</Text>
    <Link  style={LinkStyle}>Support</Link>
    <Link  style={LinkStyle}>Change or Cancel your booking</Link>
    <Link  style={LinkStyle}>Refund Process and Timelines</Link>
    <Link  style={LinkStyle}>Book a flight using an airline credit</Link>
    <Link  style={LinkStyle}>International Travel Documents</Link>
</Box >
</SimpleGrid>
<Divider orientation='horizontal' colorScheme={"gray"} width = {" 80%"} margin = {"auto"} />
<Card display={"flex"} flexDirection = {"column"} width = {"fit-content"} marginLeft = {"10%"} marginTop = {"40px"}>
<Image src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png"  width = {"200px"} />
<Text style={LinkStyle}>&#169; 2022 TravelMojo, Inc., an TravelMojo Group company. All rights reserved. TravelMojo and the Airplane Logo are trademarks or registered trademarks of TravelMojo, Inc.</Text>
</Card>
</Container>
</>);
}