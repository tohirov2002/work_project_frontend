import React, { useContext } from 'react'
import soglom1 from '../../../assets/images/qabul.jpeg'
import soglom2 from '../../../assets/images/soglom2.jpg'
import soglom3 from '../../../assets/images/soglom3.jpg'
import soglom4 from '../../../assets/images/soglom4.jpg'
import guzor from '../../../assets/images/guzor.jpg'
import yotoqjoy from '../../../assets/images/shurtan.jpeg'
import bed1 from '../../../assets/images/shurtan1.jpg'
import bed2 from '../../../assets/images/shurtan2.jpeg'
import bed3 from '../../../assets/images/shurtan.jpeg'
import bed4 from '../../../assets/images/bed4.jpg'
import foods from '../../../assets/images/foods.png'
import kitchen1 from '../../../assets/images/hokimlik.jpg'
import kitchen2 from '../../../assets/images/kitchen2.jpg'
import kitchen3 from '../../../assets/images/kitchen3.jpg'
import kitchen4 from '../../../assets/images/kitchen4.jpg'
import {Context} from '../../Context/Context'
import masjid from "../../../assets/images/masjid.jpg"
import { useTranslation } from 'react-i18next'


const Section = () => {
  const {mood} = useContext(Context)
  const {t} = useTranslation()

  return (
    <>
        <section className='mt-[20px]'>
            <div className='images1'>
                <h1 className='text-center text-white font-bold bg-[#00000050] h-[200px] text-[48px] pt-[60px] about_title'>Биз ҳақимизда</h1>
            </div>
        </section>
        <section className='container mt-[150px] about'>
            <div className='flex  justify-between about_div'>
                <div className='mt-[10px]'>
                    <h1 className={`${mood? 'text-[#2D3663]': 'text-white'}  text-[42px] font-bold about_text`}>{t("title")}</h1>
                    <p className={`${mood? 'text-[#7b809a]': 'text-[#ebe9e9]'} max-w-[600px] text-[16px] mt-5`}>{t("text1")}</p>
                    <p className={`${mood? 'text-[#7b809a]': 'text-[#ebe9e9]'} max-w-[600px] text-[16px] mt-5`}>{t("text2")}</p>
                    <p className={`${mood? 'text-[#7b809a]': 'text-[#ebe9e9]'} max-w-[600px] text-[16px] mt-5`}>{t("text3")}</p>
                    <div className='mt-[40px] flex items-center gap-5 img_bt'>
                        <img className='w-[120px] h-[100px]' src={soglom1} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={soglom2} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={soglom3} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={soglom4} alt="soglom" />
                    </div>
                </div>
                <div className='mr-[50px] about_img_div'>
                    <img className='max-w-[650px] h-[650px] rounded-[50%] about_img' src={guzor} alt="guzor" />
                </div>
            </div>
            <div className='flex justify-between mt-[150px] about_div about'>
                <div>
                    <img className='max-w-[650px] h-[650px] rounded-[50%] about_img2 about_img' src={yotoqjoy} alt="yotoqjoy" />
                </div>
                <div className='mt-[10px] mr-[50px] about_main'>
                    <h1 className={`${mood? 'text-[#2D3663]': 'text-white'}  text-[42px] font-bold max-w-[500px] about_text`}>{t("title1")}</h1>
                    <p className={`${mood? 'text-[#7b809a]': 'text-[#ebe9e9]'} max-w-[600px] text-[16px] mt-5`}>{t("text4")}</p>
                    <p className={`${mood? 'text-[#7b809a]': 'text-[#ebe9e9]'} max-w-[600px] text-[16px] text-[#7b809a] mt-8`}>{t("text5")}</p>
                    <div className='mt-[40px] flex items-center gap-5 img_bt'>
                        <img className='w-[120px] h-[100px]' src={bed1} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={bed2} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={bed3} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={bed4} alt="soglom" />
                    </div>
                </div>
                <div>
                    <img className='max-w-[650px] h-[650px] rounded-[50%] about_img about_img1' src={yotoqjoy} alt="yotoqjoy" />
                </div>
            </div>
            <div className='flex  justify-between mt-[150px] about_div about'>
                <div className='mt-[10px]'>
                    <h1 className={`${mood? 'text-[#2D3663]': 'text-white'}  text-[#2D3663] text-[42px] font-bold max-w-[900px] about_text`}>{t("title2")}</h1>
                    <p className={`${mood? 'text-[#7b809a]': 'text-[#ebe9e9]'} max-w-[680px] text-[16px] mt-5`}>{t("text6")}</p>
                    <p className={`${mood? 'text-[#7b809a]': 'text-[#ebe9e9]'} max-w-[600px] text-[16px] text-[#7b809a] mt-8`}>{t("text7")}</p>
                    <div className='mt-[40px] flex items-center gap-5 img_bt'>
                        <img className='w-[120px] h-[100px]' src={kitchen1} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={kitchen2} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={kitchen3} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={kitchen4} alt="soglom" />
                    </div>
                </div>
                <div className='mr-[50px] about_img_div'>
                    <img className='max-w-[650px] h-[650px] rounded-[50%] about_img' src={masjid} alt="masjid" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Section