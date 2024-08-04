import React, { useEffect, useState } from "react";
import "./nav.css";
import useScrollListener from "./../../hooks/useScroll";

const Nav = () => {
  // update classList of nav on scroll
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 10)
      _classList.push("nav-change");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);
  
  return (
    <section id="nav">
      <nav className={navClassList.join(" ")}>
        <div className="items">
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
            <li className="navMenuItem">
              Product<span className="arrow">&#62;</span>
            </li>
            <li className="navMenuItem">
              Solutions<span className="arrow">&#62;</span>
            </li>
            <li className="navMenuItem">Customers</li>
            <li className="navMenuItem">Pricing</li>
            <li className="navMenuItem">
              Resources<span className="arrow">&#62;</span>
            </li>
            <li className="navMenuItem">
              Company<span className="arrow">&#62;</span>
            </li>
          </ul>
          <button className="STYLEbtnBookDemo">Book a Demo</button>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
