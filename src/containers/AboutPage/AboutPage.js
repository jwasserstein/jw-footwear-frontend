import React, {useEffect} from 'react';
import './AboutPage.css';

const AboutPage = () => {
    useEffect(() => document.title = 'JW Footwear | About');

    return (
        <div className="AboutPage-main-container">
            <h2>About JW Footwear</h2>
            <p>JW Footwear is a demonstration e-commerce application that sells shoes.  
                It allows users to add shoes of various sizes to their cart, place 
                orders, view their order history, and leave reviews and ratings on 
                products they’ve purchased.  It’s a single page, fullstack application 
                that uses React and Redux on the frontend and Node.js, Express, and 
                MongoDB on the backend. The frontend is served by GitHub Pages and 
                the backend runs on Heroku with a managed database provided by MongoDB 
                Atlas. It was designed using Figma.</p>
            <p className='AboutPage-handcrafted'>Handcrafted with <span>❤</span> in Glastonbury, Connecticut.</p>
        </div>
    );
};

export default AboutPage;