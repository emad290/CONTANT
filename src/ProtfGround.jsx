import React from 'react'

import pic1 from './../src/assets/poert1.png'
import pic2 from './../src/assets/port2.png'
import pic3 from './../src/assets/port3.png'
export default function ProtfGround({visaple , pichh ,setupdat}) {





if(visaple){

 return (
    <div onClick={setupdat} className='w-100 vh-100 position-absolute  top-0 end-0 start-0 bottom-0  bgg d-flex justify-content-center align-items-center'>
      <img src= {pichh=="pic1"? pic1 :
        pichh=="pic2"?pic2:pic3
      } alt="" className='w-25' />
    </div>
  )
}
else{
    <>
    </>
}
 
}
