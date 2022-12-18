import { Box, Button, Image, Input, Select } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {update,deleteDataFromCart,edit,getdata,addNewData, } from "../../Redux/AppReducer/action";
import styles from "../AdminPage/AdminPage.module..css";
// import {addNewData}
import { Filter } from "./Filter";
const Adminpanel = () => {
  var name = JSON.parse(localStorage.getItem("username"));
  const hoteldata = useSelector((store) => {
    return store.AppReducer.data;
  });
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);

  const [product, setProduct] = useState({
    available: true,
    city: "",
    heading1: "",
    headig2: "",
    image: "",
    rating:"",
    price1: 0,
    price2: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewData(product)).then(() => dispatch(getdata()));
  };
  const status = (id) => {
    setActive((pre) => !pre);
    let payload = active;
    console.log(payload, id);
    dispatch(edit(id, { available: payload })).then(() => dispatch(getdata()));
  };

  useEffect(() => {
    dispatch(getdata());
  }, []);

  // console.log(mensData);
  return (
    <Box ml={{ sm: "30px" }} id={styles.admin_header_main_div}>
      <div >
        <Link to="/">
          <Button  _hover={{ bg: "black", color: "white",}} className={"btn_123"} marginTop={"30px"} marginLeft={"85%"} backgroundColor={"purple"}
           color={"white"}  >Sign Out</Button>
        </Link>
        <h3   id={"admin_heading"}>
          Welcome{" "}
          <span style={{ color: "#68a68c", fontStyle: "italic" }}>{name}</span> to
          Admin Panel
        </h3>
      </div>
      <Filter />
      <Box w="100%" display={{ md: "flex" }} justifyContent="space-around">
        <Box W="50%">
        <div className={styles.form_element_div}>
            <Input
              type="text"
              value={product.heading1}
              name={product.heading1}
              onChange={(e) =>
                setProduct({ ...product, heading1: e.target.value })
              }
              placeholder="title1"
            />
          </div>
          <div className={styles.form_element_div}>
            <Input
              type="text"
              value={product.headig2}
              name={product.headig2}
              onChange={(e) =>
                setProduct({ ...product, headig2: e.target.value })
              }
              placeholder="title2"
            />
          </div>
          <div>
            <Select
              name="category"
              onChange={(e) =>
                setProduct({ ...product, city: e.target.value })
              }
            >
              <option value="">Select City</option>
              <option value="pune">Pune</option>
              <option value="delhi">Delhi</option>
              <option value="goa">Goa</option>
              <option value="mumbai">Mumbai </option>
            </Select>
          </div>
          <div>
            <Input
              type="url"
              placeholder="Image URL"
              value={product.img2}
              name={product.img2}
              onChange={(e) =>
                setProduct({ ...product, img2: e.target.value })
                }
            />
          </div>
         
        
        
          <div className={styles.form_element_div}>
            <Input
              type="number"
              value={product.price1}
              name={product.price1}
              onChange={(e) =>
                setProduct({ ...product, price1: e.target.value })
              }
              placeholder="price1"
            />
          </div>
          <div className={styles.form_element_div}>
            <Input
              type="number"
              value={product.price2}
              name={product.price2}
              onChange={(e) =>
                setProduct({ ...product, price2: e.target.value })
              }
              placeholder="price2"
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <Button onClick={handleSubmit}>Add Product</Button>
          </div>
        </Box>

        <Box
          style={{  overflow: "scroll" }}
          w={{ lg: "50%", md: "100%", sm: "100%" }}
          h="560px"
          scrollBehavior="auto"
        >
        
          <Box >
            
              {hoteldata.length > 0 &&
                hoteldata.map((item) => {
                  return (
                    <Box  marginBottom={'10px'} p='6' rounded='md' bg='white' key={item.id}>
                      <Box>
                        <Box>
                          <Box display={"flex"} justifyContent="space-around" p="10px">
                            {""}
                            <Image justifyContent={"center"} src={item.img2} alt="" w="25%" />{" "}
                            <Box>
                              {" "}
                              
                              <div>{item.heading1}</div>
                              <div>{item.headig2}</div>
                              <div>{item.city}  </div>
                              <div>{item.rating}</div>
                              <div>₹{item.price2} </div>
                             
                            </Box>{" "}
                          </Box>
                        </Box>

                        <Box display={"flex"} justifyContent={"space-around"}>
                          <Link to={`/product/${item.id}`}>
                            <Button
                              color={"white"}
                              bg={"teal"}
                              _hover={{
                                bg: "#F9F5EB",
                                color: "teal",
                                border: "2px solid teal ",
                              }}
                            >
                              {" "}
                              Edit
                            </Button>
                          </Link>
                          <Box onClick={() => status(item.id)}>
                            {item.available ? (
                              <Button
                                _hover={{
                                  bg: "#F9F5EB",
                                  color: "green",
                                  border: "2px solid green ",
                                }}
                                bg="green"
                                color={"white"}
                                ml="70px"
                              >
                                active
                              </Button>
                            ) : (
                              <Button bg="red.400" ml="70px">
                                Inactive
                              </Button>
                            )}
                          </Box>
                          <Button
                            bg="red"
                            color={"white"}
                            _hover={{
                              bg: "#F9F5EB",
                              color: "red",
                              border: "2px solid red ",
                            }}
       onClick={() =>
          dispatch(deleteDataFromCart(item.id)).then(() =>
           dispatch(getdata())
                              )
                            }
                            ml="70px">
                            Delete
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  );
                })} 
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Adminpanel;