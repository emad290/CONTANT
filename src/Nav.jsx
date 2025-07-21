import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Nav() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navColor sticky-top">
  <div className="container w-75">
    <Link className="navbar-brand fs-2 fw-bolder  text-white" to="/">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link  fw-bold fs-5 me-3 text-white " aria-current="page" to="about">about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold fs-5 me-3 text-white" to="protfilo">portfolio</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link fw-bold fs-5 me-3 text-white"  to="contact">contact</NavLink>
        </li>
   
      </ul>
     
    </div>
  </div>
</nav>

    </div>
  )
}
