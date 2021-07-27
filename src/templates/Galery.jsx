import React from "react";
import "../css/style.css";
import styled from "styled-components";
import kontsert from "../img/kontsert.jpg";

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

const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms));
}

delay(2000).then(() => console.log("2 sec"));

const url = 'https://jsonplaceholder.typicode.com/todos';
/*
function fetchTodos(){
  console.log("start");
  return delay(2000).then(() => fetch(url)
  ).then(response => response.json())
}

fetchTodos()
.then(data => {console.log('Data:', data)})
.catch(e => console.error(e))
*/
const requestUrl = "https://jsonplaceholder.typicode.com/photos";
const arr = [];

async function fetchAsync(){
  try{
    const response = await fetch(requestUrl);
    const data = await response.json();
    
    if(data){
      data.forEach(item => {
        if(item.albumId === 1){
          arr.push(item);
        }
      });
    }
    
  }
  catch(e){
    console.error(e);
  }
}

fetchAsync();

/*

const arr = [];

fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
      if(data){
        data.forEach(item => {
          if(item.albumId === 1){
            arr.push(item);
          }
        });
      }
    })
*/

const Gallery = () => {
  return (
    <>
      <Section>
        <Container>
          {arr.map((arr, index) => (
            <>
            <Galery_div key={arr.id}>
              <Galery_a href={arr.url}><Img src={arr.url}></Img></Galery_a>
              {arr.title.includes("quis") ? <Desc back>{arr.title}</Desc> : <Desc>{arr.title}</Desc> }
            </Galery_div>
            </>
          ))}
        </Container>
      </Section>
    </>
  );
};

export default Gallery;
