import React from 'react'
import { ArrowRightOutlined } from "@ant-design/icons";

const KidsShoppingMain = () => {

  return (
    <div style={{
      backgroundImage: "url('https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/global_zne_sportswear_ss25_launch_kglp_banner_hero_d_dc8bf5cd79.jpg')",
      backgroundSize: "contain",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: "center",
      width: "1518px",
      height: "800px",
      margin: 'auto',
      position: 'relative',
      marginTop:'45px'
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
          ADIDAS Z.N.E.
        </h2>
        <p style={{
          backgroundColor: "#fff",
          padding: "5px",
          width: "fit-content",
          marginBottom: '20px'
        }}>
          In line with your everyday.
        </p>
        <div className="btngroup">
          <button style={{padding:'15px 25px', fontWeight: 'bold' }}>shop now
            <ArrowRightOutlined style={{ marginLeft: '10px' }} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default KidsShoppingMain
