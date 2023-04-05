import React from 'react'
import Template from '../components/Template'
import signupImage from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template 
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Buils skill for today, tomorrow and beyond,"
        desc2="Education tot future-proof your career."
        formtype="signup"
        image={signupImage}
        setIsLoggedIn = {setIsLoggedIn}
    />
  )
}

export default Signup