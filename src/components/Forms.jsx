import React from 'react'
import { TbXboxX } from "react-icons/tb";

const Forms = ({openModal,openFunk}) => {
  return (
    <section className='container'>
        <div className={openModal ? 'show1': 'info'}>
        <div className='flex items-center justify-center flex-col bg-white p-[50px] w-full max-w-[1100px] rounded-3xl'>
            <div className='absolute right-[30px] top-[20px]'>
               <TbXboxX onClick={openFunk} className='w-[35px] h-[35px] text-[#2D3663] cursor-pointer'/>
            </div>
            <div className='flex items-center'>
                <h1 className='text-[#2D3663] text-[40px]'>Мутахассис кўригига ёзилиш</h1>
            </div>
            <div className='flex items-center justify-between mt-[30px] gap-[50px] w-full max-w-[950px]'>
                <input type="text" placeholder='Исм' className='text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4'/>
                <input type="text" placeholder='Фамиля' className='text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4'/>
            </div>
            <div className='flex items-center justify-between mt-[30px] gap-[50px] w-full max-w-[950px]'>
                <input type="text" placeholder='Телефон' className='text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4'/>
                <input type="date" placeholder='Фамиля' className='text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4 pr-4'/>
            </div>
            <div className='mt-[30px] gap-[50px] w-full max-w-[950px]'>
                <textarea className='bg-blue-50 w-full max-w-[950px] rounded-[50px] p-5 text-[#2D3663]' placeholder='Хабар' cols="30" rows="5"></textarea>
            </div>
            <h1 className='text-[#62667c] font-bold mt-[20px]'>Доктор хулосаси</h1>
            <div className='flex items-center justify-between mt-[5px] gap-[50px] w-full max-w-[950px]'>
                <input type="file" placeholder='Телефон' className='text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-[20px]'/>
            </div>
            <h1 className='text-[#62667c] font-bold mt-[20px]'>Кимга рўйхатдан ўтишни танланг</h1>
            <button  className='flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-3 pb-3 mt-[30px] ml-4 bg-blue-950 hover:bg-slate-900'>Қабулга ёзилиш</button>
    
        </div>
        </div>
    </section>
  )
}

export default Forms