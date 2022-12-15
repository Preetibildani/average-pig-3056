import {Container, SimpleGrid, Box, Link, Text, Card, Image} from "@chakra-ui/react";
export const Footer1 = () => {

const LinkStyle = {
    fontSize : "small"
}
const BoxStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "left"
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
<Container border = {"2px solid black"} maxW = '100%'>
    <Image width={"120px"} marginLeft = {"10%"} src="data:image/png;base64,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" />
<SimpleGrid columns={[2, 2, 4]} rows = {[2, 2, 1]} boxSize = {"80%"} margin = {"auto"} spacingY = "50px">
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
<Card display={"flex"} flexDirection = {"column"} width = {"fit-content"} marginLeft = {"10%"}>
<Image src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png"  width = {"200px"} />
<Text style={LinkStyle}>&#169; 2022 TravelMojo, Inc., an TravelMojo Group company. All rights reserved. TravelMojo and the Airplane Logo are trademarks or registered trademarks of TravelMojo, Inc.</Text>
</Card>
</Container>
</>);
}