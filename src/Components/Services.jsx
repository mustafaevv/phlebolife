import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

import Container from "../layout/Container";
import { services } from "./ServicesItes";

const Section = styled.section`
  margin-top: 120px;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: clamp(22px, 4vw, 38px);
  color: #0c1f41;
  text-transform: capitalize;
  margin-bottom: 10px;
  text-align: center;
  & span {
    color: #0048df;
  }
`;

const Desc = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #a5a5a5;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 2em;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
const Blocks = styled.div`
  max-width: 470px;
  width: 100%;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(138, 138, 138, 0.1);
  border-radius: 5px;
  padding: 0 0 40px 0;
`;
const Items = styled.div``;
const ItemsTitle = styled.h4`
  width: 100%;
  background: linear-gradient(90deg, #052d81 0%, #00bcff 100%);
  border-radius: 6px 6px 0px 0px;
  padding: 10px 0;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 60px;
`;
const ItemsList = styled.ul`
  list-style: none;
  text-align: right;
  padding-right: 40px;
`;
const ItemsLi = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 2.2;
  color: #0c1f41;
`;

const Services = () => {
  return (
    <Section>
      <Container>
        <Title>
          lazerli va oddiy obliteratsiyaning <span>9 farqi.</span>
        </Title>
        <Desc>
          Varikozni lazer va radiochastotali obliteratsiyada davolashning 9
          sababi.
        </Desc>
        <Content>
          <Blocks>
            <ItemsTitle>Lazerli yoki radiochastotali operatsiya </ItemsTitle>
            {services.map((items, i) => (
              <Items key={i}>
                <ItemsList>
                  <ItemsLi>
                    <FontAwesomeIcon icon={faCheckCircle} /> {items.name}
                  </ItemsLi>
                </ItemsList>
              </Items>
            ))}
          </Blocks>
          <Blocks>
            <ItemsTitle>Oddiy operatsiya</ItemsTitle>
            {services.map((items, i) => (
              <Items key={i}>
                <ItemsList>
                  <ItemsLi>{items.name}</ItemsLi>
                </ItemsList>
              </Items>
            ))}
          </Blocks>
        </Content>
      </Container>
    </Section>
  );
};

export default Services;
