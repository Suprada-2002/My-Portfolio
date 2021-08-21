import React from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Section>
      <SectionDivider />
      <br />
      <SectionTitle>Contact Me</SectionTitle>

      <SectionText>Get in Touch with me - </SectionText>

      <SocialContainer>
        <SocialIcons href="https://github.com/Suprada-2002">
          <AiFillGithub size="5rem" />
        </SocialIcons>

        <SocialIcons href="https://www.linkedin.com/in/suprada-tripathy-2981a1201/">
          <AiFillLinkedin size="5rem" />
        </SocialIcons>

        <SocialIcons href="supradatripathy789@gmail.com">
          <AiFillMail size="5rem" />
        </SocialIcons>
      </SocialContainer>
    </Section>
  );
};

export default Footer;
