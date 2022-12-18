import { Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import './Hotels.css'

// The default icon size is 1em (16px)


const SearchBox = () => {
  return (
    <div classna>
   
<Text  className='title_search'> Search by property name</Text>
       <InputGroup>
    <InputLeftElement marginLeft={"10px"} marginTop={"11px"}
      pointerEvents='none'
      children={<SearchIcon />}
    />
 

    <Input padding={"30px"} fontSize={"19px"} marginLeft={"16px"} className='inp' type='text' placeholder='eg.Matriot'/>

  </InputGroup>
 
    </div>
  )
}

export default SearchBox