import { Box ,Select} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getdata } from '../../Redux/AppReducer/action';

export const Filter = () => {
    
    const hoteldata = useSelector((store) => {
        return store.AppReducer.data;
      });
  const dispatch = useDispatch()
  const location = useLocation();



  useEffect(() => {
    if (location || hoteldata.length === 0) {
        const city = searchParams.getAll('city');
        const queryParams = {
            params: {
                city: city,
                _sort: searchParams.get("sortBy") && "price2",
                _order: searchParams.get("sortBy")
            }
        }
        dispatch(getdata(queryParams))
    }
}, [location.search])
const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "")
    const [city, setcity] = useState(searchParams.getAll("city") || []);

    const HandleFilter = (e) => {
        const option = e.target.value
        let newcity = [...city];

        if(newcity.length>0){
            newcity=[]
        }
        if (newcity.includes(option)) 
        {
            newcity.splice(newcity.indexOf(option), 1)
        }
        else 
        {
            newcity.push(option)
        }
        setcity(newcity)
    }

    const HandleSortBy = (e) => {
        setSortBy(e.target.value)
    }

    useEffect(() => {
        const params = {};
        city && (params.city = city);
        sortBy && (params.sortBy = sortBy);
        setSearchParams(params);
    }, [city, setSearchParams, sortBy])
  return (
    

<Box   display={"flex"} justifyContent="right"  mr={{lg:"130px",sm:"0px"}}>

   
    <Box>
    <Select   name="city"   onChange={HandleFilter}  >
            {/* defaultChecked={city.includes('hoteldata')} */}
              <option value="">Select city</option>
              <option   value="Pune">Pune</option>
              <option   value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option   value="Mumbai">Mumbai </option>
            </Select>
    </Box>
            
    
         
    
    <Box  padding={"10px 100px 0px 20px"} onChange={HandleSortBy}>
    <h2>Sort</h2>
    <hr></hr>
        <div>
            <input type="radio" value="asc" name='sortBy'
                defaultChecked={sortBy === "asc"} />
            <label >Asc</label>
        </div>
        <div>
            <input type="radio" value="desc" name='sortBy'
                defaultChecked={sortBy === "desc"} />
            <label>Desc</label>
        </div>
    </Box>

</Box>
 
  )
}
