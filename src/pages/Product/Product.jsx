import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
const images = [
  "https://images.pexels.com/photos/8864285/pexels-photo-8864285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImage(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          officia vel rerum velit debitis dignissimos distinctio beatae. Quis
          asperiores perspiciatis molestiae adipisci ut tempora deserunt,
          explicabo, accusamus quisquam dolorem dolorum!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        {/* <hr /> */}
        <div className="info">
          <span>DESCRIPTION</span>
          {/* <hr /> */}
          <span>ADDITIONAL INFORMATION</span>
          {/* <hr /> */}
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
