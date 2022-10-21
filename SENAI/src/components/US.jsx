import React from "react";
import '../styles/us.css'
import Bia from '../assets/bia.jpeg'
import Thai from '../assets/thai.jpeg'
import Ste from '../assets/Ste.jfif'
import Bea from '../assets/bea.jpeg'
import Cabral from '../assets/cabral.jpeg'

const US = () => {
  return (
    <div className='dev' id="dev">
      <div className="titulo2">
        <h1 className="cursor-default">DEVELOPERS</h1>
        <p className="developrs rounded box-decoration-clone px-14 text-white text-2xl p-2 font-display justify-center inline-block cursor-default"> We are apprentices at Bosch Campinas, studying systems development technician at Senai Roberto Mange and participating in the Grand Prix. Our group is called Automation Anywhere and we had the challenge of developing DialUp. </p>
      </div>
      <div className="containerr">
        <div className="cardd-wrapper">
          <div className="cardd profile-two">
            <div className="cardd-image profile-img--two">
              <img src={Cabral} alt="profile two"></img>
            </div>
            <div className="details jane">
              <h2 className="mt-3 text-2xl">Vinicius Cabral
                <br></br>
                <span className="job-title">FullStack</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="cardd-wrapper">
          <div className="cardd profile-two">
            <div className="cardd-image profile-img--two">
              <img src={Thai} alt="profile two"></img>
            </div>
            <div className="details jane">
              <h2 className="mt-3 text-2xl">Thaiza Favarelli
                <br></br>
                <span className="job-title">FrontEnd/Logger</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="cardd-wrapper">
          <div className="cardd profile-two">
            <div className="cardd-image profile-img--two">
              <img src={Ste} alt="profile two"></img>
            </div>
            <div className="details jane">
              <h2 className="mt-3 text-2xl">Stephany Moreira
                <br></br>
                <span className="job-title">FrontEnd</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="cardd-wrapper">
          <div className="cardd profile-two">
            <div className="cardd-image profile-img--two">
              <img src={Bia} alt="profile two"></img>
            </div>
            <div className="details jane">
              <h2 className="mt-3 text-2xl">Bianca Hotops
                <br></br>
                <span className="job-title">FrontEnd/Logger/Design</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="cardd-wrapper">
          <div className="cardd profile-two">
            <div className="cardd-image profile-img--two">
              <img src={Bea} alt="profile two"></img>
            </div>
            <div className="details jane">
              <h2 className="mt-3 text-2xl">Beatriz Oliveira
                <br></br>
                <span className="job-title">Logger</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default US;