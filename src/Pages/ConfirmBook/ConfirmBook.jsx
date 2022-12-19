import React from "react";
import { useNavigate } from "react-router-dom";


import logo from "../../Images/Logo.png";
import {
  Image,

  Flex,

} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const ConfirmBook = () => {


  const navigate = useNavigate();

  
const GotoHome = () => {
  navigate("/");
};
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="lastdiv">
<Flex  alignItems="center">
 
            <ArrowBackIcon color="blue" boxSize={6} onClick={GotoHome} />
            {" "}
       
            <Image marginLeft="41%" boxSize="16%" src={logo} alt="" />
          </Flex>

      <div style={{width:"70%",margin:"auto"}}>

        <div style={{marginLeft:"43%"}}>

        <img
          style={{ width: "30%" }}
          src="https://www.poornima.edu.in/wp-content/uploads/2020/08/greentick.jpg"
          alt="succesfull"
        />
        </div>
   

        <div style={{marginLeft:"31%"}}>


           
      <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
       Congrats Your Booking Is Complete!
      </h2>
      <p style={{ fontSize: "15px", marginTop: "20px", marginBottom: "20px" }}>
        You will be recieving a confirmation email on your registered e-mail
        regarding your trip details.
      </p>
      <p style={{ fontWeight: "bold" }}>Thank Your For Choosing Expedia.</p>
      <button  onClick={handleClick}>
        Continue Booking
      </button>

      </div>
        </div>

    </div>
  );
};

export default ConfirmBook;