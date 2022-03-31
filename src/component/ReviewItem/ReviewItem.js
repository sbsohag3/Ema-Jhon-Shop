import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './ReviewItem.css'

const ReviewItem = (props) => {
    const {product, handleRemoveProduct} =props
    const {name, img, price, shipping, quantity} = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className='product-name' title={name}>
                        {name.length > 20 ? name.slice(0 ,20) + "..." : name}</p>
                    <p>Price : <span>${price}</span></p>
                    <p>Shipping Charge : <span>${shipping}</span></p>
                    <p>Quantity : <span>{quantity}</span></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct (product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashCan}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;