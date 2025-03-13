import React, { useState, useEffect, useContext } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Input, Space, Badge } from "antd";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
const { Search } = Input;

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  const {count} = useContext(AppContext)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        padding: "10px 20px",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        transition: "transform 0.5s ease, opacity 0.5s ease",
        transform: scrolling ? "translateY(-100%)" : "translateY(0)",
        opacity: scrolling ? 0 : 1,
      }}
      className="siteHeader"
    >
      <div
        className="flex-center"
        style={{
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1400px",
          margin: "auto",
          padding: "10px 20px",
        }}
      >
        <h1>
          <Link style={{ borderBottom: "none" }} to="/">
            <svg
              style={{ width: "60px" }}
              viewBox="100 100 50 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
                fill="black"
              ></path>
            </svg>
          </Link>
        </h1>
        <ul
          className="flex-center"
          style={{
            gap: "30px",
            padding: "0",
            margin: "0",
            listStyle: "none",
          }}
        >
          <li>
            <Link
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
              to="/shopmen"
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
              to="/shopwomen"
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
              to="/shopkids"
            >
              Kids
            </Link>
          </li>
        </ul>
        <div style={{ gap: "20px" }} className="flex-center">
          <Space>
            <Search placeholder="search" />
          </Space>
          <Badge count={count} offset={[5, 0]}>
            <Link style={{ borderBottom: "none" }} to="/userbeg">
              <ShoppingCartOutlined style={{ fontSize: "24px" }} />
            </Link>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Header;
