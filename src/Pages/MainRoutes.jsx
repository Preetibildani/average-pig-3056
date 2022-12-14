import React from 'react'
import { Route, Routes } from 'react-router'
// import "./AdminLogin"

import Login from './AdminPage/Login'
import UserLogin from './Login/Login'
import CreateAccount from './SignUp/SignUp'
const MainRoutes = () => {
    return (
      <Routes>
        <Route path='/login' element={<UserLogin />} />
        <Route path='/SignUp' element={<CreateAccount  />} />
      <Route path='/' element={<Login/>}/>
      </Routes>
    )
}

export default MainRoutes;