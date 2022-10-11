import React from "react";
import styled from "styled-components";

import aboutUs from "./AboutUsItems";
import Container from "../layout/Container";

const Section = styled.section`
  padding: 120px 0;
`;
const Content = styled.div``;
const Description = styled.h5`
  font-weight: 400;
  font-size: 16px;
  color: #a5a5a5;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1em;
  &:nth-child(2) {
    flex-direction: row-reverse;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    margin-bottom: 3em;
    &:nth-child(2) {
      flex-direction: column;
    }
  }
`;
const BlockLeft = styled.div`
  width: 45%;
  & h3 {
    font-weight: 600;
    line-height: 1.2;
    font-size: clamp(20px, 2vw, 28px);
    color: #0c1f41;
    margin-bottom: 0.6em;
  }

  & p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #a5a5a5;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;
const BlockRight = styled.div`
  width: 50%;

  & img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const AboutUs = () => {
  return (
    <Section>
      <Container>
        <Description>Biz haqimizda</Description>
        <Content>
          {aboutUs.map((item, i) => (
            <Block key={i}>
              <BlockLeft>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </BlockLeft>
              <BlockRight>
                <img src={item.img} alt="" />
              </BlockRight>
            </Block>
          ))}
        </Content>
      </Container>
    </Section>
  );
};

export default AboutUs;
