import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am
        <br />
        Suprada Tripathy
      </SectionTitle>
      <SectionText>
        Welcome to my Portfolio website. <br />
        I am intrested in Front-End Development and Machine Learning
        <br />
        Currently a student studing at GIET University.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/Suprada-2002")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
