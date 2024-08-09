import React from "react";
import "./solution_areas.css";

import {
  Divider,
  Section_text,
  Grid_areas,
  Button_bookDemo,
  Button_spp,
} from "components/CustomElements";

const Solution_areas = () => {
  return (
    <section id="solution_areas">
      <div class="solution_areas__context">
        <Section_text>
          <span>Solution Areas</span>
          <span>
            Achieve more with a dedicated <br /> elearning solution
          </span>
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
        <Divider>USE CASES</Divider>
        <Grid_areas>
          <div>Compliance training</div>
          <div>Content authoring</div>
          <div>Upskilling & reskilling</div>
          <div>People development</div>
          <div>Customer education</div>
          <div>Partner enablement</div>
          <div>Employee onboarding</div>
        </Grid_areas>
        <Divider>ROLES</Divider>
        <Grid_areas>
          <div>HR & talent</div>
          <div>Learning & development</div>
          <div>Customer success</div>
          <div>Sales enablement</div>
          <div>Product & marketing teams</div>
          <div>External enterprise</div>
          <div>Employee & frontline training</div>
        </Grid_areas>
        <Divider text={false}>
          <Button_bookDemo arrow={true} margin_right={true} />
          <Button_spp gray={true}></Button_spp>
        </Divider>
      </div>
    </section>
  );
};

export default Solution_areas;
