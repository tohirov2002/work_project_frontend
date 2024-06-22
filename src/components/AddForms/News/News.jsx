import { useState } from 'react'
import MyInput from '../MyInput';

const AddNews = () => {

  const [titleInp, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [content1, setContent1] = useState("")
  const [advice, setAdvice] = useState("")
  const [advice1, setAdvice1] = useState("")
  const [advice2, setAdvice2] = useState("")
  const [description, setDescription] = useState("")
  const [description1, setDescription1] = useState("")


  const onCreate =(e)=> {
    e.preventDefault();
  }
  
  return (
    <div className='container pl-[200px] mt-[50px]'>
        <div>
            <h1 className='text-[#2D3663] text-[40px] ml-[330px]'>Yangilik qo'shish</h1>  
            <form>
              <MyInput myValue={titleInp} mySetValueChange={setTitle} myplace='title'/>
              <input type="file"className='mt-8 text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4'/>
              <MyInput myValue={content} mySetValueChange={setContent} myplace='content'/>
              <MyInput myValue={content1} mySetValueChange={setContent1} myplace='content'/>
              <MyInput myValue={advice} mySetValueChange={setAdvice} myplace='maslahat'/>
              <MyInput myValue={advice1} mySetValueChange={setAdvice1} myplace='maslahat'/>
              <MyInput myValue={advice2} mySetValueChange={setAdvice2} myplace='maslahat'/>
              <MyInput myValue={description} mySetValueChange={setAdvice2} myplace='description'/>
              <MyInput myValue={description1} mySetValueChange={setAdvice2} myplace='description'/>
              <button onClick={onCreate}  className='ml-[330px] flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-3 pb-3 mt-[30px] bg-blue-950 hover:bg-slate-900'>Qo'shish</button>
            </form>
        </div>
        </div>
  )
}

export default AddNews