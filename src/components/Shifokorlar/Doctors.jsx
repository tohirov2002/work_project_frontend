import React from 'react'
import Alisher from '../../assets/images/alisher.jpg'
import { NavLink } from 'react-router-dom'


const Doctors = () => {
  return (
    <>
      <section>
      <div className='mt-[20px]'>
        <div className='doctors_images'>
            <h1 className='bg-[#68626264] font-bold h-[200px] text-center text-white  text-[46px] pt-[50px]'>Бизнинг шифокорларимиз</h1>
        </div>
      </div>
        <div className="container">
          <ul className='mt-[100px] flex items-center justify-between'>
                <li className='hover:shadow-2xl hover:cursor-pointer shadow-xl bg-[#EDF3F6] p-[50px] rounded-xl max-w-[650px] flex flex-col items-center justify-center text-center'>
                    <img className='hover:shadow-xl mt-2 image w-[350px] h-[350px]' src={Alisher} alt="alisher" />
                    <h1 className='text-[32px] max-w-[300px] mt-5 font-bold text-blue-950'>Yoqubov Boburjon Alisherovich</h1>
                    <NavLink to={'/doctor'} className='hover:bg-slate-800 text-[22px] mt-4 w-[290px] text-white pt-1 pb-1 rounded-[30%] bg-blue-950'>Кардиореаниматолог</NavLink>
                    <p className='mt-4 text-[18px] text-[#4c547c]'>Кардиореаниматолог</p>
                </li>  
                <li className='hover:shadow-2xl hover:cursor-pointer shadow-xl bg-[#EDF3F6] p-[50px] rounded-xl max-w-[650px] flex flex-col items-center justify-center text-center'>
                    <img className='hover:shadow-xl mt-2 image w-[350px] h-[350px]' src={Alisher} alt="alisher" />
                    <h1 className='text-[32px] max-w-[300px] mt-5 font-bold text-blue-950'>Yoqubov Boburjon Alisherovich</h1>
                    <button className='hover:bg-slate-800 text-[22px] mt-4 w-[290px] text-white pt-1 pb-1 rounded-[30%] bg-blue-950'>Кардиореаниматолог</button>
                    <p className='mt-4 text-[18px] text-[#4c547c]'>Кардиореаниматолог</p>
                </li> 
                <li className='hover:shadow-2xl hover:cursor-pointer shadow-xl bg-[#EDF3F6] p-[50px] rounded-xl max-w-[650px] flex flex-col items-center justify-center text-center'>
                    <img className='hover:shadow-xl mt-2 image w-[350px] h-[350px]' src={Alisher} alt="alisher" />
                    <h1 className='text-[32px] max-w-[300px] mt-5 font-bold text-blue-950'>Yoqubov Boburjon Alisherovich</h1>
                    <button className='hover:bg-slate-800 text-[22px] mt-4 w-[290px] text-white pt-1 pb-1 rounded-[30%] bg-blue-950'>Кардиореаниматолог</button>
                    <p className='mt-4 text-[18px] text-[#4c547c]'>Кардиореаниматолог</p>
                </li>         
          </ul>
          <ul className='mt-[100px] flex items-center justify-between'>
                <li className='hover:shadow-2xl hover:cursor-pointer shadow-xl bg-[#EDF3F6] p-[50px] rounded-xl max-w-[650px] flex flex-col items-center justify-center text-center'>
                    <img className='hover:shadow-xl mt-2 image w-[350px] h-[350px]' src={Alisher} alt="alisher" />
                    <h1 className='text-[32px] max-w-[300px] mt-5 font-bold text-blue-950'>Yoqubov Boburjon Alisherovich</h1>
                    <NavLink to={'/doctor'} className='hover:bg-slate-800 text-[22px] mt-4 w-[290px] text-white pt-1 pb-1 rounded-[30%] bg-blue-950'>Кардиореаниматолог</NavLink>
                    <p className='mt-4 text-[18px] text-[#4c547c]'>Кардиореаниматолог</p>
                </li>  
                <li className='hover:shadow-2xl hover:cursor-pointer shadow-xl bg-[#EDF3F6] p-[50px] rounded-xl max-w-[650px] flex flex-col items-center justify-center text-center'>
                    <img className='hover:shadow-xl mt-2 image w-[350px] h-[350px]' src={Alisher} alt="alisher" />
                    <h1 className='text-[32px] max-w-[300px] mt-5 font-bold text-blue-950'>Yoqubov Boburjon Alisherovich</h1>
                    <NavLink to={'/doctor'} className='hover:bg-slate-800 text-[22px] mt-4 w-[290px] text-white pt-1 pb-1 rounded-[30%] bg-blue-950'>Кардиореаниматолог</NavLink>
                    <p className='mt-4 text-[18px] text-[#4c547c]'>Кардиореаниматолог</p>
                </li> 
                <li className='hover:shadow-2xl hover:cursor-pointer shadow-xl bg-[#EDF3F6] p-[50px] rounded-xl max-w-[650px] flex flex-col items-center justify-center text-center'>
                    <img className='hover:shadow-xl mt-2 image w-[350px] h-[350px]' src={Alisher} alt="alisher" />
                    <h1 className='text-[32px] max-w-[300px] mt-5 font-bold text-blue-950'>Yoqubov Boburjon Alisherovich</h1>
                    <NavLink to={'/doctor'} className='hover:bg-slate-800 text-[22px] mt-4 w-[290px] text-white pt-1 pb-1 rounded-[30%] bg-blue-950'>Кардиореаниматолог</NavLink>
                    <p className='mt-4 text-[18px] text-[#4c547c]'>Кардиореаниматолог</p>
                </li>         
          </ul>
        </div>
      </section>
    </>
  )
}

export default Doctors