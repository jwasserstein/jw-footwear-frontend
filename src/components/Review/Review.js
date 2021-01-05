import React from 'react';
import Rating from '../Rating';
import './Review.css';

const Review = ({rating, author, comment}) => (
    <div className="Review">
        <div className='Review-inner-container'>
            <Rating rating={rating} />
            <p className='Review-author'>{author}</p>
        </div>
        <p className='Review-comment'>{comment}</p>
    </div>
);

export default Review;