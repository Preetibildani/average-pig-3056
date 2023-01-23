import { Box, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Button, InputGroup } from '@chakra-ui/react';
import "./Hotels.css"
import { CheckIcon, PhoneIcon } from '@chakra-ui/icons';
import { Stack } from '@chakra-ui/react';
import { elementRoles } from 'aria-query';
const SearchComponents = () => {
  return (
    <Box>
        <Flex>
            <Box className='topSearch'>
          
    
<label>
Going to
    <Input className='inp-sea' type='text' placeholder='Enter Place' />
</label>
            </Box>
            <Box className='topSearch'>
                <label>
            Check In 
            <Input className='inp-sea' type='date' placeholder='Going to'  />
                </label>
            </Box>
            <Box className='topSearch'>
            <label>
            Check out 
            <Input className='inp-sea' type='date' placeholder='Going to'  />
                </label>
            </Box>
            <Box className='topSearch'>
              
                    <Text fontSize={12}>Travelers</Text>
                 <Button>
                    1 room, 2tra...
                    </Button>   
            
            </Box>

            <Button className='btn-sea'>Search</Button>
        </Flex>
    </Box>
  )
}

export default SearchComponents
