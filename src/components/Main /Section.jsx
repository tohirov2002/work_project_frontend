import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next'
import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import { Navigation, Autoplay } from 'swiper/modules';
import { useContext } from 'react';
import { Context } from '../Context/Context';

const Swipers = () => {
  const {t} = useTranslation()
  const {mood} = useContext(Context)
  return (
    <div className={`${mood? '' : 'bg-[#2D3663]'} pt-[30px]`}>
   <Swiper 
        loop={true} 
        navigation={true} 
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]} 
        className="">
        <SwiperSlide>
         <div className='img1'>
          <div className='flex items-center justify-center flex-col z-10 bg-[#0000007b] h-[800px]'>
          <h1 className='text-white font-bold text-center text-[70px] pt-[100px]'>Соғлом ҳаёт</h1>
          <p className='text-white text-center text-[35px] max-w-[1100px]'>Килиникамизда  бугунги кунда мавжуд бўлган энг замонавий даволаш усуллари қўлланилади !</p>
         <NavLink to={'/about'}>
            <button className='flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-4 pb-4 mt-[30px]  bg-blue-950 hover:bg-slate-900'>{t("Batafsil")} <FaArrowCircleRight className='mt-1 w-[18px] h-[18px]'/></button>
         </NavLink>
          </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img2'>
        <div className='flex items-center justify-center flex-col z-10 bg-[#0000007b] h-[800px]'>
          <h1 className='text-white font-bold text-center text-[60px] pt-[100px]'>Жарроҳлик  Бўлимига хуш келибсиз  </h1>
          <p className='text-white text-center text-[35px] max-w-[1100px]'>Бизда энг кучли мутахасислар  кардиология жарроҳлик операцияларини олиб боради!</p>
          <NavLink to={'/Insurance'}>
            <button className='flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-4 pb-4 mt-[30px]  bg-blue-950 hover:bg-slate-900'>{t("Batafsil")} <FaArrowCircleRight className='mt-1 w-[18px] h-[18px]'/></button>
         </NavLink>
          </div>
         </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className='img3'>
        <div className='flex items-center justify-center flex-col z-10 bg-[#0000007b] h-[800px]'>
          <h1 className='text-white font-bold text-center text-[70px] pt-[100px]'>Бизда сиз учун</h1>
          <p className='text-white text-center text-[35px] max-w-[1100px]'>Юқори малакали мутахасислар замонавий апаратлар қулай шароитлар!</p>
          <NavLink to={'/doctors'}>
            <button className='flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-4 pb-4 mt-[30px]  bg-blue-950 hover:bg-slate-900'>{t("Batafsil")} <FaArrowCircleRight className='mt-1 w-[18px] h-[18px]'/></button>
         </NavLink>
          </div>
         </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Swipers