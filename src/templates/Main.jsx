import React from "react";
import { Redirect } from "react-router-dom";
import "../css/style.css";
import styled from "styled-components"
import kontsert from "../img/kontsert.jpg"


const Section = styled.section
`
  width: auto;
  height: 92vh;
  background: url(${kontsert});
`;

const Container = styled.div
`
  display: flex;
  float: left;
  margin: 5%;
`;

const Main = () => {
  return (
    <>
    <Section>
      <Container>
        <h1>Main</h1>
      </Container>
      <Container>
        <h1>Main 2</h1>
      </Container>
    </Section>
    </>
  );
}

export default Main;
