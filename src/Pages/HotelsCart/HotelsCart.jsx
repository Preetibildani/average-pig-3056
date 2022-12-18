import { Box, Button, Input,
    Image ,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    ButtonGroup,
    Icon,
    InputLeftElement,
    InputGroup,
    CardBody,
    Stack,
    Heading,
    Divider,
    CardFooter,
    Card,
    CardHeader,
    SimpleGrid,
    Select, 
    HStack,
    Link ,
    StackDivider ,
 } from '@chakra-ui/react';
import './HotelsCart.css';
import React, { useEffect, useState } from 'react';
// import {  MdSettings } from 'react-icons/md';
import { PhoneIcon ,  } from '@chakra-ui/icons';
import {MdLocationPin, MdPerson , MdHotTub, MdPool, MdWifi, MdLocalParking, MdFilterVintage, MdSpa, MdRestaurantMenu, MdNetworkWifi, MdCommute, MdDining, MdDataExploration, MdDoneAll, MdFamilyRestroom, MdAtm, MdPeople, MdBed, MdBathtub, MdStar, MdCleaningServices, MdCheck, MdPermContactCalendar } from "react-icons/md";
import axios from 'axios';
import { RoomCard } from './RoomCard';
import { HotelCartLists } from './HotelCartLists';
import { NavBar } from '../../components/Navbar';
import Footer1 from '../../components/footer-chakra';
import { Navigate } from 'react-router-dom';

const roomsArr = [
    {
        img:`https://images.trvl-media.com/hotels/6000000/5310000/5309200/5309112/704b30c0.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium`,
        name:`Deluxe Room`,
        price:500,
        area:'398 sq ft'
    },
    {
        img:`https://images.trvl-media.com/hotels/6000000/5310000/5309200/5309112/dfe3e93e.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium`,
        name:`Premier Room`,
        price:550,
        area:'420 sq ft'
    },
    {
        img:`https://images.trvl-media.com/hotels/6000000/5310000/5309200/5309112/282b59b7.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium`,
        name:`Club Room (The Club Life with Cocktail Hours)`,
        price:580,
        area:'420 sq ft'
    },
    {
        img:`https://images.trvl-media.com/hotels/6000000/5310000/5309200/5309112/bb93f14d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium`,
        name:`Club Balcony Room with Cocktail Hours`,
        price:800,
        area:'431 sq ft'
    },
    {
        img:`https://images.trvl-media.com/hotels/6000000/5310000/5309200/5309112/cea631ee.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium`,
        name:`Deluxe Suite with Cocktail hours`,
        price:1000,
        area:'Deluxe Suite with Cocktail hours'
    },
    {
        img:`https://images.trvl-media.com/hotels/6000000/5310000/5309200/5309112/716e72f6.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium`,
        name:`Executive Suite with Cocktail hours and Butler Service`,
        price:1600,
        area:'850 sq ft'
    },
]

const cleanArr = [
    {
        icon:MdCleaningServices,
        head:'ENHANCED CLEANLINESS MEASURES',
        list:[
            'Disinfectant is used to clean the property',
'High-touch surfaces are cleaned and disinfected',
'Sheets and towels are washed at 60°C or hotter',
'Guest accommodation is sealed after cleaning',
'Follows the industry cleaning and disinfection practices of Bureau Veritas (third-party expert - Global)',
        ]
    },
    {
        icon:MdPermContactCalendar,
        head:'CHECK-IN',
        list:[
            'Contactless social distancing and check-out',
'Cashless transactions are available for all charges at the property',
'Guest rooms kept vacant for 48 hours between stays',
'Social distancing measures in place',
        ]
    },
    {
        icon:MdCheck,
        head:'SAFETY MEASURES',
        list:[
            'Temperature checks given to staff',
'Temperature checks available for guests',
'Masks available',
'Masks are required at the property',
'Enhanced food service safety measures are in place',
'Reservations are required for the use of certain on-site facilities',
        ]
    },
]

