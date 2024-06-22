import React from 'react'
import { TbXboxX } from "react-icons/tb";
import { useState } from 'react';
import MyInput from '../MyInput';

const AdDbForms = () => {
  const [titleInp, setTitle] = useState("")
  const [kafedra, setkafedra] = useState("")
  const [content, setContent] = useState("")
  const [content1, setContent1] = useState("")
  const [description, setDescription] = useState("")
  const [description1, setDescription1] = useState("")
  const [description2, setDescription2] = useState("")
  const [operatsiya, setOperatsiya] = useState("")
  const [operatsiya1, setOperatsiya1] = useState("")
  const [operatsiya2, setOperatsiya2] = useState("")
  const [operatsiya3, setOperatsiya3] = useState("")


  const onCreate =(e)=> {
    e.preventDefault();
  }
  return (
        <div className='container pl-[200px] mt-[50px]'>
        <div className=''>
            <h1 className='text-[#2D3663] text-[40px] ml-[330px]'>Bo'lim qo'shish</h1>
            <form>
              <MyInput myValue={titleInp} mySetValueChange={setTitle} myplace='title'/>
              <input type="file"className='mt-8 text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4'/>
              <MyInput myValue={kafedra} mySetValueChange={setkafedra} myplace='title kafedrasi'/>
              <MyInput myValue={content} mySetValueChange={setContent} myplace='content'/>
              <MyInput myValue={content1} mySetValueChange={setContent1} myplace='content'/>
              <input type="text" placeholder='vedio url' className='mt-8 text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4'/>
              <MyInput myValue={description} mySetValueChange={setDescription} myplace='description'/>
              <MyInput myValue={description1} mySetValueChange={setDescription1} myplace='description'/>
              <MyInput myValue={description2} mySetValueChange={setDescription2} myplace='description'/>
              <MyInput myValue={operatsiya} mySetValueChange={setOperatsiya} myplace='qanaqa operatsiyalar qilish'/>
              <MyInput myValue={operatsiya1} mySetValueChange={setOperatsiya1} myplace='qanaqa operatsiyalar qilish'/>
              <MyInput myValue={operatsiya2} mySetValueChange={setOperatsiya2} myplace='qanaqa operatsiyalar qilish'/>
              <MyInput myValue={operatsiya3} mySetValueChange={setOperatsiya3} myplace='qanaqa operatsiyalar qilish'/>
              {/* <h1 className='text-[#62667c] font-bold mt-[20px]'>Доктор хулосаси</h1> */}
              <button onClick={onCreate}  className='ml-[330px] flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-3 pb-3 mt-[30px] bg-blue-950 hover:bg-slate-900'>Qo'shish</button>
            </form>
        </div>
        </div>
  )
}

export default AdDbForms