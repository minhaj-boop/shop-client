import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Shirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, molestiae! Tenetur, vitae incidunt. Harum, non. Ipsa doloremque, a autem quibusdam provident id impedit quis itaque neque, similique eius repudiandae voluptas.",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Shirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, molestiae! Tenetur, vitae incidunt. Harum, non. Ipsa doloremque, a autem quibusdam provident id impedit quis itaque neque, similique eius repudiandae voluptas.",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
];

const Cart = () => {
  return (
    <div className="cart">
      <h1>Products on your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item?.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1 x {item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
