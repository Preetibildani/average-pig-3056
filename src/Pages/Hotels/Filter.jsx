import React from 'react'
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'

const Filter = ({title,city}) => {
console.log(title[city][0].popular)
  return (
    <Box>
        <Heading>Filter By</Heading>
        <Text> Poopular Filter</Text>
     {title[city][0].popular.map((el)=>{
        return <Flex>
            <input type='checkbox' />
            <Text>{el}</Text>
        </Flex>
     })}
<Box>

     <Text> Price per night</Text>
     <input type = "range"/>
</Box>
<Box >
    <Text>Star Rating</Text>
    <Flex  gap={2} >
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
    <Button>5</Button>
       
    </Flex>


</Box>
    <Box>
      {title[city][0].neighbour.map((el)=>{
        return <Box>
<Flex >
  <input type="radio" />
  <Text>{el}</Text>
</Flex>

        </Box>
      })}
    </Box>

    </Box>
  )
}

export default Filter