const AmenitiesArr = [
    // {
    //     icon:MdCommute,
    //     head:'',
    //     list:[]
    // },
    {
        icon:MdNetworkWifi,
        head:'Internet',
        list:['Available in all rooms: Free WiFi',
            'Available in some public areas: Free WiFi']
    },
    {
        icon:MdCommute,
        head:'Parking and public transport',
        list:['Free self-parking on site',
            'Free valet parking on site',
            'Wheelchair-accessible parking available',
            '24-hour return airport shuttle (surcharge)',
            'Airport shuttle at scheduled times, on request']
    },
    {
        icon:MdDining,
        head:'Food and drink',
        list:['Buffet breakfast available for a fee daily 7 AM–10:30 AM: INR 1150 per person',
            '2 restaurants and 1 coffee shop/cafe',
            '2 bars/lounges',
            '24-hour room service']
    },
    {
        icon:MdDining,
        head:'Restaurants on site',
        list:['Buffet breakfast available for a fee daily 7 AM–10:30 AM: INR 1150 per person',
            '2 restaurants and 1 coffee shop/cafe',
            '2 bars/lounges',
            '24-hour room service']
    },
    {
        icon:MdDataExploration,
        head:'Things to do',
        list:['Fitness centre',
            'Full-service spa',
            'Outdoor pool']
    },
    {
        icon:MdFamilyRestroom,
        head:'Family friendly',
        list:['Babysitting (surcharge)',
            'Free cots/infant beds',
            'Laundry facilities',
            'Outdoor pool',
            'Pool gate',
            'Rollaway/extra beds (surcharge)']
    },
    {
        icon:MdAtm,
        head:'Conveniences',
        list:['ATM/banking services',
        'Ballroom',
        'Banquet hall',
        'Lift',
        'Front-desk safe',
        'Newspapers in reception']
    },
    {
        icon:MdPeople,
        head:'Guest services',
        list:[
            '24-hour front desk',
'Change of bedsheets (on request)',
'Change of towels (on request)',
'Concierge services',
'Daily housekeeping',
'Dry-cleaning service',
'Laundry facilities',
'Luggage storage',
'Tour/ticket assistance',
'Turndown service',
        ]
    },
    {
        icon:MdBed,
        head:'Bedroom',
        list:[
            'Air conditioning',
'Bed sheets',
'Down duvet',
'Free cots/infant beds',
'Memory-foam mattress',
'Pillow menu',
'Premium bedding',
'Rollaway/extra beds (surcharge)',
        ]
    },
    {
        icon:MdBathtub,
        head:'Bathroom',
        list:[
            'Dressing gowns',
'Deep-soaking bath',
'Designer toiletries',
'Hairdryer',
'Private bathroom',
'Separate bath and shower',
'Shampoo',
'Soap',
'Toilet paper',
'Towels',
'Toothbrush and toothpaste',
        ]
    },
    {
        icon:MdSpa,
        head:'Spa',
        list:['5 treatment rooms',
            'Aromatherapy',
            'Ayurvedic treatments',
            'Body scrubs',
            'Body treatments',
            'Body wraps',
            'Couples treatment room(s)',
            'Detox wraps',
            'Facials',
            'Manicures and pedicures',
            'Massage - deep-tissue',
            'Massage - hot stone',
            'Massage - Swedish',
            'Massage/treatment rooms',
            'Reflexology',
            'Sauna']
    },
    {
        icon:MdDoneAll,
        head:'More',
        list:[
            'Connecting rooms available',
    'Desk',
    'Desk chair',
    'Electrical adapters/chargers',
    'Free newspapers',
    'Iron/ironing board (on request)',
    'Laptop-friendly workspace',
    'Phone',
    'Safe',
    'Slippers',
    'Turndown service',
        ]
    },
]


