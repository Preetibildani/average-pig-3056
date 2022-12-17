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
    Select ,
 } from '@chakra-ui/react';
import './Hotels.css';
import React from 'react';
// import {  MdSettings } from 'react-icons/md';
import { PhoneIcon ,  } from '@chakra-ui/icons';
import {MdLocationPin, MdPerson } from "react-icons/md";
const footerArrHotels = [
    {
        header:`Tips for Booking a Hotel `,
        para:`No holiday is complete without the right hotel. If you're looking to plan an unforgettable trip, you'll need to find the right place to stay. Learn how you can book the right hotel for your needs whether you're taking the family on holiday, travelling with someone special or just taking some time away for yourself.`
    },
    {
        header:`How to book a hotel?`,
        para:`When you're looking to book a hotel, we've got you covered. With Expedia, all you have to do is input your travel dates and your destination, and we'll show you some of the best hotels available. You can add additional search filters to sort your results even further whether you're looking for a cheap hotel room or you want to splurge on something more luxurious. You'll find `
    },
    {
        header:`What are the most important things when choosing a hotel?`,
        para:`When you're choosing your hotel, it's important to consider what kind of holiday experience you're looking to enjoy. Family travellers will need to book something with plenty of room, while couples may not need something quite as large. Travelling with your partner, however, may make you more interested in amenities like hot tubs, so be sure to include the appropriate search filters based on the experience you're looking for. You'll find filters for a variety of features and amenities as well as for star ratings, reviews and proximity to certain attractions.`
    },
    {
        header:`How far in advance should I book a hotel?`,
        para:`When booking a hotel, your best bet is to book a little in advance. If you book too far in advance, prices may be higher. Wait too long, however, and prices may also increase. Generally, the sweet spot is around 2 to 3 weeks before your holiday. Every destination is different, but you can start monitoring how prices change up to 40 days in advance. Keep in mind that booking at the last minute can be cheaper than you might think, thanks to hotels being desperate to get their last vacancies filled.`
    },
    {
        header:`How can I find the cheapest hotels?`,
        para:`The cheapest hotels are easy to find if you know what factors you need to consider. The time of year you travel plays a big role, with cheap hotel rooms being more common during the off-season. Additionally, the star rating of the hotel and the kinds of amenities you opt for can all play a big part. Just keep in mind that these are all general trends rather than universal rules. Don't forget that you can sort your search results by price to put the cheapest options at the top of your results.`
    },
    {
        header:`How can I find some of the best deals on hotels?`,
        para:`Hotel deals are easy to find when you use Expedia. All you have to do is implement the necessary search filters when trying to find a hotel for your next holiday. Filters are available for features like being fully refundable and having free cancellation. If you're an Expedia member, you can often find additional discounts that you wouldn't be able to enjoy otherwise. Of course, always remember to sort by price to see the cheapest suitable options that meet your criteria first on the results page.`
    },
    {
        header:`Why should I book a hotel with Expedia?` ,
        para:`Booking with Expedia makes planning a holiday easy. Not only will you be able to search a massive array of hotels with tools that make it easy to narrow down your options, but you can book a flight as well. You may even find additional discounts by booking your hotel and flight together. Additionally, you can become a member and enjoy extra hotel discounts you wouldn't be able to enjoy otherwise. Becoming a member is completely free, so there's no barrier to entry that comes with it.`
    },
    {
        header:`Are hotels fully refundable on Expedia?` ,
        para:`Some hotels on Expedia do offer flexible cancellation policies. You'll be able to see which ones do on your search results page because they'll be labelled as such in green text. Of course, you can always implement the 'fully refundable' search filter to only show results that offer this enticing feature.`
    }
]

const footerArrHotelsValues = {
    sm: '1',
  md: '2',
  lg: '2',
  xl: '2',
  '2xl': '2',
}

