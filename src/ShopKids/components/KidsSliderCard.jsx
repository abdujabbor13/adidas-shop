import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import data from "../../adidasProduct";

const KidsSliderCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [kidsSlider, setKidsSlider] = useState([])

  useEffect(() => {
    setKidsSlider(data.kidsSlider)
  }, [])

  return (
    <div className="container">
      <div style={{marginBottom:'50px'}} className="slider-wrapper">
        <div className="slider-container">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4} // Bir vaqtning o'zida 4 ta card ko‘rinadi
            navigation
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {kidsSlider.map((product) => (
              <SwiperSlide style={{ transition: "border-bottom 0.3s ease-in-out" }} key={product.id}>
                <div
                  className="card card-swip"
                >
                  <img style={{ minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} src={product.url} alt={product.title} />
                  <div style={{ padding: '0 15px', height: '75px' }} className="card-info">
                    <span className="price">{product.price}</span>
                    <h3>{product.title}</h3>
                    <span className="info">{product.info}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default KidsSliderCard
