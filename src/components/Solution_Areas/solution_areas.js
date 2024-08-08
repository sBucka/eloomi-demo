import React from "react";
import "./solution_areas.css";

import { Divider, Section_text, Grid_areas } from "components/CustomElements";

import smileSvg from "./../../assets/smile.svg";

const Solution_areas = () => {
  return (
    <section id="solution_areas">
      <div class="solution_areas__context">
        <Section_text>
          <span>Solution Areas</span>
          <span>Achieve more with a dedicated elearning solution</span>
          <span>
            No matter your industry, size, or use case, we’ve got you covered
            with a tailored learning & development platform that scales with
            you. From industry-specific training, to essentials like compliance
            and onboarding, eloomi supports your organization to succeed.
          </span>
        </Section_text>
        <Divider>INDUSTRIES</Divider>
        <Grid_areas>
          <div>Retail</div>
          <div>Healthcare</div>
          <div>Hospitality</div>
          <div>Software</div>
          <div>Finance</div>
          <div>Manufacturing</div>
        </Grid_areas>
      </div>
    </section>
  );
};


export default Solution_areas;
