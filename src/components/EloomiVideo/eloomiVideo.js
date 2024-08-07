import React from "react";
import "./eloomiVideo.css";

import waveBg from "./../../assets/waveBg1.svg";
import eloomiVideoBg from "./../../assets/eloomiVideoBg.png";
import { Section_text } from "components/CustomElements";

const EloomiVideo = () => {
  return (
    <section id="eloomiVideo">
      <img src={waveBg} alt="" className="eloomiVideoWaves" />
      <div class="eloomiVideoContext">
        <div className="textContainer">
          <Section_text>
            <span>Train, develop, and engage every employee</span>
            <span>
              Learning & development
              <br />
              simplicity at scale
            </span>
            <span>
              Great training, learning, and development doesn’t have to be
              complicated. Experience a scalable learning platform that makes it
              easy to train your people, upskill talent, and deliver performance
              management with impact.
            </span>
          </Section_text>
          <div class="eloomiVideoPlayer">
            <button className="play--button">
              <div class="play--button-triangle">🛆</div>
            </button>
            <img src={eloomiVideoBg} alt="" className="eloomiVideoBg" />
            <div class="player--controls">
              <button className="player--button toggle" title="toggle play">
                ▶
              </button>
              <div class="time--display">0:00</div>
              <div class="progress">
                <div class="progress--filled"></div>
              </div>
              <button className="player--button">cc</button>
              <button className="player--button">🕨</button>
              <button className="player--button">⛭</button>
              <button className="player--button">🖵</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EloomiVideo;
