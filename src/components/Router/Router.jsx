import React from 'react'
import {Routes, Route } from 'react-router-dom'
import About from '../Pages/About/About'
import Main from '../Main /Main'
import Layout from '../Layout/Index'
import Services from '../Pages/Services/Services'
import Departaments from '../Pages/Departaments/Departaments'
import Insurance from '../Pages/Insurance/Insurance'
import Articles from '../Pages/Articles/Articles'
import Connections from '../Pages/Connection/Connection'
import Doctors from '../Shifokorlar/Doctors'
import Doctor from '../Shifokorlar/Doctor'
import Section1 from '../Pages/Articles/Section1'
import Sections from '../Sections/Sections'



const Router = () => {
  return (
    <div>
        <Layout>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/departaments' element={<Departaments/>}/>
                <Route path='/Insurance' element={<Insurance/>}/>
                <Route path='/Articles' element={<Articles/>}/>
                <Route path='/connections' element={<Connections/>}/>
                <Route path='/doctors' element={<Doctors/>}/>
                <Route path='/doctor' element={<Doctor/>}/>
                <Route path='/maqola' element={<Section1/>}/>
                <Route path='/sections' element={<Sections/>}/>
            </Routes>
        </Layout>
    </div>
  )
}

export default Router