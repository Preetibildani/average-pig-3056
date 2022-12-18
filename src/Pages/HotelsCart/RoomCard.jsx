import {Image,Text, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Icon } from '@chakra-ui/react';
import {MdLocationPin, MdPerson , MdHotTub, MdPool, MdWifi, MdLocalParking, MdFilterVintage, MdSpa, MdRestaurantMenu, MdBorderHorizontal, MdHomeWork, MdBed, MdToys, MdTwoWheeler, MdAirlineSeatIndividualSuite, MdDining } from "react-icons/md";


export const RoomCard = ({img,name,price,area,index,bill}) =>{
    return <Card maxW='sm'>
    <CardBody>
      <Image
        src={img}
        alt='Rooms Pic'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <ul style={{listStyleType:'none'}}>
          <li><Icon as={MdBorderHorizontal} />       {area}</li>
          <li><Icon as={MdHomeWork} />       City view</li>
          <li><Icon as={MdAirlineSeatIndividualSuite} />       Sleeps 3</li>
          <li><Icon as={MdBed} />       1 King Bed</li>
          <li><Icon as={MdWifi} />       Free WiFi</li>
          <li><Icon as={MdTwoWheeler} />       Free self-parking</li>
          <li><Icon as={MdDining} />       10% off food and beverage </li>
          <li><Icon as={MdSpa} />       15% off spa</li>
        </ul>
        <Heading size='md'>${Number(bill)+Number(price)}</Heading>
          
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter style={{display:'flex',justifyContent:'space-around'}}>
      <Text color='blue'><a>Price details </a></Text>
        <Button variant='solid' colorScheme='blue'>
        Reserve
        </Button>
    </CardFooter>
  </Card>
}