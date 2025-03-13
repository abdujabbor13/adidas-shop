import React from 'react'
import data from "../../adidasProduct";
import { useEffect, useState } from "react";

const WomenImgCard = () => {
  const [womenImgCard, setWomenImgCard] = useState([])

  useEffect(() => {
    setWomenImgCard(data.womenImgCard)
  },[])

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginBottom: "50px",
        }}
        className="img-card"
      >
        {womenImgCard.map((images) => (
          <div
            key={images.id}
            style={{
              backgroundColor: "#eceff1",
              padding: "20px",
              textAlign: "center",
              width: "250px",
            }}
            className="img-info"
          >
            <img
              src={images.url}
              alt={images.info}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            <a
              style={{
                display: "block",
                borderBottom: "1px solid black",
                textTransform: "uppercase",
                fontWeight: "500",
                fontSize: "14px",
                marginTop: "10px",
                paddingBottom: "1px",
                textDecoration: "none",
                color: "#000",
              }}
              href="#"
            >
              {images.info}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WomenImgCard
