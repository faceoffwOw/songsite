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
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/album">Альбом</Link>
          </li>
          <li>
            <Link to="/tour">Тур</Link>
          </li>
          <li>
            <Link to="/gallery">Галлерея</Link>
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
