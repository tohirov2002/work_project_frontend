import React, { useContext, useEffect, useState } from 'react'
import { IoMdTime } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../Context/Context';
import { useTranslation } from 'react-i18next';


const Section = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const handleData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/news/');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        handleData();
    }, [])

    const { mood } = useContext(Context)
    const {t} = useTranslation()

    return (
        <section className='mt-[20px]'>
            <div className='article_image'>
                <h1 className='text-center text-white font-bold bg-[#00000050] h-[200px] text-[48px] pt-[60px] doctors_title'>{t("soz5")}</h1>
            </div>
            <div className='container'>
                <div className='borders'></div>
                <ul className='mt-[100px] about flex justify-between news_list'>
                    {
                        data.slice(0,3).map((item) => (
                            <li key={item.id} className='cursor-pointer news_item'>
                                <img className='max-w-[450px] h-[350px] rounded-md hover_img news_img' src={item.image} alt="turk" />
                                <NavLink to={`/maqola/${item.id}`}><p className={`${mood? 'text-[#2D3663] ': 'text-white'} mt-5 font-bold text-[18px] max-w-[400px]`}>{item.title_uz}</p></NavLink>
                                <div className='mt-5 flex items-center'>
                                    <div className={`${mood ? 'text-[#2D3663] ' : 'text-white'} flex items-center`}>
                                        <IoMdTime className='w-[20px] h-[20px]' />
                                        <h1 className={`text-[16px] ml-2`}>{item.date_time}</h1>
                                    </div>
                                    <div className={`${mood? 'text-[#2D3663] ': 'text-white'} flex items-center ml-5`}>
                                        <FaRegEye className='w-[20px] h-[20px]' />
                                        <h1 className='text-[16px] ml-2'>{item.views}</h1>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                    {/* <li className='cursor-pointer news_item'>
                        <img className='news_img max-w-[450px] h-[350px] rounded-md hover_img' src={miya} alt="orqa miya" />
                        <p className='text-[#2D3663] mt-5 font-bold text-[18px] max-w-[450px]'>Орқа мия Остррехондрози ҳақида 5та афсона</p>
                        <div className='mt-5 flex items-center'>
                            <div className='flex items-center'>
                                <IoMdTime className='text-[#2D3663] w-[20px] h-[20px]' />
                                <h1 className='text-[#2D3663] text-[16px] ml-2'>30.03.2024</h1>
                            </div>
                            <div className='flex items-center ml-5'>
                                <FaRegEye className='text-[#2D3663] w-[20px] h-[20px]' />
                                <h1 className='text-[#2D3663] text-[16px] ml-2'>200</h1>
                            </div>
                        </div>
                    </li> */}
                    {/* <li className='cursor-pointer news_item'>
                        <img className='news_img max-w-[450px] h-[350px] rounded-md hover_img' src={retsep} alt="retsep" />
                        <p className='text-[#2D3663] mt-5 font-bold text-[18px] max-w-[450px]'>Қандай таблеткани шифокор ретсептисиз қабул қилмаслик керак?</p>
                        <div className='mt-5 flex items-center'>
                            <div className='flex items-center'>
                                <IoMdTime className='text-[#2D3663] w-[20px] h-[20px]' />
                                <h1 className='text-[#2D3663] text-[16px] ml-2'>05.04.2024</h1>
                            </div>
                            <div className='flex items-center ml-5'>
                                <FaRegEye className='text-[#2D3663] w-[20px] h-[20px]' />
                                <h1 className='text-[#2D3663] text-[16px] ml-2'>600</h1>
                            </div>
                        </div>
                    </li> */}
                </ul>
                <div className='flex items-center gap-2 mt-[20px] news_item1'>
                    <FaFacebook className={`cursor-pointer w-[35px] h-[35px] ${mood? 'text-blue-600': 'text-white'}`} />
                    <FaWhatsappSquare className={`cursor-pointer w-[35px] h-[35px] ${mood? 'text-blue-600': 'text-white'}`} />
                    <FaTelegram className={`cursor-pointer w-[35px] h-[35px] ${mood? 'text-blue-600': 'text-white'}`} />
                    <FaLinkedin className={`cursor-pointer w-[35px] h-[35px] ${mood? 'text-blue-600': 'text-white'}`} />
                    <FaSquareTwitter className={`cursor-pointer w-[35px] h-[35px] ${mood? 'text-blue-600': 'text-white'}`} />
                </div>
            </div>
        </section>
    )
}

export default Section