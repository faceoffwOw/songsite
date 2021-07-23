import React from "react";
import "../css/style.css";
import pic from "../img/s1200.jpg";

const requestUrl = "https://jsonplaceholder.typicode.com/photos";

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


const Gallery = () => {
  return (
    <>
      <section>
        <div className="container">
          {arr.map((arr, index) => (
            <div className="galery">
            <a href={arr.url}>
              <img src={arr.url} width="600" height="600"></img>
            </a>
            <div className="desc">{arr.title}</div>
            </div>
          ))}
          <div className="galery">
            <a href={pic}>
              <img src={pic} width="600" height="400"></img>
            </a>
            <div className="desc">Add photos</div>
          </div>
          <div className="galery">
            <a href={pic}>
              <img src={pic} width="600" height="400"></img>
            </a>
            <div className="desc">Add photos</div>
          </div>
          <div className="galery">
            <a href={pic}>
              <img src={pic} width="600" height="400"></img>
            </a>
            <div className="desc">Add photos</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
