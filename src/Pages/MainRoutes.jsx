import React from 'react'
import { Route, Routes } from 'react-router-dom'
 import Adminpanel from './AdminPage/Adminpanel'
import Login from './AdminPage/Login'
import UserLogin from './Login/Login'
import CreateAccount from './SignUp/SignUp'
import Hotels from './Hotels/Hotels';
import Edit from './AdminPage/Edit'


const MainRoutes = () => {
    return (
      <Routes>
      
        <Route path='/login' element={<UserLogin />} />
        <Route path='/SignUp' element={<CreateAccount  />} />
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path='/adminlogin' element={<Login/>}/>
      <Route path='/admin' element={<Adminpanel/>}/>
      <Route path='/product/:id' element={<Edit/>}/>
      </Routes>
    )
}

export default MainRoutes;