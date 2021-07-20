import React from "react";
import "../css/style.css";
import pic from "../img/s1200.jpg";

const Gallery = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="gallery">
            <a href={pic}>
              <img src={pic} width="600" height="400"></img>
            </a>
            <div className="desc">Add photos</div>
          </div>
          <div className="gallery">
            <a href={pic}>
              <img src={pic} width="600" height="400"></img>
            </a>
            <div className="desc">Add photos</div>
          </div>
          <div className="gallery">
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
