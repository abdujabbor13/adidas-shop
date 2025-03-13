import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";
import { AppContext } from "../context/AppContext";

const ProductItem = ({ data }) => {
  const { id } = useParams();
  const { addToCart } = useContext(AppContext);
  const navigate = useNavigate();
  const product = data.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Mahsulot topilmadi</h2>;
  }

  return (
    <div>
      <Header />
      <div className="container">
        <button
          onClick={() => navigate(-1)}
          style={{ marginTop: "100px" }}
        >
          <ArrowLeftOutlined style={{ marginRight: "8px" }} />
          back
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "30px",
            marginBottom: "100px",
            textAlign: "center",
          }}
          className="item-wrapper"
        >
          <div className="item">
            <h1 style={{ marginBottom: "20px" }}>{product.title}</h1>
            <img
              style={{ width: "100%", height: "100%" }}
              src={product.url}
              alt={product.title}
            />
            <p style={{ color: "grey", marginBottom: "10px" }}>
              {product.info}
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexDirection: "column",
              }}
              className="btn-wrapper"
            >
              <span style={{ color: "red" }}>{product.price}</span>
              <button onClick={() => addToCart(product)}>ADD TO BEG</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductItem;
