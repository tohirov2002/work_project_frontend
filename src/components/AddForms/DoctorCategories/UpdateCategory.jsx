import React, { useEffect, useState } from 'react';
import MyInput from '../MyInput';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ImCross } from "react-icons/im";

const UpdateComments = ({ editComment, showMore, handleShowMore, handleDataUpdate }) => {
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(editComment?.category_name || "");
  }, [editComment]);

  const updatedComment = {
    category_name: content,
  };

  const handleData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/doctor/category/');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  let params = useParams();

  useEffect(() => {
    handleData();
    if (params.id) {
      axios
        .get(`http://127.0.0.1:8000/api/doctor/category/${params.id}/`)
        .then((response) => {
          setContent(response.data.category_name);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [params.id]);

  const onCreate = (e) => {
    e.preventDefault();

    axios.put(`http://127.0.0.1:8000/api/doctor/category/${editComment?.id}/`, updatedComment, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log("Response:", response);
        handleDataUpdate();
      })
      .catch((error) => {
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

  return (
    <div className={showMore ? 'more' : 'info'}>
      <div className='columns'>
        <div className='container w-[800px] p-[50px] mt-[200px] bg-white rounded-xl flex items-center justify-center flex-col'>
          <div onClick={handleShowMore} className='bg-blue-500 w-[30px] cursor-pointer h-[30px] rounded-[50%] flex items-center justify-center'>
            <ImCross className='text-white' />
          </div>
          <h1 className='text-[#2D3663] text-[40px] '>Sharx o'zgartirish</h1>
          <form onSubmit={onCreate}>
            <MyInput myValue={content} mySetValueChange={setContent} myplace='description' type='text' />
            <button onClick={handleShowMore} type="submit" className='ml-[150px] flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-3 pb-3 mt-[30px] bg-blue-950 hover:bg-slate-900'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateComments;
