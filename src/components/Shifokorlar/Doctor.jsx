import React, { useContext, useEffect, useState } from 'react'
import alisher1 from '../../assets/images/alisher1.jpg'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Layout from '../Layout/Index';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../Context/Context';

const Doctor = () => {
  const params = useParams()
  const [data, setData] = useState([])
  const {mood} = useContext(Context)

  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/doctor/${params.id}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    handleData();
  }, [])
  return (
    <Layout>
      <>
        {data && (
          <section>
            <div className='mt-[20px]'>
              <div className='doctor_image'>
                <h1 className='text-center text-white font-bold bg-[#0000004a] h-[200px]  text-[46px] pt-[50px] doctors_title'>{data.name}</h1>
              </div>
            </div>
            <div className="container mt-[100px] flex justify-around doctor_container about">
              <div><img className='max-w-[200px] h-[200px] rounded-xl doctor_images1' src={data.image} alt="alisher" /></div>
              <div>
                <p className={`${mood? 'text-[#5c6177]': 'text-[#dfdede]'}  text-[18px]`}>{data.category_name}</p>
                <h1 className={`${mood? 'text-[#2D3663]': 'text-white'} text-[#2D3663] font-bold text-[28px] mt-8`}>Электрон почта:</h1>
                <p className={`${mood? 'text-[#5c6177]': 'text-[#dfdede]'} text-[18px] max-w-[900px] mt-5`}>{data.specialty_uz}</p>
                <h1 className={`${mood? 'text-[#2D3663]': 'text-white'} font-bold text-[28px] mt-8`}>Таълими:</h1>
                <p className={`${mood? 'text-[#5c6177]': 'text-[#dfdede]'} text-[18px] mt-4`}>{data.education}</p>
                <h1 className={`${mood? 'text-[#2D3663]': 'text-white'} font-bold text-[28px] mt-8`}>Иш тажрибаси:</h1>
                <p className={`${mood? 'text-[#5c6177]': 'text-[#dfdede]'} text-[18px] mt-6`}>{data.experience1_uz}</p>
                <p className={`${mood? 'text-[#5c6177]': 'text-[#dfdede]'} text-[18px] mt-6`}>{data.experience3_uz}</p>
                <p className={`${mood? 'text-[#5c6177]': 'text-[#dfdede]'} text-[18px] mt-6`}>{data.experience4_uz}</p>
                <p className={`${mood? 'text-[#5c6177]': 'text-[#dfdede]'} text-[18px] mt-6`}>2021 йил  </p>
                <p className={`${mood? 'text-[#5c6177]': 'text-[#dfdede]'} text-[18px] mt-6`}>2022 (6 кунлик курс)</p>
              </div>
            </div>
            <div className="container">
              <div className='flex items-center doctor_connection gap-2 mt-[80px] ml-[120px]'>
                <FaFacebook className={`cursor-pointer w-[35px] h-[35px] ${mood? 'text-blue-600': 'text-white'}`} />
                <FaWhatsappSquare className={`cursor-pointer w-[35px] h-[35px] ${mood? 'text-blue-600': 'text-white'}`} />
                <FaTelegram className={`cursor-pointer w-[35px] h-[35px] ${mood? 'text-blue-600': 'text-white'}`} />
                <FaLinkedin className={`${mood? 'text-blue-600': 'text-white'} cursor-pointer w-[35px] h-[35px] `} />
              </div>
            </div>
          </section>
        )}
      </>
    </Layout>
  )
}

export default Doctor