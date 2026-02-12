import React from 'react'
import "./About.css"
function About() {
    return (
        <div className='About'>
            <div className="container">
                <div className="home">
                    <a href="/">Home</a>/
                    <a href="/about">About Us</a>
                </div>
                <div className="about-hero">
                    <div className="about-info">
                        <h1>Our Story</h1>
                        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <img className='about-img' src="/public/imgs/store.svg" alt="" />
                </div>
                <main>
                    <section className='section-1'>
                        <div className="flex">
                            <img src="/public/imgs/icon_shop.svg" alt="" />
                            <h1>10.5k </h1>
                            <p>Sallers active our site</p>

                        </div>
                        <div className="flex">
                            <img src="/public/imgs/icon_shop.svg" alt="" />
                            <h1>10.5k </h1>
                            <p>Sallers active our site</p>

                        </div>
                        <div className="flex">
                            <img src="/public/imgs/icon_shop.svg" alt="" />
                            <h1>10.5k </h1>
                            <p>Sallers active our site</p>

                        </div>
                        <div className="flex">
                            <img src="/public/imgs/icon_shop.svg" alt="" />
                            <h1>10.5k </h1>
                            <p>Sallers active our site</p>

                        </div>
                    </section>
                    <section className='section-2'>
                       <div className="flex">
                        <img className='erkek' src="/public/imgs/erkek.svg" alt="" />
                        <h1>Tom Cruise</h1>
                        <p>Founder & Chairman</p>
                         <div className="icons-dsplay">
                            <img src="/public/imgs/tv.svg" alt="" />
                            <img src="/public/imgs/tb.svg" alt="" />
                            <img src="/public/imgs/tn.svg" alt="" />
                        </div>
                       </div>
                         <div className="flex">
                        <img className='erkek' src="/public/imgs/erkek.svg" alt="" />
                        <h1>Tom Cruise</h1>
                        <p>Founder & Chairman</p>
                       <div className="icons-dsplay">
                            <img src="/public/imgs/tv.svg" alt="" />
                            <img src="/public/imgs/tb.svg" alt="" />
                            <img src="/public/imgs/tn.svg" alt="" />
                        </div>
                       </div>
                         <div className="flex">
                        <img className='erkek' src="/public/imgs/erkek.svg" alt="" />
                        <h1>Tom Cruise</h1>
                        <p>Founder & Chairman</p>
                        <div className="icons-dsplay">
                            <img src="/public/imgs/tv.svg" alt="" />
                            <img src="/public/imgs/tb.svg" alt="" />
                            <img src="/public/imgs/tn.svg" alt="" />
                        </div>
                       </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default About