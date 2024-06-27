import React, { useEffect, useState } from 'react';
import MyInput from '../MyInput';
import axios from 'axios';
import { ImCross } from "react-icons/im";


const AddComments = ({ showModal, handleShow , handleData}) => {

  // data feach
  const [data, setData] = useState([])

 

  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/comments/')
        setData(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    handleData()
  }, [])





 

  // data create
  const [contentInp, setContentInp] = useState("");
  const [descriptionRu, setDescriptionRu] = useState("");
  const [ImageInp, setImageInp] = useState(null);

  const onCreate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('description', contentInp);
    formData.append('description_ru', descriptionRu);
    formData.append('image', ImageInp);

    console.log("FormData:", formData);

    axios.post('http://127.0.0.1:8000/api/comments/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(function (response) {
        console.log("Response:", response);
        handleData();
        setContentInp("");
        setDescriptionRu("");
        setImageInp(null);
      })
      .catch(function (error) {
        if (error.response) {
          console.log("Error response data:", error.response.data);
          console.log("Error response status:", error.response.status);
          console.log("Error response headers:", error.response.headers);
        } else if (error.request) {
          console.log("Error request:", error.request);
        } else {
          console.log('Error message:', error.message);
        }
        console.log("Error config:", error.config);
      });
  }

  const handleFileChange = (e) => {
    setImageInp(e.target.files[0]);
  }

  return (
    <div className={showModal? 'column': 'info'}>
      <div className='columns'>
        <div className='container w-[800px] p-[50px] mt-[200px] bg-white rounded-xl flex items-center justify-center flex-col'>
        <div className='bg-blue-500 w-[30px] cursor-pointer h-[30px] rounded-[50%] flex items-center justify-center'>
            <ImCross onClick={handleShow} className='text-white'/>
        </div>
        <h1 className='text-[#2D3663] text-[40px] '>Sharx qo'shish</h1>
        <form onSubmit={onCreate}>
          <MyInput myValue={contentInp} mySetValueChange={setContentInp} myplace='description' type='text'/>
          <MyInput myValue={descriptionRu} mySetValueChange={setDescriptionRu} myplace='description_ru' type='text'/>
          <input className='text-[#2D3663] mt-8 w-[550px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4' type="file" onChange={handleFileChange} />
          <button onClick={handleShow} type="submit" className='ml-[150px] flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-3 pb-3 mt-[30px] bg-blue-950 hover:bg-slate-900'>
            Submit
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddComments;
