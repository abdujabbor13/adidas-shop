import React from 'react'
import Header from '../../Home/components/Header'
import Footer from '../../Home/components/Footer'
import WomenShoppingMain from './WomenShoppingMain'
import WomenImgCard from './WomenImgCard'
import WomenMainCard from '../components/WomenMainCard'
import WomenSlider from './WomenSlider'
import WomenLinkAndCard from './WomenLinkAndCard'

const ShopWomen = () => {
  return (
    <div>
      <Header />
      <WomenShoppingMain />
      <WomenImgCard />
      <WomenMainCard />
      <WomenSlider />
      <WomenLinkAndCard />
      <Footer />
    </div>
  )
}

export default ShopWomen
