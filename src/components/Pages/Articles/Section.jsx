import React from 'react'
import turk from '../../../assets/images/turk.jpg'
import miya from '../../../assets/images/miya.jpg'
import retsep from '../../../assets/images/retsep.jpg'
import { IoMdTime } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


const Section = () => {
  return (
    <section className='mt-[20px]'>
        <div className='article_image'>
            <h1 className='text-center text-white font-bold bg-[#00000050] h-[200px] text-[48px] pt-[60px]'>Мақолалар</h1>
        </div>
        <div className='container'>
            <div className='borders'></div>
            <ul className='mt-[100px] flex justify-between'>
                <li className='cursor-pointer'>
                    <img className='max-w-[450px] h-[350px] rounded-md hover_img' src={turk} alt="turk" />
                    <NavLink to={'/maqola'}> <p className='text-[#2D3663] mt-5 font-bold text-[18px] max-w-[400px]'>Туркиянинг икки энг яхши онкологи профессор Гуркан Теллиоғлу ва профессор Барбарос Чил 6 ва 7 октябр кунлари Соғлом Ҳаёт килиникамизга бепул консултатсиялар ўтказади.</p></NavLink>
                    <div className='mt-5 flex items-center'>
                        <div className='flex items-center'>
                            <IoMdTime className='text-[#2D3663] w-[20px] h-[20px]'/>
                            <h1 className='text-[#2D3663] text-[16px] ml-2'>31.03.2023</h1>
                        </div>
                        <div className='flex items-center ml-5'>
                            <FaRegEye className='text-[#2D3663] w-[20px] h-[20px]'/>
                            <h1 className='text-[#2D3663] text-[16px] ml-2'>400</h1>
                        </div>
                    </div>
                </li>
                <li className='cursor-pointer'>
                    <img className='max-w-[450px] h-[350px] rounded-md hover_img' src={miya} alt="orqa miya" />
                    <p className='text-[#2D3663] mt-5 font-bold text-[18px] max-w-[450px]'>Орқа мия Остррехондрози ҳақида 5та афсона</p>
                    <div className='mt-5 flex items-center'>
                        <div className='flex items-center'>
                            <IoMdTime className='text-[#2D3663] w-[20px] h-[20px]'/>
                            <h1 className='text-[#2D3663] text-[16px] ml-2'>30.03.2024</h1>
                        </div>
                        <div className='flex items-center ml-5'>
                            <FaRegEye className='text-[#2D3663] w-[20px] h-[20px]'/>
                            <h1 className='text-[#2D3663] text-[16px] ml-2'>200</h1>
                        </div>
                    </div>
                </li>
                <li className='cursor-pointer'>
                    <img className='max-w-[450px] h-[350px] rounded-md hover_img' src={retsep} alt="retsep" />
                    <p className='text-[#2D3663] mt-5 font-bold text-[18px] max-w-[450px]'>Қандай таблеткани шифокор ретсептисиз қабул қилмаслик керак?</p>
                    <div className='mt-5 flex items-center'>
                        <div className='flex items-center'>
                            <IoMdTime className='text-[#2D3663] w-[20px] h-[20px]'/>
                            <h1 className='text-[#2D3663] text-[16px] ml-2'>05.04.2024</h1>
                        </div>
                        <div className='flex items-center ml-5'>
                            <FaRegEye className='text-[#2D3663] w-[20px] h-[20px]'/>
                            <h1 className='text-[#2D3663] text-[16px] ml-2'>600</h1>
                        </div>
                    </div>
                </li>
            </ul>
            <div className='flex items-center gap-2 mt-[20px]'>
                <FaFacebook className='cursor-pointer w-[35px] h-[35px] text-blue-600'/>
                <FaWhatsappSquare className='cursor-pointer w-[35px] h-[35px] text-green-600'/>
                <FaTelegram className='cursor-pointer w-[35px] h-[35px] text-blue-600'/>
                <FaLinkedin className='cursor-pointer w-[35px] h-[35px] text-blue-600'/>
                <FaSquareTwitter className='cursor-pointer w-[35px] h-[35px] text-blue-600'/>
            </div>
        </div>
    </section>
  )
}

export default Section