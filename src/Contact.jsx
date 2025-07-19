import React from 'react'

export default function contact() {
  return (
    <div className='w-100 vh-100 p-5'>
     <div className='d-flex justify-content-center align-items-center text-center'>
        <div className='concolor'>
<h1 className='fs-1 fw-bolder'>conatct section</h1>
<i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i>
        </div>
        

     </div>



<div classname="w-50 container mx-auto mt-5">

 <input className="form-control form-control-lg w-50 mt-5 mx-auto border-0 border-bottom border-3" type="text" placeholder="UserName" aria-label=".form-control-lg example" />
 <input className="form-control form-control-lg w-50 mt-5 mx-auto border-0 border-bottom border-3" type="text" placeholder="UserAge" aria-label=".form-control-lg example" />
 <input className="form-control form-control-lg w-50 mt-5 mx-auto border-0 border-bottom border-3" type="text" placeholder="UserEmail" aria-label=".form-control-lg example" />
 <input className="form-control form-control-lg w-50 mt-5 mx-auto border-0 border-bottom border-3" type="password" placeholder="UserPassward" aria-label=".form-control-lg example" />


<button className='btn btn-danger  border-0 mt-5 mx-auto'>send message</button>

</div>


    </div>
  )
}
