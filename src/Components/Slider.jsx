import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import sliderItems from "./sliderItems";

import "swiper/css";
import "swiper/css/pagination";
import Container from "../layout/Container";

const Slides = styled.div`
  background: #f6fafd;
  padding: 100px 0;
  margin-top: 120px;
  & .swiper {
    margin-top: 30px;
    --swiper-theme-color: #0c1f41;
    --swiper-pagination-bullet-inactive-color: #a5a5a5;
    --swiper-pagination-bullet-inactive-opacity: 1;
    border-radius: 16px;
  }
`;
const Title = styled.h3`
  font-weight: 400;
  font-size: 38px;
  color: #0c1f41;
  text-align: center;
  margin-bottom: 2em;
  & span {
    color: #0048df;
  }
`;

const SliderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  & img {
    width: 467px;
    height: 266px;
  }

  & p {
    width: 386px;
    font-weight: 400;
    font-size: 28px;
    text-align: right;
    color: #0c1f41;
  }
`;

const Slider = () => {
  return (
    <Slides>
      <Container>
        <Title>
          Klinikamizdagi <span>master-klas</span>lar
        </Title>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {sliderItems.map((item, i) => (
            <SwiperSlide key={i}>
              <SliderInner>
                <img src={item.img} alt="" />
                <p>{item.text}</p>
              </SliderInner>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Slides>
  );
};

export default Slider;
