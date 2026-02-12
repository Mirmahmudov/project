import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className='Login'>
<div className="container">
  <img className='create1' src="/public/imgs/create1.svg" alt="" />
    <div className="Login-box">
        <h1>Log in to Exclusive</h1>
        <p>Enter your details below</p>
        <input type="text" placeholder='Email or Phone Number' />
        <input type="password" placeholder='Password' />
        <div className="login-in-block">
          <button className='account'>Log in</button>
        <p className=''>Forget Password?</p>
        </div>
    </div>
</div>
    </div>
  )
}

export default Login