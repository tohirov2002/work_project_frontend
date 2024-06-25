import React, { useEffect, useState } from 'react';
import MyInput from '../MyInput';
import axios from 'axios';

const AddNews = ({ showModal, handleShow, handleData }) => {

  const [title_uz, setTitleUz] = useState("");
  const [title_ru, setTitleRU] = useState("");
  const [content_uz, setContentUZ] = useState("");
  const [content_ru, setContentRu] = useState("");
  const [description1_uz, setDescription1Uz] = useState("");
  const [description1_ru, setDescription1Ru] = useState("");
  const [description2_uz, setDescription2Uz] = useState("");
  const [description2_ru, setDescription2Ru] = useState("");
  const [description3_uz, setDescription3Uz] = useState("");
  const [description3_ru, setDescription3Ru] = useState("");
  const [advice1_uz, setAdvice1Uz] = useState("");
  const [advice1_ru, setAdvice1Ru] = useState("");
  const [advice2_uz, setAdvice2Uz] = useState("");
  const [advice2_ru, setAdvice2Ru] = useState("");
  const [advice3_uz, setAdvice3Uz] = useState("");
  const [advice3_ru, setAdvice3Ru] = useState("");
  const [ImageInp, setImageInp] = useState(null);
  const [author, setAuthor] = useState(""); // Adding state for author
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/news/');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const onCreate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title_uz', title_uz);
    formData.append('title_ru', title_ru);
    formData.append('content_uz', content_uz);
    formData.append('content_ru', content_ru);
    formData.append('description1_uz', description1_uz);
    formData.append('description1_ru', description1_ru);
    formData.append('description2_uz', description2_uz);
    formData.append('description2_ru', description2_ru);
    formData.append('description3_uz', description3_uz);
    formData.append('description3_ru', description3_ru);
    formData.append('advice1_uz', advice1_uz);
    formData.append('advice1_ru', advice1_ru);
    formData.append('advice2_uz', advice2_uz);
    formData.append('advice2_ru', advice2_ru);
    formData.append('advice3_uz', advice3_uz);
    formData.append('advice3_ru', advice3_ru);
    formData.append('image', ImageInp);
    formData.append('author', author); // Adding author to formData

    console.log("FormData:", formData);

    axios.post('http://127.0.0.1:8000/api/news/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(function (response) {
      console.log("Response:", response);
      handleData();
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
  };

  const handleFileChange = (e) => {
    setImageInp(e.target.files[0]);
  };

  return (
    <div className={showModal ? 'column' : 'info'}>
      <div className='columns h-[100vh] overflow-auto'>
        <div className='container w-[800px] p-[50px] mt-[100px] bg-white rounded-xl flex items-center justify-center flex-col'>
          <div>
            <h1 className='text-[#2D3663] text-[40px] ml-[100px]'>Yangilik qo'shish</h1>
            <form onSubmit={onCreate}>
              <MyInput myValue={title_uz} mySetValueChange={setTitleUz} myplace='title_uz'/>
              <MyInput myValue={title_ru} mySetValueChange={setTitleRU} myplace='title_ru'/>
              <input className='text-[#2D3663] mt-8 w-[550px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4' type="file" onChange={handleFileChange} />
              <MyInput myValue={content_uz} mySetValueChange={setContentUZ} myplace='content_uz'/>
              <MyInput myValue={content_ru} mySetValueChange={setContentRu} myplace='content_ru'/>
              <MyInput myValue={description1_uz} mySetValueChange={setDescription1Uz} myplace='description1_uz'/>
              <MyInput myValue={description1_ru} mySetValueChange={setDescription1Ru} myplace='description1_ru'/>
              <MyInput myValue={description2_uz} mySetValueChange={setDescription2Uz} myplace='description2_uz'/>
              <MyInput myValue={description2_ru} mySetValueChange={setDescription2Ru} myplace='description2_ru'/>
              <MyInput myValue={description3_uz} mySetValueChange={setDescription3Uz} myplace='description3_uz'/>
              <MyInput myValue={description3_ru} mySetValueChange={setDescription3Ru} myplace='description3_ru'/>
              <MyInput myValue={advice1_uz} mySetValueChange={setAdvice1Uz} myplace='advice1_uz'/>
              <MyInput myValue={advice1_ru} mySetValueChange={setAdvice1Ru} myplace='advice1_ru'/>
              <MyInput myValue={advice2_uz} mySetValueChange={setAdvice2Uz} myplace='advice2_uz'/>
              <MyInput myValue={advice2_ru} mySetValueChange={setAdvice2Ru} myplace='advice2_ru'/>
              <MyInput myValue={advice3_uz} mySetValueChange={setAdvice3Uz} myplace='advice3_uz'/>
              <MyInput myValue={advice3_ru} mySetValueChange={setAdvice3Ru} myplace='advice3_ru'/>
              <button type='submit' onClick={handleShow} className='ml-[150px] flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-3 pb-3 mt-[30px] bg-blue-950 hover:bg-slate-900'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
