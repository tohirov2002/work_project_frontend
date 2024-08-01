import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import About from '../Pages/About/About'
import Main from '../Main /Main'
import Services from '../Pages/Services/Services'
import Departaments from '../Pages/Departaments/Departaments'
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
import { Context } from '../Context/Context'
import Login from '../Login/Login'
import Auth from '../Auth/Auth'


const Router = () => {
  const { mood } = useContext(Context)
  return (
    <div className={`${mood ? '' : 'bg-[#2D3663]'}`}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/departaments' element={<Departaments />} />
        <Route path='/Articles' element={<Articles />} />
        <Route path='/connections' element={<Connections />} />
        <Route path='/rahbar' element={<Doctors />} />
        <Route path='/doctor/:id' element={<Doctor />} />
        <Route path='/maqola/:id' element={<Section1 />} />
        <Route path='/sections/:id' element={<Sections />} />
        <Route path='*' element={<Navigate to={'/'}/>}/>
        <Route path='/ahmad' element={<Login />} />
        <Route path='/' element={<Auth />}>
          <Route path='/admins' element={<AdminPanel />}>
            <Route path='addforms' element={<Departament />} />
            <Route path='doctor' element={<AdDoctor />} />
            <Route path='comment' element={<AdComment />} />
            <Route path='news' element={<AddNews />} />
            <Route path='category' element={<DoctorCategory />} />
          </Route>
        </Route>
        <Route path='update/:id' element={<UpdateComments />} />
      </Routes>
    </div>
  )
}

export default Router