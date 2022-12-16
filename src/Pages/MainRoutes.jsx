import React from 'react'
import { Route, Routes } from 'react-router'
// import "./AdminLogin"

import Login from './AdminPage/Login'
import ConfirmBook from './ConfirmBook/ConfirmBook'
import UserLogin from './Login/Login'
import PaymentPage from './Payment/Payement'
import CreateAccount from './SignUp/SignUp'
const MainRoutes = () => {
    return (
      <Routes>
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/confirmbooking' element={<ConfirmBook />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/SignUp' element={<CreateAccount  />} />
      <Route path='/' element={<Login/>}/>
      </Routes>
    )
}

export default MainRoutes;