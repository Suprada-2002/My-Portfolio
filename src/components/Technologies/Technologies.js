import React from "react";
import {
  DiHtml5,
  DiReact,
  DiCss3,
  DiGithubAlt,
  DiJavascript1,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Skills and Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies from fron-end developing to
      Machine Learning.
    </SectionText>
    <SectionText>LANGUAGES :</SectionText>
    <List>
      <ListItem>
        <DiHtml5 />
        <ListContainer>
          <ListTitle>HTML</ListTitle>
          <ListParagraph>Experienced with HTML</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiCss3 />
        <ListContainer>
          <ListTitle>CSS</ListTitle>
          <ListParagraph>Experienced with CSS</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJavascript1 />
        <ListContainer>
          <ListTitle>JS</ListTitle>
          <ListParagraph>Experienced with JavaScript</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

    <SectionText>LIBRARIES:</SectionText>
    <List>
      <ListItem>
        <DiReact />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>Experienced with React</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionText>TOOLS :</SectionText>
    <List>
      <ListItem>
        <DiGithubAlt />
        <ListContainer>
          <ListTitle>GitHub</ListTitle>
          <ListParagraph>Experienced with Github</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
