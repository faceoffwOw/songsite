import React from "react";
import styled from "styled-components";
import kontsert from "../img/kontsert.jpg";
import axios from "axios";
import API from "../Api";
import zoomAPI from "../zoomAPI";

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
    name: "",
    email: "",
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
    console.log("change");
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
    };

    API.post(`users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }  

  handleEmailChange = event =>{
    this.setState({email: event.target.value});
    console.log(this.state.email);
  }
  
  handleGetUser = event =>{
    event.preventDefault();
    var jwt = require('jsonwebtoken');
    var api_key = '';
    var api_secret = '';

    var payload = {
        iss: api_key,
        exp: ((new Date()).getTime() + 5000)
    };

    //Automatically creates header, and returns JWT
    var token = jwt.sign(payload, api_secret);

    zoomAPI.get(`users/${this.state.email}`, {
      headers: {
        "Authorization": 'Bearer ' + token,
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      redirect: 'follow',
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    })
  }

  async componentDidMount(){
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
        <form onSubmit={this.handleGetUser}>
          <label>
            Person Name:
            <input type="text" name="email" onChange={this.handleEmailChange} />
          </label>
          <button type="submit">zoom</button>
        </form>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        </Container>
      </Section>
      </>
    )
  }
}

export default Galery;