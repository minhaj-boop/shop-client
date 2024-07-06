import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const data = [
  {
    id: 1,
    img1: "https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Long Sleeve Graphic T-shit",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img1: "https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/2061302/pexels-photo-2061302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Long Sleeve Graphic T-shit",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img1: "https://images.pexels.com/photos/4075524/pexels-photo-4075524.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/5852981/pexels-photo-5852981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Long Sleeve Graphic T-shit",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    img1: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/1559193/pexels-photo-1559193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Long Sleeve Graphic T-shit",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
];

const FeaturedProducts = ({ type }) => {
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          magnam officiis error repudiandae rerum maiores quasi, reiciendis
          laboriosam. Reprehenderit id velit excepturi cum, sequi delectus
          expedita hic natus aliquid, inventore tempora nisi omnis dicta
          incidunt vitae eius quas earum tenetur accusamus quis voluptates.
          Architecto sapiente officiis molestias nobis natus quaerat!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
