import React, { useEffect, useState } from 'react';
import MyInput from '../MyInput';
import axios from 'axios';
import { ImCross } from "react-icons/im";

const AddNews = ({ showModal, handleShow, handleData }) => {
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
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/doctor/');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/doctor/category/');
                setCategories(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
        fetchCategories();
    }, []);

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
        formData.append('image', imageInp); // Ensure imageInp is set correctly
        formData.append('vedio', vedioUrl);
        formData.append('category_name', category);

        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        axios.post('http://127.0.0.1:8000/api/doctor/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                console.log("Response:", response);
                handleData();
                setName("");
                setEducation("");
                setSpecialtyUz("");
                setSpecialtyRu("");
                setExperience1Uz("");
                setExperience1Ru("");
                setExperience2Uz("");
                setExperience2Ru("");
                setExperience3Uz("");
                setExperience3Ru("");
                setExperience4Uz("");
                setExperience4Ru("");
                setImageInp(null);
                setVedioUrl("");
                setCategory("");
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
                        <div onClick={handleShow} className='bg-blue-500 ml-[250px] w-[30px] cursor-pointer h-[30px] rounded-[50%] flex items-center justify-center'>
                            <ImCross  className='text-white' />
                        </div>
                        <h1 className='text-[#2D3663] text-[40px] ml-[100px]'>Rahbar qo'shish</h1>
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
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="" disabled>Select Category</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.category_name}</option>
                                ))}
                            </select>
                            <button type='submit' onClick={handleShow} className='ml-[150px] flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-3 pb-3 mt-[30px] bg-blue-950 hover:bg-slate-900'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNews;
