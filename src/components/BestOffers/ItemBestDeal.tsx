import React, { useState } from "react";
import styled from "styled-components";
import { mockData } from "../../utils/mockData";
import { A, Box, P } from "../../utils/Tag";

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
                  <DiscountTag>{item.discount}</DiscountTag>
                </ContainImage>
              </ItemCover>
              <ItemContent>
                <P>{item.name}</P>
                <P></P>
                <P>{item.price}</P>
                <P>{categories[indexCategories]}</P>
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
  margin: 34px 0 27px;
`;

const ItemBestContain = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  gap: 30px;
`;

const ItemContent = styled(Box)`
  text-align: start;
  gap: 11px;
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
  top: 0;
  left: 0;
  width: 20px;
  background-color: #5cc9a3;
`;
