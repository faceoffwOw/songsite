import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import youtube from "../img/youtube.svg";
import instagram from "../img/instagram.svg";
import vk from "../img/vk.svg";
import headphones from "../img/headphones.svg";

function Header() {
  return (
    <header className="header sticky">
      <div className="nav">
        <a href="#" className="logo">
          <img src={headphones} />
        </a>
        <ul className=" menu">
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/album">Альбом</a>
          </li>
          <li>
            <a href="/tour">Тур</a>
          </li>
          <li>
            <a href="/galery">Галерея</a>
          </li>
        </ul>
        <a href="#" className="social">
          <img src={youtube} alt="song" />
        </a>
        <a href="#" className="social">
          <img src={instagram} alt="song" />
        </a>
        <a href="#" className="social">
          <img src={vk} alt="song" />
        </a>
      </div>
    </header>
  );
}

export default Header;
