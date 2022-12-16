
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import {Box, Button,Heading,Input,Stack,} from "@chakra-ui/react";
    export default function Login() {
     
       
      
        const [name, setName] = useState("");
        const [userId, setUserId] = useState("");
        const [userpassword, setUserpassword] = useState("");
       
          const navigate = useNavigate();
        const handleSubmitU = (e) => {
            //Default
            e.preventDefault();
           
            
              if (userId === "travel@gmail.com" && userpassword === "travelmojo") {
                alert("successfull");
                  navigate("/admin")
                setName("")
                setUserId("")
                setUserpassword("")
                localStorage.setItem("username", JSON.stringify(name));
                // window.location.href = "index.html"
              } else {
                alert("user dose not exist");
                setName("")
                setUserId("")
                setUserpassword("")
              }
            }
          
          
  return (
    <Box align="center" bg={"white"}  >
    <Stack align="center" w="50%" paddingBottom="300px" p="5%" m="5%"  spacing="120px" boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px"}  bg={"#f8d7f3"}>
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

      <Heading w={{ lg: '100%', sm: '50%', md: '75%' }} m={5} align="center" fontSize={20} color={"black"}>
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