export  const HotelsCart = () => {
    const [reserveRoom,setReserveRoom] = useState(false);
    const initialFocusRef = React.useRef();
    // const [id,setId] = useState(0);
    const [single,setSingle] = React.useState({});

    const getdata = () =>{
        const user = JSON.parse(localStorage.getItem('hoteldata'));
        setSingle(user);
    }

    React.useEffect(()=>{
        getdata();
    },[])

    if(reserveRoom){
        return <Navigate to='/payment' />
    }

return <div>
    <NavBar/>
    <SimpleGrid
      style={{
        width:'80%',
        margin:'auto' ,
        marginBottom:'30px',
        gridTemplateColumns : '4fr 1fr',
    }}
    // marginTop='-150px'
    >
    <SimpleGrid >
    <Card style={{width:'100%'}} >
                    <CardBody >
                        <div
                         style={{
                            width:'100%',
                            height:'300px',
                            overflow:'hidden'
                        }}
                        >
                        <Image 
                        src={single.img1}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        width="100%"
                        />
                        </div>
                    </CardBody>
            </Card>
        <nav  className='navbar , sections' style={{
            borderBottom:'0.3px solid black'
        }} >
            <ul>
                <li><a href="#Overview">Overview</a></li>
                <li><a href="#Rooms">Rooms</a></li>
                {/* <li><a href="#Location">Location</a></li> */}
                <li><a href="#Amenities">Amenities</a></li>
                <li><a href="#Policies">Policies</a></li>
            </ul>
            <div className='navButton' ><Button onClick={()=>setReserveRoom(true)} colorScheme='blue' marginRight='20px' >Reserve a room</Button></div>
        </nav>
        <section className='sections' id='Overview' style={{lineHeight:'30pt',marginTop:'20px'}}>
            <SimpleGrid
                overflow='hidden'
                variant='outline'
                columns={[1,2,2,2,2]}
                style={{
                    gridTemplateColumns:'3fr 1.5fr'
                }}
                >
                <SimpleGrid>
                    <Button variant='solid' colorScheme='blue' width='150px'>
                        VIP Access
                    </Button>
                    <Heading marginTop='15px' size='md'>{single.heading1}</Heading>
                    <Text size='sm' >5-star property</Text>
                    <Text py='2'color='green' >Fully refundable</Text>
                    <Heading size='sm'>{single.rating} {single.review}</Heading>
                    <Link color='blue'>See all 180 reviews</Link>
                    <Heading py='2' size='sm'>Popular amenities</Heading>
                    <SimpleGrid  style={{
                    lineHeight:'36pt'
                }}  columns={[1,1,2,2,2]} gridTemplateColumns='1fr 1fr'>
                        <p><Icon as={MdPool} boxSize={6} /> Pool</p>
                        <p><Icon as={MdWifi} boxSize={6} /> Free WiFi</p>
                        <p><Icon as={MdLocalParking} boxSize={6} /> Parking included</p>
                        <p><Icon as={MdFilterVintage} boxSize={6} /> Air conditioning</p>
                        <p><Icon as={MdSpa} boxSize={6} /> Spa</p>
                        <p><Icon as={MdRestaurantMenu} boxSize={6} /> Restaurant</p>

                    </SimpleGrid>
                </SimpleGrid>
                <Image
                    objectFit='cover'
                    style={{
                        height:'100%',
                        overflow:'hidden'
                    }}
                    src='https://images.trvl-media.com/lodging/6000000/5310000/5309200/5309112/ff3bccf1.jpg?impolicy=resizecrop&rw=297&ra=fit'
                    alt='Hotels'
                />
            </SimpleGrid>
        </section>
        <section  className='sections' id='Rooms'  style={{
            lineHeight:'23pt'
        }}>
            <Heading size='lg'>Choose your room</Heading>
            <SimpleGrid className='sections' style={{
                gap:'20px'
            }} columns={[1,1,2,2,2]}>
                {
                    roomsArr.map((el,i)=>{
                        return <RoomCard key={i} {...el} index={i} bill={single.price2} />
                    })
                }
            </SimpleGrid>
        </section>
        <section  className='sections' id='Location' >
            <Card>
                <CardHeader>
                    <Heading py='2' size='lg'>About this property</Heading>
                    <Heading py='2' size='sm'>{single.heading1}</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Other perks include:
                        </Heading>
                        <Text pt='2' py='2' fontSize='sm'>At {single.heading1} {single.city} , you can look forward to a round-trip airport shuttle, a terrace and a coffee shop/cafe. Treat yourself to a manicure/pedicure, reflexology or a body scrub at The Spa, the on-site spa. Enjoy international cuisine and more at the two on-site restaurants. Stay connected with free in-room WiFi, and guests can find other amenities, such as a garden and dry cleaning/laundry services.</Text>
                        <ul style={{paddingLeft:'20px'}}>
                            <li>An outdoor pool</li>
                            <li>Free self-parking and valet parking</li>
                            <li>Buffet breakfast (surcharge), concierge services and a ballroom</li>
                            <li>A front desk safe, newspapers in the lobby and a 24-hour front desk</li>
                            <li>Guest reviews say good things about the dining options and helpful staff</li>
                        </ul>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Room features
                        </Heading>
                        <Text pt='2' fontSize='sm'>All 480 rooms have comforts, such as 24-hour room service and premium bedding, in addition to perks, such as pillow menus and laptop-friendly workspaces. Guest reviews speak well of the overall comfort, size rooms at the property.</Text>
                    </Box>
                    <Box>
                        <Heading py='2' size='xs' textTransform='uppercase'>
                        Extra amenities include:
                        </Heading>
                        <ul style={{paddingLeft:'20px'}}>
                            <li>Memory foam beds, down duvets and rollaway/extra beds (surcharge)</li>
                            <li>Bathrooms with designer toiletries and deep-soaking baths</li>
                            <li>43-inch LED TVs with premium channels</li>
                            <li>Wardrobes/cupboards, free infant beds and coffee/tea makers</li>
                        </ul>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>Awards and affiliations</Heading>
                        <Text pt='2' fontSize='sm'>The property is a member of Preferred Hotels & Resorts.</Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>Languages</Heading>
                        <Text pt='2' fontSize='sm'>English, Hindi</Text>
                    </Box>
                    </Stack>
                </CardBody>
            </Card>
        </section>
        <section  className='sections'>
            <Card>
                <CardHeader>
                    <Heading py='1' size='lg'>Cleaning and safety practices</Heading>
                </CardHeader>
                <CardBody>
                    <Stack  divider={<StackDivider />} spacing='4'>
                        {
                            cleanArr.map((el,i)=>{
                                return <HotelCartLists key={i} {...el} />
                            })
                        }
                    </Stack>
                </CardBody>
            </Card>
        </section>
        <section  className='sections' id='Amenities'>
        <Card>
                <CardHeader>
                    <Heading py='1' size='lg'>Amenities</Heading>
                </CardHeader>
                <CardBody>
                    <SimpleGrid columns={[1,1,2,2,2]}>
                        {
                            AmenitiesArr.map((el,i)=>{
                                return <HotelCartLists key={i} {...el} />
                            })
                        }
                    </SimpleGrid>
                </CardBody>
            </Card>
        </section>
        <section  className='sections' id='Policies' >
        <Card>
                <CardHeader>
                    <Heading size='lg'>Policies</Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Special check-in instructions
                        </Heading>
                        <Text pt='2' fontSize='sm'>This property offers transfers from the airport (surcharges may apply); guests must contact the property with arrival details before travel, using the contact information on the booking confirmation <br/>
                            Front desk staff will greet guests on arrival<br/>
                            To register at this property, guests who are Indian citizens must provide a valid photo identity card issued by the Government of India; travelers who are not citizens of India must present a valid passport and visa.<br/>
                            Per the property, all staff members at this property are fully vaccinated against COVID-19.<br/>
                            This property requires that all guests have the Aarogya Setu mobile application on their phone. Guests will be asked to present the mobile application at the time of check-in.
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>Pets</Heading>
                        <Text pt='2' fontSize='sm'>No pets or service animals allowed</Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>Children and extra beds</Heading>
                        <Text pt='2' fontSize='sm'>Children are welcome <br/>
1 child, up to the age of 5 years, can stay for free if using existing beds when occupying the parent or guardian's room<br/>
Rollaway/extra beds are available for INR 1800 per night.<br/>
Free cots are available on request at the property</Text>
                    </Box>
                    </Stack>
                </CardBody>
            </Card>
        </section>
    </SimpleGrid>
    <SimpleGrid bg='yellow.100' style={{
        position:'sticky'
    }} >
        <Image width='100%' src='https://tpc.googlesyndication.com/simgad/7634118557413064762?' />
        <Image width='100%' src='https://tpc.googlesyndication.com/simgad/7634118557413064762?' />
        <Image width='100%' src='https://tpc.googlesyndication.com/simgad/7634118557413064762?' />
        <Image width='100%' src='https://tpc.googlesyndication.com/simgad/7634118557413064762?' />
        <Image width='100%' src='https://tpc.googlesyndication.com/simgad/7634118557413064762?' />
        <Image width='100%' src='https://tpc.googlesyndication.com/simgad/7634118557413064762?' />
        <Image width='100%' src='https://tpc.googlesyndication.com/simgad/7634118557413064762?' />
        <Image width='100%' src='https://tpc.googlesyndication.com/simgad/7634118557413064762?' />
        <Image width='100%' src='https://tpc.googlesyndication.com/simgad/7634118557413064762?' />
     </SimpleGrid>
    </SimpleGrid>
    <Footer1/>
</div>
}