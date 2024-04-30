import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Accordion = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);


  const toggleOpen1 = () => setOpen1(!open1);
  const toggleOpen2 = () => setOpen2(!open2);
  const toggleOpen3 = () => setOpen3(!open3);
  const toggleOpen4 = () => setOpen4(!open4);


  return (
    <div className='mt-[40px]'>
      <div>
        <div className='flex items-center justify-between'>
          <h1 className='text-[20px] text-blue-950'>У вас есть педиатр?</h1>
          <div className='ml-5 w-[40px] h-[40px] bg-blue-950 rounded-[50%] flex items-center justify-center'>
            <button onClick={toggleOpen1} className={`text-white`}>{open1 ? <FaMinus /> : <FaPlus />}</button>
          </div>
        </div>
        {open1 && (
          <p className="text-[16px] text-[#5a5252] max-w-[500px] mt-3">В клинике есть опытные педиатры, готовые помочь детям с любыми заболеваниями.</p>
        )}
      </div>
      <div className='mt-10'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[20px] text-blue-950'>Как мне записаться на прием в Akfa Medline?</h1>
          <div className='ml-5 w-[40px] h-[40px] bg-blue-950 rounded-[50%] flex items-center justify-center'>
            <button onClick={toggleOpen2} className={`text-white`}>{open2 ? <FaMinus /> : <FaPlus />}</button>
          </div>
        </div>
        {open2 && (
          <p className="text-[16px] text-[#5a5252] max-w-[500px] mt-3">Запись на консультацию осуществляется по короткому номеру 1141 или 71 2033003</p>
        )}
      </div>
      <div className='mt-10'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[20px] text-blue-950'>Предоставляет ли ваше место медицинскую страховку?</h1>
          <div className='ml-5 w-[40px] h-[40px] bg-blue-950 rounded-[50%] flex items-center justify-center'>
            <button onClick={toggleOpen3} className={`text-white`}>{open3 ? <FaMinus /> : <FaPlus />}</button>
          </div>
        </div>
        {open3 && (
          <p className="text-[16px] text-[#5a5252] max-w-[500px] mt-3">
          Клиника предоставляет медицинскую   в рамках выбранной программы и по определенным условиям</p>
        )}
      </div>
      <div className='mt-10'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[20px] text-blue-950'>Какие способы оплаты вы предоставляете?</h1>
          <div className='ml-5 w-[40px] h-[40px] bg-blue-950 rounded-[50%] flex items-center justify-center'>
            <button onClick={toggleOpen4} className={`text-white`}>{open4 ? <FaMinus /> : <FaPlus />}</button>
          </div>
        </div>
        {open4 && (
          <p className="text-[16px] text-[#5a5252] max-w-[500px] mt-3">В клинике принимаются оплата любыми способами (карты, наличные), а также доступен обменный пункт</p>
        )}
      </div>
    </div>
  );
}

export default Accordion;
