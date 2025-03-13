import React from 'react'
import { useState, useEffect } from 'react'
import data from '../../adidasProduct'
import { Link } from 'react-router-dom'

const StileCard = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(data.menProducts)
  }, [])
  return (
    <>
      <Link to='productlist'>
      <div style={{ marginBottom: '50px' }} className='container'>
        <h2 style={{ margin: '0', marginBottom: '20px', textTransform: 'uppercase' }}>Still Interested?</h2>
        <div style={{ gap: '10px' }} className="cardStyleWrapper flex-center">
          {products.map((product) => (
            <div key={product.id} style={{ width: '18rem' }} className="card">
              <img style={{ minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '1005px' }} src={product.url} alt={product.title} />
              <div style={{ padding: '6px' }} className="cardBody">
                <span className='cardPrice'>{product.price}</span>
                <h3 style={{ margin: '0m', marginBottom: '6px' }} className='cardTitle'>{product.title}</h3>
                <span className='cardInfo'>{product.info}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Link>
    </>
  )
}

export default StileCard
