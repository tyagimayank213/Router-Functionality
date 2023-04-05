import React from 'react'
import Template from '../components/Template'
import loginImage from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template 
        title="Welcome Back"
        desc1="Buils skill for today, tomorrow and beyond,"
        desc2="Education tot future-proof your career."
        formtype="login"
        image={loginImage}
        setIsLoggedIn = {setIsLoggedIn}
    />
  )
}

export default Login