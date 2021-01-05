import React from 'react';
import './AvailableSizes.css';

const AvailableSizes = ({availableSizes, selectedSize, updateSize}) => {
    const sizes = [];
    for(let i = 6; i < 14; i+= 0.5){
        if(availableSizes.includes(i)) {
            if(selectedSize === i){
                sizes.push(<div className="Size Size-selected" onClick={updateSize.bind(this, i)} key={i}>{i}</div>);
            } else {
                sizes.push(<div className="Size" onClick={updateSize.bind(this, i)} key={i}>{i}</div>);
            }
        } else {
            sizes.push(<div className="Size Size-deactivated" key={i}>{i}</div>);
        }
    }

    return (
        <div className='Size-container'>
            {sizes}
        </div>
    );
};

export default AvailableSizes;