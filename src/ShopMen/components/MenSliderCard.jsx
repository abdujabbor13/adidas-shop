import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import data  from "../../adidasProduct";


const MySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menSlider, setMenSlider] = useState([])

  useEffect(() => {
    setMenSlider(data.menSlider)
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
        {menSlider.map((product) => (
          <SwiperSlide style={{transition: "border-bottom 0.3s ease-in-out"}} key={product.id}>
            <div
              className="card card-swip"
            >
              <img style={{minWidth:'100%', maxWidth:'100%', minHeight:'100%',maxHeight:'100%'}}  src={product.url} alt={product.title}  loading="lazy"/>
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

const SliderCard = () => {
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
        <h2 style={{ textTransform: 'uppercase', fontSize: '25px', fontWeight: 'bold', marginBottom: '25px' }}>Men's Shoes & Clothing</h2>
        <p style={{ marginBottom: '30px', lineHeight:'1.8' }}>
        As a creator, you look for ways to excel and express yourself when and where <br /> you can, from reaching for that last rep to evolving your streetwear style. Log<br /> miles or tear down the baseline in men's shoes with responsive cushioning.<br /> Rep an athletic style off the field in lifestyle apparel born of sport heritage.<br /> From athletes to streetwear enthusiasts, adidas men’s clothing and shoes exist<br /> to let you go harder, dig deeper, and get the most out of yourself, from the pitch<br /> to the street to the road less traveled.
        </p>
      </div>
    </>
  )
}

export default SliderCard
