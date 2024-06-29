import React from 'react'
import {Routes, Route } from 'react-router-dom'
import About from '../Pages/About/About'
import Main from '../Main /Main'
import Services from '../Pages/Services/Services'
import Departaments from '../Pages/Departaments/Departaments'
import Insurance from '../Pages/Insurance/Insurance'
import Articles from '../Pages/Articles/Articles'
import Connections from '../Pages/Connection/Connection'
import Doctors from '../Shifokorlar/Doctors'
import Doctor from '../Shifokorlar/Doctor'
import Section1 from '../Pages/Articles/Section1'
import Sections from '../Sections/Sections'
import AdminPanel from '../Pages/AdminPanel'
import AdDoctor from '../AddForms/Doctors/Doctor'
import AdComment from '../AddForms/Comments/Comment'
import AddNews from '../AddForms/News/News'
import UpdateComments from '../AddForms/Comments/UpdateComments'
import Departament from '../AddForms/Departaments/Departament'
import DoctorCategory from '../AddForms/DoctorCategories/DoctorCategory'



const Router = () => {
  return (
    <div>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/departaments' element={<Departaments/>}/>
                <Route path='/Insurance' element={<Insurance/>}/>
                <Route path='/Articles' element={<Articles/>}/>
                <Route path='/connections' element={<Connections/>}/>
                <Route path='/doctors' element={<Doctors/>}/>
                <Route path='/doctor/:id' element={<Doctor/>}/>
                <Route path='/maqola/:id' element={<Section1/>}/>
                <Route path='/sections/:id' element={<Sections/>}/>
                <Route path='/admin' element={<AdminPanel/>}>
                  <Route path='addforms' element={<Departament/>}/>
                  <Route path='doctor' element={<AdDoctor/>}/>
                  <Route path='comment' element={<AdComment/>}/>
                  <Route path='news' element={<AddNews/>}/>
                  <Route path='category' element={<DoctorCategory/>}/>
                </Route>
                <Route path='update/:id' element={<UpdateComments/>}/>
            </Routes>
    </div>
  )
}

export default Router