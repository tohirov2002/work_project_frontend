import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Logo from '../../assets/images/logo.png'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState("");

    const navigate = useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault()
        let user = {
            username: name,
            password: password
        }
        axios
            .post(`https://dummyjson.com/auth/login`, user)
            .then((res) => {
                console.log(res.data.token);
                localStorage.setItem('x-auth-token', res.data.token)
                navigate('/admins')
            })
            .catch((error) => {
                console.log("errrrrrrrrrrrrrrr", error);
                alert('Kechirasiz malumotni xato kiritdingiz qaytadan urinib kuring?');
                setName("");
                setPassword("");
            })
    }

    const togglePasswordVisibility = (evt) => {
        evt.stopPropagation()
        setShowPassword(!showPassword);
    };


    return (
        <div className=' h-[100vh] pt-[100px] bg-[#f0f0f0]'>
            <div className=''>
                <form action="" onSubmit={handelSubmit} className='flex items-center justify-center flex-col'>
                    <div>
                        <img className='w-[80px] h-[80px]' src={Logo} alt="" />
                    </div>
                    <div className='mt-5 w-[500px] p-[40px] shadow-2xl rounded-xl border flex items-center justify-center flex-col bg-white'>
                        <div className='flex flex-col mt-5'>
                            <label className='text-[18px] text-[#2D3663] ml-2'>
                                Foydalanuvchi ismi yoki email manzil
                            </label>
                            <input className='text-[#2D3663] mt-2 w-[450px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='flex flex-col mt-8'>
                            <label className='text-[18px] text-[#2D3663] ml-2'>
                                Parol kiriting
                            </label>
                            <div className='relative'>
                                <input className='text-[#2D3663] mt-2 w-[450px] bg-blue-50 rounded-[20px] pt-3 pb-3 pl-4' type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                                {showPassword ? (
                                    <FaEyeSlash
                                        className='text-blue-500 w-[20px] h-[20px] absolute top-[20px] right-[20px]'
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <FaEye
                                        className='text-blue-500 w-[20px] h-[20px] absolute top-[20px] right-[20px]'
                                        onClick={togglePasswordVisibility}
                                    />
                                )}
                            </div>
                        </div>
                        <button className='bg-blue-600 text-white mt-6 p-2 w-[120px] text-[18px] rounded-xl'>Kirish</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login