export  const Hotels = () => {
    const initialFocusRef = React.useRef();
    const [travellers,setTravellers] = React.useState(2);
    const [room,setRoom] = React.useState(1);

    return <Box style={{
        width:'90%',
        margin:'auto'
    }}>
        <h1 className='h1'>Search hotels</h1>
        <SimpleGrid className='sections' columns={[1,2,3,3,3]} style={{
            gap:'20px'
        }} >
            <InputGroup >
                <InputLeftElement 
                pointerEvents='none'
                children={<Icon as={MdLocationPin} />}
                />
                <Input  className='searhChild'   type='tel' placeholder='Going to' />
            </InputGroup>
            <Input className='searhChild' 
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
            />
            <Popover
            initialFocusRef={initialFocusRef}
            placement='bottom'
            closeOnBlur={false}
            >
                <PopoverTrigger>
                    <Button className='searhChild' >Travellers <br/> {travellers} travellers, {room} room
                    </Button>
                </PopoverTrigger>
                <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                    <PopoverHeader pt={4} fontWeight='bold' border='0'>
                        <Icon as={MdPerson} />
                    Manage Your Channels
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore.
                    </PopoverBody>
                    <PopoverFooter
                    border='0'
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    pb={4}
                    >
                    <Box fontSize='sm'>Step 2 of 4</Box>
                    <ButtonGroup size='sm'>
                        <Button colorScheme='green'>Setup Email</Button>
                        <Button colorScheme='blue' ref={initialFocusRef}>
                        Next
                        </Button>
                    </ButtonGroup>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>
        </SimpleGrid>
        <h1 className='h1'>Ideas for your next trip</h1>
        <SimpleGrid className='sections' columns={[1,1,2,2,2]} >
            <Card  >
                <CardBody>
                    <Image 
                    src='https://a.travel-assets.com/travel-assets-manager/8b9c5cbf-f527-49fb-b881-8d7037952a89/assurance_4_562x240-2x.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh'
                    alt='Nature'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Free cancellation on most hotels</Heading>
                    <Text>Because flexibility matters.</Text>
                    </Stack>
                </CardBody>
            </Card>
            <Box style={{
                display:'grid',
                alignItems:'baseline',
                marginTop:'20px'
                // border:'1px solid red'
            }}>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    >
                    <Image
                        objectFit='cover'
                        width='120px'
                        src='https://a.travel-assets.com/travel-assets-manager/gmvd-1482-lmd-apac/lmd_113x168.jpg?impolicy=fcrop&w=300&h=300&q=mediumHigh'
                        alt='pic'
                    />

                    <Stack>
                        <CardBody>
                        <Heading size='md'>Find your next getaway</Heading>

                        <Text py='2'>Last minute deals are available.</Text>
                        </CardBody>
                    </Stack>
                </Card>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    >
                    <Image
                        objectFit='cover'
                        width='120px'
                        src='https://a.travel-assets.com/travel-assets-manager/gmvd-1482-review/generic_1_113x168.jpg?impolicy=fcrop&w=300&h=300&q=mediumHigh'
                        alt='pic'
                    />

                    <Stack>
                        <CardBody>
                        <Heading size='md'>Find the perfect holiday to look forward to.</Heading>

                        <Text py='2'>Save today on a trip for tomorrow</Text>
                        </CardBody>
                    </Stack>
                </Card>
            </Box>
        </SimpleGrid>
        <Image className='sections' style={{margin:'auto',width:'100%'}} src='https://tpc.googlesyndication.com/simgad/12535850531646588924?' />
        <h1 className='h1'>Explore, discover and save</h1>
        <Box className='sections'>
            <Card style={{width:'100%'}} >
                    <CardBody >
                        <div style={{
                            width:'100%',
                            height:'300px',
                            overflow:'hidden'
                        }}>
                        <Image 
                        src='https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        width="100%"
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='sm'>Plan ahead and save</Heading>
                        <Text>Book 60 days in advance for 20% off select stays.</Text>
                        </Stack>
                        </div>
                        
                    </CardBody>
            </Card>
        </Box>
        <Box style={{marginTop:'40px'}} className='sections'>
            <SimpleGrid columns={[1,1,1,2,2]} gap='20px'>
                <Image
                    src='https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg'
                    alt='Pic'
                    borderRadius='lg'
                />

                <Stack style={{
                    display:'grid',
                    flexDirection:'column',
                    alignItems:'center',
                    padding:'20px'
                }}>
                        <Heading size='md'>Go further with the Expedia app</Heading>
                        <Text py='2'>Save even more - Get up to 20% on select hotels and earn double the points when you book on the app. Our app deals help you to save on trips so you can travel more and managing it all on the go.</Text>
                    <Heading size='md'>Text yourself a download link for easy access</Heading>
                        <SimpleGrid columns={[1,1,2,3]} gap='10px'>
                            <select style={{
                                border:'1px solid #edf2f7'
                            }} placeholder='Country code' >
                                <option value="India">India +91</option>
                                <option value="USA">USA   +1</option>
                                <option value="UK">UK    +44</option>
                            </select>
                            <Input placeholder='Phone number' type='number' />
                            <Button variant='solid' colorScheme='blue'>
                            Get the app
                            </Button>
                        </SimpleGrid>
                    <Text>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</Text>   
                </Stack>
            </SimpleGrid>
        </Box>
        <Box className='sections'>
            <SimpleGrid spacing={4} columns={footerArrHotelsValues} >
                {
                    footerArrHotels.map(el=>{
                        return <Card>
                                    <CardHeader>
                                    <Heading size='md'>{el.header}</Heading>
                                    </CardHeader>
                                    <CardBody>
                                    <Text>{el.para}</Text>
                                    </CardBody>
                                </Card>
                    })
                }
            </SimpleGrid>
        </Box>
    </Box>
}