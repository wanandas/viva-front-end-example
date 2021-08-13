import React from "react";
import styled from "styled-components";
import { NavSiamSmile } from "./NavSiamSmile";

import arrowLeftIcon from "../Icon/ArrowLeft.svg";
import arrowRightIcon from "../Icon/ArrowRight.svg";

import bg from "../Icon/bg.svg";

export default function Home() {
  return (
    <HomeContain>
      <NavSiamSmile />
      <HeroContain>
        <ArrowContain>
          <img src={arrowLeftIcon} alt="" />
        </ArrowContain>
        <ItemHero></ItemHero>
        <ArrowContain>
          <img src={arrowRightIcon} alt="" />
        </ArrowContain>
        <ItemSmallContain>s</ItemSmallContain>
      </HeroContain>
    </HomeContain>
  );
}

const HomeContain = styled.div`
  width: 100%;
`;

const HeroContain = styled.div`
  display: flex;
  position: relative;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const ArrowContain = styled.div`
  border-radius: 24px;
  border: 1px solid #f5f5f5;
  padding: 20px 20px;
  align-content: center;
  justify-content: center;
  display: flex;
  height: 20px;
  width: 20px;
`;

const ItemHero = styled.div`
  background: url(${bg});
  height: 613px;
  min-width: 1718px;
`;

const ItemSmallContain = styled.div`
  position: absolute;
  bottom: 0;
`;

const ItemSmall = styled.div``;

const SquareShape = styled.div``;

const TriangleShape = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
`;
