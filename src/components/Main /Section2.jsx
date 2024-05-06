import React from 'react'
import Mri from '../../assets/images/mri1.png'
import Alisher from '../../assets/images/alisher.jpg'
import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Section2 = () => {
  return (
    <>
        <section className='bg-[#2d3663] p-[40px] mt-[100px]'>
            <div className='container flex items-center justify-between mri_div'>
                <div className='mri_list'>
                    <h1 className='text-red-500 font-bold text-[20px]'>Sog'lom hayot</h1>
                    <p className='text-white font-bold text-[32px] mt-3 mri_title'>Sinov uchun eng zamonaviy MRI skaner</p>
                    <p className='text-white text-[22px] max-w-[600px] mt-5 mri_text'>Zamonaviy MRI skaneri tufayli bemorlarimiz tez va aniq tashxis qo‘yishadi, bu esa eng qisqa vaqt ichida davolashni boshlash imkonini beradi. Ishonchimiz komilki, ushbu yuqori texnologiyali uskunadan foydalanish sog‘liqni saqlash xizmatlarimiz samaradorligini oshirish va davolash natijalarini yaxshilashga yordam beradi.</p>
                    <button href='+998908660605' className=' text-white rounded-3xl w-[150px] pt-2 pb-2 mt-[30px] ml-4 bg-blue-600 hover:bg-blue-800'>Aloqa</button>
                </div>
                <div className='mt-[20px]'>
                    <img className='max-w-[800px] h-[600px] mri_logo' src={Mri} alt="mri" />
                </div>
            </div>
        </section>
        <section className='mt-[80px] container'> 
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-[42px] text-blue-950'>Бизнинг шифокорларимиз</h1>
                <p className='text max-w-[750px] text-[18px] text-[#2D3663] mt-3'>Беморларни олий тоифали шифокорлар, фан номзодлари ва докторлари қабул қиладилар. Ташриф буюрувчилар кенг қамровли ва тўлиқ текширувлардан ўтишлари ҳамда малакали тиббий ёрдам олишлари мумкин.</p>
            </div>
            <ul className='mt-[50px] flex items-center justify-between doctors'>
                <li className='hover:shadow-2xl hover:cursor-pointer shadow-xl bg-[#EDF3F6] p-5 rounded-xl max-w-[350px] flex flex-col items-center justify-center text-center'>
                    <img className='hover:shadow-xl mt-2 image w-[250px] h-[250px]' src={Alisher} alt="alisher" />
                    <h1 className='text-[24px] mt-5 font-bold text-blue-950'>Yoqubov Boburjon Alisherovich</h1>
                    <NavLink to={'/doctor'} className='hover:bg-slate-800 text-[18px] mt-4 w-[250px] text-white pt-1 pb-1 rounded-[30%] bg-blue-950'>Кардиореаниматолог</NavLink>
                    <p className='mt-4 text-[#4c547c]'>Кардиореаниматолог</p>
                </li>  
                <li className='hover:shadow-2xl hover:cursor-pointer shadow-xl bg-[#EDF3F6] p-5 rounded-xl max-w-[350px] flex flex-col items-center justify-center text-center'>
                    <img className='hover:shadow-xl mt-2 image w-[250px] h-[250px]' src={Alisher} alt="alisher" />
                    <h1 className='text-[24px] mt-5 font-bold text-blue-950'>Yoqubov Boburjon Alisherovich</h1>
                    <NavLink to={'/doctor'} className='hover:bg-slate-800 text-[18px] mt-4 w-[250px] text-white pt-1 pb-1 rounded-[30%] bg-blue-950'>Кардиореаниматолог</NavLink>
                    <p className='mt-4 text-[#4c547c]'>Кардиореаниматолог</p>
                </li> 
                <li className='hover:shadow-2xl hover:cursor-pointer shadow-xl bg-[#EDF3F6] p-5 rounded-xl max-w-[350px] flex flex-col items-center justify-center text-center'>
                    <img className='hover:shadow-xl mt-2 image w-[250px] h-[250px]' src={Alisher} alt="alisher" />
                    <h1 className='text-[24px] mt-5 font-bold text-blue-950'>Yoqubov Boburjon Alisherovich</h1>
                    <NavLink to={'/doctor'} className='hover:bg-slate-800 text-[18px] mt-4 w-[250px] text-white pt-1 pb-1 rounded-[30%] bg-blue-950'>Кардиореаниматолог</NavLink>
                    <p className='mt-4 text-[#4c547c]'>Кардиореаниматолог</p>
                </li> 
                <li className='hover:shadow-2xl hover:cursor-pointer shadow-xl bg-[#EDF3F6] p-5 rounded-xl max-w-[350px] flex flex-col items-center justify-center text-center'>
                    <img className='hover:shadow-xl mt-2 image w-[250px] h-[250px]' src={Alisher} alt="alisher" />
                    <h1 className='text-[24px] mt-5 font-bold text-blue-950'>Yoqubov Boburjon Alisherovich</h1>
                    <NavLink to={'/doctor'} className='hover:bg-slate-800 text-[18px] mt-4 w-[250px] text-white pt-1 pb-1 rounded-[30%] bg-blue-950'>Кардиореаниматолог</NavLink>
                    <p className='mt-4 text-[#4c547c]'>Кардиореаниматолог</p>
                </li>         
            </ul>
            <div className='flex items-center justify-center mt-[40px]'>
                <NavLink to={'/doctors'} className='flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-3 pb-3 mt-[30px] ml-4 bg-blue-950 hover:bg-slate-900'>Шифокорларимиз <FaArrowCircleRight className='mt-1 w-[18px] h-[18px]'/></NavLink>
            </div>
        </section>
    </>
  )
}

export default Section2