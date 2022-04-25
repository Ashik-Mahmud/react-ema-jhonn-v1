import React, { useEffect, useState } from "react";
import { itemStorage } from "../../Home/Storage";

const Sidebar = ({ countCarts, items, products, setItems, setCountCarts }) => {
  const [cartData, setCartData] = useState([]);
  let totalPrice = 0;
  let shipping = 0;

  useEffect(() => {
    fetch(`https://ema-jhon-api.herokuapp.com/products`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Object.keys(items)),
    })
      .then((res) => res.json())
      .then((data) => {
        setCartData(data);
      });
  }, [items]);

  for (let id in items) {
    const filteredItems = cartData.filter((product) => product._id === id);
    totalPrice = totalPrice + filteredItems[0]?.price * items[id];
    shipping = shipping + filteredItems[0]?.shipping;
  }
  const tax = (totalPrice * 5) / 100;
  const grandTotal = totalPrice + shipping + tax;

  const handleClearCarts = () => {
    setCountCarts(0);
    localStorage.removeItem("shopping-carts");
    setItems(itemStorage());
  };

  return (
    <>
      <aside id="sidebar">
        <h3>Order Summery</h3>
        <div id="summery">
          <table>
            <tbody>
              <tr>
                <td>Selected Items</td>
                <th>{countCarts}</th>
              </tr>
              <tr>
                <td>Total Price</td>
                <th>{totalPrice}$</th>
              </tr>
              <tr>
                <td>Total Shipping</td>
                <th>{shipping}$</th>
              </tr>
              <tr>
                <td>Tax (5%)</td>
                <th>{tax}$</th>
              </tr>
              <tr>
                <td>Grand Total</td>
                <th>{grandTotal}$</th>
              </tr>
            </tbody>
          </table>
          <div className="carts-btn">
            <button id="checkout-btn">Checkout</button>
            <button onClick={handleClearCarts} id="clear-btn">
              Clear Carts
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
