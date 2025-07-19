import React from 'react'
import pic from './../src/assets/avataaars.svg'

export default function Home() {
  return (
    <div className='w-100 homeColor vh-100'>
 <div className='d-flex justify-content-center align-items-center container w-50'>
    <div className='text-center'>
<img src={pic} alt="" className='w-75 mt-5' />

        <h1 className='fs-1 fw-bolder text-light mt-3'>start Framework</h1>
        <i className="fa-solid fa-star text-light"></i> <i className="fa-solid fa-star text-light"></i> <i className="fa-solid fa-star text-light"></i> <i className="fa-solid fa-star text-light"></i>
   <p className='mt-3 text-light'>Graphic Artist - Web Designer - Illustrator</p>
  
    </div>
 </div>
    </div>
  )
}
