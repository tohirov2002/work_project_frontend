import React, { useContext, useEffect, useState } from 'react'
import { IoMdTime } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
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
    const { t } = useTranslation()

    return (
        <section className='mt-[20px]'>
            <div className='article_image'>
                <h1 className='text-center text-white font-bold bg-[#ccc9c950] h-[200px] text-[60px] pt-[60px] doctors_title'>{t("soz5")}</h1>
            </div>
            <div className='container'>
                <div className='borders'></div>
                <div className='mt-[50px] about grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 news_list'>
                    {
                        data.map((item) => (
                            <NavLink to={`/maqola/${item.id}`} key={item.id}>
                                <div className='cursor-pointer news_item mt-7'>
                                    <img className='max-w-[450px] h-[350px] rounded-md hover_img news_img' src={item.image} alt="turk" />
                                    <NavLink>
                                        <p className={`${mood ? 'text-[#2D3663] ' : 'text-white'} mt-5 font-bold text-[18px] max-w-[400px]`}>
                                            {item.title_uz}
                                        </p>
                                    </NavLink>
                                    <div className='mt-5 flex items-center'>
                                        <div className={`${mood ? 'text-[#2D3663] ' : 'text-white'} flex items-center`}>
                                            <IoMdTime className='w-[20px] h-[20px]' />
                                            <h1 className='text-[16px] ml-2'>{item.date_time}</h1>
                                        </div>
                                        <div className={`${mood ? 'text-[#2D3663] ' : 'text-white'} flex items-center ml-5`}>
                                            <FaRegEye className='w-[20px] h-[20px]' />
                                            <h1 className='text-[16px] ml-2'>{item.views}</h1>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
                <div className='flex items-center gap-2 mt-[20px] news_item1'>
                    <FaFacebook className={`cursor-pointer w-[35px] h-[35px] ${mood ? 'text-blue-600' : 'text-white'}`} />
                    <FaWhatsappSquare className={`cursor-pointer w-[35px] h-[35px] ${mood ? 'text-blue-600' : 'text-white'}`} />
                    <FaTelegram className={`cursor-pointer w-[35px] h-[35px] ${mood ? 'text-blue-600' : 'text-white'}`} />
                    <FaLinkedin className={`cursor-pointer w-[35px] h-[35px] ${mood ? 'text-blue-600' : 'text-white'}`} />
                    <FaSquareTwitter className={`cursor-pointer w-[35px] h-[35px] ${mood ? 'text-blue-600' : 'text-white'}`} />
                </div>
            </div>
        </section>
    )
}

export default Section