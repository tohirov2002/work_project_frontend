import React, { useEffect, useState } from 'react';
import MyInput from '../MyInput';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ImCross } from "react-icons/im";

const UpdateDepartment = ({ editComment, showMore, handleShowMore, handleDataUpdate }) => {
  const [data, setData] = useState([]);
  const [nameUzInp, setNameUz] = useState("");
  const [nameRuInp, setNameRu] = useState("");
  const [description1_uz, setDescription1Uz] = useState("");
  const [description1_ru, setDescription1Ru] = useState("");
  const [description2_uz, setDescription2Uz] = useState("");
  const [description2_ru, setDescription2Ru] = useState("");
  const [description3_uz, setDescription3Uz] = useState("");
  const [description3_ru, setDescription3Ru] = useState("");
  const [operation1_uz, setOperation1Uz] = useState("");
  const [operation1_ru, setOperation1Ru] = useState("");
  const [operation2_uz, setOperation2Uz] = useState("");
  const [operation2_ru, setOperation2Ru] = useState("");
  const [operation3_uz, setOperation3Uz] = useState("");
  const [operation3_ru, setOperation3Ru] = useState("");
  const [operation4_uz, setOperation4Uz] = useState("");
  const [operation4_ru, setOperation4Ru] = useState("");
  const [imageInp, setImageInp] = useState(null);
  const [vedioUrl, setVedioUrl] = useState("");

  const params = useParams();

  useEffect(() => {
    if (editComment) {
      setNameUz(editComment.name_uz);
      setNameRu(editComment.name_ru);
      setDescription1Uz(editComment.description1_uz);
      setDescription1Ru(editComment.description1_ru);
      setDescription2Uz(editComment.description2_uz);
      setDescription2Ru(editComment.description2_ru);
      setDescription3Uz(editComment.description3_uz);
      setDescription3Ru(editComment.description3_ru);
      setOperation1Uz(editComment.operation1_uz);
      setOperation1Ru(editComment.operation1_ru);
      setOperation2Uz(editComment.operation2_uz);
      setOperation2Ru(editComment.operation2_ru);
      setOperation3Uz(editComment.operation3_uz);
      setOperation3Ru(editComment.operation3_ru);
      setOperation4Uz(editComment.operation4_uz);
      setOperation4Ru(editComment.operation4_ru);
      setImageInp(editComment.image);
      setVedioUrl(editComment.vedio);
    }
  }, [editComment]);

  const updatedComment = {
    name_uz: nameUzInp,
    name_ru: nameRuInp,
    description1_uz,
    description1_ru,
    description2_uz,
    description2_ru,
    description3_uz,
    description3_ru,
    operation1_uz,
    operation1_ru,
    operation2_uz,
    operation2_ru,
    operation3_uz,
    operation3_ru,
    operation4_uz,
    operation4_ru,
    image: imageInp,
    vedio: vedioUrl,
  };

  const handleData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/department/');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      axios
        .get(`http://127.0.0.1:8000/api/department/${params.id}/`)
        .then((response) => {
          setNameUz(response.data.name_uz);
          setNameRu(response.data.name_ru);
          setDescription1Uz(response.data.description1_uz);
          setDescription1Ru(response.data.description1_ru);
          setDescription2Uz(response.data.description2_uz);
          setDescription2Ru(response.data.description2_ru);
          setDescription3Uz(response.data.description3_uz);
          setDescription3Ru(response.data.description3_ru);
          setOperation1Uz(response.data.operation1_uz);
          setOperation1Ru(response.data.operation1_ru);
          setOperation2Uz(response.data.operation2_uz);
          setOperation2Ru(response.data.operation2_ru);
          setOperation3Uz(response.data.operation3_uz);
          setOperation3Ru(response.data.operation3_ru);
          setOperation4Uz(response.data.operation4_uz);
          setOperation4Ru(response.data.operation4_ru);
          setImageInp(response.data.image);
          setVedioUrl(response.data.vedio);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [params.id]);

  const onCreate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name_uz', nameUzInp);
    formData.append('name_ru', nameRuInp);
    formData.append('description1_uz', description1_uz);
    formData.append('description1_ru', description1_ru);
    formData.append('description2_uz', description2_uz);
    formData.append('description2_ru', description2_ru);
    formData.append('description3_uz', description3_uz);
    formData.append('description3_ru', description3_ru);
    formData.append('operation1_uz', operation1_uz);
    formData.append('operation1_ru', operation1_ru);
    formData.append('operation2_uz', operation2_uz);
    formData.append('operation2_ru', operation2_ru);
    formData.append('operation3_uz', operation3_uz);
    formData.append('operation3_ru', operation3_ru);
    formData.append('operation4_uz', operation4_uz);
    formData.append('operation4_ru', operation4_ru);
    if (imageInp) {
      formData.append('image', imageInp);
    }
    formData.append('vedio', vedioUrl);

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/department/${editComment.id}/`,
        formData
      );
      console.log("Response:", response);
      handleDataUpdate();
    } catch (error) {
      console.log(error);
    }
  };


  const handleFileChange = (e) => {
    setImageInp(e.target.files[0]);
  };

  return (
    <div className={showMore ? 'more' : 'info'}>
      <div className='columns h-[100vh] overflow-auto'>
        <div className='container w-[800px] p-[50px] mt-[100px] bg-white rounded-xl flex items-center justify-center flex-col'>
          <div onClick={handleShowMore} className='bg-blue-500 w-[30px] cursor-pointer h-[30px] rounded-[50%] flex items-center justify-center'>
            <ImCross className='text-white' />
          </div>
          <h1 className='text-[#2D3663] text-[40px]'>Bo'lim o'zgartirish</h1>
          <form onSubmit={onCreate}>
            <MyInput myValue={nameUzInp} mySetValueChange={setNameUz} myplace='name_uz' />
            <MyInput myValue={nameRuInp} mySetValueChange={setNameRu} myplace='name_ru' />
            <input className='text-[#2D3663] mt-8 w-[550px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4' type="file" onChange={handleFileChange} />
            <MyInput myValue={description1_uz} mySetValueChange={setDescription1Uz} myplace='description1_uz' />
            <MyInput myValue={description1_ru} mySetValueChange={setDescription1Ru} myplace='description1_ru' />
            <MyInput myValue={description2_uz} mySetValueChange={setDescription2Uz} myplace='description2_uz' />
            <MyInput myValue={description2_ru} mySetValueChange={setDescription2Ru} myplace='description2_ru' />
            <MyInput myValue={description3_uz} mySetValueChange={setDescription3Uz} myplace='description3_uz' />
            <MyInput myValue={description3_ru} mySetValueChange={setDescription3Ru} myplace='description3_ru' />
            <MyInput myValue={operation1_uz} mySetValueChange={setOperation1Uz} myplace='operation1_uz' />
            <MyInput myValue={operation1_ru} mySetValueChange={setOperation1Ru} myplace='operation1_ru' />
            <MyInput myValue={operation2_uz} mySetValueChange={setOperation2Uz} myplace='operation2_uz' />
            <MyInput myValue={operation2_ru} mySetValueChange={setOperation2Ru} myplace='operation2_ru' />
            <MyInput myValue={operation3_uz} mySetValueChange={setOperation3Uz} myplace='operation3_uz' />
            <MyInput myValue={operation3_ru} mySetValueChange={setOperation3Ru} myplace='operation3_ru' />
            <MyInput myValue={operation4_uz} mySetValueChange={setOperation4Uz} myplace='operation4_uz' />
            <MyInput myValue={operation4_ru} mySetValueChange={setOperation4Ru} myplace='operation4_ru' />
            <button onClick={handleShowMore} type="submit" className='ml-[150px] flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-3 pb-3 mt-[30px] bg-blue-950 hover:bg-slate-900'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateDepartment;
