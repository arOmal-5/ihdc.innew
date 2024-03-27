import React, { useContext } from 'react'
import img1 from '../../src/Assets/Rectangle.svg'
import img2 from '../../src/Assets/Icon-credit-card (1).svg'
import img3 from '../../src/Assets/Icon-support.svg'
import img4 from '../../src/Assets/ihdcscrnshot.png'
import MyContext from '../store/MyContext'

function PendingPage() {

    const{isDark,setIsDark}=useContext(MyContext)
  return (
    <div className='flex lg:flex-col justify-center lg:w-full mx-5 lg:mx-0' style={{color:isDark?'white':'black'}}>

  <div className='flex flex-col w-full items-center justify- gap-5 lg:gap-14'>
  <div className='border rounded-md flex flex-col lg:gap-20 justify-center items-center
     border-red-500 lg:w-1/2 p-4'>
      <div>
      <div className='flex my-2 w-full'>
        <img src={img1} alt="" className='w-20' />
       <div className='flex-flex-row justify-start'>
       <h1 className='text-3xl font-bold'>Your</h1>
        <h1 className='text-3xl font-bold text-red-500'>Submission was successful !</h1>
       </div>
       </div>
        <hr className="w-full border-t-2 border-gray-300" />
        <div className='flex gap-20 my-4'>
            <div className='lg:flex items-center gap-2'>
            <img src={img2} alt="" className='w-10' />
            <p className='font-bold'>waiting for approval</p>
            </div>
            <div className='lg:flex items-center gap-2'>
            <img src={img3} alt="" className='w-10' />
            <p className='font-bold'>waiting for approval</p>
            </div>

        </div>
      </div>

     
    </div>

    <div className='lg:flex lg:w-1/2 gap-5 lg:gap-0 lg:justify-between'>
        <a href="https://en.ihdc.in/"><img src={img4} alt="" className=' w-full w-72 h-40' style={{boxShadow:'1.5px 3px 0  rgba(200, 0, 0, 2)'}} /></a>
        <iframe className='mt-5 lg:mt-0' style={{boxShadow:'1.5px 3px 0  rgba(200, 0, 0, 2)'}} width="290" height="162" src="https://www.youtube.com/embed/aQTvacx7v0M?si=LrWHCO0Cn5mgoNkZ&amp;start=46" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
  </div>

    </div>
  )
}

export default PendingPage