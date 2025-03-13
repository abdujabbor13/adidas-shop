import React from 'react'
import { useEffect, useState } from 'react'
import data  from '../../adidasProduct'

const KidsMainCard = () => {

  const [kidsMainCard, setKidsMainCard] = useState([])

  useEffect(() => {
    setKidsMainCard(data.kidsMainCard)
  },[])

  return (
    <div className='container'>
        <div style={{ gap: '10px', marginBottom: '50px' }}
        className="mixCard flex-center">
          {kidsMainCard.map((card) => (
            <div style={{ padding: '1.5px' }} className="card">
              <img style={{ minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} src={card.url} alt={card.title} />
              <div style={{ padding: '10px 10px' }} className="card-body">
                <h3 style={{ marginTop: '0', marginBottom:'30px', fontSize: '20px', fontWeight: '500' }}>{card.title}</h3>
                <a style={{ borderBottom: '3px solid #333', textTransform: 'uppercase' }} href="#">Shop now</a>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default KidsMainCard
