import { Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Map = () => {
  return (
    <div>
           <a href="https://www.google.com/maps/place/Delhi">
              <Image  borderTopLeftRadius={10} borderTopRightRadius='10' h='8em' w='100%' src="https://c1.10times.com/map/venue/4079.png"/>
            <Link h='5'    ml='20' color='blue' snt >View In Map</Link>
            </a>
    </div>
  )
}

export default Map