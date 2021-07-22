import React from "react";
import styled from "styled-components";
import kontsert from "../img/kontsert.jpg"


const Section = styled.section
`
  width: auto;
  height: 78vh;
  padding: 7vh 10vh;
  background: url(${kontsert});
`;

const Container = styled.div
` 
  width: auto;
  height: 75vh;
  float: right;
  overflow-y: auto;

  .element::-webkit-scrollbar { width: 0; }

`;

const Content = styled.div
`
  display: flex;
  width: auto;
  height: auto;
  margin: 5vh;
  color: #ff7e6d;
`;

const ContentDate = styled.p
` 
  margin-right: 5vh;
`;

const ContentCity = styled.p
` 
`;

const Tour = () => {
  return (
    <>
    <Section>
      <Container>
        <Content>
          <ContentDate>13 Июня 2021 г.</ContentDate>
          <ContentCity>Новосибирск, "Records"</ContentCity>
        </Content>
        <Content>
          <ContentDate>13 Июня 2021 г.</ContentDate>
          <ContentCity>Новосибирск, "Records"</ContentCity>
        </Content>
        <Content>
          <ContentDate>13 Июня 2021 г.</ContentDate>
          <ContentCity>Новосибирск, "Records"</ContentCity>
        </Content>
        <Content>
          <ContentDate>13 Июня 2021 г.</ContentDate>
          <ContentCity>Новосибирск, "Records"</ContentCity>
        </Content>
        <Content>
          <ContentDate>13 Июня 2021 г.</ContentDate>
          <ContentCity>Новосибирск, "Records"</ContentCity>
        </Content>
        <Content>
          <ContentDate>13 Июня 2021 г.</ContentDate>
          <ContentCity>Новосибирск, "Records"</ContentCity>
        </Content>
      </Container>
    </Section>
    </>
  );
};

export default Tour;
