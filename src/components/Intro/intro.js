import React from "react";
import "./intro.css";
import capterra from "./../../assets/capterra.png";
import crowd from "./../../assets/crowd.png";
import eLearning from "./../../assets/eLearning.png";
import eloomiBgImg from "./../../assets/eloomiCoverImg.png";
import someRandom from "./../../assets/someRandom.png";
import waveBg from "./../../assets/waveBg.svg";

import { Button_bookDemo, Button_spp } from "components/CustomElements";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introduction">
        <div className="introductionContext">
          <div className="introBigText">
            See success with people development
          </div>
          <div className="introSmalltext">
            Meet eloomi, an
            <span className="introBold">
              all-in-one learning and development platform
            </span>
            helping organizations around the world to deliver impactful
            training, develop people, and drive business success.
          </div>
          <div className="introButtons">
            <Button_bookDemo arrow={true} margin_right={true} />
            <Button_spp></Button_spp>
          </div>
          <div className="certificateImgs">
            <img src={capterra} alt="capterra" />
            <img src={crowd} alt="capterra" />
            <img src={eLearning} alt="capterra" />
          </div>
        </div>
        <div className="eloomiBgImg">
          <img src={eloomiBgImg} alt="eloomiBgImg" className="eloomiBgImgBig" />
          <img src={someRandom} alt="someRandom" className="eloomiBgImgSmall" />
        </div>
        <img src={waveBg} alt="" className="waves" />
      </div>

    </section>
  );
};

export default Intro;
