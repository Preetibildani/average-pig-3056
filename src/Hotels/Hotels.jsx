import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
// import{Box} from "chakra-ui"
import { Box, Button, Flex, Grid, GridItem, Image } from "@chakra-ui/react"

// m={2} refers to the value of `theme.space[2]`

const Hotels = () => {
  const [data ,setData] = useState([]);
  const value = "delhi";

 const getdata = ()=>{
  return axios.get("https://raw.githubusercontent.com/Ace0012/Expedia-data/main/db.json")
  .then((res)=>setData(res.data[value]))
  .catch((err)=>console.log(err))

 }
//  getdata()
useEffect(()=>{
  getdata();

},[])
const room = 1;


// 

 console.log(data)

  return (
  <Box>
  <Box>Navigation </Box>
<Grid templateAreas={`
  "a a a a a"
  "b f f f f"
  "c f f f f"
  "d f f f f"
  `
  }>
    <GridItem border='1px solid red' area='a'>Search Component</GridItem>
    <GridItem border='1px solid blue' area='b'>MAP</GridItem>
    <GridItem border='1px solid black' area='c'>Another Search</GridItem> 

    <GridItem border='1px solid green' area='d'>Filter </GridItem>
    {/* <GridItem border='1px solid yellow' area='e'>Search Component</GridItem> */}
</Grid>
    {data.map((el,index)=>{
      return <GridItem area={'f'} key = {el.id}>
        <Image src={el.img1} alt="" />
        {el.heading1}
<Button> + </Button>
<Button> - </Button>
      
      </GridItem>
    })}
    
    

  </Box>
  )
}

export default Hotels