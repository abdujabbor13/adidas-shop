import React, { useEffect, useState } from 'react'
import Home from './Home/components/Home'
import ShopMen from './ShopMen/components/ShopMen'
import ShopWomen from './ShopWomen/components/ShopWomen'
import ShopKids from './ShopKids/components/ShopKids'
import { Routes, Route } from 'react-router-dom'
import UserBeg from './Home/userBeg/UserBeg'
import ProductList from './pages/ProductList'
import ProductItem from './pages/ProductItem'
import data from './adidasProduct'
const App = () => {
  const [appData, setAppData] = useState([])

  useEffect(() => {
    setAppData(data.listproducts)
  }, [])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shopmen' element={<ShopMen />}/>
        <Route path='/shopwomen' element={<ShopWomen />}/>
        <Route path='/shopkids' element={<ShopKids />}/>
        <Route path='/userbeg' element={<UserBeg />} />
        <Route path='/productlist' element={<ProductList data={appData} />}/>
        <Route path='/productlist/productitem/:id' element={<ProductItem data={appData}/>} />
      </Routes>
    </div>
  )
}

export default App
