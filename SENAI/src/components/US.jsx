import React from "react";
import '../styles/us.css'
import Bia from '../assets/bia.jpeg'
import Thai from '../assets/thai.jpeg'

const US = () => {
  return (
    <div className='dev'>
      <div className="titulo2">
        <h1>DEVELOPERS</h1>
      </div>
      <div className="containerr">
        <div className="cardd-wrapper">
          <div className="cardd profile-two">
            <div className="cardd-image profile-img--two">
              <img src={Bia} alt="profile two"></img>
            </div>
            <div className="details jane">
              <h2>Bianca Hotops
                <br></br>
                <span className="job-title">Developer</span>
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
              <h2>Thaiza Favarelli
                <br></br>
                <span className="job-title">Developer</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default US;