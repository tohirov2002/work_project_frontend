import React, { useContext, useState } from 'react'
import { LiaBrainSolid } from "react-icons/lia";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { LiaToothSolid } from "react-icons/lia";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import axios from 'axios';
import {Context} from '../Context/Context'

const Section1 = () => {
    const { t } = useTranslation()
    const count1 = useMotionValue(0);
    const count2 = useMotionValue(0);
    const count3 = useMotionValue(0);
    const count4 = useMotionValue(0);
    const count5 = useMotionValue(0);
    const count6 = useMotionValue(0);

    const rounded1 = useTransform(count1, Math.round);
    const rounded2 = useTransform(count2, Math.round);
    const rounded3 = useTransform(count3, Math.round);
    const rounded4 = useTransform(count4, Math.round);
    const rounded5 = useTransform(count5, Math.round);
    const rounded6 = useTransform(count6, Math.round);


    useEffect(() => {
        const animation1 = animate(count1, 50, { duration: 7 });
        const animation2 = animate(count2, 20, { duration: 6 });
        const animation3 = animate(count3, 80, { duration: 7 });
        const animation4 = animate(count4, 100, { duration: 10 });
        const animation5 = animate(count5, 99, { duration: 10 });
        const animation6 = animate(count6, 1, { duration: 8 });


        return () => {
            animation1.stop();
            animation2.stop();
            animation3.stop();
            animation4.stop();
            animation5.stop();
        };
    }, []);

    const [data, setData] = useState([]);
    const {mood} = useContext(Context)

    useEffect(() => {
        const handleData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/department/');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        handleData();
    }, [])
    return (
        <>
            <section className='container main_section1_div pt-[50px] flex items-center justify-between'>
                <div className={`shadow-xl bg-[#2d3663] ${mood? '' : 'bg-white'} max-w-[400px] p-[30px] rounded-[10px] pl-[30px] pb-[50px] section1_left`}>
                    <h1 className={`${mood? 'text-white' : 'text-[#2D3663]'} text-[32px] font-bold  mt-4 ml-4`}>{t("title")}</h1>
                    <p className={`${mood? 'text-white' : 'text-[#2D3663]'} text-[20px] font-normal max-w-[300px] mt-4 ml-4 section1_left_title`}>{t("text")}</p>
                    <button className=' text-white rounded-3xl w-[150px] pt-2 pb-2 mt-[30px] ml-4 bg-blue-600 hover:bg-blue-800'>{t("Batafsil")}</button>
                </div>
                <div className='max-w-[1000px] mr-[50px] p-[50px] rounded-md bg-blue-50 section1_right'>
                    <ul className='flex items-center justify-between gap-5 section1_list'>
                        {
                            data.slice(0,4).map((item) => (
                                <NavLink to={`sections/${item.id}`}>
                                    <li key={item.id} className='item bg-white w-[200px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                                        <img src={item.image} className='icon1 w-[50px] h-[50px] text-blue-950' alt={item.name_uz} />
                                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>{item.name_uz}</p>
                                        {console.log(item.name_uz)}
                                    </li>
                                </NavLink>
                            ))
                        }
                    </ul>
                    <ul className='flex items-center justify-between bg-blue-50 mt-[50px] gap-5 section1_list'>
                        <li className='bg-white item  w-[200px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                            <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 ' />
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Лор</p>
                        </li>
                        <li className='bg-white item w-[200px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                            <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 ' />
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Офтальмолог</p>
                        </li>
                        <li className='bg-white item w-[200px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                            <LiaToothSolid className='icon1 w-[50px] h-[50px] text-blue-950 ' />
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Stamatalog</p>
                        </li>
                        <li className='bg-white item w-[200px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                            <LiaHeartbeatSolid className='icon1 w-[50px] h-[50px] text-blue-950 ' />
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Денстометрия</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='container mt-[50px]'>
                <div className='mr-[50px] p-[50px] rounded-md bg-blue-50 section1_div1'>
                    <ul className='flex items-center justify-between gap-5 section1_list1'>
                        <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                            <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 ' />
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>невропатолог</p>
                        </li>
                        <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                            <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 ' />
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>гемодиализ</p>
                        </li>
                        <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                            <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 ' />
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>гемодиализ</p>
                        </li>
                        <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                            <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 ' />
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>невропатолог</p>
                        </li>
                        <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                            <LiaHeartbeatSolid className='icon1 w-[50px] h-[50px] text-blue-950 ' />
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>кардиолог</p>
                        </li>
                    </ul>
                    <ul className='flex items-center justify-between bg-blue-50 mt-[50px] gap-5 section1_list1'>
                        <li className='bg-white item  w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                            <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 ' />
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Лор</p>
                        </li>
                        <li className='bg-white item w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                            <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 ' />
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Офтальмолог</p>
                        </li>
                        <li className='bg-white item w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                            <LiaToothSolid className='icon1 w-[50px] h-[50px] text-blue-950 ' />
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Stamatalog</p>
                        </li>
                        <li className='bg-white item w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                            <LiaHeartbeatSolid className='icon1 w-[50px] h-[50px] text-blue-950 ' />
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Денстометрия</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='container mt-[100px] flex justify-between quality'>
                <div className='quality_left'>
                    <h1 className={`${mood? 'text-[#2D3663]' : 'text-white'} text-[20px]`}>Sog'lom Hayot</h1>
                    <p className={`${mood? 'text-[#2D3663]' : 'text-white'} mt-2 font-bold text-[36px] max-w-[500px] text-blue-950 quality_text`}>Кўп тармоқли клиникага хуш келибсиз</p>
                    <p className={`${mood? 'text-[#2D3663]' : 'text-white'} mt-3 max-w-[650px] text-[20px] text-blue-950 quality_text`}>Биз Сиз билан ўзимизнинг кўп тармоқли ажойиб клиникамизда кўришиб турганимиздан мамнунмиз. Бу рисола саҳифалари орқали биз Сизни клиникамизнинг кенг қамровли хизматлари билан таништирамиз. Бу ерда, яъни тинч ва хавфсиз ҳудудда Сиз ўзингизни хотиржам ҳис қилишингиз, соғлигингизни тиклашингиз ва кучга тўлишингиз мумкин.</p>
                </div>
                <div className='mr-[50px] quality_right'>
                    <p className={`${mood? 'text-[#2D3663]' : 'text-white'} text-[20px]`}>Бизнинг кўрсаткичларимиз</p>
                    <p className={`${mood? 'text-[#2D3663]' : 'text-white'} font-bold text-[36px] mt-2`}>Нима учун бизга ишонишади ?</p>
                    <ul className='mt-[40px] flex items-center justify-between gap-[40px] circle_list'>
                        <li className={`${mood? 'border-blue-950' : 'border-white'} hover:cursor-pointer hover:shadow-2xl ${mood? 'hover:bg-blue-50': ''} w-[200px] h-[200px] rounded-[50%] border-[5px] flex flex-col items-center justify-center`}>
                            <p className={`${mood? 'text-blue-950' : 'text-white'} font-bold text-[40px] flex items-center`}><motion.p>{rounded4}</motion.p>%</p>
                            <p className={`${mood? 'text-blue-950' : 'text-white'} text-[24px] text-blue-950 font-medium`}>Sifat</p>
                        </li>
                        <li className={`${mood? 'border-blue-950' : 'border-white'} hover:cursor-pointer hover:shadow-2xl ${mood? 'hover:bg-blue-50': ''} w-[200px] h-[200px] rounded-[50%] border-[5px] flex flex-col items-center justify-center`}>
                            <p className={`${mood? 'text-blue-950' : 'text-white'} font-bold text-[40px] flex items-center`}><motion.p>{rounded5}</motion.p>%</p>
                            <p className={`${mood? 'text-blue-950' : 'text-white'} text-[24px] text-blue-950 font-medium`}>Qulaylik</p>
                        </li>
                        <li className={`${mood? 'border-blue-950' : 'border-white'} hover:cursor-pointer hover:shadow-2xl ${mood? 'hover:bg-blue-50': ''} w-[200px] h-[200px] rounded-[50%] border-[5px] flex flex-col items-center justify-center`}>
                            <p className={`${mood? 'text-blue-950' : 'text-white'} font-bold text-[40px] flex items-center`}><motion.p>{rounded4}</motion.p>%</p>
                            <p className={`${mood? 'text-blue-950' : 'text-white'} text-[24px] text-blue-950 font-medium`}>Sanatariya</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='container mt-[100px] coiffsent'>
                <div className='mr-[50px] p-[50px] rounded-2xl bg-white shadow-2xl coiffsent'>
                    <ul className='flex items-center justify-between coiffsent_list'>
                        <li className=' bg-white p-5 rounded-lg hover:cursor-pointer flex flex-col items-center justify-center'>
                            <p className='font-bold text-[42px] text-blue-950 flex items-center'><motion.h1>{rounded1}</motion.h1>+</p>
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Квалифицированные врачи</p>
                        </li>
                        <li className='bg-white p-5 rounded-lg hover:cursor-pointer flex flex-col items-center justify-center'>
                            <p className='font-bold text-[42px] text-blue-950'><motion.p>{rounded2}</motion.p></p>
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Диагностические отделения</p>
                        </li>
                        <li className='bg-white p-5 rounded-lg hover:cursor-pointer flex flex-col items-center justify-center'>
                            <p className='font-bold text-[42px] text-blue-950 flex items-center'><motion.p>{rounded3}</motion.p>+</p>
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Год опыта</p>
                        </li>
                    </ul>
                    <ul className='flex items-center justify-between mt-5 coiffsent_list'>
                        <li className='bg-white p-5 rounded-lg hover:cursor-pointer flex flex-col items-center justify-center'>
                            <p className='font-bold text-[42px] text-blue-950 flex items-center'><motion.p>{rounded4}</motion.p>+</p>
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Пациенты  каждый день</p>
                        </li>
                        <li className='bg-white p-5 rounded-lg hover:cursor-pointer flex flex-col items-center justify-center'>
                            <p className='font-bold text-[42px] text-blue-950 flex items-center'><motion.p>{rounded5}</motion.p>%</p>
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Точность диагностики</p>
                        </li>
                        <li className='bg-white p-5 rounded-lg hover:cursor-pointer flex flex-col items-center justify-center'>
                            <p className='font-bold text-[42px] text-blue-950'><motion.p>{rounded6}</motion.p></p>
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Филиал</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Section1