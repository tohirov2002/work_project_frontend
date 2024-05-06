import React from 'react'


const Section = () => {
  return (
    <section className='container mt-[50px]'>
        <div className='flex items-center justify-center flex-col'>
            <div className='flex items-center'>
                <h1 className='text-[#2D3663] text-[40px] text-center conection_title'>Мутахассис кўригига ёзилиш</h1>
            </div>
            <div className='flex items-center justify-between mt-[30px] gap-[50px] w-full max-w-[950px]'>
                <input type="text" placeholder='Исм' className='text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4'/>
                <input type="text" placeholder='Фамиля' className='text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4'/>
            </div>
            <div className='flex items-center justify-between mt-[30px] gap-[50px] w-full max-w-[950px]'>
                <input type="number" placeholder='Телефон' className='text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4'/>
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
    </section>
  )
}

export default Section