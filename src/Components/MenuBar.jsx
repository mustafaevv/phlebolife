import React, { useEffect } from "react";
import styled from "styled-components";

import links from "../router";

const Navbar = styled.nav`
  position: absolute;
  right: ${({ isActive }) => (isActive ? "0" : "-100%")};
  top: 102%;
  overflow: hidden;
  width: 300px;
  height: 100vh;
  z-index: 10;
  transition: 0.6s ease-in-out;
  background: #fff;
  padding: 50px 30px 0 40px;
`;

const List = styled.ul`
  text-align: left;
  width: 100%;
  padding-left: 0;
  list-style: none;
`;

const Link = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 2;
  color: #a5a5a5;
  text-decoration: none;
  transition: 0.4s color;
  &:hover {
    color: #0c1f41;
  }
`;

const MenuBar = ({ isActive, handleClickActive }) => {
  useEffect(() => {
    isActive === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, []);
  return (
    <Navbar isActive={isActive}>
      <List>
        {links.map(({ name, link }, i) => (
          <li key={i}>
            <Link onClick={handleClickActive} href={link}>
              {name}
            </Link>
          </li>
        ))}
      </List>
    </Navbar>
  );
};

export default MenuBar;
