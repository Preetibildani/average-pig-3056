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
<Flex border="1px" color="black" alignItems="center">
 
            <ArrowBackIcon color="blue" boxSize={6} onClick={GotoHome} />
            {" "}
            <label htmlFor="">Go To Home</label>
            <Image marginLeft="41%" boxSize="16%" src={logo} alt="" />
          </Flex>

      <div>
        <img
          style={{ height: "200px", margin: "auto" }}
          src="https://www.poornima.edu.in/wp-content/uploads/2020/08/greentick.jpg"
          alt="Lastpage"
        />
      </div>
      <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
        Your Booking Is Complete!
      </h2>
      <p style={{ fontSize: "15px", marginTop: "20px", marginBottom: "20px" }}>
        You will be recieving a confirmation email on your registered e-mail
        regarding your trip details.
      </p>
      <p style={{ fontWeight: "bold" }}>Thank Your For Choosing Expedia.</p>
      <button id="lastbutton" onClick={handleClick}>
        Continue Booking
      </button>
    </div>
  );
};

export default ConfirmBook;