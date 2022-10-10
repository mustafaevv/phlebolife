import React from "react";
import styled from "styled-components";

import Container from "../layout/Container";
import doctorsAbout from "./SpecialistsItems";

const Section = styled.section`
  margin-top: 120px;
`;

const Title = styled.h4`
  font-weight: 400;
  font-size: clamp(22px, 4vw, 38px);
  color: #0048df;
  text-align: center;
  margin-bottom: 3em;
  & span {
    color: #0c1f41;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10em;

  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 270px;
  width: 100%;
`;
const BlockImg = styled.img`
  width: 100%;
  margin-bottom: 1em;
`;
const Name = styled.h5`
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  color: #0c1f41;
  margin-bottom: 0.9em;
`;
const Item = styled.p`
  font-weight: 400;
  font-size: 12px;
  text-align: left;
  color: #a5a5a5;
  margin-bottom: 2em;
`;

const BlockLink = styled.a`
  margin-top: auto;
`;

const Specialists = () => {
  return (
    <Section>
      <Container>
        <Title>
          Mutaxassislarimiz <span> bilan tanishing</span>
        </Title>
        <Content>
          {doctorsAbout.map((item, i) => (
            <Block key={i}>
              <BlockImg src={item.img} alt={`${item.name}${item.specialist}`} />
              <Name>{item.name}</Name>
              <Item>{item.specialist}</Item>
              <BlockLink href="#!">batafsil</BlockLink>
            </Block>
          ))}
        </Content>
      </Container>
    </Section>
  );
};

export default Specialists;
