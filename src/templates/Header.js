import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

function Header() {
  return (
    <header className="header sticky">
      <div className="nav">
        <a href="#" className="logo"></a>
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
        <a href="#" className="social youtube"></a>
        <a href="#" className="social instagram"></a>
        <a href="#" className="social vk"></a>
      </div>
    </header>
  );
}

export default Header;
