import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
 
  Text,

} from "@chakra-ui/react";
import "./Hotels.css"

const Filter = ({ title, city ,value,handleInput,fitcity,fil}) => {

 console.log(fitcity)




  return (
    <Box>
      <Text className="filter_heading">Filter By</Text>
      <br />
      <Text className="pop"> Popular Filter</Text>
      {title[city][0].popular.map((el) => {
        return (
          <Flex>
            {/* <input type='checkbox' />
            
            <Text>{el}</Text> */}
            <Checkbox>
              <Text className="text_fil">

              {el}
              </Text>
              </Checkbox>
          </Flex>
        );
      })}
      <Box>
        <br />
        <br />


        <Text> Price per night</Text>
<p>{value<15000?value:"15000+"}</p>
        <input
          type="range"
          min={3000}
          max={30000}
          step={3000}
          onInput={handleInput}
          list="number"
          style={{ width: "300px" }}
        />
        <datalist
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            writingMode: "sideways-lr",
            fontSize: "11px",
            width: "250px",
          }}
          id="tickmarks"
        >
          <option value="3000" label="3000"></option>
          <option value="6000" label="6000"></option>
          <option value="9000" label="9000"></option>
          <option value="12000" label="12000"></option>
          <option value="15000" label="15000"></option>
          <option value="15000+" >15000+</option>
          <option value="" ></option>
          <option value="" ></option>
         
   
        </datalist>
      </Box>
      <br />
      <br />
      <Box>
        <Text>Star Rating</Text>
        <Flex gap={2}>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
        </Flex>
      </Box>
      <br />
      <br />
      <Box>
        <Text fontWeight='bold'>Choose Multiple Location</Text>

        {title[city][0].neighbour.map((el,index) => {
          return (
 
            <Box  >
              <label> 
                <input type='radio'   onChange={fil} value={el} />
                {el}
              </label>
              
            </Box>
              
          );
        })}
      </Box>
    </Box>
  );
};

export default Filter;

