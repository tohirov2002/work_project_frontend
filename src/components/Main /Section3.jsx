import React, { useContext } from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import admin from '../../assets/images/photo.jpg'
import { FaTelegram } from "react-icons/fa";
import {Context} from '../Context/Context'
import { useTranslation } from 'react-i18next';

const Section3 = () => {
  const {mood} = useContext(Context)
  const {t} = useTranslation()
  return (
    <>
        <section className='container flex justify-around mt-[100px] admin_time'>
            <div className='admin_time'>
                <h1 className={`text-blue-950 font-bold text-[22px] mt-[100px] sg_title ${mood? '' : 'text-white'}`}>{t("title")}</h1>
                <p className={`${mood? '' : 'text-white'} text-blue-950 font-bold text-[26px] mt-5`}>24/7</p>
                <p className={`${mood? '' : 'text-white'} text-[#534b4b]  text-[16px] max-w-[500px] mt-7`}>ЮКОРИ СИФАТЛИ МУТАХСИЗЛАР ҲАР ҚАНДАЙ ВАҚТДА СИЗГА ЁРДАМ БЕРИШГА ТАЙЁР.</p>
                <p className={`${mood? '' : 'text-white'} text-[#534b4b]  text-[18px] max-w-[500px] mt-7`}>Биз доимо сиз ҳақингизда қайғурамиз</p>              
                <p className={`${mood? '' : 'text-white'} text-blue-950  text-[24px] max-w-[500px] mt-7`}>Боғланиш</p>
                <div className=' flex items-center justify-between'>
                <div className='flex items-center gap-5 mt-[40px] phone_tg cursor-pointer'>
                    <div>
                    <FaPhoneVolume className={`${mood? '' : 'text-white'} w-[30px] h-[30px] text-blue-950`}/>
                    </div>
                    <div>
                        <h1 className={`${mood? '' : 'text-white'} text-[#534b4b]  text-[16px]`}>Телефон</h1>
                        <p className={`${mood? '' : 'text-white'} text-[#534b4b]  text-[16px] mt-1`}>+998 98 555 66 66</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 mt-[40px] mr-[50px] ml-[40px] phone_tg cursor-pointer'>
                    <div>
                    <FaTelegram className={`${mood? '' : 'text-white'} w-[30px] h-[30px] text-blue-950`}/>
                    </div>
                    <div className='cursor-pointer'>
                        <h1 className={`${mood? '' : 'text-white'} text-[#534b4b]  text-[16px]`}>Телиграм</h1>
                        <p className={`${mood? '' : 'text-white'} text-[#534b4b]  text-[16px] mt-1`}>@SG_admin</p>
                    </div>
                </div>
                </div>
            </div>
            <div className='admin_logo'>
                <img className={`${mood? 'hover:shadow-2xl' : ''} cursor-pointer rounded-xl max-w-[550px] h-[550px] mri_logo`} src={admin} alt="admin" />
            </div>
        </section>
    </>
  )
}

export default Section3