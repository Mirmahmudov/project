import React from 'react'
import "./Signup.css"

function Signup() {
  return (
    <div className='Signup'>
<div className="container">
  <img className='create1' src="/public/imgs/create1.svg" alt="" />
    <div className="Signup-box">
        <h1>Create an account</h1>
        <p>Enter your details below</p>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email or Phone Number' />
        <input type="password" placeholder='Password' />
        <button className='account'>Create Account</button>
        <button className='siginupbutton'> <img src="/public/imgs/google1.svg" alt="" />Sign up with Google</button>
        <p className='loginup'>Already have account? <span> <a href="/login">Log in</a> </span></p>
    </div>
</div>
    </div>
  )
}

export default Signup