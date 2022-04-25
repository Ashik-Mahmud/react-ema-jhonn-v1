import React, { useEffect } from "react";
import { itemStorage } from "../../Home/Storage";
import { handleStorageItem } from "../Handle/HandleCarts";
import "./Product.css";
const Product = ({ product, setCountCarts, setItems }) => {
  const { _id: id, category, name, seller, price, img, ratings } = product;

  const length = () => {
    let length = 0;
    const items = itemStorage();
    for (let id in items) {
      length = length + items[id];
    }
    return length;
  };

  useEffect(() => {
    setCountCarts(length());
    setItems(itemStorage());
  }, [setCountCarts, setItems]);

  const handleCarts = (id) => {
    handleStorageItem(id);
    setCountCarts(length());
    setItems(itemStorage());
  };

  return (
    <div className="product">
      <div className="image">
        <img src={img} alt={name} />
      </div>
      <div className="details">
        <h4>{name.length > 20 ? name.slice(0, 20) : name}</h4>
        <div className="inner-details">
          <ul className="price-seller">
            <li className="colorize">${price}</li>
            <li>{seller}</li>
          </ul>
          <ul className="rating-category">
            <li>{ratings.rate} Star</li>
            <li>{category}</li>
          </ul>
          <button onClick={() => handleCarts(id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
