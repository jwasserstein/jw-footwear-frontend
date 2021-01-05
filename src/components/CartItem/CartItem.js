import React from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';

const CartItem = ({imageUrl, name, size, price, quantity, longDescription}) => (
    <div className="CartItem">
        <div className='CartItem-outer-container'>
            <img src={imageUrl} alt="Shoe" />
            <div className='CartItem-inner-container'>
                <div className='CartItem-name-container'>
                    <h3>{name}</h3>
                    <p>Size: {size}</p>
                </div>
                <div className='CartItem-price-container'>
                    <p className='CartItem-price'>${price.toFixed(2)}</p>
                    <p className='CartItem-quantity'>Quantity: {quantity}</p>
                </div>
            </div> 
        </div>
        <p className='CartItem-description'>{longDescription}</p>                 
        <p className='CartItem-remove'>Remove</p>
    </div>
);

CartItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    longDescription: PropTypes.string.isRequired
};

export default CartItem;