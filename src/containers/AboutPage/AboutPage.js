import React from 'react';
import './AboutPage.css';

const AboutPage = () => (
    <div className="AboutPage-main-container">
        <h2>About JW Footwear</h2>
        <p>JW Footwear is a demonstration e-commerce application made for the purposes of learning React and Redux. 
            It allows users to purchase shoes. It was designed in Figma and uses the following technologies:</p>
        <ul>
            <li><strong>Front-end</strong>: React and Redux</li>
            <li><strong>Back-end</strong>: Node.js and Express</li>
            <li><strong>Database</strong>: MongoDB</li>
        </ul>
        <p className='AboutPage-handcrafted'>Hand-crafted with <span>❤</span> in Glastonbury, Connecticut.</p>
    </div>
);

export default AboutPage;