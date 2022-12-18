import React from 'react'
import { Route, Routes } from 'react-router-dom'
 import Adminpanel from './AdminPage/Adminpanel'
import Login from './AdminPage/Login'
import ConfirmBook from './ConfirmBook/ConfirmBook'
import UserLogin from './Login/Login'
import PaymentPage from './Payment/Payement'
import CreateAccount from './SignUp/SignUp'
import Hotels from './Hotels/Hotels';
import {HotelsCart} from './HotelsCart/HotelsCart'
import Edit from './AdminPage/Edit'
import Homepage from './Homepage'
const MainRoutes = () => {
    return (
      <Routes>
        <Route path='/hotelsCart' element={<HotelsCart/>} 
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/SignUp' element={<CreateAccount  />} />
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path='/adminlogin' element={<Login/>}/>
      <Route path='/admin' element={<Adminpanel/>}/>
      <Route path='/product/:id' element={<Edit/>}/>
      <Route path='/payment' element={<PaymentPage />} />
        <Route path='/confirmbooking' element={<ConfirmBook />} />
      </Routes>
    )
}

export default MainRoutes;