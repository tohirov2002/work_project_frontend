import React, { useContext, useEffect, useState } from 'react'
import { FaSquareCheck } from "react-icons/fa6";
import Alisher from '../../assets/images/alisher.jpg'
import { NavLink, useParams } from 'react-router-dom';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios';
import { Context } from '../Context/Context';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player'

const Section = () => {
    const params = useParams()
    const [data, setData] = useState([])
    // const [mokdata, setDatas] = useState([])
    const { mood } = useContext(Context)
    const { t } = useTranslation()

    useEffect(() => {
        const handleData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/department/${params.id}`);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        handleData();
    }, [])

    // useEffect(() => {
    //     const handleDatas = async () => {
    //         try {
    //             const response = await axios.get('http://127.0.0.1:8000/api/doctor/');
    //             setDatas(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     handleDatas();
    // }, [])

    return (
        <>
            {data && (
                <section>
                    <div className='mt-[20px]'>
                        <div className='services_image'>
                            <h1 className={`text-center text-white font-bold bg-[#00000050] h-[200px] text-[48px] pt-[60px] doctors_title`}>{data.name_uz}</h1>
                        </div>
                    </div>
                    <div className='container mt-[100px] about'>
                        <div className='flex  justify-between section_box gap-5'>
                            <div>
                                <h1 className={`${mood ? 'text-[#2D3663]' : 'text-white'} text-[24px] font-bold mt-10 sections_title`}>{t("title")}</h1>
                                <h1 className={`${mood ? 'text-[#2D3663]' : 'text-white'} text-[32px] mt-2 sections_title1`}>{data.name_uz} кафедраси</h1>
                                <p className={`${mood ? 'text-[#777a89]' : 'text-[#e4e3e3]'} text-[18px]  max-w-[600px] mt-5 sections_title2`}>{data.description1_uz}</p>
                            </div>
                            <div>
                                {data.vedio ? (
                                    <ReactPlayer className='w-[700px] h-[400px] section_player' url={data.vedio} />
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div>
                        <div className='mt-[80px] about sections_box1'>
                            <p className={`${mood ? 'text-[#777a89]' : 'text-[#dedddd]'} text-[18px] max-w-[1500px] mt-5`}>{data.description1_uz}</p>
                            <p className={`text-[18px] ${mood ? 'text-[#777a89]' : 'text-[#dedddd]'} max-w-[1500px] mt-5`}>{data.description2_uz}</p>
                            <p className={`text-[18px] ${mood ? 'text-[#777a89]' : 'text-[#dedddd]'} max-w-[1500px] mt-5`}>{data.description3_uz}</p>
                            <h1 className={`text-[28px] ${mood ? 'text-[#2D3663]' : 'text-white'} mt-10`}>Tizimlar xizmatlar</h1>
                            <div className='flex items-center mt-2 sections_box1'>
                                <FaSquareCheck className={`${mood ? 'text-green-600' : 'text-white'} w-[20px] h-[20px] `} />
                                <p className={`${mood ? 'text-[#878ca1]' : 'text-[#dedddd]'} text-[18px] max-w-[750px] ml-2`}>{data.operation1_uz}</p>
                            </div>
                            <div className='flex items-center mt-2 sections_box1'>
                                <FaSquareCheck className={`${mood ? 'text-green-600' : 'text-white'} w-[20px] h-[20px] `} />
                                <p className={`${mood ? 'text-[#878ca1]' : 'text-[#dedddd]'} text-[18px] max-w-[1000px] ml-2`}>{data.operation2_uz}</p>
                            </div>
                            <div className='flex items-center mt-2 sections_box1'>
                                <FaSquareCheck className={`${mood ? 'text-green-600' : 'text-white'} w-[20px] h-[20px] `} />
                                <p className={`${mood ? 'text-[#878ca1]' : 'text-[#dedddd]'} text-[18px] max-w-[1000px] ml-2`}>{data.operation3_uz}</p>
                            </div>
                            <div className='flex items-center mt-2 sections_box1'>
                                <FaSquareCheck className={`${mood ? 'text-green-600' : 'text-white'} w-[20px] h-[20px] `} />
                                <p className={`${mood ? 'text-[#878ca1]' : 'text-[#dedddd]'} text-[18px] max-w-[1000px] ml-2`}>{data.operation4_uz}</p>
                            </div>
                        </div>
                        <div className='mt-[80px] about'>
                            <div className='flex flex-col items-center justify-center text-center'>
                                {/* <h1 className={`${mood ? 'text-blue-950' : 'text-white'} text-[42px] doctors_title`}>Rahbariyat</h1> */}
                            </div>
                            {/* <ul className='mt-[50px] about flex items-center justify-between doctors'>
                                {
                                    data.slice(0, 4).map((item) => (
                                        <li key={item.id} className='hover:shadow-2xl hover:cursor-pointer shadow-xl bg-[#EDF3F6] p-5 rounded-xl h-[500px] w-[350px] flex flex-col items-center justify-center text-center'>
                                            <img className='hover:shadow-xl mt-2 image w-[250px] h-[250px]' src={item.image} alt="alisher" />
                                            <h1 className='text-[24px] h-[60px] mt-5 font-bold text-blue-950'>{item.name}</h1>
                                            <NavLink to={`/doctor/${item.id}`} className='hover:bg-slate-800 text-[18px] mt-6 w-[250px] text-white pt-1 pb-1 rounded-[30%] bg-blue-950'>{item.category_name}</NavLink>
                                            <p className='mt-4 text-[#4c547c]'>{item.category_name}</p>
                                        </li>
                                    ))
                                }
                            </ul> */}
                        </div>
                        <div className='sections_item1'>
                            <p className={`${mood ? 'text-[#878ca1]' : 'text-white'} font-bold mt-[80px] text-[18px] max-w-[750px]`}>Qandaydir murojatlaringiz bulsa mutaxasilarga murojat qiling</p>
                            <div className='flex items-center mt-5 sections_item1'>
                                <FaPhoneAlt className={`cursor-pointer w-[20px] h-[20px] ${mood ? 'text-[#878ca1]' : 'text-white'} bt_phones`} />
                                <p className={`cursor-pointer ml-5 text-[18px] ${mood ? 'text-[#878ca1]' : 'text-white'} max-w-[400px]`}>Phone Number: +998 556 33 11</p>
                            </div>
                            <div className='news_item1'>
                                <NavLink to={'/connections'}>
                                    <button className='flex items-center justify-center  text-white rounded-3xl w-[250px] pt-4 pb-4 mt-[30px]  bg-[#6c7293]'>Murojat qilish<FaArrowCircleRight className='mt-1 ml-2 w-[18px] h-[18px]' /></button>
                                </NavLink>
                            </div>
                            <div className='flex items-center mt-[30px] gap-3 news_item1'>
                                <FaFacebook className={`${mood ? 'text-blue-600' : 'text-white'} cursor-pointer w-[35px] h-[35px] `} />
                                <FaWhatsappSquare className={`${mood ? 'text-blue-600' : 'text-white'} cursor-pointer w-[35px] h-[35px] `} />
                                <FaTelegram className={`${mood ? 'text-blue-600' : 'text-white'} cursor-pointer w-[35px] h-[35px] `} />
                                <FaLinkedin className={`${mood ? 'text-blue-600' : 'text-white'} cursor-pointer w-[35px] h-[35px] `} />
                                <FaSquareTwitter className={`${mood ? 'text-blue-600' : 'text-white'} cursor-pointer w-[35px] h-[35px] `} />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Section