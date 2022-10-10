import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

import logo from "../static/images/logo.svg";
import Container from "../layout/Container";
import MenuBar from "./MenuBar";
import links from "../router";

const HeaderItem = styled.header`
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
`;

const Blocks = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.img`
  width: 205px;
  height: 30px;
  object-fit: cover;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.5em;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1em;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const HeaderLink = styled.a`
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

const Select = styled.button`
  display: flex;
  font-weight: 400;
  font-size: 16px;
  font-weight: bold;
  color: #0c1f41;
  text-transform: capitalize;
  text-decoration: none;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;

  & svg {
    display: flex;
    align-items: center;
    gap: 0.5em;
    transform: ${({ isOpen }) =>
      isOpen ? "rotateX(0deg)" : "rotateX(180deg)"};
    transition: 0.3s transform;
  }
`;

const Btn = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const handleClickActive = () => setIsActive((state) => !state);
  const handleDropClick = () => {
    setIsOpen((state) => !state);
  };
  return (
    <HeaderItem>
      <Blocks>
        <Link to={"/"}>
          <HeaderLogo src={logo} alt="Phlebolife Logo" />
        </Link>
        <List>
          <Ul>
            {links.map((item, i) => (
              <li key={i}>
                <HeaderLink href={item.link}>{item.name}</HeaderLink>
              </li>
            ))}
          </Ul>
          <Select href="#!" isOpen={isOpen} onClick={handleDropClick}>
            uzb <AiFillCaretDown />
          </Select>
          <MenuBar isActive={isActive} handleClickActive={handleClickActive} />
          <Btn>
            <Hamburger toggled={isActive} toggle={setIsActive} />
          </Btn>
        </List>
      </Blocks>
    </HeaderItem>
  );
};

export default Header;
