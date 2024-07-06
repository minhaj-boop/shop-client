import React from "react";
import "./List.scss";
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
  {
    id: 5,
    img1: "https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Long Sleeve Graphic T-shit",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 6,
    img1: "https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/2061302/pexels-photo-2061302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Long Sleeve Graphic T-shit",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 7,
    img1: "https://images.pexels.com/photos/4075524/pexels-photo-4075524.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/5852981/pexels-photo-5852981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Long Sleeve Graphic T-shit",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 8,
    img1: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/1559193/pexels-photo-1559193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Long Sleeve Graphic T-shit",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 9,
    img1: "https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Long Sleeve Graphic T-shit",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 10,
    img1: "https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/2061302/pexels-photo-2061302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Long Sleeve Graphic T-shit",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 11,
    img1: "https://images.pexels.com/photos/4075524/pexels-photo-4075524.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/5852981/pexels-photo-5852981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Long Sleeve Graphic T-shit",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 12,
    img1: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/1559193/pexels-photo-1559193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Long Sleeve Graphic T-shit",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
];

const List = () => {
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
