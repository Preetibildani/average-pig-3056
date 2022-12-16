import { Image, Text } from '@chakra-ui/react'
import React from 'react'

const Map = () => {
  return (
    <div>
           <a href="https://www.google.com/maps/place/Delhi">
              <Image  borderTopLeftRadius={20} borderTopRightRadius='20'  src="https://c1.10times.com/map/venue/4079.png"/>
            <Text h='10' m='5%'  textAlign={'center'} color='blue' snt >View In Map</Text>
            </a>
    </div>
  )
}

export default Map