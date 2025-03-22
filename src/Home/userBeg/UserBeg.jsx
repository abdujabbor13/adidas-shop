import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { CloseOutlined } from "@ant-design/icons";

const UserBeg = () => {
  const { cart, purchaset, deleteFromCart, addToCart, handleBuy } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="container">
        <div
          style={{ margin: "150px 0 80px 0", justifyContent: "center", flexDirection:'column', gap:'20px' }}
          className="beg-wrapper flex-center"
        >
          {purchaset ? <h1>Thank you for your purchase.</h1> : (
          cart.length === 0 ? (
            <>
              <button onClick={() => navigate('/productlist')}>Shop Now</button>
              <h1>Your bag is empty</h1>
            </>
          ) : (
            cart.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                style={{
                  display: "flex",
                  width: "800px",
                  alignItems: "flex-start",
                  gap: "30px",
                  border: "1px solid #000",
                  position: "relative",
                  padding: "20px",
                   flexDirection: "row",
                }}
                className="beg"
              >
                <img
                  style={{ width: "250px", height: "auto" }}
                  src={product.url}
                  alt={product.title} loading="lazy"
                />
                <CloseOutlined
                  style={{
                    fontSize: "25px",
                    cursor: "pointer",
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                  }}
                  onClick={() => deleteFromCart(product.id)}
                />
                <div className="beg-info">
                  <h2>{product.title}</h2>
                  <p>You have {cart.length} products in your shopping bag</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "10px",
                      marginTop: "20px",
                    }}
                  >
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Select the number of products:
                    </label>
                    <select
                      value={product.quantity}
                      onChange={(e) => addToCart(product, Number(e.target.value))}
                      style={{
                        padding: "10px",
                        fontSize: "16px",
                        border: "1px solid #000",
                        cursor: "pointer",
                      }}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      You have selected: {product.quantity} products
                    </p>
                    <button onClick={() => handleBuy(product.id)}>buy</button>
                  </div>
                </div>
              </div>
            )))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserBeg;
