import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import axios from 'axios';

const Section = () => {
    const [formData, setFormData] = useState({
        ism: '',
        familiya: '',
        tel: '',
        sana: '',
        sms: '',
        doktor_hulosasi: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/message/apply/', data);
            alert(response.data.message);
            setFormData({
                ism: '',
                familiya: '',
                tel: '',
                sana: '',
                sms: '',
                doktor_hulosasi: '',
            });
        } catch (error) {
            alert('Xatolik yuz berdi');
        }
    };

    const { mood } = useContext(Context)
    return (
        <section className='container mt-[50px]'>
            <div className='flex items-center justify-center flex-col'>
                <div className='flex items-center'>
                    <h1 className={`${mood ? 'text-[#2D3663]' : 'text-white'} text-[40px] text-center conection_title`}>Murojaat qilish</h1>
                </div>
                <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col w-full max-w-[950px]'>
                    <div className='flex items-center justify-between mt-[30px] gap-[50px] w-full max-w-[950px]'>
                        <input type="text" placeholder='Исм' name="ism" value={formData.ism} onChange={handleChange} className='text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4' />
                        <input type="text" placeholder='Фамиля' name="familiya" value={formData.familiya} onChange={handleChange} className='text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4' />
                    </div>
                    <div className='flex items-center justify-between mt-[30px] gap-[50px] w-full max-w-[950px]'>
                        <input type="number" placeholder='Telefon' name='tel' value={formData.tel} onChange={handleChange} className='text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4' />
                        <input type="date" name="sana" value={formData.sana} onChange={handleChange} className='text-[#2D3663] w-full max-w-[950px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4 pr-4' />
                    </div>
                    <div className='mt-[30px] gap-[50px] w-full max-w-[950px]'>
                        <textarea name="sms" value={formData.sms} onChange={handleChange} className='bg-blue-50 w-full max-w-[950px] rounded-[50px] p-5 text-[#2D3663]' placeholder='Хабар' cols="30" rows="5"></textarea>
                    </div>
                    <button type='submit' className={`${mood ? 'text-white bg-blue-950 hover:bg-slate-900' : 'text-[#2D3663] bg-white hover:bg-blue-100'}  flex items-center justify-center gap-3 rounded-3xl w-[250px] pt-3 pb-3 mt-[30px] ml-4`}>Yuborish</button>
                </form>
            </div>
        </section>
    )
}

export default Section