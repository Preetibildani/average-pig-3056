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
                _sort: searchParams.get("sortBy") && "price",
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
    <div>

<Box display={"flex"} justifyContent="right" mr={{lg:"130px",sm:"0px"}}>


    {/* <h2>Filter</h2> */}
    <div>
        <input type="checkbox" value='Delhi'
            onChange={HandleFilter}
            defaultChecked={city.includes('Delhi')} />
        <label >Delhi</label>
    </div>
    <div>
        <input type="checkbox" value='Goa'
            defaultChecked={city.includes('Goa')}
            onChange={HandleFilter} />
        <label >Goa</label>
    </div>
    <div>
        <input type="checkbox" value='Mumbai'
            defaultChecked={city.includes('Mumbai')}
            onChange={HandleFilter} />
        <label >Mumbai</label>
    </div>
    <div>
        <input type="checkbox" value='Pune'
            defaultChecked={city.includes('Pune')}
            onChange={HandleFilter} />
        <label >pune</label>
    </div>
    {/* <div>
            <Select  name="city"   onChange={HandleFilter} 
            defaultChecked={city.includes('delhi')} >
              <option value="">Select city</option>
              <option value="pune">Pune</option>
              <option value="delhi">Delhi</option>
              <option value="goa">Goa</option>
              <option value="mumbai">Mumbai </option>
            </Select>
    
    </div> */}
                  
    
    <Box border={"1px solid red"} display={"flex"} onChange={HandleSortBy}>
    <h2>Sort</h2>
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
    </div>
  )
}
