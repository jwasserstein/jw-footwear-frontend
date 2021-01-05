import React from 'react';
import {Link} from 'react-router-dom';
import Rating from '../Rating';
import './Product.css';

const Product = ({name, price, shortDescription, imageUrl, rating, numReviews, _id}) => (
    <Link className='Product' to={`/products/${_id}`}>
        <div className="Product-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className="Product-row">
            <h3>{name}</h3>
            <p className='Product-price'>${price}</p>
        </div>
        <div className="Product-row">
            <div>
                <Rating rating={rating} />
            </div>
            <p>{numReviews} reviews</p>
        </div>
        <p className='Product-description'>{shortDescription}</p>
    </Link>
);

export default Product;