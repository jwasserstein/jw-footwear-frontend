import React from 'react';
import './AvailableSizes.css';

const AvailableSizes = ({availableSizes}) => {
    const sizes = [];
    for(let i = 6; i < 14; i+= 0.5){
        if(availableSizes.includes(i)) sizes.push(<div className="Size" key={i}>{i}</div>);
        else sizes.push(<div className="Size Size-deactivated" key={i}>{i}</div>)
    }

    return (
        <div className='Size-container'>
            {sizes}
        </div>
    )
};

export default AvailableSizes;