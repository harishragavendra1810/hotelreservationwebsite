import React from "react";

import "../Style/homemain.css";
const HomeMain = () => {
  return (
    <div className="home-main container">
      <div className="row ">
        <div className="home-main_container col-12 col-md-6 col-lg-6">
          <h1 className="home-main_heading">Hotel, car & experiences</h1>
          <p className="home-main_para">
            Accompanying us, you have a trip full of experiences. With Chisfis,
            booking accommodation, resort villas, hotels
          </p>
          <button className="home-main_btn">Start your search</button>
        </div>
        <div className="home-main-imagecontainer col-12 col-md-6 col-lg-6 mt-3">
          <img className="home-main_img " src="https://chisfis-template.vercel.app/static/media/hero-right.ee78c0ffae92062cbe4e.png" alt="home" />
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
