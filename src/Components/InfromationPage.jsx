import React, { useContext } from 'react'
import img from '../../src/Assets/Nature.svg'
import MyContext from '../store/MyContext'
import { useNavigate } from 'react-router-dom'

function InfromationPage() {

    const{isDark,setIsDark}=useContext(MyContext)

    const navigate = useNavigate()

    const handleGo = () => {
        navigate('/pending')

    }
  return (
    <>


    <div className='lg:flex gap-10 mt-10 m-5 lg:m-0 ' style={{color:isDark?'white':'black'}}>

 {/* Left Side */}
        <div className='lg:w-1/2 flex flex-col gap-20 lg:ms-44'>
            <div>
            <h2 className='font-bold text-xl'>Welcome to </h2>
            <h1 className='text-red-400 font-bold text-3xl'>IHDC HOMES</h1>
            <br />
            <p className='font-bold text-base'>your request is awaiting approval.</p>
            <br />
           <div className='flex flex-col gap-1'>
           <p className='text-xs'>Upon completion ,the admin will review and approve it</p>
            <p className='text-xs'>This process ensures a meticulous examination,</p>
            <p className='text-xs'>guaranteeing compliance with established criteria before granting approval.</p>
           </div>
            </div>

            <img src={img} className='w-72' alt="" />
           
        </div>

{/* Right Side */}
        <div className='lg:w-1/2 flex flex-col justify-start lg:mr-28 justify-between'>
          {/* top */}
         <div>
         <div className='w-full'>
            <h1 className='text-red-400 font-bold text-3xl'>Tell us</h1>
            <h1 className='font-bold text-3xl'>More</h1>
            <hr className="w-11/12 border-t-2 border-gray-300" />

            
            </div>

            <div className='flex mt-2 gap-2 lg:gap-8 items-center'>
                <p className='text-xs'>About your requirement</p>
                <input 
    type="text" 
    id="first_name"
    className="rounded-md h-6 focus:ring-red-400 focus:border-red-400 block w-1/2 p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
    required 
  />
            </div>
         </div>

         {/* bottom */}
        <div className='w-full'>
        <p className='text-xs my-4'>
            Your Address
         </p>

         <div className='flex flex-col gap-4'>
         <div className='flex w-full'>
        
         <div className='flex flex-col w-full items-start'>
<label htmlFor="first_name" className='text-xs ms-1'>Address line 1</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-5/6  " required />
</div>
<div className='flex flex-col w-full items-start'>
<label htmlFor="first_name" className='text-xs ms-1'>Address line 2</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-5/6  " required />
</div>
  
         </div>
         <div className='flex w-full'>
        
         <div className='flex flex-col w-full items-start'>
<label htmlFor="first_name" className='text-xs ms-1'>State</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-5/6  " required />
</div>
<div className='flex flex-col w-full items-start'>
<label htmlFor="first_name" className='text-xs ms-1'>District</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-5/6  " required />
</div>
  
         </div>
         <div className='flex w-full'>
        
         <div className='flex flex-col w-full items-start'>
<label htmlFor="first_name" className='text-xs ms-1'>Sub-district</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-5/6  " required />
</div>
<div className='flex flex-col w-full items-start'>
<label htmlFor="first_name" className='text-xs ms-1 '>Local-body</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-5/6  " required />
</div>
  
         </div>
         <div className='flex w-full'>
        
         <div className='flex flex-col w-full items-start'>
<label htmlFor="first_name" className='text-xs ms-1'>Village</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-5/6  " required />
</div>
<div className='flex flex-col w-full items-start'>
<label htmlFor="first_name" className='text-xs ms-1'>Landmark</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-5/6  " required />
</div>
  
         </div>
         <div className='flex w-full'>
        
         <div className='flex flex-col w-full items-start'>
<label htmlFor="first_name" className='text-xs ms-1'>Pincode</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-5/6  " required />
</div>
<div className='flex flex-col w-full items-start'>
<button className="shadow-md text-xs h-7 bg-gray-200 mt-4 hover:bg-red-500 text-white font-bold  p-2.5 rounded w-5/6" style={{backgroundColor:'#d15d4c',  boxShadow:'1.5px 3px 0  rgba(0, 0, 0, 1)'}}
onClick={() => handleGo()}
 >Continue</button> 
</div>
  
         </div>
      
         </div>
        </div>

            
        </div>

    </div>





    </>
  )
}

export default InfromationPage