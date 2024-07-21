import React, { useContext, useEffect, useState } from 'react'
import Mri from '../../assets/images/hokimlik.jpg'
import Alisher from '../../assets/images/alisher.jpg'
import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {Context} from '../Context/Context'
import { useTranslation } from 'react-i18next';

const Section2 = () => {
    const [data, setData] = useState([]);
    const {mood} = useContext(Context)
    const {t} = useTranslation()

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
            <section className='bg-[#2d3663] p-[50px] mt-[100px]'>
                <div className='container flex items-center justify-between mri_div'>
                    <div className='mri_list'>
                        <h1 className='text-red-500 font-bold text-[20px]'>{t("title")}</h1>
                        <p className='text-white font-bold text-[32px] mt-3 mri_title'>G‘uzor tuman hokimligi </p>
                        <p className='text-white text-[22px] max-w-[600px] mt-5 mri_text'>Бунинг учун суд-ҳуқуқ идораларининг кадрлар салоҳиятини яхшилаш ва моддий-техник базасини мустаҳкамлаш зарур. Энг муҳими, терговчи, прокурор, судья, адвокатларнинг билим ва малакаси, маънавий дунёсини юксалтириш билан бирга аҳолининг ҳам ҳуқуқий маданиятини ошириш, ҳаммамизнинг дунёқарашимизни ўзгартириш талаб этилади.</p>
                        <button href='+998908660605' className=' text-white rounded-3xl w-[150px] pt-2 pb-2 mt-[30px] ml-4 bg-blue-600 hover:bg-blue-800'>Aloqa</button>
                    </div>
                    <div className='mt-[20px]'>
                        <img className='max-w-[800px] rounded-xl h-[600px] mri_logo' src={Mri} alt="mri" />
                    </div>
                </div>
            </section>
            <section className='mt-[80px] container'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className={`${mood? 'text-blue-950': 'text-white'} text-[52px] `}>Rahbarlar</h1>
                    <p className={`${mood? 'text-[#2D3663]': 'text-white'} text max-w-[750px] text-[18px] mt-3`}></p>
                </div>
                <ul className='mt-[50px] flex items-center justify-between doctors'>
                    {
                        data.slice(0,4).map((item) => (
                            <li key={item.id} className='hover:shadow-2xl hover:cursor-pointer shadow-xl bg-[#EDF3F6] p-5 rounded-xl h-[500px] w-[350px] flex flex-col items-center justify-center text-center'>
                                <img className='hover:shadow-xl mt-2 image w-[250px] h-[250px]' src={item.image} alt="alisher" />
                                <h1 className='text-[24px] h-[60px] mt-5 font-bold text-blue-950'>{item.name}</h1>
                                <NavLink to={`/doctor/${item.id}`} className='hover:bg-slate-800 text-[18px] mt-6 w-[250px] text-white pt-1 pb-1 rounded-[30%] bg-blue-950'>{item.category_name}</NavLink>
                                <p className='mt-4 text-[#4c547c]'>{item.category_name}</p>
                            </li>
                        ))
                    }
                </ul>
                <div className='flex items-center justify-center mt-[40px]'>
                    <NavLink to={'/rahbar'} className={`${mood? 'text-white bg-blue-950 hover:bg-slate-900': 'text-blue-950 bg-white hover:bg-blue-50'} flex items-center justify-center gap-3  rounded-3xl w-[200px] pt-3 pb-3 mt-[30px] ml-4 bg-blue-950 `}>Rahbarlar <FaArrowCircleRight className='mt-1 w-[18px] h-[18px]' /></NavLink>
                </div>
            </section>
        </>
    )
}

export default Section2