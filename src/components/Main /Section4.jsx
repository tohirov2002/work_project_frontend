import React, { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../assets/main.css';
import { Navigation, Autoplay } from 'swiper/modules';

import bemor1 from '../../assets/images/bemor.jpg'
import bemor2 from '../../assets/images/bemor2.jpg'
import bemor3 from '../../assets/images/bemor3.webp'
import operatsiya from '../../assets/images/laser.png'
import Accordion from './Accardion';
import axios from 'axios';
import {Context} from '../Context/Context'

const Section4 = () => {
    const [data, setData] = useState([]);

    const {mood} = useContext(Context)

    useEffect(() => {
        const handleData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/comments/');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        handleData();
    }, [])

    return (
        <>
            <section className='dark:bg-black container mt-[100px]'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className={`${mood? 'text-slate-700' : 'text-white'} text-[24px]  font-bold`}>Шарҳлар</h1>
                    <p className={`${mood? 'text-blue-950' : 'text-white'} text-[40px] `}>Беморларимиздан шарҳлар</p>
                </div>
                <div className='mt-[80px] siwipers'>
                    <Swiper
                        navigation={true}
                        className="mySwiper"
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Autoplay]}
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className={`${mood? '': 'bg-[#2D3663]'} flex items-center justify-around comments`}>
                                    <div className='ml-[60px] comment_title'>
                                        <h1 className={`${mood? '': 'text-white'} text-blue-950 max-w-[500px] text-[20px] text-start comment_title`}>{item.description}</h1>
                                        <p className='text-blue-600 text-[16px] text-start mt-5 comment_text'>Бемор</p>
                                    </div>
                                    <div className='mr-[60px] comment_img_div'>
                                        <img className='hover:shadow-2xl rounded-[10px] cursor-pointer max-w-[600px] h-[600px] comment_img' src={item.image} alt="bemor" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <section className='container mt-[150px] questin'>
                <div className='flex justify-around questin'>
                    <div>
                        <img className='max-w-[650px] h-[600px] rounded-2xl questin_img' src={operatsiya} alt="operatsiya" />
                    </div>
                    <div className='mt-[30px] w-[100%] max-w-[620px] '>
                        <h1 className={`${mood ? 'text-slate-700': 'text-white'}  text-[18px] questin_title`}>FAQS</h1>
                        <p className={`${mood ? 'text-blue-950': 'text-white'}  text-[38px]  mt-4 max-w-[500px] questin_title`}>Доимо кўп сўраладиган саволлар</p>
                        <Accordion />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section4