import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import data  from "../../adidasProduct";


const MySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [womenSlider, setWomenSlider] = useState([])

  useEffect(() => {
    setWomenSlider(data.womenSlider)
  },[])

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4} // Bir vaqtning o'zida 4 ta card ko‘rinadi
        navigation
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {womenSlider.map((product) => (
          <SwiperSlide style={{transition: "border-bottom 0.3s ease-in-out"}} key={product.id}>
            <div
              className="card card-swip"
            >
              <img style={{minWidth:'100%', maxWidth:'100%', minHeight:'100%',maxHeight:'100%'}}  src={product.url} alt={product.title} />
              <div style={{padding:'0 15px', height:'75px'}} className="card-info">
              <span className="price">{product.price}</span>
              <h3>{product.title}</h3>
              <span className="info">{product.info}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const WomenSlider = () => {
  return (
    <>
      <div className='container'>
      <div className="sliderCardWrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:'20px' }} className="sliderButtons">
          <h1 style={{textTransform:'uppercase'}}>TOP PICKS FOR YOU</h1>
          <a style={{ borderBottom: '3px solid #333', textTransform: 'uppercase' }} href="#">Wiew All</a>
        </div>
        <div style={{marginBottom:'50px'}} className="slider-wrapper">
        <MySlider />
        </div>
      </div>
    </div>
    <div style={{ width: '1518px', margin: 'auto', padding: '80px 0', textAlign: 'center' }} className="tetx-section">
        <h2 style={{ textTransform: 'uppercase', fontSize: '25px', fontWeight: 'bold', marginBottom: '25px' }}>Women's Clothing & Shoes</h2>
        <p style={{ marginBottom: '30px', lineHeight:'1.8' }}>
        In sport and in life, creators aren’t content on the sidelines. adidas women’s <br /> shoes and apparel are made for those who understand that rules can be<br /> negotiated; expectations, evolved. Reach for a new personal best in apparel<br /> made of specialized performance fabrics. Accentuate your personal style in<br /> sport-inspired sneakers for your day-to-day. Whether sport is your life or<br /> you’re an athleisure fashionista, women’s clothing and footwear from adidas<br /> exist to help you redefine what’s possible.
        </p>
      </div>
    </>
  )
}

export default WomenSlider
