import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({email:"", password:""})

    const [showPassword, setShowPassword] = useState(false)
    // let setIsLoggedIn = setIsLoggedIn;
    const navigate = useNavigate()
    function changeHandler(event) {
        setFormData( prevData => {
            return ({
                ...prevData,
                [event.target.name]: event.target.value
            })
        })
    }

    function submitHandler(e){
        e.preventDefault();
        console.log(formData);
        setIsLoggedIn(true);
        toast.success('Logged In')
        navigate("/dashboard")
    }

    function showPasswordHandler(){
        setShowPassword(!showPassword);
    }

    return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6 gap-4'>
        <div className='flex flex-col'>
            <label htmlFor='email'className='text-[0.875rem] text-richblack-5 mb-2 leading-[1.375rem]   font-bold'>Email Address<sup className='text-red-700'>*</sup></label>
            <input 
                className='rounded-md bg-richblack-800 w-full text-richblack-5 p-[7px] outline-none focus:border focus:border-blue-500'
                required
                type="email"
                onChange={changeHandler}
                value={formData.email}
                name="email"
                id="email"
                placeholder='Enter email address'
            />
        </div>

        <div className='flex flex-col relative'>
            <label htmlFor='password' className='text-[0.875rem] text-richblack-5 mb-2 leading-[1.375rem]  font-bold'>Password<sup className='text-red-700 '>*</sup></label>
            <input 
                required
                className='rounded-md bg-richblack-800 w-full text-richblack-5 p-[7px] outline-none focus:border focus:border-blue-500 relative'
                type={showPassword ? "text" : "password"}
                onChange={changeHandler}
                value={formData.password}
                name="password"
                id="password"
                placeholder='Enter password'
            />
            <span onClick={showPasswordHandler} className='absolute top-[36px] right-[20px]
             cursor-pointer'>{showPassword ? (<AiOutlineEye fontSize={24} fill='#FFFFFF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#FFFFFF'/>)}</span>
            <Link to="#">
                <p className="text-xs mt-1 text-blue-100 text-right relative -top-1">Forget Password</p>
            </Link>

        </div>

        <button className='bg-yellow-50 font-medium rounded-[8px] text-richblack-900 px-[12px] py-[8px] '>Sign In</button>

    </form>
  )
}

export default LoginForm