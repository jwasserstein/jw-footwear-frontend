import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    useEffect(() => document.title = 'JW Footwear | Welcome');

    return (
        <div className='LandingPage-main-container'>
            <main className='LandingPage-Hero'>
                <div className='LandingPage-Hero-image' style={{backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL + '/images/shoe-on-feet.jpg'})`}}></div>
                <div className="LandingPage-Hero-text">
                    <h1>Welcome to JW Footwear!</h1>
                    <p>We’re the largest retailer of shoes that doesn’t actually sell shoes!</p>
                    <Link to='/products'>Shop Now!</Link>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;