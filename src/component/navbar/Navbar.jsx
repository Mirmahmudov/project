import React, { useState } from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [modal, setModal] = useState(false)

  return (
    <div className='Navbar'>
      <div className="container">
        <div className="navbar-links">
          <img src="/public/imgs/Logo.png" alt="" />
        <div className="links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
   
        </div>
        <div className="search_block">
          <div className="search">
            <input type="text" name="" id="" placeholder='What are you looking for?' />
            <img src="/public/imgs/search.svg" alt="" />
          </div>
          <img src="/public/imgs/love.svg" alt="" />
          <img src="/public/imgs/buy.svg" alt="" />
          <img onClick={() => {
            setModal(!modal)
          }} className='insan' src="/public/imgs/insan.svg" alt="" />
        </div>
        </div>
   {
         modal &&  <div className={`modal-cantact ${modal ? "active" : ""}`} onClick={() => setModal(false)}>
          <div className="modal-flex">
            <div className="modal-right">
               <img src="/public/imgs/insan1.svg" alt="" />
            <p>Manage My Account</p>
              </div>
              <div className="modal-right">
               <img src="/public/imgs/MyOrder.svg" alt="" />
            <p>My Order</p>
              </div>
              <div className="modal-right">
               <img src="/public/imgs/MyCancellations.svg" alt="" />
            <p>My Cancellations</p>
              </div>
              <div className="modal-right">
               <img src="/public/imgs/MyReviews.svg" alt="" />
            <p>My Reviews</p>
              </div>

              <div className="modal-right">
               <img src="/public/imgs/Logout.svg" alt="" />
            <p>Logout</p>
              </div>
          </div>
        </div>
        }
        
     </div>
     
      </div>

  
  )
}

export default Navbar