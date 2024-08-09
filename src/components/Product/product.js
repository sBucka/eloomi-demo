import React from "react";
import "./product.css";

import {
  Button_bookDemo,
  Divider,
  Button_spp,
  Section_text,
} from "../CustomElements";

import card1 from "./../../assets/card1.png";
import card2 from "./../../assets/card2.png";
import card3 from "./../../assets/card3.png";
import card4 from "./../../assets/card4.png";

import smileSvg from "./../../assets/smile.svg";
import fileSvg from "./../../assets/file.svg";
import lensSvg from "./../../assets/lens.svg";
import diagramSvg from "./../../assets/diagram.svg";

const Product = () => {
  return (
    <section id="product">
      <div class="product__context">
        <Section_text>
          <span>Product Areas</span>
          <span>
            Effortlessly train and engage your <br /> people
          </span>
          <span>
            eloomi helps you train every employee with efficiency. Activate
            all-new learning paths, access curated training direct from our
            content library, and tap into skills data for targeted upskilling.
            Plus, connect learning and development with our fully supported
            performance management suite.
          </span>
        </Section_text>
        <div class="cards-colorful">
          <div class="card">
            <div class="card-context">
              <h4 class="card-heading">Learning Platform</h4>
              <p class="card-text">
                Deliver outstanding training to anyone, anywhere with our
                LMS/LXP. Empower experts to create, upload& share content.
              </p>
              <button class="card-btn">Learn more</button>
            </div>
            <div class="card-img">
              <img src={card1} alt="card" />
            </div>
          </div>
          <div class="card">
            <div class="card-context">
              <h4 class="card-heading">Learning Content</h4>
              <p class="card-text">
                Access unlimited training content from top industry providers,
                with curated courses, playlists and learning pathways.
              </p>
              <button class="card-btn">Learn more</button>
            </div>
            <div class="card-img">
              <img src={card2} alt="card" />
            </div>
          </div>
          <div class="card">
            <div class="card-context">
              <h4 class="card-heading">Skills Intelligence</h4>
              <p class="card-text">
                Map the skills employees have, want and need – then deliver
                targeted training to plug gaps and build business capability.
              </p>
              <button class="card-btn">Learn more</button>
            </div>
            <div class="card-img">
              <img src={card3} alt="card" />
            </div>
          </div>
          <div class="card">
            <div class="card-context">
              <h4 class="card-heading">People Development</h4>
              <p class="card-text">
                Empower your managers to have better growth conversations. Set
                goals, track performance and capture feedback.
              </p>
              <button class="card-btn ">Learn more</button>
            </div>
            <div class="card-img">
              <img src={card4} alt="card" />
            </div>
          </div>
        </div>
        <Divider>PRODUCT FEATURES</Divider>
        <div class="cards-info">
          <div class="card">
            <img src={smileSvg} alt="" />

            <h4 className="card--heading">Employee communication</h4>
            <p class="card--text">
              Engage with the content in one feed, connect your workforce with
              realtime messaging and share knowledge in communities.
            </p>
            <a href="./" class="card--read-more">
              Read more
            </a>
          </div>
          <div class="card">
            <img src={fileSvg} alt="" />

            <h4 className="card--heading">eloomi AI</h4>
            <p class="card--text">
              From automatic course creation to smart quiz generation, redefine
              how you develop and deliver training with eloomi AI.
            </p>
            <a href="./" class="card--read-more">
              Read more
            </a>
          </div>
          <div class="card">
            <img src={lensSvg} alt="" />

            <h4 className="card--heading">Reporting & analytics</h4>
            <p class="card--text">
              Keep on top of training with real-time LMS reports to track
              progress, course completion and compliance.
            </p>
            <a href="./" class="card--read-more">
              Read more
            </a>
          </div>
          <div class="card">
            <img src={diagramSvg} alt="" />

            <h4 className="card--heading">API & integrations</h4>
            <p class="card--text">
              Streamline your workflow with eloomi integrations, API & SSO.
              Automate tasks, save time, and ensure best-practice IT security.
            </p>
            <a href="./" class="card--read-more">
              Read more
            </a>
          </div>
        </div>
        <Divider text={false}>
          <Button_bookDemo arrow={true} margin_right={true} />
          <Button_spp gray={true}></Button_spp>
        </Divider>
      </div>
    </section>
  );
};

export default Product;
