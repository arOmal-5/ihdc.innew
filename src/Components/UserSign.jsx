import React, { useContext } from 'react'
import img1 from '../Assets/20 - Real estate (1).svg'
import upImg from '../Assets/fast-forward (1).svg'
import MyContext from '../store/MyContext';
import upImg1 from '../Assets/fast-forward (2).svg'
import upImg2 from '../Assets/fast-forward white.svg'


function UserSign() {


  const{isDark,setIsDark}=useContext(MyContext)



  return (
    <div>

<div className="flex flex-col lg:flex-row  lg:gap-0 lg:items-center  ">
          



          {/* Left side */}
                    {/*  */}
          
          
          
          {/* only for phone view */}
          <div className="flex flex-col items-start lg:items-start lg:ms-16  ms-12 lg:my-0 sm:flex  md:hidden">
          <img src={isDark ? upImg2 : upImg1} style={{ transform: 'rotate(270deg)', marginLeft:'16rem', width:'1rem'}} alt="" />
          <h1 className="text-2xl lg:text-3xl text-slate-400 font-bold text-left">Welcome</h1>
          <h1  className="text-2xl lg:text-3xl font-bold" style={{ color: isDark ? 'white' : 'black' }}>Back</h1>
          <hr className="w-5/6 border-t-2 border-gray-300" />
          </div>
          
          
          <div className="lg:w-1/2 ">
              <img className="w-full lg:w-4/6 lg:ms-40 hidden lg:flex" src={img1} style={{ color: isDark ? 'white' : 'black' }} alt="" />
          </div>
          
          {/* Right side */}
          <div className="lg:w-1/2 flex flex-col w-full justify-between items-center lg:items-start" >
    

{/* top */}

<div className="flex flex-col items-center lg:items-start  lg:my-0 pt-6 hidden md:flex" >
<img src={isDark ? upImg2 : upImg1} style={{ transform: 'rotate(270deg)', marginLeft:'21rem' , width:'1rem'}} alt="" />
<h1 className="text-3xl text-slate-400 font-bold text-left">Welcome</h1>
<h1  className="text-3xl font-bold" style={{ color: isDark ? 'white' : 'black' }} >Back</h1>

<hr className="border-t-2 border-gray-300" style={{width:'22rem'}} />
</div>

{/* bottom */}
<div className="flex flex-col gap-3 lg:gap-5 w-3/4 lg:w-3/4 mt-64 lg:mt-0 items-start">

<h1 className='lg:text-xl font-bold lg:my-6'  style={{ color: isDark ? 'white' : 'black' }}>Sign in</h1>
<a href="" className='text-xs '  style={{ color: isDark ? 'white' : 'black' }}>Are you a new member ? Create an account !</a>
<div className='flex flex-col w-full items-start'>
  <label htmlFor="first_name" className='text-xs ms-1 font-bold'  style={{ color: isDark ? 'white' : 'black' }}>Mobile or Email</label>
  <input 
    type="text" 
    id="first_name"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder="Christopher@gmail.com" 
    required 
    style={{boxShadow:'1.5px 3px 0  rgba(0, 0, 0, 1)',marginTop:'13px'}}
  />
</div>



  
<div className='flex flex-col w-full items-start'>
<label htmlFor="first_name" className='text-xs ms-1 font-bold'  style={{ color: isDark ? 'white' : 'black' }}>Password</label>
<input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" required
style={{boxShadow:'1.5px 3px 0  rgba(0, 0, 0, 1)',marginTop:'13px'}} />
</div>
  

    <p className='text-xs lg:mt-0'  style={{ color: isDark ? 'white' : 'black' }}>Use mobile verification code (OTP) to sign in</p>
  <button className="shadow-md text-xs bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 p-2.5 rounded w-full  lg:w-3/4" style={{boxShadow:'1.5px 3px 0  rgba(0, 0, 0, 1)',marginTop:'13px'}}>Sign in</button> 

</div>


</div>

          
          </div>






    </div>
  )
}

export default UserSign