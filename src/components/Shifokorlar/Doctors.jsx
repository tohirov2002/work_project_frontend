import React, { useEffect, useState } from 'react'
import Alisher from '../../assets/images/alisher.jpg'
import { NavLink } from 'react-router-dom'
import Layout from '../Layout/Index'
import axios from 'axios'


const Doctors = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/doctor/');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    handleData();
  }, [])
  return (
    <>
      <Layout>
        <section>
          <div className='mt-[20px]'>
            <div className='doctors_images'>
              <h1 className='bg-[#68626264] font-bold h-[200px] text-center text-white  text-[46px] pt-[50px] doctors_title'>Бизнинг Rahbarlarimiz</h1>
            </div>
          </div>
          <div className="container">
            <div className='mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 doctors_div'>
              {
                data.map((item) => (
                  <NavLink key={item.id} to={`/doctor/${item.id}`}>
                    <div className='hover:shadow-2xl hover:cursor-pointer mt-8 shadow-xl bg-[] p-[50px] rounded-xl max-w-[650px] flex flex-col items-center justify-center text-center doctors_box'>
                      <img className='hover:shadow-xl mt-2 rounded-2xl w-[350px] h-[350px] doctors_img' src={item.image} alt="alisher" />
                      <h1 className='text-[32px] max-w-[300px] mt-5 h-[80px] font-bold text-blue-950 doctor_title'>{item.name}</h1>
                      <NavLink to={`/doctor/${item.id}`} className='hover:bg-slate-800 text-[22px] mt-8 w-[290px] text-white pt-1 pb-1 rounded-xl bg-blue-950'>{item.category_name}</NavLink>
                      <p className='mt-4 text-[18px] text-[#4c547c]'>{item.category_name}</p>
                    </div>
                  </NavLink>
                ))
              }
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Doctors