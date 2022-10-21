import React from "react";
import '../styles/about.css'

const About = () => {
    return(
        <>
        <div className="hero back-about parallax bg-cover bg-center w-full h-screen relative " id="about">
            <div className="px-1 mx-auto max-w-2xl absolute lg:bottom-2/4 ml-36 text-xl sm:left-10 sm:text-5xl w-5/6 top-12 left-7 space-y-5 pt-48">
                <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative inline-block text-center items-center'>
                    <span className='relative text-white text-7xl font-bold cursor-default'>About us</span>
                </span>
            </div> 
            <div className="px-16 text-center mx-auto lg:w-auto absolute lg:left text-xl lg:bottom-1/3 sm:left-10 sm:text-4xl left-7 bottom-1/4 mt-20 w-5/6 space-y-5 ">        
                <p className="rounded box-decoration-clone px-2 text-white text-3xl p-2 font-display justify-center inline-block cursor-default">Founded in 2022 in the city of Campinas-SP. DialUP operates in the technology segment, aiming at quality, efficiency and optimization of its demand operations, having as main differentials, constant innovation and the search for customized solutions for each need of our customers.</p>
            </div>
        </div>
        </>
    );
};
    
export default About;