import React from 'react'
import Header from '../../Home/components/Header'
import Footer from '../../Home/components/Footer'
import MenShoppingMain from './MenShoppingMain'
import ImgCard from './ImgCard'
import MainCard from './MainCard'
import MenSliderCard from './MenSliderCard'
import LinkAndCard from './LinkAndCard'

const ShopMen = () => {
  return (
    <div>
      <Header />
      <MenShoppingMain />
      <ImgCard />
      <MainCard />
      <MenSliderCard />
      <LinkAndCard />
      <Footer />
    </div>
  )
}

export default ShopMen
