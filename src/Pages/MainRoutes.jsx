import React from 'react'
import { Route, Routes } from 'react-router'
 import Adminpanel from './AdminPage/Adminpanel'
import Login from './AdminPage/Login
import UserLogin from './Login/Login'
import CreateAccount from './SignUp/SignUp'
import Hotels from './Hotels/Hotels';

const MainRoutes = () => {
    return (
      <Routes>
         <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<UserLogin />} />
        <Route path='/SignUp' element={<CreateAccount  />} />
        <Route path='/hotels' element={<Hotels/>}/>
      <Route path='/admin' element={<Adminpanel/>}/>
      </Routes>
    )
}

export default MainRoutes;