
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import { useState } from 'react'
import Swiper from './swiper/Swiper'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Error from './pages/error/Error'
import About from './pages/about/About'

function App() {
  const[bigData,setbigData]=useState([
    {
      id:1,
      imgs:"/imgs/1.svg",
      title:"HAVIT HV-G92 Gamepad",
      price:120,
      oldprice: 160,
      star:"/imgs/star.svg",
      have:88,
      aksia:-40,
      Eyilshes:"/imgs/Eyilshes.svg",
      love:"/imgs/love.svg",
      button:'Add To Cart'
    },
        {
      id:1,
      imgs:"/imgs/1.svg",
      title:"HAVIT HV-G92 Gamepad",
      price:120,
      oldprice: 160,
      star:"/imgs/star.svg",
      have:88,
      aksia:-40,
      Eyilshes:"/imgs/Eyilshes.svg",
      love:"/imgs/love.svg",
      button:'Add To Cart'
    },
     {
      id:1,
      imgs:"/imgs/1.svg",
      title:"HAVIT HV-G92 Gamepad",
      price:120,
      oldprice: 160,
      star:"/imgs/star.svg",
      have:88,
      aksia:-40,
      Eyilshes:"/imgs/Eyilshes.svg",
      love:"/imgs/love.svg",
      button:'Add To Cart'
    },
     {
      id:1,
      imgs:"/imgs/1.svg",
      title:"HAVIT HV-G92 Gamepad",
      price:120,
      oldprice: 160,
      star:"/imgs/star.svg",
      have:88,
      aksia:-40,
      Eyilshes:"/imgs/Eyilshes.svg",
      love:"/imgs/love.svg",
      button:'Add To Cart'
    },
  ])
  const[catigore,setcatigore]=useState([
    {
      id:1,
      imgs:"/imgs/fon.svg",
      imgs1:"/imgs/fon1.svg",
      title:"Phones"
    },
        {
      id:2,
      imgs:"/imgs/fon.svg",
      imgs1:"/imgs/fon1.svg",
      title:"Phones"
    },
        {
      id:3,
      imgs:"/imgs/fon.svg",
      imgs1:"/imgs/fon1.svg",
      title:"Phones"
    },
        {
      id:4,
      imgs:"/imgs/fon.svg",
      imgs1:"/imgs/fon1.svg",
      title:"Phones"
    },
        {
      id:5,
      imgs:"/imgs/fon.svg",
      imgs1:"/imgs/fon1.svg",
      title:"Phones"
    },
        {
      id:6,
      imgs:"/imgs/fon.svg",
      imgs1:"/imgs/fon1.svg",
      title:"Phones"
    },
  ])
  return (
    <>
    <BrowserRouter>
   <Navbar/>
<Routes>
  <Route path='/' element={<Home bigData={bigData} catigore={catigore} />} />
  <Route path='/swiper' element={<Swiper bigData={bigData} />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/login' element={<Login />} />
  <Route path='*' element={<Error />} />
  <Route path='/about' element={<About />} />
</Routes>
<Footer/>

    </BrowserRouter>
    </>
  )
}

export default App
