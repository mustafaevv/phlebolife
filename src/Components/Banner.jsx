import React, { useEffect, useState } from "react";
import {
  faClose,
  faLocationDot,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import Container from "../layout/Container";
import img from "../static/images/banner.png";

const Block = styled.section`
  background: url(${img});
  background-position: center;
  backdrop-filter: blur(10px);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
`;

const Items = styled(Container)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: ${({ open }) => (open ? "-10" : "0")};
`;

const Desc = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 0.7em;
  margin-top: auto;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: clamp(30px, 5vw, 51px);
  line-height: 1.1;
  color: #ffffff;
  max-width: 627px;
  margin-bottom: 0.3em;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #ffffff;
  max-width: 45vh;
  margin-bottom: 3em;
`;

const Controller = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;
  margin-bottom: 5em;

  @media (max-width: 420px) {
    flex-direction: column;
    gap: 3em;
  }
`;

const Button = styled.button`
  background: ${({ isActive }) =>
    isActive ? " linear-gradient(90deg, #052D81 0%, #00BCFF 100%)" : "none"};
  text-decoration: ${({ isActive }) => (isActive ? "none" : "underline")};
  border: none;
  border-radius: 23.5px;
  padding: 0 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 50px;
  color: #ffffff;
  cursor: pointer;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin-top: auto;
  margin-bottom: 6em;
`;

const Location = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
`;

const Modal = styled.div`
  overflow: ${({ open }) => (open ? "hidden" : "scroll")};
  width: ${({ open }) => (open ? "100%" : "30%")};
  height: 110vh;
  position: ${({ open }) => (open ? "absolute" : "fixed")};
  top: ${({ open }) => (open ? "-10%" : "-100%")};
  left: ${({ open }) => (open ? "0%" : "-100%")};
  z-index: ${({ open }) => (open ? "10000" : "10")};
  background: ${({ open }) => (open ? "rgba(0, 0, 0, 0.674)" : "none")};
  backdrop-filter: blur(10px);
  display: ${({ open }) => (open ? "flex" : "none")};
  opacity: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s background;
`;

const ModalWindow = styled.div`
  top: ${({ open }) => (open ? "40%" : "-100%")};
  position: absolute;
  background: #ffffff;
  z-index: 5;
  border-radius: 5px;
  padding: 20px 30px;
  transition: 0.8s top;
`;

const ModalWindowTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & p {
    font-weight: 400;
    font-size: 16px;
    color: #a5a5a5;
  }
  & button {
    border: none;
    color: #a5a5a5;
    background: none;
    font-size: 20px;
    cursor: pointer;
    transition: 0.5s color;
    &:hover {
      color: #0c1f41;
    }
  }
`;
const ModalWindowBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  & a {
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    line-height: 1.5;
    text-decoration: none;
    color: #0c1f41;
  }
  & form {
    display: flex;
    align-items: center;
    margin-bottom: 2em;
    width: 100%;

    & input {
      border: none;
      padding-bottom: 5px;
      border-bottom: 1px solid #a5a5a5;
      font-weight: 400;
      font-size: 16px;
      color: #0c1f41;
      outline: none;
      caret-color: #a5a5a5;
      &::placeholder {
        font-weight: 400;
        font-size: 16px;
        color: #a5a5a5;
      }
    }
  }
`;

const DropDown = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropDownButton = styled.button`
  margin-top: 20px;
  width: 100%;
  line-height: 35px;
  border: none;
  background: #0c1f41;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Banner = () => {
  const [isActive, setIsActive] = useState(true);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => {
    setOpen((state) => !state);
  };
  const handleClickButton = () => {
    setIsActive((state) => state);
    setModalOpen((state) => !state);
  };
  return (
    <Block open={open}>
      <Items open={open}>
        <Desc>
          Oyoq surunkali vena va limfa kasalliklarni davolovchi klinika
        </Desc>
        <Title>
          Oyoqlarda “varikoz” bo‘lsa albatta qabulga yoziling yordam beramiz!
        </Title>
        <Text>
          Bizda dalillarga asoslangan xolda, oyoq varikoz kasalligini eng
          zamonaviy davolash usullari! Flebolog maslaxati oyoq vena dopleri
          bilan 170 000 so‘m{" "}
        </Text>
        <Controller>
          <Button onClick={handleClickButton} isActive={isActive}>
            {" "}
            Ko‘rikka yozilish{" "}
          </Button>
          <Button onClick={handleOpen}> Biz bilan bog‘lanish </Button>
        </Controller>
        <Item>
          <Location>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} /> Toshkent
          </Location>
          <Location>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} /> Samarqand
          </Location>
        </Item>
        <Modal open={open}>
          <ModalWindow open={open}>
            <ModalWindowTop>
              <p>Biz bilan bog‘lanish</p>
              <button onClick={handleOpen}>
                {" "}
                <FontAwesomeIcon icon={faClose} />{" "}
              </button>
            </ModalWindowTop>
            <ModalWindowBottom>
              <a href="tel+998712356100">Toshkent +998 (71) 235-61-00</a>
              <a href="tel:+998954106100">Samarqand +998 (95) 410-61-00</a>
            </ModalWindowBottom>
          </ModalWindow>
        </Modal>
        <Modal open={modalOpen}>
          <ModalWindow open={modalOpen}>
            <ModalWindowTop>
              <p>Ko‘rikka yozilish</p>
              <button onClick={handleClickButton}>
                {" "}
                <FontAwesomeIcon icon={faClose} />{" "}
              </button>
            </ModalWindowTop>
            <ModalWindowBottom>
              <form action="">
                <input type="text" placeholder="Ismingiz*" />
                <FontAwesomeIcon icon={faPen} />
              </form>
              <form action="">
                <input type="text" placeholder="Telefon*" />
                <FontAwesomeIcon icon={faPen} />
              </form>
              <DropDown>
                <p>Shahar</p>
                <select name="" id="">
                  <option value="toshkent">toshkent</option>
                  <option value="samarqand">samarqand</option>
                </select>
              </DropDown>
              <DropDownButton onClick={handleClickButton}>
                yuborish
              </DropDownButton>
            </ModalWindowBottom>
          </ModalWindow>
        </Modal>
      </Items>
    </Block>
  );
};

export default Banner;
