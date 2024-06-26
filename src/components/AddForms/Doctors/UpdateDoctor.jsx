import React, { useEffect, useState } from 'react';
import MyInput from '../MyInput';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ImCross } from "react-icons/im";

const UpdateNews = ({ editComment, showMore, handleShowMore, handleDataUpdate }) => {
  const [data, setData] = useState([]);
  const [title_uz, setTitleUz] = useState("");
  const [title_ru, setTitleRU] = useState("");
  const [content_uz, setContentUZ] = useState("");
  const [content_ru, setContentRu] = useState("");
  const [description_uz, setDescriptionUz] = useState("");
  const [description_ru, setDescriptionRu] = useState("");
  const [advice1_uz, setAdvice1Uz] = useState("");
  const [advice1_ru, setAdvice1Ru] = useState("");
  const [advice2_uz, setAdvice2Uz] = useState("");
  const [advice2_ru, setAdvice2Ru] = useState("");
  const [advice3_uz, setAdvice3Uz] = useState("");
  const [advice3_ru, setAdvice3Ru] = useState("");
  const [ImageEditInp, setEditImageInp] = useState(null);

  const params = useParams();

  useEffect(() => {
    if (editComment) {
      setTitleUz(editComment.title_uz);
      setTitleRU(editComment.title_ru);
      setContentUZ(editComment.content_uz);
      setContentRu(editComment.content_ru);
      setDescriptionUz(editComment.description_uz);
      setDescriptionRu(editComment.description_ru);
      setAdvice1Uz(editComment.advice1_uz);
      setAdvice1Ru(editComment.advice1_ru);
      setAdvice2Uz(editComment.advice2_uz);
      setAdvice2Ru(editComment.advice2_ru);
      setAdvice3Uz(editComment.advice3_uz);
      setAdvice3Ru(editComment.advice3_ru);
    }
  }, [editComment]);

  const updatedComment = {
    title_uz,
    title_ru,
    content_uz,
    content_ru,
    description_uz,
    description_ru,
    advice1_uz,
    advice1_ru,
    advice2_uz,
    advice2_ru,
    advice3_uz,
    advice3_ru,
    image: ImageEditInp,
  };

  const handleData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/news/');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleData();
    axios
      .get(`http://127.0.0.1:8000/api/news/${params.id}/`)
      .then((response) => {
        setTitleUz(response.data.title_uz);
        setTitleRU(response.data.title_ru);
        setContentUZ(response.data.content_uz);
        setContentRu(response.data.content_ru);
        setDescriptionUz(response.data.description_uz);
        setDescriptionRu(response.data.description_ru);
        setAdvice1Uz(response.data.advice1_uz);
        setAdvice1Ru(response.data.advice1_ru);
        setAdvice2Uz(response.data.advice2_uz);
        setAdvice2Ru(response.data.advice2_ru);
        setAdvice3Uz(response.data.advice3_uz);
        setAdvice3Ru(response.data.advice3_ru);
        setEditImageInp(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  const onCreate = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/news/${editComment.id}/`, updatedComment, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log("Response:", response);
        handleDataUpdate();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFileChange = (e) => {
    setEditImageInp(e.target.files[0]);
  };

  return (
    <div className={showMore? 'more': 'info'}>
      <div className='columns h-[100vh] overflow-auto'>
        <div className='container w-[800px] p-[50px] mt-[100px] bg-white rounded-xl flex items-center justify-center flex-col'>
          <div onClick={handleShowMore} className='bg-blue-500 w-[30px] cursor-pointer h-[30px] rounded-[50%] flex items-center justify-center'>
            <ImCross  className='text-white'/>
          </div>
          <h1 className='text-[#2D3663] text-[40px]'>Sharx o'zgartirish</h1>
          <form onSubmit={onCreate}>
            <MyInput myValue={title_uz} mySetValueChange={setTitleUz} myplace='title_uz' />
            <MyInput myValue={title_ru} mySetValueChange={setTitleRU} myplace='title_ru' />
            <input className='text-[#2D3663] mt-8 w-[550px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4' type="file" onChange={handleFileChange} />
            <MyInput myValue={content_uz} mySetValueChange={setContentUZ} myplace='content_uz' />
            <MyInput myValue={content_ru} mySetValueChange={setContentRu} myplace='content_ru' />
            <MyInput myValue={description_uz} mySetValueChange={setDescriptionUz} myplace='description_uz' />
            <MyInput myValue={description_ru} mySetValueChange={setDescriptionRu} myplace='description_ru' />
            <MyInput myValue={advice1_uz} mySetValueChange={setAdvice1Uz} myplace='advice1_uz' />
            <MyInput myValue={advice1_ru} mySetValueChange={setAdvice1Ru} myplace='advice1_ru' />
            <MyInput myValue={advice2_uz} mySetValueChange={setAdvice2Uz} myplace='advice2_uz' />
            <MyInput myValue={advice2_ru} mySetValueChange={setAdvice2Ru} myplace='advice2_ru' />
            <MyInput myValue={advice3_uz} mySetValueChange={setAdvice3Uz} myplace='advice3_uz' />
            <MyInput myValue={advice3_ru} mySetValueChange={setAdvice3Ru} myplace='advice3_ru' />
            <button onClick={handleShowMore} type="submit" className='ml-[150px] flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-3 pb-3 mt-[30px] bg-blue-950 hover:bg-slate-900'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateNews;
