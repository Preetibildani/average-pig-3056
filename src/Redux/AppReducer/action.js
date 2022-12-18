
import * as types from './actionTypes'
import axios from 'axios'


export const getRequest = () => {
    return {
        type: types.GET_Data_REQUEST
    }
}

export const getSuccess = (payload) => {
    return {
        type: types.GET_Data_SUCCESS,
        payload
    }
}

export const getFailure = () => {
    return {
        type: types.GET_Data_FAILURE
    }
}

 const getdata = (queryParams) => (dispatch) => {
    dispatch(getRequest());
    return axios.get("https://expediapi.onrender.com/hoteldata",queryParams)
        .then((res) => {

            console.log(res.data)
            // console.log(res.data)
            dispatch(getSuccess(res.data))
        })
        .catch((err) => {
            // dispatch(getFailure())
        })
}
const getdelhidata = () => (dispatch) => {
    dispatch(getRequest());
    return axios.get(" https://expediapi.onrender.com/hoteldata?city=Delhi")
        .then((res) => {
            console.log(res.data)
            dispatch(getSuccess(res.data))
        })
        .catch((err) => {
            // dispatch(getFailure())
        })
}
const getgoadata = () => (dispatch) => {
    dispatch(getRequest());
    return axios.get(" https://expediapi.onrender.com/hoteldata?city=Goa")
        .then((res) => {
            // console.log(res.data)
            dispatch(getSuccess(res.data))
        })
        .catch((err) => {
            // dispatch(getFailure())
        })
}
const getmumbaidata = () => (dispatch) => {
    dispatch(getRequest());
    return axios.get(" https://expediapi.onrender.com/hoteldata?city=Mumbai")
        .then((res) => {
            // console.log(res.data)
            dispatch(getSuccess(res.data))
        })
        .catch((err) => {
            // dispatch(getFailure())
        })
}
const getpunedata = () => (dispatch) => {
    dispatch(getRequest());
    return axios.get(" https://expediapi.onrender.com/hoteldata?city=Pune")
        .then((res) => {
            // console.log(res.data)
            dispatch(getSuccess(res.data))
        })
        .catch((err) => {
            // dispatch(getFailure())
        })
}

  const edit=(id,payload)=>(dispatch) => {
    // const navigate = useNavigate();
      return axios.patch(` https://expediapi.onrender.com/hoteldata/${id}`,payload)
            .then((res) => {

              // console.log(res.data)
              
                // dispatch(getSuccess(res.data))
              // alert("edit") 
              // navigate("/admin")
            })
            .catch((err) => {
                // dispatch(getFailure())
            })
    
    }
    const deleteDataFromCart = (queryParams) => (dispatch) =>  {
      // console.log(id)
      return axios.delete(` https://expediapi.onrender.com/hoteldata/${queryParams}`).then(()=>{
        alert("delete data successfully");
      })
    };
    
    const update =  (queryParams) => (dispatch) => {
     
     return axios.patch(`https://expediapi.onrender.com/hoteldata/${queryParams}`).then((r)=>{
        console.log(r.data)
      })
    };
  
    const addNewData =  (queryParams) => (dispatch) => {
     
      return axios
      .post(`https://expediapi.onrender.com/hoteldata`,queryParams)
      .then((res) => {
        // setProduct(res.data)
        // console.log(res.data);
        alert("Add data successfully");
      })
      .catch((e) => {
        console.log(e);
      });
     };
  
    
    export {update,getdata,deleteDataFromCart,edit,addNewData,getgoadata,getpunedata,getmumbaidata
        ,getdelhidata}