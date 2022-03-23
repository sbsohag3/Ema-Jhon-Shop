import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'


const Cart = ({cart}) => {
    // console.log(cart)
    // const {cart} = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping =shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <div>
            <h3>Order Summary</h3>
              <p>Selected Items : {quantity}</p>
              <p>Total Price : ${total}</p>
              <p>Total Shipping : ${shipping}</p>
              <p>Tax : ${tax}</p>
              <h5  className='grandtotal'>Grand Total : ${grandTotal.toFixed(2)}</h5>
            </div>
            <div>
                <button className='cart-btn'>
                    <p className='clear-carttext'>Clear Cart</p>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button><br />
                <button className='review-order'>
                    <p className='review-ordertext'>Review Order</p>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
            </div>
        </div>
    );
};

export default Cart;