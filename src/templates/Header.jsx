import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import background_img from "../img/background.jpg"
import logo from "../img/headphones.svg"
import logo_hover from "../img/headphones_hover.svg"
import youtube from "../img/youtube.svg"
import youtube_hover from "../img/youtube_hover.svg"
import instagram from "../img/instagram.svg"
import instagram_hover from "../img/instagram_hover.svg"
import vk from "../img/vk.svg"
import vk_hover from "../img/vk_hover.svg"


const Head = styled.header
`
  position: sticky;
  top: 0;
  margin: 0 auto;
  background: url(${background_img});
`;

const Nav = styled.div
`
  height: 8vh;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

const Head_ul = styled.ul
`
  display: flex;
`;

const Head_li = styled.li`
  text-decoration: none;
  font-size: 18px;
  list-style-type: none;
  margin-right: 109px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  /* icon blur */
  text-shadow: 0px 4px 70px rgba(253, 255, 176, 0.78);
`;

const NavLink = styled(Link)
`
  color: #ff7e6d;
  opacity: 100%;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #ffd26d;
    opacity: 100%;
  }
`;

const Logo = styled.a
`
  width: 40px;
  height: 38px;
  margin-left: 430px;
  margin-right: 77px;
  /* icon blur */
  filter: drop-shadow(0px 4px 70px rgba(253, 255, 176, 0.78));
  background: url(${logo});

  &:hover {
    background: url(${logo_hover});
  }
`;


const Youtube = styled.a
`
  margin-right: 50px;
  /* icon blur */
  filter: drop-shadow(0px 4px 70px rgba(253, 255, 176, 0.78));
  background: transparent;
  width: 40px;
  height: 30px;
  background: url(${youtube});

  &:hover {
    background: url(${youtube_hover});
  }
`;

const Instagram = styled.a
`
  margin-right: 50px;
  /* icon blur */
  filter: drop-shadow(0px 4px 70px rgba(253, 255, 176, 0.78));
  background: transparent;
  width: 40px;
  height: 40px;
  background: url(${instagram});

  &:hover {
    background: url(${instagram_hover});
  }
`;

const Vk = styled.a
`
  margin-right: 50px;
  /* icon blur */
  filter: drop-shadow(0px 4px 70px rgba(253, 255, 176, 0.78));
  background: transparent;
  width: 40px;
  height: 24px;
  background: url(${vk});

  &:hover {
    background: url(${vk_hover});
  }
`;

function Header() {
  return (
    <>
    <Head>
      <Nav>
        <Logo></Logo>
        <Head_ul>
          <Head_li>
              <NavLink to="/">Главная</NavLink>
          </Head_li>
          <Head_li>
            <NavLink to="/album">Альбом</NavLink>
          </Head_li>
          <Head_li>
            <NavLink to="/tour">Тур</NavLink>
          </Head_li>
          <Head_li>
            <NavLink to="/gallery">Галлерея</NavLink>
          </Head_li>
        </Head_ul>
        <Youtube></Youtube>
        <Instagram></Instagram>
        <Vk></Vk>
      </Nav>
    </Head>
    
    </>
  );
}

export default Header;
