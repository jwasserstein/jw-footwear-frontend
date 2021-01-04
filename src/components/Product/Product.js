import React from 'react';
import {Link} from 'react-router-dom';
import './Product.css';

const Product = ({name, price, shortDescription, imageUrl, rating, numReviews, _id}) => {
    const stars = [];
    for(let i = 1; i <= 5; i++){
        if(i <= rating) stars.push(<i className="fas fa-star" key={i}></i>);
        else stars.push(<i className="far fa-star" key={i}></i>);
    }

    return (
            <Link className='Product' to={`/products/${_id}`}>
                <div className="Product-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
                <div className="Product-row">
                    <h3>{name}</h3>
                    <p className='Product-price'>${price}</p>
                </div>
                <div className="Product-row">
                    <div>
                        {stars}
                    </div>
                    <p>{numReviews} reviews</p>
                </div>
                <p className='Product-description'>{shortDescription}</p>
            </Link>
        );
}

export default Product;