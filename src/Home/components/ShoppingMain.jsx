import React from 'react'
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';


const ShoppingMain = () => {
  return (
    <div style={{
      backgroundImage: "url('https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/promo_ss25_spring_sale_bnr_d_c9b6580642.jpg')",
      backgroundSize: "contain",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: "center",
      width: "1518px",
      height: "800px",
      margin: 'auto',
      position: 'relative',
    }} className="image">
      <div className="container" style={{
        position: "absolute",
        top: "60%",
        left: '80px',
      }}>
        <h2 style={{
          backgroundColor: "#fff",
          padding: "5px",
          marginBottom: "5px",
          width: "fit-content"
        }}>
          FORECAST: FRESH STYLES
        </h2>
        <p style={{
          backgroundColor: "#fff",
          padding: "5px",
          width: "fit-content",
          marginBottom:'20px'
        }}>
          One of the best sales of the season.
        </p>
        <div style={{display:'flex', gap:'10px'}} className="btngroup">
          <Link className='link' to='/shopmen' style={{fontWeight:'bold'}}>shop men
            <ArrowRightOutlined style={{ marginLeft:'10px'}} />
          </Link>
          <Link className='link' to='/shopwomen' style={{fontWeight:'bold'}}>shop women
            <ArrowRightOutlined style={{ marginLeft:'10px'}} />
          </Link>
          <Link className='link' to='shopkids' style={{fontWeight:'bold'}}>
            shop kids
            <ArrowRightOutlined style={{ marginLeft:'10px'}} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ShoppingMain
