import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='order-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem 
                        key={product.id}
                        product = {product}
                        handleRemoveProduct = {handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to='/inventory'>
                     <button className='review-order'>
                    <p className='review-ordertext'>Proceed Checkout</p>
                    <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                    </button>
                  </Link>
                </Cart>
            </div>
           
        </div>
    );
};

export default Orders;