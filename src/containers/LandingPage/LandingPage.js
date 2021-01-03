import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => (
    <div className='LandingPage-main-container'>
        <main className='LandingPage-Hero'>
            <div className='LandingPage-Hero-image'></div>
            <div className="LandingPage-Hero-text">
                <h1>Welcome to JW Footwear!</h1>
                <p>We’re the largest retailer of shoes that doesn’t actually sell shoes!</p>
                <Link to='/products'>Shop Now!</Link>
            </div>
        </main>
    </div>
);

export default LandingPage;