import React from "react";
import "./intro.css";
import capterra from "./../../assets/capterra.png";
import crowd from "./../../assets/crowd.png";
import eLearning from "./../../assets/eLearning.png";
import eloomiBgImg from "./../../assets/eloomiCoverImg.png";

const Intro = () => {
  return (
    <section className="intro">
      <div class="introduction">
        <div className="introductionContext">
          <div class="introBigText">See success with people development</div>
          <div class="introSmalltext">
            Meet eloomi, an
            <span className="introBold">
              all-in-one learning and development platform
            </span>
            helping organizations around the world to deliver impactful
            training, develop people, and drive business success.
          </div>
          <div class="introButtons">
            <button className="STYLEbtnBookDemo">Book a demo</button>
            <button class="btnPricing">See pricing plans</button>
          </div>
          <div class="imgs">
            <img src={capterra} alt="capterra" />
            <img src={crowd} alt="capterra" />
            <img src={eLearning} alt="capterra" />
          </div>
        </div>
        <div className="eloomiBgImg">
          <img src={eloomiBgImg} alt="eloomiBgImg" />
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="waves"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,32L120,64C240,96,480,160,720,160C960,160,1200,96,1320,64L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Intro;
