
import React from 'react'
import Header from '../../Home/components/Header'
import Footer from '../../Home/components/Footer'
import KidsShoppingMain from './KidsShoppingMain'
import KidsMainCard from './KidsMainCard'
import KidsImgCard from './KidsImgCard'
import KidsSliderCard from './KidsSliderCard'
import KidsLinkAndText from './KidsLinkAndText'

const ShopKids = () => {
  return (
    <div>
      <Header />
      <KidsShoppingMain />
      <KidsMainCard />
      <KidsImgCard />
      <KidsSliderCard />
      <KidsLinkAndText />
      <Footer />
    </div>
  )
}

export default ShopKids
