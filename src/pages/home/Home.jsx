import React from 'react'
import "./Home.css"
import Swiper from '../../swiper/Swiper'


function Home({ bigData,catigore }) {
  return (
    <div className='Home'>
      <div className="container">
    <div className="block-iki">
        <div className="swiper-bir">
          <p>Woman’s Fashion</p>
          <p>Men’s Fashion</p>
          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby’s & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
        </div>
        <Swiper/>
    </div>
        <div className="Home-block">
         <div className="block-dsplay">
           <div className="today">
            <div className="today-one">
              <p></p>
              <h2>Today’s</h2>
            </div>
            <h1>Flash Sales</h1>
          </div>
          <div className="yeard">
            <div className="days">
              <p>Days</p>
              <h3>03</h3>
            </div>
            <h5>:</h5>
            <div className="Hours">
              <p>Hours</p>
              <h3>23</h3>
            </div>
            <h5>:</h5>
            <div className="Minutes">
              <p>Minutes</p>
              <h3>19</h3>
            </div>
            <h5>:</h5>
            <div className="Seconds">
              <p>Seconds</p>
              <h3>56</h3>
            </div>
          </div>
         </div>
          <div className="exsport">
            <img className='left' src="/public/imgs/left.svg" alt="" />
            <img className='right' src="/public/imgs/right.svg" alt="" />
          </div>
        </div>
        <div className="dsplay-flex">
          {
            bigData?.map((item) => {
              return <div className="flex">
                <img className='imgs' src={item?.imgs} alt="" />
                <div className='pazition-2'>
                  <h2>{item?.button}</h2>
                </div>
                <h1>{item?.title}</h1>
                <div className="pricee">
                  <p>${item?.price}</p>
                  <del>${item?.oldprice}</del>
                </div>
                <div className="star-block">
                  <div className="star-img">
                    <img src={item.star} alt="" />
                    <img src={item?.star} alt="" />
                    <img src={item?.star} alt="" />
                    <img src={item?.star} alt="" />
                    <img src={item?.star} alt="" />
                  </div>
                  <h4>({item?.have})</h4>
                </div>
                <div className="pazition">
                  <h2>{item?.aksia}%</h2>
                </div>

                <div className="pazition-1">
                  <img src={item?.love} alt="" />
                  <img src={item?.Eyilshes} alt="" />
                </div>

              </div>

            })
          }
        </div>
       <div className="button-one">
         <button className='button-1'>View All Products</button>
       </div>
       <div className="Categories">
         <div className="today">
            <div className="today-one">
              <p></p>
              <h2>Categories</h2>
            </div>
            <h1>Browse By Category</h1>
          </div>
          <div className="exsport">
            <img className='left' src="/public/imgs/left.svg" alt="" />
            <img className='right' src="/public/imgs/right.svg" alt="" />
          </div>
          
      </div>
      <div className="dsplay">
            {
              catigore?.map((item)=>{
                return <div className="flex">
            <div className="imgs-block">
                    <img className='imgs' src={item?.imgs} alt="" />
                  <img className='imgs1' src={item?.imgs1} alt="" />
            </div>
                  <h1>{item?.title}</h1>
                </div>
              })
            }
          </div>
          <div className="Products-one">
             <div className="Categories-two">
         <div className="today">
            <div className="today-one">
              <p></p>
              <h2>This Month</h2>
            </div>
            <h1>Best Selling Products</h1>
          </div>
          <button>buy</button>
          
      </div>
      <div className="Products-dsplay">
         {
            bigData?.map((item) => {
              return <div className="flex">
                <img className='imgs' src={item?.imgs} alt="" />
                <div className='pazition-2'>
                  <h2>{item?.button}</h2>
                </div>
                <h1>{item?.title}</h1>
                <div className="pricee">
                  <p>${item?.price}</p>
                  <del>${item?.oldprice}</del>
                </div>
                <div className="star-block">
                  <div className="star-img">
                    <img src={item.star} alt="" />
                    <img src={item?.star} alt="" />
                    <img src={item?.star} alt="" />
                    <img src={item?.star} alt="" />
                    <img src={item?.star} alt="" />
                  </div>
                  <h4>({item?.have})</h4>
                </div>

                <div className="pazition-1">
                  <img src={item?.love} alt="" />
                  <img src={item?.Eyilshes} alt="" />
                </div>

              </div>

            })
          }
      </div>
          </div>
          <div className="arrival">
       <div className="grid-container">
        <div className="grid-item item-1">
         <img src="/public/imgs/12.svg" alt="" />
        </div>
        <div className="grid-item item-2">
         <img src="/public/imgs/111.svg" alt="" />
        </div>
        <div className="grid-item item-3">
         <img src="/public/imgs/2.svg" alt="" />
        </div>
        <div className="grid-item item-4">
         <img src="/public/imgs/3.svg" alt="" />
        </div>
       </div>
          </div>
          <div className="araba">
            <div className="flex">
              <div className="flex-imgs">
                <img src="/public/imgs/araba.svg" alt="" />
              </div>
              <h2>FREE AND FAST DELIVERY</h2>
              <p>Free delivery for all orders over $140</p>
            </div>
                          <div className="flex">
             <div className="flex-imgs">
               <img src="/public/imgs/kilalchin.svg" alt="" />
             </div>
              <h2>FREE AND FAST DELIVERY</h2>
              <p>Free delivery for all orders over $140</p>
            </div>
             <div className="flex">
             <div className="flex-imgs">
               <img src="/public/imgs/makul.svg" alt="" />
             </div>
              <h2>FREE AND FAST DELIVERY</h2>
              <p>Free delivery for all orders over $140</p>
            </div>
          </div>
          
      </div>
    </div>
  )

}

export default Home

