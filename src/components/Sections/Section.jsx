import React, { useContext, useEffect, useState } from 'react'
import { FaSquareCheck } from "react-icons/fa6";
import Alisher from '../../assets/images/alisher.jpg'
import { NavLink, useParams } from 'react-router-dom';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios';
import { Context } from '../Context/Context';

const Section = () => {
    const params = useParams()
    const [data, setData] = useState([])
    const {mood} = useContext(Context)

    useEffect(() => {
        const handleData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/department/${params.id}`);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        handleData();
    }, [])
    return (
        <>
            {data && (
                <section>
                    <div className='mt-[20px]'>
                        <div className='services_image'>
                            <h1 className={`text-center text-white font-bold bg-[#00000050] h-[200px] text-[48px] pt-[60px] doctors_title`}>{data.name_uz}</h1>
                        </div>
                    </div>
                    <div className='container mt-[100px] about'>
                        <div className='flex  justify-between section_box gap-5'>
                            <div>
                                <h1 className={`${mood? 'text-[#2D3663]': 'text-white'} text-[24px] font-bold mt-10 sections_title`}>Соғлом ҳаёт</h1>
                                <h1 className={`${mood? 'text-[#2D3663]': 'text-white'} text-[32px] mt-2 sections_title1`}>{data.name_uz} кафедраси</h1>
                                <p className={`${mood? 'text-[#777a89]': 'text-[#e4e3e3]'} text-[18px]  max-w-[600px] mt-5 sections_title2`}>Соғлом ҳаёт кардиожарроҳлик маркази барча халқаро стандартларга жавоб берадиган юқори технологияли ускуналар билан жиҳозланган. Хусусан, анестезиологияда БИС мониторинги доривор уйқу вақтида беҳушлик даражасини аниқлаш учун ишлатилади. Юракнинг 3Д визуализатсияси учун МСCТ томограф ҳам мавжуд.</p>
                            </div>
                            <div>
                                {data.vedio ? (
                                    <iframe
                                        className='w-[700px] h-[400px] section_player'
                                        src={data.vedio}
                                        title="&quot;Sogʻlom hayot&quot; klinikasi 09.03.2024 Kardiojarrohlik amaliyoti bo&#39;lib o&#39;tdi"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen
                                    ></iframe>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div>
                        <div className='mt-[80px] about sections_box1'>
                            <p className={`${mood? 'text-[#777a89]': 'text-[#dedddd]'} text-[18px] max-w-[1500px] mt-5`}>Markazda tug‘ma yurak nuqsonlari, orttirilgan yurak nuqsonlari bo‘lgan bemorlarga ochiq va minimal invaziv turdagi jarrohlik aralashuvlar, shuningdek, barcha turdagi endovaskulyar operatsiyalar bajariladi.</p>
                            <p className={`text-[18px] ${mood? 'text-[#777a89]': 'text-[#dedddd]'} max-w-[1500px] mt-5`}>Alohida ta'kidlash kerakki, bolalarda yurak operatsiyasidan so'ng, ota-onalar ekstubatsiyadan so'ng darhol bola bilan reanimatsiyada bo'lishlari mumkin.</p>
                            <p className={`text-[18px] ${mood? 'text-[#777a89]': 'text-[#dedddd]'} max-w-[1500px] mt-5`}>Tibbiy amaliyotda xalqaro tajribaga ega yuqori malakali AKFA Medline mutaxassislari va taklif etilgan mutaxassislar noyob operatsiyalarni amalga oshiradilar, shuningdek, yurak kasalliklari va turli darajadagi nuqsonlarni tashxislash va davolashadi.</p>
                            <p className={`text-[18px] ${mood? 'text-[#777a89]': 'text-[#dedddd]'} max-w-[1500px] mt-5`}>Moskvalik yurak-qon tomir jarrohimiz, kardiojarrohlik markazi bo'limi boshlig'i Alisher Almardonovich Melikulov yurak urishi bo'yicha quyidagi kardiojarrohliklarga ixtisoslashgan:</p>
                            <h1 className={`text-[28px] ${mood? 'text-[#2D3663]': 'text-white'} mt-10`}>Операциялар</h1>
                            <div className='flex items-center mt-2 sections_box1'>
                                <FaSquareCheck className={`${mood? 'text-green-600': 'text-white'} w-[20px] h-[20px] `} />
                                <p className={`${mood? 'text-[#878ca1]': 'text-[#dedddd]'} text-[18px] max-w-[750px] ml-2`}>Уриб турган юракда коронар артерия бйпасс пайвандлаш - ОПCАБ</p>
                            </div>
                            <div className='flex items-center mt-2 sections_box1'>
                                <FaSquareCheck className={`${mood? 'text-green-600': 'text-white'} w-[20px] h-[20px] `} />
                                <p className={`${mood? 'text-[#878ca1]': 'text-[#dedddd]'} text-[18px] max-w-[1000px] ml-2`}>Mini kirish - MIDCAB yordamida urib turgan yurakda koronar bypass operatsiyasi</p>
                            </div>
                            <div className='flex items-center mt-2 sections_box1'>
                                <FaSquareCheck className={`${mood? 'text-green-600': 'text-white'} w-[20px] h-[20px] `} />
                                <p className={`${mood? 'text-[#878ca1]': 'text-[#dedddd]'} text-[18px] max-w-[1000px] ml-2`}>Sun'iy qon aylanish ostida koronar bypass operatsiyasi</p>
                            </div>
                            <div className='flex items-center mt-2 sections_box1'>
                                <FaSquareCheck className={`${mood? 'text-green-600': 'text-white'} w-[20px] h-[20px] `} />
                                <p className={`${mood? 'text-[#878ca1]': 'text-[#dedddd]'} text-[18px] max-w-[1000px] ml-2`}>Karotid arteriyalardan karotid endarterektomiya, bir vaqtning o'zida koronar arteriyani bypass bilan payvandlash.</p>
                            </div>
                            <div className='flex items-center mt-2 sections_box1'>
                                <FaSquareCheck className={`${mood? 'text-green-600': 'text-white'} w-[20px] h-[20px] `} />
                                <p className={`${mood? 'text-[#878ca1]': 'text-[#dedddd]'} text-[18px] max-w-[1000px] ml-2`}>Yurakning orttirilgan nuqsonlari va aorta patologiyalarini jarrohlik yo'li bilan davolash</p>
                            </div>
                        </div>
                        <div className='mt-[80px] about'>
                            <div className='flex flex-col items-center justify-center text-center'>
                                <h1 className={`${mood? 'text-blue-950': 'text-white'} text-[42px] doctors_title`}>Шифокорларимиз</h1>
                            </div>
                            <ul className='mt-[50px] about flex items-center justify-between doctors'>
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
                        </div>
                        <div className='sections_item1'>
                            <p className={`${mood? 'text-[#878ca1]': 'text-white'} font-bold mt-[80px] text-[18px] max-w-[750px]`}>Malakali mutahasis qabuliga yozilishni unutmang, Joylar soni cheklangan !</p>
                            <div className='flex items-center mt-5 sections_item1'>
                                <FaPhoneAlt className={`cursor-pointer w-[20px] h-[20px] ${mood? 'text-[#878ca1]': 'text-white'} bt_phones`} />
                                <p className={`cursor-pointer ml-5 text-[18px] ${mood? 'text-[#878ca1]': 'text-white'} max-w-[400px]`}>Phone Number: +998 556 33 11</p>
                            </div>
                            <div className='news_item1'>
                                <NavLink to={'/connections'}>
                                    <button className='flex items-center justify-center  text-white rounded-3xl w-[250px] pt-4 pb-4 mt-[30px]  bg-[#6c7293]'>Қабулга ёзилиш <FaArrowCircleRight className='mt-1 ml-2 w-[18px] h-[18px]' /></button>
                                </NavLink>
                            </div>
                            <div className='flex items-center mt-[30px] gap-3 news_item1'>
                                <FaFacebook className={`${mood? 'text-blue-600': 'text-white'} cursor-pointer w-[35px] h-[35px] `} />
                                <FaWhatsappSquare className={`${mood? 'text-blue-600': 'text-white'} cursor-pointer w-[35px] h-[35px] `} />
                                <FaTelegram className={`${mood? 'text-blue-600': 'text-white'} cursor-pointer w-[35px] h-[35px] `} />
                                <FaLinkedin className={`${mood? 'text-blue-600': 'text-white'} cursor-pointer w-[35px] h-[35px] `} />
                                <FaSquareTwitter className={`${mood? 'text-blue-600': 'text-white'} cursor-pointer w-[35px] h-[35px] `}/>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Section