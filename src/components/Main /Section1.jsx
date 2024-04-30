import React from 'react'
import { LiaBrainSolid } from "react-icons/lia";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { LiaToothSolid } from "react-icons/lia";

const Section1 = () => {
  return (
    <>
        <section className='container mt-[50px] flex items-center justify-between'>
            <div className='shadow-xl bg-[#2d3663] max-w-[400px] p-[30px] rounded-[10px] pl-[30px] pb-[50px]'>
                <h1 className='text-[32px] font-bold text-white mt-4 ml-4'>Sog'lom Hayot</h1>
                <p className='text-[20px] font-normal max-w-[300px] text-white mt-4 ml-4'>Беморлар кенг қамровли, тўлиқ ва ҳар тарафлама текширувдан ўтишлари ҳамда қуйидаги мутахассислардан малакали ёрдам олишлари мумкин:</p>
                <button className=' text-white rounded-3xl w-[150px] pt-2 pb-2 mt-[30px] ml-4 bg-blue-600 hover:bg-blue-800'>Batafsil</button>
            </div>
            <div className='max-w-[1000px] mr-[50px] p-[50px] rounded-md bg-blue-50'>
                <ul className='flex items-center justify-between'>
                    <li className='item bg-white w-[200px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>невропатолог</p>
                    </li>
                    <li className='item bg-white w-[200px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>гемодиализ</p>
                    </li>
                    <li className='item bg-white w-[200px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>невропатолог</p>
                    </li>
                    <li className='item bg-white w-[200px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaHeartbeatSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>кардиолог</p>
                    </li>
                </ul>
                <ul className='flex items-center justify-between bg-blue-50 mt-[50px] gap-5'>
                    <li className='bg-white item  w-[200px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>Лор</p>
                    </li>
                    <li className='bg-white item w-[200px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>Офтальмолог</p>
                    </li>
                    <li className='bg-white item w-[200px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaToothSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>Stamatalog</p>
                    </li>
                    <li className='bg-white item w-[200px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaHeartbeatSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>Денстометрия</p>
                    </li>
                </ul>
            </div>
        </section>
        <section className='container mt-[50px]'>
        <div className='mr-[50px] p-[50px] rounded-md bg-blue-50'>
                <ul className='flex items-center justify-between'>
                    <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>невропатолог</p>
                    </li>
                    <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>гемодиализ</p>
                    </li>
                    <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>гемодиализ</p>
                    </li>
                    <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>невропатолог</p>
                    </li>
                    <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaHeartbeatSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>кардиолог</p>
                    </li>
                </ul>
                <ul className='flex items-center justify-between bg-blue-50 mt-[50px] gap-5'>
                    <li className='bg-white item  w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>Лор</p>
                    </li>
                    <li className='bg-white item w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>Офтальмолог</p>
                    </li>
                    <li className='bg-white item w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaToothSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>Stamatalog</p>
                    </li>
                    <li className='bg-white item w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                        <LiaHeartbeatSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                        <p className='text-[24px] font-bold text-blue-950 mt-2 '>Денстометрия</p>
                    </li>
                </ul>
        </div>
        </section>
        <section className='container mt-[100px] flex justify-between'>
            <div>
                <h1 className='text-blue-950 text-[20px]'>Sog'lom Hayot</h1>
                <p className=' mt-2 font-bold text-[36px] max-w-[500px] text-blue-950'>Кўп тармоқли клиникага хуш келибсиз</p>
                <p className='mt-3 max-w-[650px] text-[20px] text-blue-950'>Биз Сиз билан ўзимизнинг кўп тармоқли ажойиб клиникамизда кўришиб турганимиздан мамнунмиз. Бу рисола саҳифалари орқали биз Сизни клиникамизнинг кенг қамровли хизматлари билан таништирамиз. Бу ерда, яъни тинч ва хавфсиз ҳудудда Сиз ўзингизни хотиржам ҳис қилишингиз, соғлигингизни тиклашингиз ва кучга тўлишингиз мумкин.</p>
            </div>
            <div className='mr-[50px]'>
                <p className='text-blue-950 text-[20px]'>Бизнинг кўрсаткичларимиз</p>
                <p className='font-bold text-[36px] text-blue-950 mt-2'>Нима учун бизга ишонишади ?</p>
                <ul className='mt-[40px] flex items-center justify-between gap-[40px]'>
                    <li className='hover:cursor-pointer hover:shadow-2xl hover:bg-blue-50 w-[200px] h-[200px] rounded-[50%] border-[5px] border-blue-950 flex flex-col items-center justify-center'>
                        <p className='font-bold text-[40px] text-blue-950'>100%</p>
                        <p className='text-[24px] text-blue-950 font-medium'>Sifat</p>
                    </li>
                    <li className='hover:cursor-pointer hover:shadow-2xl hover:bg-blue-50 w-[200px] h-[200px] rounded-[50%] border-[5px] border-blue-950 flex flex-col items-center justify-center'>
                        <p className='font-bold text-[40px] text-blue-950'>99%</p>
                        <p className='text-[24px] text-blue-950 font-medium'>Qulaylik</p>
                    </li>
                    <li className='hover:cursor-pointer hover:shadow-2xl hover:bg-blue-50 w-[200px] h-[200px] rounded-[50%] border-[5px] border-blue-950 flex flex-col items-center justify-center'>
                        <p className='font-bold text-[40px] text-blue-950'>100%</p>
                        <p className='text-[24px] text-blue-950 font-medium'>Sanatariya</p>
                    </li>
                </ul>
            </div>
        </section>
        <section className='container mt-[100px]'>
            <div className='mr-[50px] p-[50px] rounded-2xl bg-white shadow-2xl'>
                    <ul className='flex items-center justify-between'>
                        <li className=' bg-white p-5 rounded-lg hover:cursor-pointer flex flex-col items-center justify-center'>
                            <p className='font-bold text-[42px] text-blue-950'>50+</p>
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Квалифицированные врачи</p>
                        </li>
                        <li className='bg-white p-5 rounded-lg hover:cursor-pointer flex flex-col items-center justify-center'>
                            <p className='font-bold text-[42px] text-blue-950'>19</p>
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Диагностические отделения</p>
                        </li>
                        <li className='bg-white p-5 rounded-lg hover:cursor-pointer flex flex-col items-center justify-center'>
                            <p className='font-bold text-[42px] text-blue-950'>20+</p>
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Год опыта</p>
                        </li>
                    </ul>
                    <ul className='flex items-center justify-between mt-5'>
                        <li className='bg-white p-5 rounded-lg hover:cursor-pointer flex flex-col items-center justify-center'>
                            <p className='font-bold text-[42px] text-blue-950'>100+</p>
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Пациенты  каждый день</p>
                        </li>
                        <li className='bg-white p-5 rounded-lg hover:cursor-pointer flex flex-col items-center justify-center'>
                            <p className='font-bold text-[42px] text-blue-950'>99%</p>
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Точность диагностики</p>
                        </li>
                        <li className='bg-white p-5 rounded-lg hover:cursor-pointer flex flex-col items-center justify-center'>
                            <p className='font-bold text-[42px] text-blue-950'>1</p>
                            <p className='text-[24px] font-bold text-blue-950 mt-2 '>Филиал</p>
                        </li>
                    </ul>
            </div>
        </section>

    </>
  )
}

export default Section1