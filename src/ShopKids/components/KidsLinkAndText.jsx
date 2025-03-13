import React from 'react'

const KidsLinkAndText = () => {
  return (
    <>
      <div style={{ marginBottom: '90px' }}>
        <div style={{ width: '1518px', margin: 'auto', padding: '80px 0', textAlign: 'center' }} className="tetx-section">
          <h2 style={{ textTransform: 'uppercase', fontSize: '25px', fontWeight: 'bold', marginBottom: '25px' }}>Kids' Shoes & Clothing</h2>
          <p style={{lineHeight: '1.8' }}>
          Whether they’re big kids playing in a weekend tournament or little <br /> ones mastering the monkey bars, being a young creator is all about<br /> having fun while playing hard. Find girls’ and boys’ shoes to support<br /> both their game and their style. Boys’ and girls’ clothing and shoes<br /> from adidas are built to give kids of every age and stage comfort<br /> and confidence for everything from first steps to personal bests.
          </p>
        </div>
      </div>
      <div className='container'>
        <div style={{ justifyContent: 'space-between', marginBottom: '80px' }} className="links-wrapper flex-center">
          <div>
            <h2 className='links-title'>KIDS COLLECTIONS</h2>
            <ul>
              <li className='Links'><a href="#">Infant & Toddler</a></li>
              <li className='Links'><a href="#">Boys</a></li>
              <li className='Links'><a href="#">Girls</a></li>
              <li className='Links'><a href="#">Disney</a></li>
              <li className='Links'><a href="#">Sportswear</a></li>
            </ul>
          </div>

          <div>
            <h2 className='links-title'>KIDS' SHOES
            </h2>
            <ul>
              <li className='Links'><a href="#">Casual Sneakers</a></li>
              <li className='Links'><a href="#">High Top Sneakers</a></li>
              <li className='Links'><a href="#">Slides & Sandals</a></li>
              <li className='Links'><a href="#">Cleats</a></li>
              <li className='Links'><a href="#">Boots</a></li>
            </ul>
          </div>

          <div>
            <h2 className='links-title'>KIDS' ACCESSORIES</h2>
            <ul>
              <li className='Links'><a href="#">Socks</a></li>
              <li className='Links'><a href="#">Hats</a></li>
              <li className='Links'><a href="#">Gloves</a></li>
              <li className='Links'><a href="#">Backpacks & Bags</a></li>
              <li className='Links'><a href="#">Sunglasses</a></li>
            </ul>
          </div>

          <div>
            <h2 className='links-title'>KIDS' CLOTHING</h2>
            <ul>
              <li className='Links'><a href="#">T-shirts</a></li>
              <li className='Links'><a href="#">Hoodies & Sweatshirts</a></li>
              <li className='Links'><a href="#">Jackets & Coats</a></li>
              <li className='Links'><a href="#">Pants & Sweats</a></li>
              <li className='Links'><a href="#">Track Suits</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default KidsLinkAndText
