import React, { useContext, useState } from 'react'
import MyContext from '../store/MyContext'
import upImg1 from '../Assets/fast-forward (2).svg'
import upImg2 from '../Assets/fast-forward white.svg'
import img1 from '../Assets/20 - Real estate (1).svg'

function PassAndOtp() {


    const{isDark,setIsDark}=useContext(MyContext)

    const [hide1,setHide1] = useState();
    const [hide2,setHide2] = useState();

    const handleHide1 = () => {
    
      setHide1((a) => !a);
    
    }
    const handleHide2 = () => {
    
        setHide2((a) => !a);
      
      }

  return (
    <div>


<div className="flex flex-col lg:flex-row  gap-20 lg:gap-0 lg:items-center  ">
          



          {/* Left side */}
                    {/*  */}
          
          
          
          {/* only for phone view */}
          <div className="flex flex-col items-start lg:items-start lg:ms-16  ms-12 lg:my-0 sm:flex  md:hidden">
          <img src={isDark ? upImg2 : upImg1} style={{ transform: 'rotate(270deg)', marginLeft:'16rem', width:'1rem'}} alt="" />
          <h1 className="text-2xl lg:text-3xl text-red-400 font-bold text-left">Unlock</h1>
          <h1  className="text-2xl lg:text-3xl font-bold" style={{ color: isDark ? 'white' : 'black' }}>Exclusive Benefits</h1>
          <hr className="w-5/6 border-t-2 border-gray-300" />
          </div>
          
          
          <div className="lg:w-1/2 ">
              <img className="w-full lg:w-4/6 lg:ms-40 hidden lg:flex" src={img1} style={{ color: isDark ? 'white' : 'black' }} alt="" />
          </div>
          
          {/* Right side */}
          <div className="lg:w-1/2 flex flex-col w-full justify-between items-center lg:gap-24 lg:items-start" >
    

{/* top */}
{/* only for lg view */}
<div className="flex flex-col items-center lg:items-start  my-10 lg:my-0 pt-6 hidden md:flex" >
<img src={isDark ? upImg2 : upImg1} style={{ transform: 'rotate(270deg)', marginLeft:'21rem' , width:'1rem'}} alt="" />
<h1 className="text-3xl text-red-400 font-bold text-left">Architecture</h1>
<h1  className="text-3xl font-bold" style={{ color: isDark ? 'white' : 'black' }}>is Frozen Music</h1>

<hr className="border-t-2 border-gray-300" style={{width:'22rem'}} />
</div>

{/* bottom */}
<div className="flex flex-col gap-4 lg:gap-5 w-3/4 lg:w-3/4 mt-20 lg:mt-0 items-start">


<div className='relative flex flex-col  lg:mt-0 w-full items-start'>
  <label htmlFor="first_name" className='text-xs ms-1 font-bold'  style={{ color: isDark ? 'white' : 'black' }}>Create password</label>
  <input 
    type={hide1 ? "password" :"text"}
    id="first_name"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder="********" 
    required 
    style={{boxShadow:'1.5px 3px 0  rgba(0, 0, 0, 1)'}}
  />
   <img
    src="https://www.svgrepo.com/show/114674/eye.svg"
    alt=""
    className="w-5 h-5 absolute mt-10 ms-60 lg:ms-80 transform -translate-y-1/2 cursor-pointer"
    onClick={ handleHide1}
  />
</div>


<div className='relative flex flex-col w-full items-start'>
<label htmlFor="first_name" className='text-xs ms-1 font-bold'  style={{ color: isDark ? 'white' : 'black' }}>Confirm password</label>
<input
 type={hide2 ? "password" :"text"} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-3/4 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*********" required
style={{boxShadow:'1.5px 3px 0  rgba(0, 0, 0, 1)'}} 
/>
   <img
    src="https://www.svgrepo.com/show/114674/eye.svg"
    alt=""
    className="w-5 h-5 absolute mt-10 ms-60 lg:ms-80 transform -translate-y-1/2 cursor-pointer"
    onClick={ handleHide2}
  />



</div>
  
<div className='flex flex-col w-full items-start'>
<label htmlFor="first_name" className='text-xs ms-1 font-bold'  style={{ color: isDark ? 'white' : 'black' }}>Enter OTP</label>
<input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required 
style={{boxShadow:'1.5px 3px 0  rgba(0, 0, 0, 1)'}}/>
</div>
  

    <p className='text-xs my-4 lg:my-0'  style={{ color: isDark ? 'white' : 'black' }}>Reset OTP in 60 seconds</p>
  <button className="shadow-md text-xs bg-gray-200 hover:bg-red-500 text-white font-bold py-2 p-2.5 rounded w-full  lg:w-3/4 lg:mt-0" style={{backgroundColor:'#d15d4c',  boxShadow:'1.5px 3px 0  rgba(0, 0, 0, 1)'}}>Create account</button> 

</div>


</div>
          
          </div>



    </div>
  )
}

export default PassAndOtp