import React, { useState } from "react";
import Product from "./Product/Product";
import "./Shop.css";
import Sidebar from "./Sidebar/Sidebar";
const Shop = ({ products, setCountCarts, countCarts }) => {
  const [items, setItems] = useState({});
  return (
    <section id="shop">
      <div className="container">
        <h1>Get your dream product</h1>
        <div className="parent-grid">
          <div className="shop-content">
            {products.slice(0, 30).map((product) => (
              <Product
                key={product.id}
                product={product}
                setCountCarts={setCountCarts}
                setItems={setItems}
              />
            ))}
          </div>
          <Sidebar
            setItems={setItems}
            products={products}
            items={items}
            countCarts={countCarts}
            setCountCarts={setCountCarts}
          />
        </div>
      </div>
    </section>
  );
};

export default Shop;
