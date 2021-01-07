import React from 'react';
import PropTypes from 'prop-types';
import './Rating.css';

const Rating = ({rating}) => {
    const stars = [];
    for(let i = 1; i <= 5; i++){
        if(i <= rating) stars.push(<i className="fas fa-star" key={i}></i>);
        else stars.push(<i className="far fa-star" key={i}></i>);
    }

    return (
        <div>
            {stars}
        </div>
    );
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired
};

export default Rating;