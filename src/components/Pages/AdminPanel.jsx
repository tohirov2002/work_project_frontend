import React from 'react'
import { AiFillHome } from "react-icons/ai"
import { FcStatistics } from "react-icons/fc"
import { BsArrowLeftSquareFill } from "react-icons/bs"
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import { FaUserDoctor } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";


const AdminPanel = () => {



  return (
    <div className=''>
      <div className='flex'>
        <div className='hero-wrap fixed w-[400px] z-10  bg-[#2D3663] h-[100vh] flex flex-col pl-7 pr-5'>
          <div className=' flex items-center mt-[50px]'>
            <NavLink to={'/'}><img className='logo_img w-[70px] h-[70px]' src={Logo} alt="logo" /></NavLink>
            <NavLink to={'/'} >
              <h1 className={`logo_title text-[20px] text-center w-[20px] ml-3 text-white font-bold font-mono dark:text-white`}> Sog'lom Hayot</h1>
            </NavLink>
          </div>
          <NavLink to={'/'}>
            <div className='flex items-center gap-2 mt-[50px]'>
              <AiFillHome className='text-white w-[20px] h-[20px]' />
              <h1 className='text-white text-[18px]'>Bosh sahifa</h1>
            </div>
          </NavLink>
          <NavLink to={'addforms'}>
            <div className='flex items-center gap-2 pt-5 cursor-pointer'>
              <FcStatistics className='text-white w-[20px] h-[20px]' />
              <h1 className='text-white text-[18px]'>Bo'limlar</h1>
            </div>
          </NavLink>
          <NavLink to={'doctor'}>
            <div className='flex items-center gap-2 pt-5 cursor-pointer'>
              <FaUserDoctor className='text-white w-[20px] h-[20px]' />
              <h1 className='text-white text-[18px]'>Shifokorlar</h1>
            </div>
          </NavLink>
          <NavLink to={'comment'}>
            <div className='flex items-center gap-2 pt-5 cursor-pointer' >
              <FaCommentDots className='text-white w-[20px] h-[20px]' />
              <h1 className='text-white text-[18px]'>Sharxlar</h1>
            </div>
          </NavLink>
          <NavLink to={'news'}>
            <div className='flex items-center gap-2 pt-5 cursor-pointer'>
              <FaNewspaper className='text-white w-[20px] h-[20px]' />
              <h1 className='text-white text-[18px]'>Yangiliklar</h1>
            </div>
          </NavLink>
          <div className='flex items-center gap-2 pt-5'>
            <BsArrowLeftSquareFill className='text-white w-[15px] h-[15px]' />
            <h1 className='text-white text-[18px]'>chiqish</h1>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminPanel