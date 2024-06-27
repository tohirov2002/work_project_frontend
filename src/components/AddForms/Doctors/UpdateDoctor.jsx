import React, { useEffect, useState } from 'react';
import MyInput from '../MyInput';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ImCross } from "react-icons/im";

const UpdateNews = ({ editDoctor, showMore, handleShowMore, handleDataUpdate }) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [specialty_uz, setSpecialtyUz] = useState("");
  const [specialty_ru, setSpecialtyRu] = useState("");
  const [education, setEducation] = useState("");
  const [experience1_uz, setExperience1Uz] = useState("");
  const [experience1_ru, setExperience1Ru] = useState("");
  const [experience2_uz, setExperience2Uz] = useState("");
  const [experience2_ru, setExperience2Ru] = useState("");
  const [experience3_uz, setExperience3Uz] = useState("");
  const [experience3_ru, setExperience3Ru] = useState("");
  const [experience4_uz, setExperience4Uz] = useState("");
  const [experience4_ru, setExperience4Ru] = useState("");
  const [imageInp, setImageInp] = useState(null);
  const [vedioUrl, setVedioUrl] = useState("");
  const [category_name, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const params = useParams();

  useEffect(() => {
    if (editDoctor) {
      setName(editDoctor.name);
      setSpecialtyUz(editDoctor.specialty_uz);
      setSpecialtyRu(editDoctor.specialty_ru);
      setEducation(editDoctor.education);
      setExperience1Uz(editDoctor.experience1_uz);
      setExperience1Ru(editDoctor.experience1_ru);
      setExperience2Uz(editDoctor.experience2_uz);
      setExperience2Ru(editDoctor.experience2_ru);
      setExperience3Uz(editDoctor.experience3_uz);
      setExperience3Ru(editDoctor.experience3_ru);
      setExperience4Uz(editDoctor.experience4_uz);
      setExperience4Ru(editDoctor.experience4_ru);
      setImageInp(editDoctor.image);
      setVedioUrl(editDoctor.vedio);
      setCategory(editDoctor.category_name); 
    }
  }, [editDoctor]);

  const updatedComment = {
    name,
    specialty_uz,
    specialty_ru,
    education,
    experience1_uz,
    experience1_ru,
    experience2_uz,
    experience2_ru,
    experience3_uz,
    experience3_ru,
    experience4_uz,
    experience4_ru,
    image: imageInp,
    vedio: vedioUrl,
    category_name, 
  };

  const handleData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/doctor/');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleData();
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/doctor/category/');
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
    if (params.id){
      axios
      .get(`http://127.0.0.1:8000/api/doctor/${params.id}/`)
      .then((response) => {
        setName(response.data.name);
        setSpecialtyUz(response.data.specialty_uz);
        setSpecialtyRu(response.data.specialty_ru);
        setEducation(response.data.education);
        setExperience1Uz(response.data.experience1_uz);
        setExperience1Ru(response.data.experience1_ru);
        setExperience2Uz(response.data.experience2_uz);
        setExperience2Ru(response.data.experience2_ru);
        setExperience3Uz(response.data.experience3_uz);
        setExperience3Ru(response.data.experience3_ru);
        setExperience4Uz(response.data.experience4_uz);
        setExperience4Ru(response.data.experience4_ru);
        setImageInp(response.data.image);
        setVedioUrl(response.data.vedio);
        setCategory(response.data.category_name); 
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }, [params.id]);

  const onCreate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('specialty_uz', specialty_uz);
    formData.append('specialty_ru', specialty_ru);
    formData.append('education', education);
    formData.append('experience1_uz', experience1_uz);
    formData.append('experience1_ru', experience1_ru);
    formData.append('experience2_uz', experience2_uz);
    formData.append('experience2_ru', experience2_ru);
    formData.append('experience3_uz', experience3_uz);
    formData.append('experience3_ru', experience3_ru);
    formData.append('experience4_uz', experience4_uz);
    formData.append('experience4_ru', experience4_ru);
    formData.append('image', imageInp);
    formData.append('vedio', vedioUrl);
    formData.append('category_name', category_name);

    axios.put(`http://127.0.0.1:8000/api/doctor/${editDoctor.id}/`, formData, {
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
    setImageInp(e.target.files[0]);
  };

  return (
    <div className={showMore ? 'more' : 'info'}>
      <div className='columns h-[100vh] overflow-auto'>
        <div className='container w-[800px] p-[50px] mt-[100px] bg-white rounded-xl flex items-center justify-center flex-col'>
          <div onClick={handleShowMore} className='bg-blue-500 w-[30px] cursor-pointer h-[30px] rounded-[50%] flex items-center justify-center'>
            <ImCross className='text-white' />
          </div>
          <h1 className='text-[#2D3663] text-[40px]'>Shifokor o'zgartirish</h1>
          <form onSubmit={onCreate}>
            <MyInput myValue={name} mySetValueChange={setName} myplace='name' />
            <input className='text-[#2D3663] mt-8 w-[550px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4' type="file" onChange={handleFileChange} />
            <MyInput myValue={specialty_uz} mySetValueChange={setSpecialtyUz} myplace='specialty_uz' />
            <MyInput myValue={specialty_ru} mySetValueChange={setSpecialtyRu} myplace='specialty_ru' />
            <MyInput myValue={education} mySetValueChange={setEducation} myplace='education' />
            <MyInput myValue={experience1_uz} mySetValueChange={setExperience1Uz} myplace='experience1_uz' />
            <MyInput myValue={experience1_ru} mySetValueChange={setExperience1Ru} myplace='experience1_ru' />
            <MyInput myValue={experience2_uz} mySetValueChange={setExperience2Uz} myplace='experience2_uz' />
            <MyInput myValue={experience2_ru} mySetValueChange={setExperience2Ru} myplace='experience2_ru' />
            <MyInput myValue={experience3_uz} mySetValueChange={setExperience3Uz} myplace='experience3_uz' />
            <MyInput myValue={experience3_ru} mySetValueChange={setExperience3Ru} myplace='experience3_ru' />
            <MyInput myValue={experience4_uz} mySetValueChange={setExperience4Uz} myplace='experience4_uz' />
            <MyInput myValue={experience4_ru} mySetValueChange={setExperience4Ru} myplace='experience4_ru' />
            <MyInput myValue={vedioUrl} mySetValueChange={setVedioUrl} myplace='vedioUrl' />
            <select
              className='text-[#2D3663] mt-8 w-[550px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4'
              value={category_name}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.category_name}</option>
              ))}
            </select>
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
