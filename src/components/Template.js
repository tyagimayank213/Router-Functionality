import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import frame from "../assets/frame.png"
import {FcGoogle} from "react-icons/fc"

const Template = ({title, desc1, desc2, image,  formtype, setIsLoggedIn}) => {
  return (
    <div className='w-11/12 max-w-[1000px] flex mt-3 justify-between mx-auto py-12 gap-x-12'>
        <div className='w-11/12 max-w-[400px]'>
            <h1 className='text-richblack-5 font-semibold text-[1.675rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4 '>
                <span className='text-richblack-100'>{desc1}</span>
                <br />
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {
                formtype === "signup" ? (<SignupForm setIsLoggedIn = {setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn = {setIsLoggedIn}/>)
            }
            

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-richblack-700'></div>
                <p className='bg-richblack-700 font-medium leading-[1.375rem] text-richblack-200'>OR</p>
                <div className='h-[1px] w-full bg-richblack-700'></div>
            </div>

            <button className='flex text-richblack-100 justify-center items-center w-full rounded-[8px] font-medium border border-richblack-100 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle />
                <p>Sign Up with Google</p>
            </button>
        </div>
        <div className='relative w-11/12 max-w-[450px]'>
            <img 
                className='z-10'
                src={frame} 
            width={400}
            height={400}
            loading="lazy"/>
            <img 
                className='absolute z-20 -top-4 -left-4'
                src={image}
                width={400}
                height={400}
                loading="lazy"
            />
        </div>
    </div>
  )
}

export default Template