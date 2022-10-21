import React from "react";

const Hero = () => {
    return(
        <>
        <div id='home' className="hero home parallax bg-cover bg-center w-full h-screen relative bg-[url('./assets/home.jpg')]">
            <div className="px-1 lg:top-2/4 mx-auto max-w-3xl absolute  left-5 text-xl text-5xl sm:left-10 space-y-5 top-2/3">
                {/* <h1 className="rounded box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white lg:text-6xl lg:px-6 lg:w-1/2 sm:w-3/4 mt-20 p-2 text-5xl font-display justify-center inline-block ">HBANK</h1>
                <p className="rounded box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 lg:text-4xl text-white lg:w-full w-3/4 p-2 text-3xl">The bank for your business.</p>
    */}     </div>
        </div>
        
      </>
    );
};

export default Hero;