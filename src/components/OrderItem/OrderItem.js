import React from 'react';
import PropTypes from 'prop-types';
import './OrderItem.css';

const OrderItem = ({imageUrl, name, size, price, quantity, longDescription}) => (
    <div className="OrderItem">
        <div className='OrderItem-outer-container'>
            <img src={imageUrl} alt="Shoe" />
            <div className='OrderItem-inner-container'>
                <div className='OrderItem-name-container'>
                    <h3>{name}</h3>
                    <p>Size: {size}</p>
                </div>
                <div className='OrderItem-price-container'>
                    <p className='OrderItem-price'>${price.toFixed(2)}</p>
                    <p className='OrderItem-quantity'>Quantity: {quantity}</p>
                </div>
            </div> 
        </div>
        <p className='OrderItem-description'>{longDescription}</p>                 
    </div>
);

OrderItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    longDescription: PropTypes.string.isRequired
};

export default OrderItem;