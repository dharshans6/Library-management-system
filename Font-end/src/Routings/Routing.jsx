import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from '../Home/Navbar'
import Book from '../Books/Book'
import DashBoard from '../Dash Board/DashBoard'
import AddBooks from '../Add Books/AddBooks'
import Members from '../Members/Members'
import MemberCreate from '../Members/MemberCreate'
import MemberEdit from '../Members/MemberEdit'

function Routing() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/Books' element={<Book/>}/>
        <Route path='/Dashboard' element={<DashBoard/>}/>
        <Route path='/profile&earings' element={<Navbar/>}/>
        <Route path='/add-books' element={<AddBooks/>}/>
        <Route path='/members' element={<Members/>}/>
        <Route path='/membercreate' element={<MemberCreate/>}/>
        <Route path='/MemberEdit/:id' element={<MemberEdit/>}/>
     </Routes>
    </>
  )
}

export default Routing