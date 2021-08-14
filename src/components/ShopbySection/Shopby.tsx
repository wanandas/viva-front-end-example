import React from "react";
import styled from "styled-components";
import { categories } from "../../utils/mockData";
import { A, Box, P, Image } from "../../utils/Tag";
import { ArrowContain } from "../HeroSection/Home";

import arrowLeftIcon from "../../Icon/ArrowLeft.svg";
import arrowRightIcon from "../../Icon/ArrowRight.svg";

export default function Shopby() {
  return (
    <ShopbyContain>
      <TitleContain>
        <P
          style={{ color: "#5CC9A3", fontSize: "14px" }}
        >{`{ BEST COLLECTIONS }`}</P>
        <h2 style={{ margin: 0 }}>
          SHOP BY <span style={{ fontWeight: 500 }}>CATEGORIES</span>
        </h2>
        <P>
          Aobortis conubialaoreet pellentesque quod olorem nibh eius Facilis
          voluptate sequuy{" "}
        </P>
      </TitleContain>
      <ItemContain>
        <CategoriesArrowContain style={{ justifySelf: "end" }}>
          <img src={arrowLeftIcon} alt="" />
        </CategoriesArrowContain>
        {categories.map((value, i) => {
          return (
            <Item key={i}>
              <ItemCover>
                <ContainImage>
                  <Image src={value.cover} alt="" />
                </ContainImage>
              </ItemCover>
              {value.name}{" "}
            </Item>
          );
        })}
        <CategoriesArrowContain>
          <img src={arrowRightIcon} alt="" />
        </CategoriesArrowContain>
      </ItemContain>
      <div>
        <AllButton>{`{ all categories }`}</AllButton>
      </div>
    </ShopbyContain>
  );
}

const ShopbyContain = styled(Box)`
  text-align: center;
  padding: 10% 0 0;
  background-color: #fff;
`;

export const TitleContain = styled(Box)`
  gap: 15.4px;
`;

const ItemContain = styled(Box)`
  display: grid;
  padding: 40px 0;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 31px;
  margin: 0 auto;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const CategoriesArrowContain = styled(ArrowContain)`
  @media (max-width: 1366px) {
    display: none;
  }
`;

const Item = styled(Box)`
  width: 270px;
`;

const ItemCover = styled.div`
  position: relative;
  width: 270px;
`;

const ContainImage = styled.div`
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  padding: 100% 0 0 0; /* 34.37% = 100 / (w / h) = 100 / (640 / 220) */
  margin-bottom: 10px;
`;

export const AllButton = styled(A)`
  padding: 16.5px 39px;
  width: 100%;
  border: 2px solid #f5f5f5;
  color: #6a6a6a;
  text-transform: uppercase;
`;
