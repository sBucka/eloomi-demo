import React from "react";
import "./companies.css";

import company1 from "./../../assets/company1.png";
import company2 from "./../../assets/company2.png";
import company3 from "./../../assets/company3.png";
import company4 from "./../../assets/company4.png";
import company5 from "./../../assets/company5.png";
import company6 from "./../../assets/company6.png";
const Companies = () => {
  return (
    <section class="companies">
      <div class="companieImgs">
        <img src={company1} alt="company" className="companieImg" />
        <img src={company2} alt="company" className="companieImg" />
        <img src={company3} alt="company" className="companieImg" />
        <img src={company4} alt="company" className="companieImg" />
        <img src={company5} alt="company" className="companieImg" />
        <img src={company6} alt="company" className="companieImg" />
      </div>
      <span>
        Supporting hundreds of companies worldwide to deliver great learning and
        development experiences
      </span>
    </section>
  );
};

export default Companies;
