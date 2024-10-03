import React from 'react';
import '../css/About.css';
import aboutImage from '../images/left-image.png';


const About = () => {
    return (
        <section class="section my-5" id="About">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <img src={aboutImage} class="rounded img-fluid d-block mx-auto" alt="about-image" />
                    </div>
                    <div class="right-text col-lg-6 col-md-12 col-sm-12 mobile-top-fix pl-5">
                        <div class="left-heading">
                            <h1>Welcome to Maseerah</h1>
                        </div>
                        <div class="left-text">
                            <p class="main-side-heading">Free and Paid Templates | AI-enabled CV creation | Multilingual Support</p>
                            <p>
                            Maseerah is a powerful tool designed to help users create beautiful and professional resumes effortlessly. It offers multiple customizable CV templates, with one free-to-use template and several paid ones. The app is currently available exclusively on iOS and supports both English and Arabic languages. 
							</p>
                            <p>
                            One of Maseerah's standout features is its AI-enabled resume creation, which simplifies the process and provides users with a unique selling point (USP) of an intelligent, user-friendly solution
							</p>
                            <button class="main-button mt-3"><a href="https://apps.apple.com/maseerah">Download of IOS</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
