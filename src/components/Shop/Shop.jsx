import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Shop.css";
import Sidebar from "./Sidebar/Sidebar";
const Shop = ({ setCountCarts, countCarts }) => {
  const [items, setItems] = useState({});
  const [page, setPage] = useState(0);
  const [contentCount, setContentCount] = useState(12);

  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    fetch(`https://ema-jhon-api.herokuapp.com/productsCount`)
      .then((res) => res.json())
      .then((data) => setProductCount(data.count));
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://ema-jhon-api.herokuapp.com/products?page=${page}&size=${contentCount}`
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [page, contentCount]);

  const pages = Math.ceil(productCount / contentCount);

  return (
    <section id="shop">
      <div className="container">
        <h1>Get your dream product</h1>
        <div className="parent-grid">
          <div>
            <div className="shop-content">
              {products?.map((product) => (
                <Product
                  key={product._id}
                  product={product}
                  setCountCarts={setCountCarts}
                  setItems={setItems}
                />
              ))}
            </div>
            <div className="pagination">
              {Object.keys([...Array(pages)]).map((number) => (
                <button
                  className={page === number ? "active" : ""}
                  onClick={() => setPage(number)}
                  key={number}
                >
                  {parseInt(number) + 1}
                </button>
              ))}

              <select
                onChange={(e) => setContentCount(e.target.value || "")}
                name="contentCount"
                id="contentCount"
              >
                <option value="12">12</option>
                <option value="6">6</option>
                <option value="24">24</option>
                <option value="24">36</option>
              </select>
            </div>
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
