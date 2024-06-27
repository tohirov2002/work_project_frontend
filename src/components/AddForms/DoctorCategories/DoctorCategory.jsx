import { useState, useEffect } from 'react';
import axios from 'axios';
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import AddComments from './AddCategory';
import { useParams } from 'react-router-dom';
import UpdateComments from './UpdateCategory';

const DoctorCategory = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [editComment, setEditComment] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  let params = useParams();

  const handleData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/doctor/category/');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleData();
  }, []);

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/doctor/category/${id}/`);
      console.log('Data deleted successfully:', response.data);
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }

  const handleDelete = (id) => {
    const confirmed = window.confirm("Haqiqatdan ham ushbu kategoriyani o'chirmoqchimisiz?");
    if (confirmed) {
      deleteData(id);
    }
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleShow = () => {
    setShowModal(!showModal);
  }

  const handleShowMore = () => {
    setShowMore(!showMore);
  }

  const filteredData = data.filter(item =>
    item.category_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section className='ml-[400px] container pt-10 bg-blue-50'>
        <div className='text-blue-950 text-[40px] text-center'>Category</div>
        <div className='flex items-center justify-between'>
          <input 
            type="text" 
            placeholder='Search Categories' 
            value={searchQuery}
            onChange={handleSearchChange}
            className='text-[#2D3663] mt-8 w-[750px] bg-white rounded-xl pt-3 pb-3 pl-4' 
          />
          <button 
            onClick={handleShow} 
            className='cursor-pointer ml-[330px] flex items-center justify-center gap-3 text-white rounded-xl w-[200px] pt-3 pb-3 mt-[30px] bg-blue-600 hover:bg-slate-500'
          >
            Add Category
          </button>
        </div>
        <div className='mt-10 rounded-3-xl'>
          <div className="relative overflow-x-auto rounded-xl">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-[18px]">
                    Category Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-[18px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  filteredData.map((item) => (
                    <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-6 py-4 max-w-[300px] text-[14px]">
                        {item.category_name}
                      </td>
                      <td className="px-6 py-4">
                        <div className='flex items-center gap-5'>
                          <div onClick={() => {setEditComment(item); handleShowMore()}} className='cursor-pointer bg-blue-600 w-[45px] h-[45px] flex items-center justify-center rounded-xl'>
                            <HiOutlinePencilAlt className='text-white w-[25px] h-[25px]' />
                          </div>
                          <div onClick={() => handleDelete(item.id)} className='cursor-pointer bg-red-600 w-[45px] h-[45px] flex items-center justify-center rounded-xl'>
                            <MdDelete className='text-white w-[25px] h-[25px]' />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <UpdateComments handleDataUpdate={handleData} showMore={showMore} handleShowMore={handleShowMore} editComment={editComment} />
      <AddComments handleData={handleData} showModal={showModal} handleShow={handleShow} />
    </>
  );
}

export default DoctorCategory;
