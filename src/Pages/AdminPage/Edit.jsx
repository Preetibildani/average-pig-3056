import { Box, Button, Input, Select } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { edit, getdata } from "../../Redux/AppReducer/action";
import styles from "../AdminPage/AdminPage.module..css";


const Edit = () => {
  var name = JSON.parse(localStorage.getItem("username"));
  const dispatch = useDispatch();
  const products  = useSelector((store) => {
    return store.AppReducer.data;
  });
  const { id } = useParams();
  const data=products.filter((i)=>i.id===+id)
  console.log(id,data,products)
  const [product, setProduct] = useState({
    available: true,
    id:data[0].id,
    city:data[0].city,
    img2: data[0].img2,
    headig2:data[0].headig2,
    heading1:data[0].heading1,
    price1:data[0].price1,
    price2:data[0].price2
    
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(edit(id,product)).then(()=> {dispatch(getdata())
        // navigate("/admin")
    })
    navigate("/admin")
     };
  useEffect(() => {
    dispatch(getdata())

  }, [dispatch]);
  return (
    <Box>
      <Box id={styles.admin_header}>
        {/* <Link to="/">
          <img
            id={styles.admin_logo}
            src="https://i.postimg.cc/2SR23Rqv/Black-and-Red-Cool-and-Funky-Gaming-Logo-5.gif"
            alt=""
          />
        </Link> */}
        <h3 id={'admin_heading'}>
          Welcome{" "}
          <span style={{ color: "#68a68c", fontStyle: "italic", marginBottom:"50px" }}>{name}</span> to
          Edit Page
        </h3>
      </Box>
      <Box w="100%" display="flex" justifyContent="space-around">
        
        <Box>
          <Box W="50%">
            <Box>
              <Input
                placeholder="title"
                type="text"
                name={product.heading1}
                value={product.heading1}
                onChange={(e) =>
                  setProduct({ ...product, heading1: e.target.value })
                }
              />
            </Box>
            <Box>
              <Input
                placeholder="title"
                type="text"
                name={product.headig2}
                value={product.headig2}
                onChange={(e) =>
                  setProduct({ ...product, headig2: e.target.value })
                }
              />
            </Box>
            <Box>
              <Select
                name="city"
                  //  onChange={(e) => setCity(e.target.value)}
              >
                <option value="goa">Goa </option>
                <option value="pune">Pune </option>
                <option value="mumbai">Mumbai </option>
                <option value="delhi">Delhi </option>
              </Select>
            </Box>
            <Box>
              <Input
                type="url"
                placeholder="Image URL"
                value={product.img2}
                name={product.img2}
                onChange={(e) =>
                  setProduct({ ...product, img2: e.target.value })
                }
              />
            </Box>
            <Box>
              <Input
                type="number"
                value={product.price2}
                name={product.price2}
                onChange={(e) =>
                  setProduct({ ...product, price2: e.target.value })
                }
                placeholder="price2"
              />
            </Box>
            <Box style={{ textAlign: "center" }}>
              <Button onClick={handleSubmit}>Edit Product</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Edit;