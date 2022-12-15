import { Box ,Select} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getdata } from '../../Redux/AppReducer/action';

export const Filter = () => {
    
    const delhi = useSelector((store) => {
        return store.AppReducer.data;
      });
  const dispatch = useDispatch()
  const location = useLocation();



  useEffect(() => {
    if (location || delhi.length === 0) {
        const category = searchParams.getAll('category');
        const queryParams = {
            params: {
                category: category,
                _sort: searchParams.get("sortBy") && "price",
                _order: searchParams.get("sortBy")
            }
        }
        dispatch(getdata(queryParams))
    }
}, [location.search])
const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "")
    const [category, setCategory] = useState(searchParams.getAll("category") || []);

    const HandleFilter = (e) => {
        const option = e.target.value
        let newCategory = [...category];
        if (newCategory.includes(option)) 
        {
            newCategory.splice(newCategory.indexOf(option), 1)
        }
        else 
        {
            newCategory.push(option)
        }
        setCategory(newCategory)
    }

    const HandleSortBy = (e) => {
        setSortBy(e.target.value)
    }

    useEffect(() => {
        const params = {};
        category && (params.category = category);
        sortBy && (params.sortBy = sortBy);
        setSearchParams(params);
    }, [category, setSearchParams, sortBy])
  return (
    <div>

<Box display={"flex"} justifyContent="right" mr={{lg:"130px",sm:"0px"}}>


    {/* <h2>Filter</h2> */}
    {/* <div>
        <input type="checkbox" value='delhi'
            onChange={HandleFilter}
            defaultChecked={category.includes('delhi')} />
        <label >Delhi</label>
    </div>
    <div>
        <input type="checkbox" value='goa'
            defaultChecked={category.includes('goa')}
            onChange={HandleFilter} />
        <label >Goa</label>
    </div>
    <div>
        <input type="checkbox" value='mumbai'
            defaultChecked={category.includes('mumbai')}
            onChange={HandleFilter} />
        <label >Mumbai</label>
    </div>
    <div>
        <input type="checkbox" value='pune'
            defaultChecked={category.includes('pune')}
            onChange={HandleFilter} />
        <label >pune</label>
    </div> */}
    <div>
            <Select  name="category"   onChange={HandleFilter} 
            defaultChecked={category.includes('delhi')} >
              <option value="">Select Category</option>
              <option value="pune">Pune</option>
              <option value="delhi">Delhi</option>
              <option value="goa">Goa</option>
              <option value="mumbai">Mumbai </option>
            </Select>
    
    </div>
                  
    
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
