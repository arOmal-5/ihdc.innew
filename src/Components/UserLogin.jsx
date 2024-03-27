import React, { useState, createContext, useContext } from "react";
import img1 from '../Assets/20 - Real estate (1).svg'
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import upImg1 from '../Assets/fast-forward (2).svg'
import upImg2 from '../Assets/fast-forward white.svg'
import MyContext from "../store/MyContext";

function UserLogin() {

 
  

  const{isDark,setIsDark}=useContext(MyContext)





  const navigate = useNavigate()

  const handleSignUp = () => {
    navigate('/signup')
  }

  const handleSignIn = () => {
    navigate('/signin')
  }

 console.log(isDark);
  return (
    <div>

        {/* first Row */}

        <div className="flex flex-col lg:flex-row  gap-20 lg:gap-0 lg:items-center  ">
          



{/* Left side */}
          {/*  */}



{/* only for phone view */}
<div className="flex flex-col items-start lg:items-start lg:ms-16  ms-12 lg:my-0 sm:flex  md:hidden">
<img src={isDark ? upImg2 : upImg1} style={{ transform: 'rotate(270deg)', marginLeft:'16rem', width:'1rem'}} alt="" />
<h1 className="text-2xl lg:text-3xl text-red-400 font-bold text-left">Build</h1>
<h1  className="text-2xl lg:text-3xl font-bold" style={{ color: isDark ? 'white' : 'black' }}>your dream home here</h1>
<hr className="w-5/6 border-t-2 border-gray-300" />
</div>


<div className="lg:w-1/2 ">
    <img className="w-3/4 ms-12 mt-14 lg:mt-0 lg:w-4/6 lg:ms-40" src={img1} alt="" />
</div>

{/* Right side */}
<div className="lg:w-1/2 flex flex-col justify-between my-12 lg:my-0 gap-72 " >


{/* top */}
{/* only for lg view */}
<div className="flex flex-col items-center lg:items-start  my-10 lg:my-0 pt-6 hidden md:flex">
<img src={isDark ? upImg2 : upImg1} style={{ transform: 'rotate(270deg)', marginLeft:'21rem', width:'1rem' ,color:'red'}} alt="" />
<div>
<h1 className="text-3xl text-red-400 font-bold text-left">Build</h1>
<h1  className="text-3xl font-bold" style={{ color: isDark ? 'white' : 'black' }}>Your Dream Home Here</h1>
</div>
<hr className="border-t-2 border-gray-300" style={{width:'22rem'}} />
</div>

{/* bottom */}
<div className="flex flex-col gap-1 items-center lg:items-start mt-4 lg:my-0 lg:mt-3 w-full lg:w-3/4">
<button className="shadow-md bg-gray-200 hover:bg-red-500 text-white font-bold py-2 px-4 text-xs rounded w-3/4  lg:w-3/4" style={{backgroundColor:'#d15d4c',  boxShadow:'1.5px 3px 0  rgba(0, 0, 0, 1)'}} onClick={() => handleSignUp()}>Create new account</button>
<span className="w-3/4 flex flex-row items-center">
  <hr className="w-full border-t-2 border-gray-300" />
  <p className="mx-2" style={{ color: isDark ? 'white' : 'black' }} >or</p>
  <hr className="w-full border-t-2 border-gray-300" />
  </span>

<button type="button" class="shadow-md bg-slate-400 hover:bg-slate-500 text-white text-xs font-bold py-2 px-4 rounded w-3/4  lg:w-3/4" style={{boxShadow:'1.5px 3px 0  rgba(0, 0, 0, 1)'}} onClick={() => handleSignIn()}>Sign in</button>

</div>


</div>

</div>

        
    </div>
  );
}

export default UserLogin;
