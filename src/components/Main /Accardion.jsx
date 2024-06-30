import React, { useContext, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import {Context} from '../Context/Context'

const Accordion = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);


  const toggleOpen1 = () => setOpen1(!open1);
  const toggleOpen2 = () => setOpen2(!open2);
  const toggleOpen3 = () => setOpen3(!open3);
  const toggleOpen4 = () => setOpen4(!open4);

  const {mood} = useContext(Context)
  
  return (
    <div className='mt-[40px]'>
      <div>
        <div className='flex items-center justify-between'>
          <h1 className={`${mood? 'text-blue-950' : 'text-white'} text-[20px]  ac_text`}>У вас есть педиатр?</h1>
          <div className={`${mood? 'bg-blue-950' : 'bg-white'} ml-5 w-[40px] h-[40px] bg-blue-950 rounded-[50%] flex items-center justify-center`}>
            <button onClick={toggleOpen1} className={`${mood? 'text-white' : 'text-blue-950'} `}>{open1 ? <FaMinus /> : <FaPlus />}</button>
          </div>
        </div>
        {open1 && (
          <p className={`${mood? 'text-[#5a5252]' : 'text-[#ccc]'} text-[16px]  max-w-[500px] mt-3`}>В клинике есть опытные педиатры, готовые помочь детям с любыми заболеваниями.</p>
        )}
      </div>
      <div className='mt-10'>
        <div className='flex items-center justify-between'>
          <h1 className={`${mood? 'text-blue-950' : 'text-white'} text-[20px]  ac_text`}>Как мне записаться на прием в Akfa Medline?</h1>
          <div className={`${mood? 'bg-blue-950' : 'bg-white'} ml-5 w-[40px] h-[40px] bg-blue-950 rounded-[50%] flex items-center justify-center`}>
            <button onClick={toggleOpen2} className={`${mood? 'text-white' : 'text-blue-950'} `}>{open2 ? <FaMinus /> : <FaPlus />}</button>
          </div>
        </div>
        {open2 && (
          <p className={`${mood? 'text-[#5a5252]' : 'text-[#ccc]'} text-[16px]  max-w-[500px] mt-3`}>Запись на консультацию осуществляется по короткому номеру 1141 или 71 2033003</p>
        )}
      </div>
      <div className='mt-10'>
        <div className='flex items-center justify-between'>
          <h1 className={`${mood? 'text-blue-950' : 'text-white'} text-[20px] text-blue-950 ac_text`}>Предоставляет ли ваше место медицинскую страховку?</h1>
          <div className={`${mood? 'bg-blue-950' : 'bg-white'} ml-5 w-[40px] h-[40px] bg-blue-950 rounded-[50%] flex items-center justify-center`}>
            <button onClick={toggleOpen3} className={`${mood? 'text-white' : 'text-blue-950'} `}>{open3 ? <FaMinus /> : <FaPlus />}</button>
          </div>
        </div>
        {open3 && (
          <p className={`${mood? 'text-[#5a5252]' : 'text-[#ccc]'} text-[16px]  max-w-[500px] mt-3`}>
          Клиника предоставляет медицинскую   в рамках выбранной программы и по определенным условиям</p>
        )}
      </div>
      <div className='mt-10'>
        <div className='flex items-center justify-between'>
          <h1 className={`${mood? 'text-blue-950 ': 'text-white'} text-[20px] ac_text`}>Какие способы оплаты вы предоставляете?</h1>
          <div className={`${mood? 'bg-blue-950' : 'bg-white'} ml-5 w-[40px] h-[40px] bg-blue-950 rounded-[50%] flex items-center justify-center`}>
            <button onClick={toggleOpen4} className={`${mood? 'text-white' : 'text-blue-950'} `}>{open4 ? <FaMinus /> : <FaPlus />}</button>
          </div>
        </div>
        {open4 && (
          <p className={`${mood? 'text-[#5a5252]' : 'text-[#ccc]'} text-[16px]  max-w-[500px] mt-3`}>В клинике принимаются оплата любыми способами (карты, наличные), а также доступен обменный пункт</p>
        )}
      </div>
    </div>
  );
}

export default Accordion;
