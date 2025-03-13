import React from 'react'
import StileCard from '../../Home/components/StileCard'

const WomenLinkAndCard = () => {

  return (
    <div>
      <div className='container'>
        <div style={{ marginBottom: '90px' }}>
          <StileCard />
        </div>

        <div style={{ justifyContent: 'space-between', marginBottom: '80px' }} className="links-wrapper flex-center">
          <div>
            <h2 className='links-title'>Women's Clothing</h2>
            <ul>
              <li className='Links'><a href="#">Sports Bras</a></li>
              <li className='Links'><a href="#">Tops</a></li>
              <li className='Links'><a href="#">Hoodies</a></li>
              <li className='Links'><a href="#">Shorts</a></li>
              <li className='Links'><a href="#">Tights & Leggings</a></li>
            </ul>
          </div>

          <div>
            <h2 className='links-title'>Women's Shoes
            </h2>
            <ul>
              <li className='Links'><a href="#">Casual Sneakers</a></li>
              <li className='Links'><a href="#">All White Sneakers</a></li>
              <li className='Links'><a href="#">Slip On Sneakers</a></li>
              <li className='Links'><a href="#">Classic Sneakers</a></li>
              <li className='Links'><a href="#">High Top Sneakers</a></li>
            </ul>
          </div>

          <div>
            <h2 className='links-title'>Women's Accessories</h2>
            <ul>
              <li className='Links'><a href="#">Women's Accessories</a></li>
              <li className='Links'><a href="#">Women's Backpacks</a></li>
              <li className='Links'><a href="#">Women's Hats</a></li>
              <li className='Links'><a href="#">Women's Headphones</a></li>
              <li className='Links'><a href="#">Women's Socks</a></li>
            </ul>
          </div>

          <div>
            <h2 className='links-title'>WOMEN'S COLLECTIONS</h2>
            <ul>
              <li className='Links'><a href="#">Loungewear</a></li>
              <li className='Links'><a href="#">Training & Gym</a></li>
              <li className='Links'><a href="#">Running</a></li>
              <li className='Links'><a href="#">Yoga & Barre</a></li>
              <li className='Links'><a href="#">Plus Size</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


export default WomenLinkAndCard
