import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <section className="nav">
      <nav>
        <div className="eloomiLogo">
          <div className="eloomiLogoTop">
            el<span className="eloomiLogoTopFirstO">o</span>
            <span className="eloomiLogoTopSecondO">o</span>mi
          </div>
          <div className="eloomiLogoBottom">
            a <span className="eloomiLogoBottomBold">dayforce</span> company
          </div>
        </div>
        <ul className="navMenu">
          <li className="navMenuItem">Product<spna class="arrow">&#62;</spna></li>
          <li className="navMenuItem">Solutions<spna class="arrow">&#62;</spna></li>
          <li className="navMenuItem">Customers</li>
          <li className="navMenuItem">Pricing</li>
          <li className="navMenuItem">Resources<spna class="arrow">&#62;</spna></li>
          <li className="navMenuItem">Company<spna class="arrow">&#62;</spna></li>
        </ul>
        <button className="navButton">Book a Demo</button>
      </nav>
    </section>
  );
};

export default Nav;
