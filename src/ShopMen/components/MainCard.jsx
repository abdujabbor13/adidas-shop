import React, { useEffect, useState } from 'react'
import data  from "../../adidasProduct";

const MainCard = () => {

  const [mainCard, setMainCard] = useState([])

  useEffect(() => {
    setMainCard(data.mainCard)
  },[])

  return (
    <div className='container'>
        <div style={{ gap: '10px', marginBottom: '50px' }}
        className="mixCard flex-center">
          {mainCard.map((card) => (
            <div style={{ padding: '1.5px' }} className="card">
              <img style={{ minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} src={card.url} alt={card.title} loading='lazy'/>
              <div style={{ padding: '10px 10px' }} className="card-body">
                <h3 style={{ margin: '10px 0', fontSize: '20px', fontWeight: '500' }}>{card.title}</h3>
                <p style={{ marginBottom: '20px', fontSize: '15px', fontWeight: '400' }}>{card.info}</p>
                <a style={{ borderBottom: '3px solid #333', textTransform: 'uppercase' }} href="#">Shop now</a>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
export default MainCard
