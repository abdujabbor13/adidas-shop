import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import data from "../../adidasProduct";
import { Link } from "react-router-dom";


const MySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidercard, setSlidercard] = useState([])
  useEffect(() => {
    setSlidercard(data.sliderProducts)
  }, [])


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
        {slidercard.map((product) => (
          <SwiperSlide style={{ transition: "border-bottom 0.3s ease-in-out" }} key={product.id}>
            <div
              className="card card-swip"
            >
              <Link to='/productlist'>
                <img style={{ minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} src={product.url} alt={product.title} loading="lazy"/>
                <div style={{ padding: '0 15px', height: '75px' }} className="card-info">
                  <span className="price">{product.price}</span>
                  <h3>{product.title}</h3>
                  <span className="info">{product.info}</span>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const SliderCard = () => {
  const [mixCards, setMixCards] = useState([])
  useEffect(() => {
    setMixCards(data.mixCards)
  }, [])

  return (
    <div className='container'>
      <div className="sliderCardWrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }} className="sliderButtons">
          <div style={{ display: 'flex', gap: '10px' }}>
            <button>New Arrivals</button>
            <button>Best Sellers</button>
            <button>New to Sale</button>
          </div>
          <a style={{ borderBottom: '3px solid #333', textTransform: 'uppercase' }} href="#">Wiew All</a>
        </div>
        <div style={{ marginBottom: '50px' }} className="slider-wrapper">
          <MySlider />
        </div>

        <div style={{ gap: '10px', marginBottom: '50px' }} className="mixCard flex-center">
          {mixCards.map((card) => (
            <div key={card.id} style={{ padding: '1.5px' }} className="card">
                <Link to='/productlist' style={{borderBottom:'0px'}}>
                <img style={{ minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} src={card.url} alt={card.title} />
                <div style={{ padding: '10px' }} className="card-body">
                  <h3 style={{ margin: '10px 0', fontSize: '20px', fontWeight: '500' }}>{card.title}</h3>
                  <p style={{ marginBottom: '20px', fontSize: '15px', fontWeight: '400' }}>{card.info}</p>
                  <a style={{ borderBottom: '3px solid #333', textTransform: 'uppercase' }} href="#">Shop now</a>
                </div>
            </Link>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SliderCard
