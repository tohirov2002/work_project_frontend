import React from 'react'

const MyInput = ({ myValue, mySetValueChange, myplace }) => {

  const inputValueChange = (e)=> {
    mySetValueChange(e.target.value)
  }
  return (
    <div className='flex flex-col'>
         {/* <label className='text-xl text-blue-950' htmlFor="title">
            Title:
         </label> */}
         <input 
          onChange={inputValueChange}
          placeholder={myplace}
          value={myValue}
          type="text"
          id='title'
          className='text-[#2D3663] mt-8 w-[550px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4'/>
    </div>
  )
}

export default MyInput