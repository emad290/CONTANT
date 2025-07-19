import React from 'react'

export default function Footer() {
  return (
    <div className='w-100   footerColor text-white pt-5 '>
      <div className='row py-4 text-center container mx-auto' >

        <div className='col-md-4'>
            <h1 className='tex-light fw-bolder fs-3'>LOCATION</h1>
            <h2 className='mb-3 fs-5'>2215 John Daniel Drive</h2>
            <p>Clark, MO 65243</p>
        </div>

        <div className='col-md-4 text-center '>
            <h1 className='fs-3'>AROUND THE WEB</h1> 
            <div className=' d-flex justify-content-center gap-4 mt-4'>
               <div className='item'>
                <i class="fa-brands fa-facebook fs-5 text-white"></i>
               </div>
                <div className='item'>
                <i class="fa-brands fa-twitter fs-5 text-white"></i>
               </div>
                <div className='item'>
                <i class="fa-brands fa-linkedin fs-5 text-white"></i>
               </div>
                <div className='item'>
                <i class="fa-solid fa-globe fs-5 text-white "></i>
               </div>
            </div>
            </div>
            <div className='col-md-4 text-center'>
                <h1 className='fs-3'>ABOUT FREELANCER</h1>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
      </div>
      <div className='w-100  bb text-center text-light py-3 mt-3 '>
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>
  )
}
