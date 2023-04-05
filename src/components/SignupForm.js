import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", createPassword:"", confirmPassword:""})
    const [showCreatePassword, setShowCreatePassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const navigate = useNavigate()
    const [accountType, setAcountType] = useState("student");

    function changeHandler(event){
        setFormData( prevData => {
            return ({
                ...prevData,
                [event.target.name]: event.target.value
            })
        })
    }
    
    function submitHandler(e){
        e.preventDefault();
        console.log(formData)
        setIsLoggedIn(true)
        toast.success(' Logged In');
        navigate('/dashboard');
    }

    function showCreatePasswordHandler(){
        setShowCreatePassword(!showCreatePassword)
    }

    function showConfirmPasswordHandler(){
        setShowConfirmPassword(!showConfirmPassword)
    }

    return (<>
    <div className='bg-richblack-800 rounded-3xl flex w-6/12 p-1 justify-between items-center my-4'>
        <button 
            className={` rounded-3xl px-4 py-2 font-semibold transition-all duration-200 
            ${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} `}
            onClick={() => setAcountType("student")}
        >
            Student
        </button>
        <button 
            className={` rounded-3xl px-[.75rem] py-2  font-semibold transition-all duration-200 
            ${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} `}
            onClick={() => setAcountType("instructor")}
        >
            Instructor
        </button>
    </div>
    <form onSubmit={submitHandler} className=' flex flex-col gap-4 box-border'>
        
        <div className='flex gap-2'>
            <div className='flex flex-col relative'>
                <label htmlFor='firstName' className='text-[0.875rem] text-richblack-5 mb-2 leading-[1.375rem]  font-bold'>First Name<sup className='text-red-700'>*</sup></label>
                <input 
                    className='rounded-md bg-richblack-800 w-full text-richblack-5 p-[7px] outline-none focus:border focus:border-blue-500 relative'
                    required
                    type="text"
                    onChange={changeHandler}
                    placeholder='Enter first name'
                    value={formData.firstName}
                    name="firstName"
                    id="firstName"
                />
            </div>
            <div className='flex flex-col relative'>
                <label htmlFor='lastName' className='text-[0.875rem] text-richblack-5 mb-2 leading-[1.375rem]  font-bold'>Last Name<sup className='text-red-700'>*</sup></label>
                <input 
                    className='rounded-md bg-richblack-800 w-full text-richblack-5 p-[7px] outline-none focus:border focus:border-blue-500 relative'
                    required
                    type="text"
                    onChange={changeHandler}
                    placeholder='Enter last name'
                    value={formData.lastName}
                    name="lastName"
                    id="lastName"
                />
            </div>
        </div>
        <div >
            <label htmlFor='email' className='text-[0.875rem] text-richblack-5 mb-2 leading-[1.375rem]  font-bold'>Email Address<sup className='text-red-700'>*</sup></label>
            <input
                className='rounded-md bg-richblack-800 w-full text-richblack-5 p-[7px] outline-none focus:border focus:border-blue-500 relative'
                required
                type="email"
                onChange={changeHandler}
                placeholder='Enter email address'
                value={formData.emil}
                name="email"
                id="email"
            />
        </div>
        <div className='flex gap-2'>
            <div className='relative'>
                <label className='text-[0.875rem] text-richblack-5 mb-2 leading-[1.375rem]  font-bold' htmlFor='createPassword'>Create Password<sup className='text-red-700'>*</sup></label>
                <input 
                    className='rounded-md bg-richblack-800 w-full text-richblack-5 p-[7px] outline-none focus:border focus:border-blue-500 relative'
                    required
                    type={showCreatePassword ? "type" : "password"}
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    value={formData.createPassword}
                    name='createPassword'
                    id='createPassword'
                />
                <span onClick={showCreatePasswordHandler} className='absolute top-[32px] right-[10px]
             cursor-pointer'>{ showCreatePassword ? <AiOutlineEye fontSize={20} fill='#FFFFFF'/>: <AiOutlineEyeInvisible fontSize={20} fill='#FFFFFF'/> }</span>
            </div>
            <div className='relative'>
                <label htmlFor='confirmPassword' className='text-[0.875rem] text-richblack-5 mb-2 leading-[1.375rem]  font-bold'>Confirm Password<sup className='text-red-700'>*</sup></label>
                <input 
                    className='rounded-md bg-richblack-800 w-full text-richblack-5 p-[7px] outline-none focus:border focus:border-blue-500 relative'
                    required
                    type={showConfirmPassword ? "type" : "password"}
                    onChange={changeHandler}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    name='confirmPassword'
                    id='confirmPassword'
                />
                <span onClick={showConfirmPasswordHandler} className='absolute top-[32px] right-[10px]
             cursor-pointer'>{ showConfirmPassword ? <AiOutlineEye fontSize={20} fill='#FFFFFF' />: <AiOutlineEyeInvisible fontSize={20} fill='#FFFFFF'/> }</span>
            </div>
        </div>

        <button className='bg-yellow-50 w-full font-medium rounded-[8px] text-richblack-900 px-[12px] py-[8px] '>Create Account</button>
    </form>
    </>
  )
}

export default SignupForm