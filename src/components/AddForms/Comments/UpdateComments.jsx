import React, { useEffect, useState } from 'react';
import MyInput from '../MyInput';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateComments = ({editComment, showMore, handleShowMore, handleDataUpdate}) => {
  const [data, setData] = useState([]);

  const [content, setContent] = useState("")
  const [description, setDescription] = useState("")
  const [editImage, setEditImage] = useState("")

  console.log(content);

  useEffect(() => {
    setContent(editComment?.description)
    setDescription(editComment?.description_ru)
  }, [editComment])

  const updatedComment = {
    description: content,
    description_ru: description,
    image: editImage,
  }


  const handleData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/comments/');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  let params = useParams();

  // data create
  const [contentInp, setContentInp] = useState("");
  const [descriptionRu, setDescriptionRu] = useState("");
  const [ImageInp, setImageInp] = useState(null);

  useEffect(() => {
    handleData();
    axios
      .get(`http://127.0.0.1:8000/api/comments/${params.id}/`)
      .then(function (response) {
        setContentInp(response.data.description);
        setDescriptionRu(response.data.description_ru);
        setImageInp(response.data.image);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onCreate = (e) => {
    e.preventDefault();

console.log(updatedComment);


    axios.put(`http://127.0.0.1:8000/api/comments/${editComment.id}/`, updatedComment, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(function (response) {
        console.log("Response:", response);
        handleDataUpdate()
      })
      // .catch(function (error) {
      //   if (error.response) {
      //     console.log("Error response data:", error.response.data);
      //     console.log("Error response status:", error.response.status);
      //     console.log("Error response headers:", error.response.headers);
      //   } else if (error.request) {
      //     console.log("Error request:", error.request);
      //   } else {
      //     console.log('Error message:', error.message);
      //   }
      //   console.log("Error config:", error.config);
      // });
  };

  const handleFileChange = (e) => {
    setEditImage(e.target.files[0]);
  };

  return (
    <div className={showMore? 'more': 'info'}>
      <div className='columns'>
        <div className='container w-[800px] p-[50px] mt-[200px] bg-white rounded-xl flex items-center justify-center flex-col'>
          <h1 className='text-[#2D3663] text-[40px] '>Sharx o'zgartirish</h1>
          <form onSubmit={onCreate}>
            <MyInput myValue={content} mySetValueChange={setContent} myplace='description' type='text' />
            <MyInput myValue={description} mySetValueChange={setDescription} myplace='description_ru' type='text' />
            <input className='text-[#2D3663] mt-8 w-[550px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4' type="file" onChange={handleFileChange} />
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
