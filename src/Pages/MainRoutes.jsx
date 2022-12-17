import React from 'react'
import { Route, Routes } from 'react-router'
// import "./AdminLogin"

import Login from './AdminPage/Login'
import { Hotels } from './Hotels/Hotels';

const MainRoutes = () => {
    return (
      <Routes>
      <Route path='/' element={<Login/>}/>
      </Routes>
    )
}

export default MainRoutes;