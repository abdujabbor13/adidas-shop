import React from 'react'
import StileCard from '../../Home/components/StileCard'

const LinkAndCard = () => {

  return (
    <div>
      <div className='container'>
        <div style={{ marginBottom: '90px' }}>
          <StileCard />
        </div>


        <div style={{ justifyContent: 'space-between', marginBottom: '80px' }} className="links-wrapper flex-center">
          <div>
            <h2 className='links-title'>Men's Clothing</h2>
            <ul>
              <li className='Links'><a href="#">T-shirts</a></li>
              <li className='Links'><a href="#">Hoodies</a></li>
              <li className='Links'><a href="#">Jackets</a></li>
              <li className='Links'><a href="#">Shorts</a></li>
              <li className='Links'><a href="#">Pants & Joggers</a></li>
            </ul>
          </div>

          <div>
            <h2 className='links-title'>Men's Shoes
            </h2>
            <ul>
              <li className='Links'><a href="#">Shoes</a></li>
              <li className='Links'><a href="#">High Top Sneakers</a></li>
              <li className='Links'><a href="#">Classic Sneakers</a></li>
              <li className='Links'><a href="#">Slip On Sneakers</a></li>
              <li className='Links'><a href="#">All White Sneakers</a></li>
            </ul>
          </div>

          <div>
            <h2 className='links-title'>Men's Accessories</h2>
            <ul>
              <li className='Links'><a href="#">Men's Accessories</a></li>
              <li className='Links'><a href="#">Men's Duffle Bags</a></li>
              <li className='Links'><a href="#">Men's Socks</a></li>
              <li className='Links'><a href="#">Men's Hats</a></li>
              <li className='Links'><a href="#">Men's Headphones</a></li>
            </ul>
          </div>

          <div>
            <h2 className='links-title'>MEN'S COLLECTIONS</h2>
            <ul>
              <li className='Links'><a href="#">Men's Running</a></li>
              <li className='Links'><a href="#">Men's Soccer</a></li>
              <li className='Links'><a href="#">Men's Loungewear</a></li>
              <li className='Links'><a href="#">Men's Training & Gym</a></li>
              <li className='Links'><a href="#">Men's Originals</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkAndCard
