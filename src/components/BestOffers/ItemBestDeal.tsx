import React, { useState } from "react";
import styled from "styled-components";
import { mockData } from "../../utils/mockData";
import { A, Box, P } from "../../utils/Tag";

import starSolidIcon from "../../Icon/star-solid.svg";
import starRegularIcon from "../../Icon/star-regular.svg";

type Prop = {
  active?: boolean;
};

const categories = [
  "Chair",
  "Child toys",
  "Wooden Light",
  "Kitchen Accessories",
];

export default function ItemBestDeal() {
  const [filterItem, setFilterItem] = useState(
    mockData.item.filter((value) => value.dailyDeal.includes(1))
  );

  const [Active, setActive] = useState(1);

  const select = (i: number) => {
    setActive(i);
    setFilterItem(mockData.item.filter((value) => value.dailyDeal.includes(i)));
  };

  return (
    <Box>
      <ControlFilterContain>
        <ItemFilter active={Active === 1} onClick={() => select(1)}>
          BEST SELLER
        </ItemFilter>
        <ItemFilter active={Active === 2} onClick={() => select(2)}>
          FEATURED
        </ItemFilter>
        <ItemFilter active={Active === 3} onClick={() => select(3)}>
          TOP PRODUCTS
        </ItemFilter>
      </ControlFilterContain>
      <ItemBestContain>
        {filterItem.map((item, i) => {
          const indexCategories = item.categories - 1;
          return (
            <Item key={i}>
              <ItemCover>
                <ContainImage>
                  <Image src={item.picture[0]} alt="" />
                  {item.discount > 0 ? (
                    <DiscountTag>{item.discount}% OFF</DiscountTag>
                  ) : (
                    <></>
                  )}
                </ContainImage>
              </ItemCover>
              <ItemContent>
                <P style={{ fontWeight: 600 }}>{item.name}</P>
                {(() => {
                  const rows = [];
                  for (let i = 0; i < 5; i++) {
                    if (i >= item.rate) {
                      rows.push(
                        <img key={i} src={starRegularIcon} width="16px" />
                      );
                    } else {
                      rows.push(
                        <img key={i} src={starSolidIcon} width="16px" />
                      );
                    }
                  }
                  return (
                    <RateContain>
                      {rows} ({item.comment})
                    </RateContain>
                  );
                })()}
                <P style={{ color: "#C9A75C" }}>${item.price.toFixed(2)} </P>
                <P style={{ color: "#B0B0B0", fontSize: "12px" }}>
                  {categories[indexCategories]}
                </P>
              </ItemContent>
            </Item>
          );
        })}
      </ItemBestContain>
    </Box>
  );
}

const ItemFilter = styled(A)`
  color: ${(props: Prop) => (props.active ? "#5CC9A3" : "#6A6A6A")};
`;

const ControlFilterContain = styled(Box)`
  flex-direction: row;
  justify-content: center;
  gap: 24px;
  font-size: 14px;
  margin: 0 0 27px;
`;

const ItemBestContain = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  gap: 30px;
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ItemContent = styled(Box)`
  text-align: start;
  gap: 11px;
`;

const RateContain = styled(Box)`
  flex-direction: row;
  gap: 6px;
`;

const Item = styled(Box)``;

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
  padding: 116% 0 0;
  margin-bottom: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const DiscountTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #5cc9a3;
  color: #ffffff;
  padding: 4px 8px;
`;
