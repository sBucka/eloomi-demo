import React from "react";
import "./eloomiVideo.css";

import waveBg from "./../../assets/waveBg1.svg";

const EloomiVideo = () => {
  return (
    <section id="eloomiVideo">
      <img src={waveBg} alt="" className="eloomiVideoWaves" />
      <div class="eloomiVideoContext">
        <div className="textContainer">
          <span class="firstHeading">
            Train, develop, and engage every employee
          </span>
          <span className="secondHeading">
            Learning & development simplicity at scale
          </span>
          <span class="text">
            Great training, learning, and development doesn’t have to be
            complicated. Experience a scalable learning platform that makes it
            easy to train your people, upskill talent, and deliver performance
            management with impact.
          </span>
        </div>
      </div>
    </section>
  );
};

export default EloomiVideo;
