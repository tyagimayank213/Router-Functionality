import React from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg";

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='bg-richblack-900 p-2 flex justify-around text-richblack-100 font-bold 
    items-center w-11/12 max-w-[1160px] mx-auto'>
        
        <Link to="/">
            <img src={logo} alt="logo" width={160} height={32} />
        </Link>

        <nav >
            <ul className="flex gap-10">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex gap-4 items-center'>
            {   !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 rounded-[9px] py-[6px] px-[12px] border border-richblack-700'>Login</button>
                </Link>
            }
            {   !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-richblack-800 rounded-[9px] py-[6px] px-[12px] border border-richblack-700'>Sign Up</button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/">
                    <button 
                        className='bg-richblack-800 rounded-[9px] py-[6px] px-[12px] border border-richblack-700'
                        onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }}>Log Out</button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 rounded-[9px] py-[6px] px-[12px] border border-richblack-700'>Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar