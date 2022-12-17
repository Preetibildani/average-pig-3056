import { Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'

// The default icon size is 1em (16px)


const SearchBox = () => {
  return (
    <div>
   
<Text fontSize={'1.3em'} fontWeight='550' color='
#343b53'> Search by property name</Text>
       <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon />}
    />
 

    <Input type='text' placeholder='eg.Matriot' w='80%' />

  </InputGroup>
 
    </div>
  )
}

export default SearchBox