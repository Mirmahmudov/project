import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='Footer'>
   <div className="container">
            <div className="Footer-block">
                <div className="flex">
                    <h1>Exclusive</h1>
                    <h3>Subscribe</h3>
                    <p>Get 10% off your first order</p>
                    <button>  <input type="text" name="" id="" placeholder="Enter your email"  />  <img src="/public/imgs/te.svg" alt="" /> </button>
                </div>
                <div className="flex-bir">
                    <h1>Support</h1>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                 <div className="flex-bir">
                    <h1>Account</h1>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>shop</p>
                </div>
                <div className="flex-bir">
                    <h1>Quick Link</h1>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="flex-iki">
                    <h1>Follow Us</h1>
                    <p>Save $3 with App New User Only</p>
                    <div className="flex-qr">
                        <img src="/public/imgs/qr.svg" alt="" />
                        <div className="flex-google">
                            <img src="/public/imgs/google.svg" alt="" />
                            <img src="/public/imgs/app.svg" alt="" />
                        </div>
                    </div>
                    <div className="flex-iki-1">
                        <img src="/public/imgs/face.svg" alt="" />
                        <img src="/public/imgs/insta.svg" alt="" />
                        <img src="/public/imgs/twiter.svg" alt="" />
                        <img src="/public/imgs/yt.svg" alt="" />
                    </div>
                </div>
                </div>
                <p className='alldata'>Copyright Rimel 2022. All right reserved</p>
   </div>
        </div>
    )
}

export default Footer