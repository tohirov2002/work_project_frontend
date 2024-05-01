import React from 'react'
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


const Section1 = () => {
  return (
    <section className='mt-[20px]'>
        <div className='article_image1'>
            <div className='flex items-center justify-center bg-[#00000050]'>
                <h1 className='text-center text-white font-bold text-[28px] max-w-[1200px] p-[30px]'>Туркиянинг икки энг яхши онкологи профессор Гуркан Теллиоғлу ва профессор Барбарос Чил 6 ва 7 октябр кунлари Соғлом Ҳаёт килиникамизга бепул консултатсиялар ўтказади.</h1>
            </div>
        </div>
        <div className='container'>
            <div className='mt-[80px] flex justify-center'>
                <div className='cursor-pointer'>
                    <img className='max-w-[800px] h-[550px] rounded-md' src={turk} alt="turk" />
                    <div className='mt-5 flex items-center justify-around'>
                        <div className='flex items-center'>
                            <MdOutlinePersonOutline className='text-[#2D3663] w-[20px] h-[20px]'/>
                            <h1 className='text-[#878ca1] text-[16px] ml-2'>SoglomHayot tomonidan</h1>
                        </div>
                        <div className='flex items-center'>
                            <IoMdTime className='text-[#2D3663] w-[20px] h-[20px]'/>
                            <h1 className='text-[#878ca1] text-[16px] ml-2'>31.03.2023</h1>
                        </div>
                        <div className='flex items-center'>
                            <FaRegEye className='text-[#2D3663] w-[20px] h-[20px]'/>
                            <h1 className='text-[#878ca1] text-[16px] ml-2'>400</h1>
                        </div>
                    </div>
                    <div className='border_dashet'></div>
                    <p className='text-[#878ca1] mt-5 text-[18px] max-w-[750px]'>Professor Gurkan Telliog'lu gepatobiliar jarrohlik sohasida yetakchi mutaxassis hisoblanadi. U umumiy jarrohlikni organ transplantatsiyasi bilan boshladi va Celveland klinikasida doktor professor Jon Fung bilan malaka oshirdi, u erda Turkiya jigar transplantatsiyasi jamiyati tomonidan yuborildi.</p>
                    <p className='text-[#878ca1] mt-5 text-[18px] max-w-[750px]'>Professor Barbaros Chil interventsion radiologiya bo'yicha malakasini AQShdagi Indina universiteti-Purdue universiteti tibbiyot fakultetida olgan. Shuningdek, u 2012 yildan beri Evropa yurak-qon tomir va interventsion radiologiya jamiyatining hamkor a'zosi.</p>
                    <p className='text-[#878ca1] mt-5 text-[18px] max-w-[750px]'>Siz quyidagi sohalarda professional maslahat olishingiz mumkin:</p>
                    <div className='flex items-center mt-5'>
                        <FaSquareCheck className='text-green-600 w-[20px] h-[20px] '/>
                        <p className='text-[#878ca1] text-[18px] max-w-[750px] ml-2'>o't yo'llari va oshqozon osti bezi jarrohligi</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <FaSquareCheck className='text-green-600 w-[20px] h-[20px] '/>
                        <p className='text-[#878ca1] text-[18px] max-w-[750px] ml-2'>laparoskopik jarrohlik</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <FaSquareCheck className='text-green-600 w-[20px] h-[20px] '/>
                        <p className='text-[#878ca1] text-[18px] max-w-[750px] ml-2'>onkologik jarrohlik</p>
                    </div>
                    <p className='text-[#878ca1] mt-5 text-[18px] max-w-[750px]'>Professor Gurkan Telliog'lu gepatobiliar maqsadli mutaxassislik. U umumiy. organ transplantatsiyasi bilan davolash va Kelveland klinikasi Professor John Fun bilan malaka oshirgan.</p>
                    <p className='text-[#878ca1] mt-5 text-[18px] max-w-[750px]'>Professor Barbaros Chil AQShdagi Indina universiteti-Purdue universiteti tibbiyot fakultetida intervention radiologiya bo'yicha malakasini olgan. 2012-yildan beri u Yevropa yurak-qon tomir va intervention radiologiya jamiyatining aʼzosi.</p>
                    <p className='text-[#878ca1] font-bold mt-5 text-[18px] max-w-[750px]'>Malakali mutahasis qabuliga yozilishni unutmang, Joylar soni cheklangan !</p>
                    <div className='flex items-center mt-5'>
                        <FaPhoneAlt className='cursor-pointer w-[20px] h-[20px] text-[#878ca1]'/>
                        <p className='cursor-pointer ml-5 text-[18px] text-[#878ca1] max-w-[400px]'>Phone Number: +998 556 33 11</p>
                    </div>
                    <div className='flex items-center mt-5'>
                        <FaLocationDot className='cursor-pointer w-[25px] h-[25px] text-[#878ca1]'/>
                        <p className='ml-5 text-[18px] text-[#878ca1] max-w-[400px]'>Toshkent shahar, Yangihayot tumani, massiv Yo’ldosh 7 kvartal 9 uy</p>
                    </div>
                    <div className='flex items-center mt-[30px] gap-3'>
                        <FaFacebook className='cursor-pointer w-[35px] h-[35px] text-blue-600'/>
                        <FaWhatsappSquare className='cursor-pointer w-[35px] h-[35px] text-green-600'/>
                        <FaTelegram className='cursor-pointer w-[35px] h-[35px] text-blue-600'/>
                        <FaLinkedin className='cursor-pointer w-[35px] h-[35px] text-blue-600'/>
                        <FaSquareTwitter className='cursor-pointer w-[35px] h-[35px] text-blue-600'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section1