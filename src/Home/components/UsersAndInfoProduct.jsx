import React, { use, useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import data from '../../adidasProduct';


const UsersAndInfoProduct = () => {

  const [info, setInfo] = useState([])

  useEffect(() => {
    setInfo(data.userinfo)
  },[])

  return (
    <div className='container'>
      <h2 style={{marginBottom:'50px', fontSize:'30px', fontWeight:'bold'}}>Popular right now</h2>
        <div style={{marginBottom:'50px'}} className="info-wrapper">
          <div className="info">
            <ul className='flex-center' style={{justifyContent:'space-between', marginBottom:'50px'}} >
              <li>
              <a className='user-info__url' href="#">ultraboots 5x</a>
              </li>
              <li>
              <a className='user-info__url' href="#">samba</a>
              </li>
              <li>
              <a className='user-info__url' href="#">campus</a>
              </li>
            </ul>

            <ul className='flex-center' style={{justifyContent:'space-between'}} >
              <li>
              <a className='user-info__url' href="#">gozella</a>
              </li>
              <li>
              <a className='user-info__url' href="#">soccer</a>
              </li>
              <li>
              <a className='user-info__url' href="#">spezial</a>
              </li>
            </ul>
          </div>
        </div>


        <div  style={{marginBottom:'100px'}} className="infoCardWrapper">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          {info.map((info) => (
        <SwiperSlide key={info.id}>
          <div>
            <img style={{minWidth:'100%', maxWidth:'100%', minHeight:'100%',maxHeight:'100%'}} src={info.url} alt={info.title} />
            <div style={{padding:'10px'}} className="card-body">
            <h3 style={{fontSize:'17px', fontWeight:'600', marginBottom:'20px'}}>{info.title}</h3>
            <p style={{fontSize:'15px', fontWeight:'400'}}>{info.info}</p>
            </div>
          </div>
        </SwiperSlide>
          ))}
      </Swiper>
        </div>
    </div>
  )
}

export default UsersAndInfoProduct
