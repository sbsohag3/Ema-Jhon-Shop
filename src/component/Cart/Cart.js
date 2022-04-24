import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <div>
        <h3>Order Summary</h3>
        <p>Selected Items : {quantity}</p>
        <p>Total Price : ${total}</p>
        <p>Total Shipping : ${shipping}</p>
        <p>Tax : ${tax}</p>
       
      </div>
      <div>
        <button className="cart-btn">
          <p className="clear-carttext">Clear Cart</p>
          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </button>
        <br />

        {props.children}
      </div>
    </div>
  );
};

export default Cart;
