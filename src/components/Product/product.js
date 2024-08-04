import React from "react";
import "./product.css";

import card1 from "./../../assets/card1.png";
import card2 from "./../../assets/card2.png";
import card3 from "./../../assets/card3.png";
import card4 from "./../../assets/card4.png";

const Product = () => {
  return (
    <section id="product">
      <div class="STYLE-section">
        <span class="STYLE-section-heading-one">Product Areas</span>
        <span class="STYLE-section-heading-two">
          Effortlessly train and engage your people
        </span>
        <span class="STYLE-section-text">
          eloomi helps you train every employee with efficiency. Activate
          all-new learning paths, access curated training direct from our
          content library, and tap into skills data for targeted upskilling.
          Plus, connect learning and development with our fully supported
          performance management suite.
        </span>
        <div class="cards">
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
              <h4 class="card-heading">Learning Platform</h4>
              <p class="card-text">
                Deliver outstanding training to anyone, anywhere with our
                LMS/LXP. Empower experts to create, upload& share content.
              </p>
              <button class="card-btn">Learn more</button>
            </div>
            <div class="card-img">
              <img src={card2} alt="card" />
            </div>
          </div>
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
              <img src={card3} alt="card" />
            </div>
          </div>
          <div class="card">
            <div class="card-context">
              <h4 class="card-heading">Learning Platform</h4>
              <p class="card-text">
                Deliver outstanding training to anyone, anywhere with our
                LMS/LXP. Empower experts to create, upload& share content.
              </p>
              <button class="card-btn ">Learn more</button>
            </div>
            <div class="card-img">
              <img src={card4} alt="card" />
            </div>
          </div>
        </div>
        <div class="devider">
          <div class="line"></div>
        </div>
      </div>
    </section>
  );
};

export default Product;
