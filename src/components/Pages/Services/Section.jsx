import { useContext, useEffect, useState } from 'react'
import { LiaBrainSolid } from "react-icons/lia";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { FaArrowCircleRight } from "react-icons/fa";
import { LiaToothSolid } from "react-icons/lia";
import guzor from '../../../assets/images/guzor.jpg'
import qabul from '../../../assets/images/qabul.jpeg'
import hokimlik from '../../../assets/images/hokimlik.jpg'
import yotoqjoy from '../../../assets/images/yotoqjoy.png'
import bed1 from '../../../assets/images/photo.jpg'
import bed2 from '../../../assets/images/guzor.jpg'
import bed3 from '../../../assets/images/savol.jpg'
import bed4 from '../../../assets/images/masjid.jpg'
import foods from '../../../assets/images/savol.jpg'
import { Link, NavLink } from 'react-router-dom';
import kitchen3 from '../../../assets/images/kitchen3.jpg'
import Forms from '../../Forms'
import { Context } from '../../Context/Context'
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Section = () => {
    const [showModal, setModal] = useState(false)
    const { mood } = useContext(Context)
    const [data, setData] = useState([]);
    const { t } = useTranslation()

    const handleShow = () => {
        setModal(!showModal)
    }
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
            <section className='mt-[20px]'>
                <div className='services_image'>
                    <h1 className='text-center text-white font-bold bg-[#00000050] h-[200px] text-[48px] pt-[60px] about_title'>{t("soz2")}</h1>
                </div>
                <div className="container">
                    <div className='mt-[100px] services_title1'>
                        <h1 className={`${mood ? 'bg-[#2D3663] text-white' : 'bg-white text-[#2D3663] rounded-[10px]'} font-bold  h-[200px] text-[40px] pr-[60px] flex justify-end pt-[100px] services_title`}>— БИЗНИНГ УСТУВОР ВАЗИФАМИЗ!</h1>
                    </div>
                    <div className='mt-[100px]'>
                        <h1 className={`${mood ? 'text-[#2D3663]' : 'text-white'}  text-center font-bold text-[20px]`}>Бизнинг хизматлар</h1>
                        <div className='flex items-centerv justify-center mt-1'>
                            <h1 className={`${mood ? 'text-[#2D3663]' : 'text-white'} text-[#2D3663] text-center font-bold text-[40px] max-w-[1100px] services_title2`}>{t("title5")}</h1>
                        </div>
                    </div>
                    <div className='flex justify-between mt-[30px] services'>
                        <div className='section1_services1'>
                            <ul className='flex items-center flex-col'>
                                {
                                    data.slice(0, 6).map((item) => (
                                        <NavLink to={`/sections/${item.id}`}>
                                            <li key={item.id} className='item bg-white w-[300px] p-5 mt-3 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                                                <img src={item.image} className='icon1 w-[50px] h-[50px] text-blue-950' alt={item.name_uz} />
                                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>{item.name_uz}</p>
                                            </li>
                                        </NavLink>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='mr-[50px] p-[50px] rounded-md bg-blue-50 section1_div1 section1_services'>
                            <ul className='flex items-center justify-between gap-5 section1_list1'>
                                {
                                    data.slice(0, 4).map((item) => (
                                        <NavLink to={`sections/${item.id}`}>
                                            <li key={item.id} className='item bg-white w-[300px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                                                <img src={item.image} className='icon1 w-[50px] h-[50px] text-blue-950' alt={item.name_uz} />
                                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>{item.name_uz}</p>
                                                {console.log(item.name_uz)}
                                            </li>
                                        </NavLink>
                                    ))
                                }
                            </ul>
                            <ul className='flex items-center justify-between bg-blue-50 mt-[50px] gap-5 section1_list1'>
                                {
                                    data.slice(2, 6).map((item) => (
                                        <NavLink to={`sections/${item.id}`}>
                                            <li key={item.id} className='item bg-white w-[300px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                                                <img src={item.image} className='icon1 w-[50px] h-[50px] text-blue-950' alt={item.name_uz} />
                                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>{item.name_uz}</p>
                                                {console.log(item.name_uz)}
                                            </li>
                                        </NavLink>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='bg-[#EDF3F6] p-[60px] rounded-2xl ml-[50px] section1_services3'>
                            <h1 className='text-[40px] font-bold text-[#2D3663]'>{t("title")}</h1>
                            <p className='text-center font-bold text-[#2D3663] text-[18px] mt-[20px]'>{t("text8")}</p>
                            <p className='text-[#2D3663] text-[18px] mt-[40px]'>{t("text9")}</p>
                            <p className='text-[#2D3663] text-[18px] mt-[40px]'>{t('text5')}</p>
                            <p className='text-[#2D3663] text-[18px] mt-[40px]'>{t("text6")}</p>
                            <p className='text-[#2D3663] text-[18px] mt-[40px]'>{t("text7")}</p>
                            <p className='text-[#2D3663] text-[18px] mt-[40px]'>{t("text5")}</p>
                            <p className='text-[#2D3663] text-[18px] mt-[40px]'>{t("title2")}</p>
                            <p className='text-[#2D3663] text-[18px] mt-[40px]'>{t("text8")}</p>
                            <p className='text-[#2D3663] text-[18px] mt-[40px]'>{t("text2")}</p>
                            <p className='text-[#2D3663] text-[18px] mt-[40px]'>{t("text")}</p>
                            <p className='text-[#2D3663] text-[18px] mt-[40px]'>{t("text")}</p>
                            <p className='text-[#2D3663] text-[18px] mt-[40px]'>{t("text3")}</p>
                            <p className='text-[#2D3663] text-[18px] mt-[40px] font-bold'>{t("title1")}</p>
                            <p className='text-[#2D3663] text-[18px] mt-[40px]'>{t("text2")}</p>
                            <div className='mt-[50px] flex items-center justify-between aparat_img'>
                                <img className='w-full max-w-[300px] h-[250px] rounded-2xl mrt_img' src={guzor} alt="guzor" />
                                <img className='w-full max-w-[300px] h-[250px] rounded-2xl mrt_img' src={qabul} alt="qabul" />
                                <img className='w-full max-w-[300px] h-[250px] rounded-2xl mrt_img' src={hokimlik} alt="hokimlik" />
                            </div>
                            <div className='mt-[60px] flex ph_img1'>
                                <Link to={'/connections'}>
                                    <button className='btn_con flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-4 pb-4 mt-[30px] ml-4 bg-blue-950 hover:bg-slate-900'>murojaat qilish <FaArrowCircleRight className='mt-1 w-[18px] h-[18px]' /></button>
                                </Link>
                                <Link to={'tel:998(78)6690203'}>
                                    <button className='btn_con flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-4 pb-4 mt-[30px] ml-4 bg-blue-950 hover:bg-slate-900'>+998 (78) 669 02 03</button>
                                </Link>
                            </div>
                            <Link to={'tel:998(78)6690203'}>
                                <button className='btn_con flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-4 pb-4 mt-[30px] ml-4 bg-blue-950 hover:bg-slate-900'>+998 (78) 669 05 04</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-between mt-[150px] about_div about'>
                        <div>
                            <img className='max-w-[650px] h-[650px] rounded-[50%] about_img about_img2' src={hokimlik} alt="hokimlik" />
                        </div>
                        <div className='mt-[10px] mr-[50px] about_main'>
                            <h1 className={`${mood ? 'text-[#2D3663]' : 'text-white'} text-[42px] font-bold max-w-[500px] about_text`}>{t("title1")}</h1>
                            <p className={`${mood ? 'text-[#7b809a]' : 'text-[#dfdede]'} max-w-[600px] text-[16px] text-[#7b809a] mt-5`}>{t("text3")}</p>
                            <p className={`${mood ? 'text-[#7b809a]' : 'text-[#dfdede]'} max-w-[600px] text-[16px] text-[#7b809a] mt-8`}>{t("text4")}</p>
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
                            <h1 className={`${mood ? 'text-[#2D3663]' : 'text-white'}  text-[42px] font-bold max-w-[900px] about_text`}>{t("title2")}</h1>
                            <p className={`${mood ? 'text-[#7b809a]' : 'text-[#dfdede]'} max-w-[680px] text-[16px] mt-5`}>{t("text5")}</p>
                            <p className={`${mood ? 'text-[#7b809a]' : 'text-[#dfdede]'} max-w-[600px] text-[16px] mt-8`}>{t("text6")}</p>
                            <div className='mt-[40px] flex items-center gap-5 img_bt'>
                                <img className='w-[120px] h-[100px]' src={bed4} alt="soglom" />
                                <img className='w-[120px] h-[100px]' src={bed2} alt="soglom" />
                                <img className='w-[120px] h-[100px]' src={kitchen3} alt="soglom" />
                                <img className='w-[120px] h-[100px]' src={bed3} alt="soglom" />
                            </div>
                        </div>
                        <div className='mr-[50px] about_img_div'>
                            <img className='max-w-[650px] h-[650px] rounded-[50%] about_img' src={foods} alt="foods" />
                        </div>
                    </div>
                </div>
            </section>
            <Forms openModal={showModal} openFunk={handleShow} />
        </>
    )
}

export default Section