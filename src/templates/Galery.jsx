import React from "react";
import styled from "styled-components";
import kontsert from "../img/kontsert.jpg";
import axios from "axios";
import API from "../Api";

const Section = styled.section
`
  width: auto;
  padding: 7vh 10vh;
  background: url(${kontsert}) repeat-y;
`;

const Container = styled.div
`
  display: flex;
  flex-wrap: wrap;
`;

const Galery_div = styled.div
`
  width: 15%;
  height: 15%;
  margin: 2.5vh;
`;

const Galery_a = styled.a
`
`;

const Desc = styled.div
`
  width: 100%;
  height: 10%;
  background-color: ${props => props.back ? "green" : "yellow"}
`;

const Img = styled.img
`
  src: url(${props => props.src});
  width: 100%;
  heigth: 90%
`;

const requestUrl = "https://jsonplaceholder.typicode.com/photos";

class Galery extends React.Component{
  state = {
    arr: [],
  }

  async componentDidMount(){
    const elemDel = 4950;
    const response = await API.get(`photos?albumId=1`);
    const arr = await response.data;
    await this.setState({arr});
  }
  
  render() {
    return (
      <>
      <Section>
        <Container>
        {this.state.arr.map(item => (
          <Galery_div key={item.id}>
          <Galery_a href={item.url}><Img src={item.url}></Img></Galery_a>
          {item.title.includes("quis") ? <Desc back>{item.title}</Desc> : <Desc>{item.title}</Desc> }
          </Galery_div>
        ))}
        </Container>
      </Section>
      </>
    )
  }
}

export default Galery;