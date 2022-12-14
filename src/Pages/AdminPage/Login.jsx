

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/AuthReducer/action";
import axios from "axios";
import {Box, Button,Flex,FormControl,Heading,Hide,Input,InputGroup,InputRightElement,Show,Stack,} from "@chakra-ui/react";
    export default function Login() {
     
       
      
        const [name, setName] = useState("");
        const [userId, setUserId] = useState("");
        const [userpassword, setUserpassword] = useState("");
       
        //  const navigate = useNavigate();
        const handleSubmitU = (e) => {
            //Default
            e.preventDefault();
           
            
              if (userId === "travel@gmail.com" && userpassword === "travelmojo") {
                alert("successfull");
                //  navigate("/")
                localStorage.setItem("username", JSON.stringify(name));
                // window.location.href = "index.html"
              } else {
                alert("user dose not exist");
              }
            }
          
          
  return (
    <Box align="center" bg={"white"}  >
    <Stack align="center" w="50%" paddingBottom="300px" p="5%" m="5%"  spacing="120px" bg={"#fff8de"}>
    <Heading> Log in to your Admin Account</Heading>
    <form w={{ lg: '100%', sm: '50%', md: '75%' }}  onSubmit={handleSubmitU}>
    <Input
        variant="flushed"
        type="text "
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <Input
        variant="flushed"
        type="text "
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      <Input
        variant="flushed"
        type="text "
        placeholder="password"
        value={userpassword}
        onChange={(e) => setUserpassword(e.target.value)}
      />

      <Heading w={{ lg: '100%', sm: '50%', md: '75%' }} m={5} align="center" fontSize={20} color={"teal"}>
        forgot password
      </Heading>

      <Button  m={5}  w={80} type="submit">
        LOGIN
      </Button>
    </form>
  </Stack>
  </Box>
  )
}



