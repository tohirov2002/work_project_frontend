import React, { useEffect, useState } from 'react';
import MyInput from '../MyInput';
import axios from 'axios';
import { ImCross } from "react-icons/im";

const AddDepartment = ({ showModal, handleShow, handleData }) => {
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

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/department/');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

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
        formData.append('image', imageInp); // Ensure imageInp is set correctly
        formData.append('vedio', vedioUrl);
        
    
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/department/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log("Response:", response);
            handleData();
            setNameUz("");
            setNameRu("");
            setDescription1Uz("");
            setDescription1Ru("");
            setDescription2Uz("");
            setDescription2Ru("");
            setDescription3Uz("");
            setDescription3Ru("");
            setOperation1Uz("");
            setOperation1Ru("");
            setOperation2Uz("");
            setOperation2Ru("");
            setOperation3Uz("");
            setOperation3Ru("");
            setOperation4Uz("");
            setOperation4Ru("");
            setImageInp(null);
            setVedioUrl("");
        } catch (error) {
            if (error.response) {
                console.log("Error response data:", error.response.data);
                console.log("Error response status:", error.response.status);
                console.log("Error response headers:", error.response.headers);
                // Handle specific errors or display messages to the user
            } else if (error.request) {
                console.log("Error request:", error.request);
            } else {
                console.log('Error message:', error.message);
            }
            console.log("Error config:", error.config);
        }
    };

    const handleFileChange = (e) => {
        setImageInp(e.target.files[0]);
    };

    return (
        <div className={showModal ? 'column' : 'info'}>
            <div className='columns h-[100vh] overflow-auto'>
                <div className='container w-[800px] p-[50px] mt-[100px] bg-white rounded-xl flex items-center justify-center flex-col'>
                    <div>
                        <div className='bg-blue-500 ml-[250px] w-[30px] cursor-pointer h-[30px] rounded-[50%] flex items-center justify-center'>
                            <ImCross onClick={handleShow} className='text-white' />
                        </div>
                        <h1 className='text-[#2D3663] text-[40px] ml-[100px]'>Bo'lim qo'shish</h1>
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
                            <MyInput myValue={vedioUrl} mySetValueChange={setVedioUrl} myplace='vedioUrl' />
                            <button onClick={handleShow} type='submit' className='ml-[150px] flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-3 pb-3 mt-[30px] bg-blue-950 hover:bg-slate-900'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDepartment;
