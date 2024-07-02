import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Men</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
            itaque eligendi dolore, sapiente ut nam corrupti rerum accusamus
            ullam, debitis fugit voluptatem recusandae, iste repellat
            consectetur quibusdam quasi facere! Dolores amet exercitationem
            error eum architecto, cumque adipisci distinctio tenetur impedit
            magnam repellendus aperiam
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
            itaque eligendi dolore, sapiente ut nam corrupti rerum accusamus
            ullam, debitis fugit voluptatem recusandae, iste repellat
            consectetur quibusdam quasi facere! Dolores amet exercitationem
            error eum architecto, cumque adipisci distinctio tenetur impedit
            magnam repellendus aperiam
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">store</span>
          <span className="copyright">All Right Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
