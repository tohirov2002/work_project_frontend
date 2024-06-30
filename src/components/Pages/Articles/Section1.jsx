import React, { useContext, useEffect, useState } from 'react'
import turk from '../../../assets/images/turk.jpg'
import { IoMdTime } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaSquareCheck } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Layout from '../../Layout/Index';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../Context/Context';


const Section1 = () => {
    const params = useParams()
    const [data, setData] = useState([])
    const {mood} = useContext(Context)

    useEffect(() => {
        const handleData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/news/${params.id}`);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        handleData();
    }, [])
    return (
        <Layout>
            {data && (
                <section className='mt-[20px]'>
                    <div className='article_image1'>
                        <div className='flex items-center justify-center bg-[#00000050]'>
                            <h1 className='text-center text-white font-bold text-[28px] max-w-[1200px] p-[30px] doctors_title articles1_title'>{data.title_uz}</h1>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='mt-[80px] flex justify-center about'>
                            <div className='cursor-pointer article'>
                                <img className='max-w-[800px] h-[550px] rounded-md article_img' src={data.image} alt="turk" />
                                <div className='mt-5 flex items-center justify-around gap-3'>
                                    <div className='flex items-center'>
                                        <MdOutlinePersonOutline className='text-[#2D3663] w-[20px] h-[20px]' />
                                        <h1 className={`${mood? 'text-[#878ca1]': 'text-white'} text-[16px] ml-2`}>SoglomHayot tomonidan</h1>
                                    </div>
                                    <div className='flex items-center'>
                                        <IoMdTime className={`${mood? 'text-[#2D3663]': 'text-white'} w-[20px] h-[20px]`} />
                                        <h1 className={`${mood? 'text-[#878ca1]': 'text-white'} text-[16px] ml-2`}>31.03.2023</h1>
                                    </div>
                                    <div className='flex items-center'>
                                        <FaRegEye className={`${mood? 'text-[#2D3663]': 'text-white'} w-[20px] h-[20px]`} />
                                        <h1 className={`${mood? 'text-[#878ca1]': 'text-white'} text-[16px] ml-2`}>400</h1>
                                    </div>
                                </div>
                                <div className={`border_dashet ${mood? 'text-[#878ca1]': 'text-white'}`}></div>
                                <p className={`${mood? 'text-[#878ca1]': 'text-white'} mt-5 text-[18px] max-w-[750px]`}>Professor Gurkan Telliog'lu gepatobiliar jarrohlik sohasida yetakchi mutaxassis hisoblanadi. U umumiy jarrohlikni organ transplantatsiyasi bilan boshladi va Celveland klinikasida doktor professor Jon Fung bilan malaka oshirdi, u erda Turkiya jigar transplantatsiyasi jamiyati tomonidan yuborildi.</p>
                                <p className={`${mood? 'text-[#878ca1]': 'text-white'} mt-5 text-[18px] max-w-[750px]`}>Professor Barbaros Chil interventsion radiologiya bo'yicha malakasini AQShdagi Indina universiteti-Purdue universiteti tibbiyot fakultetida olgan. Shuningdek, u 2012 yildan beri Evropa yurak-qon tomir va interventsion radiologiya jamiyatining hamkor a'zosi.</p>
                                <p className={`${mood? 'text-[#878ca1]': 'text-white'} mt-5 text-[18px] max-w-[750px]`}>Siz quyidagi sohalarda professional maslahat olishingiz mumkin:</p>
                                <div className='flex items-center mt-5'>
                                    <FaSquareCheck className={`${mood? 'text-green-600': 'text-white'} w-[20px] h-[20px]`} />
                                    <p className={`${mood? 'text-[#878ca1]': 'text-white'} text-[18px] max-w-[750px] ml-2`}>o't yo'llari va oshqozon osti bezi jarrohligi</p>
                                </div>
                                <div className='flex items-center mt-2'>
                                    <FaSquareCheck className={`${mood? 'text-green-600': 'text-white'} w-[20px] h-[20px]`} />
                                    <p className={`${mood? 'text-[#878ca1]': 'text-white'} text-[18px] max-w-[750px] ml-2`}>laparoskopik jarrohlik</p>
                                </div>
                                <div className='flex items-center mt-2'>
                                    <FaSquareCheck className={`${mood? 'text-green-600': 'text-white'} w-[20px] h-[20px]`} />
                                    <p className={`${mood? 'text-[#878ca1]': 'text-white'} text-[18px] max-w-[750px] ml-2`}>onkologik jarrohlik</p>
                                </div>
                                <p className={`${mood? 'text-[#878ca1]': 'text-white'} mt-5 text-[18px] max-w-[750px]`}>Professor Gurkan Telliog'lu gepatobiliar maqsadli mutaxassislik. U umumiy. organ transplantatsiyasi bilan davolash va Kelveland klinikasi Professor John Fun bilan malaka oshirgan.</p>
                                <p className={`${mood? 'text-[#878ca1]': 'text-white'} mt-5 text-[18px] max-w-[750px]`}>Professor Barbaros Chil AQShdagi Indina universiteti-Purdue universiteti tibbiyot fakultetida intervention radiologiya bo'yicha malakasini olgan. 2012-yildan beri u Yevropa yurak-qon tomir va intervention radiologiya jamiyatining aʼzosi.</p>
                                <p className={`${mood? 'text-[#878ca1]': 'text-white'} mt-5 text-[18px] max-w-[750px]`}>Malakali mutahasis qabuliga yozilishni unutmang, Joylar soni cheklangan !</p>
                                <div className='flex items-center mt-5'>
                                    <FaPhoneAlt className={`${mood? 'text-[#878ca1]': 'text-white'} cursor-pointer w-[20px] h-[20px]`} />
                                    <p className={`${mood? 'text-[#878ca1]': 'text-white'} cursor-pointer ml-5 text-[18px] text-[#878ca1] max-w-[400px]`}>Phone Number: +998 556 33 11</p>
                                </div>
                                <div className='flex items-center mt-5'>
                                    <FaLocationDot className={`${mood? 'text-[#878ca1]': 'text-white'} cursor-pointer w-[25px] h-[25px]`} />
                                    <p className={`${mood? 'text-[#878ca1]': 'text-white'} ml-5 text-[18px] max-w-[400px]`}>Toshkent shahar, Yangihayot tumani, massiv Yo’ldosh 7 kvartal 9 uy</p>
                                </div>
                                <div className='flex items-center mt-[30px] gap-3'>
                                    <FaFacebook className={`cursor-pointer w-[35px] h-[35px] ${mood? 'text-blue-600': 'text-white'}`} />
                                    <FaWhatsappSquare className={`cursor-pointer w-[35px] h-[35px] ${mood? 'text-blue-600': 'text-white'}`} />
                                    <FaTelegram className={`cursor-pointer w-[35px] h-[35px] ${mood? 'text-blue-600': 'text-white'}`} />
                                    <FaLinkedin className={`cursor-pointer w-[35px] h-[35px] ${mood? 'text-blue-600': 'text-white'}`} />
                                    <FaSquareTwitter className={`cursor-pointer w-[35px] h-[35px] ${mood? 'text-blue-600': 'text-white'}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </Layout>
    )
}

export default Section1