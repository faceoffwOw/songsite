import React from "react";
import styled from "styled-components";
import kontsert from "../img/kontsert.jpg"


const Section = styled.section
`
  width: auto;
  height: 82vh;
  padding: 5vh 10vh;
  background: url(${kontsert});
`;

const Container = styled.div
` 
  width: auto;
  height: 75vh;
  float: right;
  overflow-y: scroll;

  .element::-webkit-scrollbar { width: 0; }

`;

const Content = styled.div
` 
  width: auto;
  height: auto;
  margin: 5vh;
  color: #ff7e6d;
`;

const Tour = () => {
  return (
    <>
    <Section>
      <Container>
        <Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, vitae!</p>
        </Content>
        <Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, vitae!</p>
        </Content>
        <Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, vitae!</p>
        </Content>
        <Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, vitae!</p>
        </Content>
        <Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, vitae!</p>
        </Content>
        <Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, vitae!</p>
        </Content>
        <Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, vitae!</p>
        </Content>
        <Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, vitae!</p>
        </Content>
        <Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, vitae!</p>
        </Content>
        <Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, vitae!</p>
        </Content>
        <Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, vitae!</p>
        </Content>
        <Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, vitae!</p>
        </Content>
        <Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, vitae!</p>
        </Content>
      </Container>
    </Section>
    </>
  );
};

export default Tour;
