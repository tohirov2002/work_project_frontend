import React, { useState } from 'react'
import MyInput from '../MyInput'

const AdDoctor = () => {
  const [titleInp, setTitle] = useState("")
  const [specialty, setSpecialty] = useState("")
  const [content, setContent] = useState("")
  const [education, setEducation] = useState("")
  const [experience, setExperience] = useState("")
  const [experience1, setExperience1] = useState("")
  const [experience2, setExperience2] = useState("")
  const [experience3, setExperience3] = useState("")

  const onCreate =(e)=> {
    e.preventDefault();
  }

  return (
        <div className='container pl-[200px] mt-[50px]'>
        <div>
            <h1 className='text-[#2D3663] text-[40px] ml-[330px]'>Doctor qo'shish</h1>
            <form>
              <MyInput myValue={titleInp} mySetValueChange={setTitle}  myplace='ism familya'/>
              <MyInput myValue={specialty} mySetValueChange={setSpecialty} myplace='mutaxasisligi'/>
              <input type="file" placeholder='title kafedrasi' className='mt-8 text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4'/>
              <MyInput myValue={content} mySetValueChange={setContent} myplace='content'/>
              <MyInput myValue={education} mySetValueChange={setEducation} myplace="ta'lim"/>
              <MyInput myValue={experience} mySetValueChange={setExperience} myplace="ish tajribasi"/>
              <MyInput myValue={experience1} mySetValueChange={setExperience1} myplace="ish tajribasi"/>
              <MyInput myValue={experience2} mySetValueChange={setExperience2} myplace="ish tajribasi"/>
              <MyInput myValue={experience3} mySetValueChange={setExperience3} myplace="ish tajribasi"/>
              {/* <h1 className='text-[#62667c] font-bold mt-[20px]'>Доктор хулосаси</h1> */}
              <button onClick={onCreate} className='ml-[330px] flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-3 pb-3 mt-[30px] bg-blue-950 hover:bg-slate-900'>Qo'shish</button>
            </form>
        </div>
        </div>
  )
}

export default AdDoctor