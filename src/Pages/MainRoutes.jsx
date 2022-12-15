import React from 'react'
import { Route, Routes } from 'react-router'
// import "./AdminLogin"
 import Adminpanel from './AdminPage/Adminpanel'

import Login from './AdminPage/Login'
const MainRoutes = () => {
    return (
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/admin' element={<Adminpanel/>}/>

      </Routes>
    )
}

export default MainRoutes;