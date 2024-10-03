import React from 'react';
import '../css/Hero.css';

const Hero = () => {
    return (
        <div className="hero-area" id="Hero">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-12 mb-5">
                        <h2 className="heading-main-hero-page mb-4">Create Your Professional AI-Powered Resume in Minutes with Maseerah</h2>
                        {/* <p className='sideheading-hero-page'>Creating a Professional Resume and Cover Letter Has Never Been <strong>So Easy</strong> </p> */}
                        <button className="mt-3 main-button">
                            <a href="/Login">Get Started For Free</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
