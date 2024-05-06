import React from 'react'
import Logo from '../../assets/images/logo.png'
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section className='mt-[100px] container'>
        <h1 className='text-center text-[40px] font-bold text-blue-950 maps_title'>Location</h1>
        <div className='mt-[40px] flex  justify-around header_maps'>
          <div className='mt-[50px] maps_div'>
          <p className='text-[26px] font-bold text-blue-950 max-w-[400px] maps_title1 maps_box'>Sog'lom Hayot</p>
            <div className='flex items-center mt-[20px] maps_box'>
              <IoTime className='w-[30px] h-[30px] text-blue-950'/>
              <p className='ml-5 text-[18px] font-bold text-blue-950 '>Ish vaqti: 24/7</p>
            </div>
            <div className='flex items-center mt-5 maps_box'>
              <FaLocationDot className='cursor-pointer w-[30px] h-[30px] text-blue-950'/>
              <p className='ml-5 text-[18px] font-bold text-blue-950 max-w-[400px]'>Toshkent shahar, Yangihayot tumani, massiv Yo’ldosh 7 kvartal 9 uy</p>
            </div>
            <div className='flex items-center mt-5 maps_box'>
              <Link to={"tel:+9985563311"}><FaPhoneAlt className='cursor-pointer w-[30px] h-[30px] text-blue-950'/></Link>
              <Link to={"tel:+9985563311"} className='cursor-pointer ml-5 text-[18px] font-bold text-blue-950 max-w-[400px]'>Phone Number: +998 556 33 11</Link>
            </div>
          </div>
          <div>
          <iframe
            className='w-[600px] maps_logo ml-3'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.817362823962!2d69.22519327636788!3d41.20395520735261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61002c970f39%3A0x9b6f92597f056858!2sSog&#39;lom%20Hayot!5e0!3m2!1suz!2s!4v1714398990201!5m2!1suz!2s"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
      </section>
      <footer className='bg-[#2d3663] p-10 mt-[70px]'>
          <div className='container flex  justify-between footer_div'>
              <div className='w-full max-w-[400px]'>
                  <div className='flex items-center footer_div'>
                      <img className='w-[70px] h-[70px]' src={Logo} alt="logo" />
                      <h1 className='text-[20px] text-center w-[20px] ml-3 text-white font-bold font-mono logos_title'>Sog'lom Hayot</h1>
                      <h1 className='text-[20px] text-center text-white font-bold font-mono logos_title1'>Sog'lom Hayot</h1>   
                  </div>
                  <div>
                    <h1 className='text-white text-[24px] max-w-[450px] mt-5 footer_title'>Bizda ish vaqti 24/7 biz Doimo Bemorlarimiz haqida qayg'uramiz !</h1>
                  </div>
              </div>
              <div className='flex flex-col w-full max-w-[400px]'> 
                <h1 className='text-[32px] text-center text-white font-bold font-mono footer_title'>Меню</h1> 
                <button className='text-[20px] text-white font-mono cursor-pointer mt-2 font-bold footer_title1'>Biz haqimizda</button> 
                <button className='text-[20px] text-white font-mono cursor-pointer mt-2 font-bold footer_title1'>Xizmatlar</button>   
                <button className='text-[20px] text-white font-mono cursor-pointer mt-2 font-bold footer_title1'>Bo'limlar</button>   
                <button className='text-[20px] text-white font-mono cursor-pointer mt-2 font-bold footer_title1'>Sug'irta</button>   
                <button className='text-[20px] text-white font-mono cursor-pointer mt-2 font-bold footer_title1'>Maqolalar</button>   
              </div>
              <div className='flex flex-col w-full max-w-[400px]'>
                <h1 className=' text-[32px] text-center  text-white font-bold font-mono footer_title'>Контакты</h1> 
                <div className='flex items-center footer_div'>
                  <div className='bg-white p-2 rounded-[50%] mt-1'>
                    <FaPhoneAlt className='text-blue-950 w-[20px] h-[20px]'/>
                  </div>
                  <p className='text-[20px] text-white ml-2 font-mono cursor-pointer mt-2 mr-10 font-bold footer_title1'>Телефон нумбер: +998 92 222 33 33</p>
                </div> 
                <div className='flex items-center  mt-[10px] footer_div'>
                  <div className='bg-white p-2 rounded-[50%] mt-1'>
                    <FaPhoneAlt className='text-blue-950 w-[20px] h-[20px]'/>
                  </div>
                  <p className='text-[20px] text-white ml-2 font-mono cursor-pointer mt-2 mr-10 font-bold footer_title1'>Қўшимча номер: +998 92 222 33 33</p>
                </div> 
                <div className='flex items-center  mt-[10px] footer_div'>
                  <div className='bg-white p-2 rounded-[50%] mt-1'>
                    <CiLocationOn className='text-blue-950 w-[20px] h-[20px]'/>
                  </div>
                  <p className='text-[20px] text-white ml-2 font-mono cursor-pointer mt-2 mr-10 font-bold footer_title1'> Адрес: Yangi hayot</p>
                </div> 
                <div className='flex items-center mt-[10px] footer_div'>
                  <div className='bg-white p-2 rounded-[50%] mt-1'>
                    <FaInstagram className='text-blue-950 w-[20px] h-[20px]'/>
                  </div>
                  <p className='text-[20px] text-white ml-2 font-mono cursor-pointer mt-2 mr-10 font-bold footer_title1'>Instagram</p>
                </div>
              </div>
          </div>
      </footer>
    </>
  )
}

export default Footer