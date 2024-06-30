import React, { useContext } from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import admin from '../../assets/images/mri1.png'
import { FaTelegram } from "react-icons/fa";
import {Context} from '../Context/Context'

const Section3 = () => {
  const {mood} = useContext(Context)
  return (
    <>
        <section className='images mt-[100px] p-[80px] times_div'>
            <div className='container'>
                <div className='ml-[600px] times'>
                    <div className={`${mood? 'bg-[#043C7C]': 'bg-[#2D3663]'}   max-w-[800px] p-[50px] rounded-xl times1`}>
                        <h1 className='text-white text-[18px]'>ISH VAQTI</h1>
                        <h1 className='text-white text-[40px] mt-3 times_title'>Sog'lom Hayot Kilinikasi</h1>
                        <p className='text-white text-[16px] mt-2'>ko'p tarmoqli klinika</p>
                        <div className='border-b-2 text-white text-[16px] mt-9 flex items-center justify-between border-[#424794]'>
                            <p className='mb-5'>Dushanba,juma: </p>
                            <p className='mb-5'>8:30 - 19:00</p>
                        </div>
                        <div className='border-b-2 text-white text-[16px] mt-9 flex items-center justify-between border-[#424794]'>
                            <p className='mb-5'>Shanba: </p>
                            <p className='mb-5'>9:00 - 14:00</p>
                        </div>
                        <div className='border-b-2 text-white text-[16px] mt-9 flex items-center justify-between border-[#424794]'>
                            <p className='mb-5'>Yakshanba: </p>
                            <p className='mb-5'>Выходной</p>
                        </div>
                        <div className='border-b-2 text-white text-[16px] mt-9 flex items-center justify-between border-[#424794] ultra'>
                            <p className='mb-5'>navbatchi: ultratovush, terapevt, jarroh, KBB </p>
                            <p className='mb-5'>17:00 - 20:00</p>
                        </div>
                        <div className='border-b-2 text-white text-[16px] mt-9 flex items-center justify-between border-[#424794] ultra'>
                            <p className='mb-5'>laboratoriya, radiologiya, qo'ng'iroqlar markazi </p>
                            <p className='mb-5'>24/7</p>
                        </div>
                    <button className='text-blue-950 rounded-3xl w-[250px] pt-3 pb-3 mt-[45px]  bg-white hover:bg-blue-800 hover:text-white'>Favqulotda qo'ng'iroq</button>
                    </div>
                </div>
            </div>
        </section>
        <section className='container flex justify-around mt-[100px] admin_time'>
            <div className='admin_time'>
                <h1 className={`text-blue-950 font-bold text-[22px] mt-[100px] sg_title ${mood? '' : 'text-white'}`}>Соғлом ҳаёт килиника</h1>
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
                <img className={`${mood? 'hover:shadow-2xl' : ''} cursor-pointer max-w-[600px] h-[600px] mri_logo`} src={admin} alt="admin" />
            </div>
        </section>
    </>
  )
}

export default Section3