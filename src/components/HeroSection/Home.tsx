import React, { useState } from "react";
import styled from "styled-components";
import { NavSiamSmile } from "./NavSiamSmile";

import arrowLeftIcon from "../../Icon/ArrowLeft.svg";
import arrowRightIcon from "../../Icon/ArrowRight.svg";
import { mockData } from "../../utils/mockData";
import { A } from "../../utils/Tag";

export default function Home() {
  const [indexHero, setIndexHero] = useState(0);

  return (
    <HomeContain>
      <NavSiamSmile />
      <HeroContain>
        <ArrowContain
          onClick={() => {
            if (indexHero !== 0) {
              setIndexHero(indexHero - 1);
              console.log(indexHero);
            } else {
              setIndexHero(mockData.heroBg.length - 1);
              console.log(indexHero);
            }
          }}
        >
          <img src={arrowLeftIcon} alt="" />
        </ArrowContain>
        <ItemHeroContain>
          <ItemHero src={mockData.heroBg[indexHero].picture} alt="" />
          <ItemHeroContent>
            <p style={{ margin: 0 }}>
              UP TO {mockData.heroBg[indexHero].discount}% OFF
            </p>
            <h2 style={{ letterSpacing: ".25em", margin: 0 }}>
              {mockData.heroBg[indexHero].name},{" "}
              {mockData.heroBg[indexHero].type}
            </h2>
            <div style={{ marginTop: "20px" }}>
              <ItemHeroContentButton>{`{ Shop Now }`}</ItemHeroContentButton>
            </div>
          </ItemHeroContent>
        </ItemHeroContain>

        <ArrowContain
          onClick={() => {
            if (indexHero !== mockData.heroBg.length - 1) {
              setIndexHero(indexHero + 1);
              console.log(indexHero);
            } else {
              setIndexHero(0);
              console.log(indexHero);
            }
          }}
        >
          <img src={arrowRightIcon} alt="" />
        </ArrowContain>
        <ItemSmallContain>
          {mockData.itemSmall.map((value: string, i) => {
            return (
              <ItemSmall key={i}>
                <TriangleShape />
                <SquareShape>
                  <PictureItemSmall src={value} alt="" />
                </SquareShape>
              </ItemSmall>
            );
          })}
        </ItemSmallContain>
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

export const ArrowContain = styled.div`
  border-radius: 24px;
  border: 1px solid #f5f5f5;
  padding: 20px 20px;
  align-content: center;
  justify-content: center;
  display: flex;
  height: 20px;
  width: 20px;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ItemHeroContain = styled.div`
  position: relative;
  overflow: hidden;
`;

const ItemHero = styled.img`
  max-width: 100%;
  height: auto;
`;

const ItemHeroContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(50%, -50%);
  top: 50%;
  right: 50%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  gap: 20px;
`;

const ItemHeroContentButton = styled(A)`
  padding: 16.5px 39px;
  width: 100%;
  border: 2px solid #ffffff;
  color: #ffffff;
`;

const ItemSmallContain = styled.div`
  position: absolute;
  bottom: -10%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ItemSmall = styled.div``;

const SquareShape = styled.div`
  position: relative;
  height: 121px;
  width: 147px;
  background: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

const TriangleShape = styled.div`
  width: 0;
  height: 0;
  border-left: 73.5px solid transparent;
  border-right: 73.5px solid transparent;
  border-bottom: 18px solid #ffffff;
`;

const PictureItemSmall = styled.img`
  position: absolute;
  right: 21px;
  bottom: 17px;
`;
