import React, { useState } from 'react'
import pic1 from './../src/assets/poert1.png'
import pic2 from './../src/assets/port2.png'
import pic3 from './../src/assets/port3.png'
import ProtfGround from './ProtfGround'
export default function Protfilo() {
let[vas,setvas]=useState(false)
let[pichh,setpichh]=useState("")

function update(e){
    setpichh(e.target.id)

    setvas(true)
}

function setupdat(){
    if(vas==true){
        setvas(false)
    }
    else{
        return
    }
}


  return (
    <>
   
    <div onClick={()=>setupdat()} className='w-100  py-5 portfolioColor d-flex justify-content-center align-items-center'>
    <div className='container text-center text-light'> 
        <h1 className='fs-1 fw-bolder'>
            portfolio component
        </h1>
     <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i>
     
     
     
     <div className='row py-5 gy-5 '>


        <div className='col-md-4 position-relative testt ' >

            <div className="test">
                <img src={pic1} alt="" className='w-100' />
            </div>

            <div onClick={(e)=>update(e)} id='pic1'  className=' testColor position-absolute top-0 end-0 bottom-0 start-0  d-flex justify-content-center align-items-center '>
                <i className="fa-solid fa-plus fs-1 text-white" ></i>
                </div>
        </div>
    
    <div className='col-md-4 position-relative '>

            <div className="test">
                <img src={pic2} alt="" className='w-100' />
            </div>

          <div   onClick={(e)=>update(e)} id='pic2'  className=' testColor position-absolute top-0 end-0 bottom-0 start-0  d-flex justify-content-center align-items-center '>
                <i className="fa-solid fa-plus fs-1 text-white"></i>
                </div>


        </div>


        <div className='col-md-4 position-relative'>
            <div className="test">
                <img src={pic3} alt="" className='w-100' />
            </div>
<div  onClick={(e)=>update(e)} id='pic3' className=' testColor position-absolute top-0 end-0 bottom-0 start-0  d-flex justify-content-center align-items-center '>
                <i className="fa-solid fa-plus fs-1 text-white"></i>
                </div>

        </div>
    
    
<div className='col-md-4 position-relative'>
            <div className="test">
                <img src={pic1} alt="" className='w-100' />
            </div>
<div  onClick={(e)=>update(e)} id='pic1'  className=' testColor position-absolute top-0 end-0 bottom-0 start-0  d-flex justify-content-center align-items-center '>
                <i className="fa-solid fa-plus fs-1 text-white"></i>
                </div>

        </div>

        <div className='col-md-4 position-relative'>
            <div className="test">
                <img src={pic2} alt="" className='w-100' />
            </div>
<div   onClick={(e)=>update(e)} id='pic2' className=' testColor position-absolute top-0 end-0 bottom-0 start-0  d-flex justify-content-center align-items-center '>
                <i className="fa-solid fa-plus fs-1 text-white"></i>
                </div>

        </div>


        <div className='col-md-4 position-relative'>
            <div className="test">
                <img src={pic3} alt="" className='w-100' />
            </div>
<div   onClick={(e)=>update(e)} id='pic3' className=' testColor position-absolute top-0 end-0 bottom-0 start-0  d-flex justify-content-center align-items-center '>
                <i className="fa-solid fa-plus fs-1 text-white"></i>
                </div>
            
        </div>





    
    
     </div>
    
    
    </div>
    </div>

    <ProtfGround visaple={vas} pichh={pichh} setupdat={setupdat}/>
     </>
  )
}


