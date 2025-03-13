import React, { useEffect, useState } from 'react'
import Header from '../Home/components/Header'
import Footer from '../Home/components/Footer'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const ProductList = ({data}) => {

  const dataInfo = data

  return (
    <div>
      <Header />
        <div className="container">
          <div style={{margin:'110px 0'}} className="link-wrapper">
          <Link to='/'><ArrowLeftOutlined style={{marginRight:'8px', marginBottom:'30px'}} />back</Link>
          <h2 style={{fontSize:'40px', fontWeight:'bold', textTransform:'uppercase', marginBottom:'20px'}}>Men's Shoes & Clothes Sale [1977]</h2>
          <p>The best gear at the lowest prices. Shop the men's clothing and shoes sale at adidas and find what you need to work out, hang out or hit the <br />street in style. Savings are in bloom! Get up to 50% off on end-of-season styles during our Spring Sale. Offer ends 3/20. See offer details.</p>
          </div>
          <div style={{ gap:'10px', flexWrap:'wrap', justifyContent:'center', marginBottom:'50px'}} className="list-wrapper flex-center">
            {dataInfo.map((listItem) => (
              <div key={listItem.id} className="card" style={{padding:'1.5px', width:'20rem'}}>
                <Link to={`productitem/${listItem.id}`} style={{borderBottom:'0px'}}>
                <img style={{ minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} src={listItem.url} alt={listItem.title} loading='lazy' />
                <div style={{ padding: '10px' }} className="card-body">
                  <span style={{fontSize:'20px', fontWeight:'bold', color:'red'}}>{listItem.price}</span>
                  <h3 style={{margin:'10px 0', fontWeight:'400'}}>{listItem.title}</h3>
                  <p style={{color:'grey'}}>{listItem.info}</p>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default ProductList
