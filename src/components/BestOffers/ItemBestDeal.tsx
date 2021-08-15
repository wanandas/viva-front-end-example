import React, { useState } from "react";
import styled from "styled-components";
import { mockData } from "../../utils/mockData";
import { A, Box, P, Image } from "../../utils/Tag";

import starSolidIcon from "../../Icon/star-solid.svg";
import starRegularIcon from "../../Icon/star-regular.svg";

import cartAddIcon from "../../Icon/cartAdd.svg";
import heartIcon from "../../Icon/heart.svg";
import syncIcon from "../../Icon/sync.svg";

import arrowLIcon from "../../Icon/ArrowLeft.svg";
import arrowRIcon from "../../Icon/ArrowRight.svg";
import { useSelectItem } from "../../utils/customHook/useSelectItem";
import { IUser } from "../../App";

type Prop = {
  active?: boolean;
};

const categories = [
  "Chair",
  "Child toys",
  "Wooden Light",
  "Kitchen Accessories",
];

export default function ItemBestDeal({
  state,
  setCart,
}: {
  state: IUser;
  setCart: React.Dispatch<React.SetStateAction<IUser>>;
}) {
  const [filterItem, setFilterItem] = useState(
    mockData.item.filter((value) => value.dailyDeal.includes(1))
  );

  const [Active, setActive] = useState(1);

  const select = (i: number) => {
    setActive(i);
    setFilterItem(mockData.item.filter((value) => value.dailyDeal.includes(i)));
  };

  const { selectItem } = useSelectItem({
    state,
    setCart,
  });

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
                  <Image src={item.picture[0]} alt="cover image" />
                  {item.discount > 0 ? (
                    <DiscountTag>{item.discount}% OFF</DiscountTag>
                  ) : (
                    <></>
                  )}
                  <SelectContain>
                    <ItemSelect>
                      <img src={heartIcon} alt="" />{" "}
                    </ItemSelect>
                    <ItemSelect>
                      <img src={syncIcon} alt="" />{" "}
                    </ItemSelect>
                    <ItemSelect onClick={() => selectItem(item.id)}>
                      <img src={cartAddIcon} alt="" />{" "}
                    </ItemSelect>
                  </SelectContain>
                  {item.picture.length > 1 && (
                    <ControlPictureContain>
                      <ControlPictureSelect>
                        <img src={arrowLIcon} alt="" />{" "}
                      </ControlPictureSelect>
                      <ControlPictureSelect>
                        <img src={arrowRIcon} alt="" />{" "}
                      </ControlPictureSelect>
                    </ControlPictureContain>
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
                        <img
                          key={i}
                          src={starRegularIcon}
                          width="16px"
                          alt="star rate"
                        />
                      );
                    } else {
                      rows.push(
                        <img
                          key={i}
                          src={starSolidIcon}
                          width="16px"
                          alt="star rate"
                        />
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

const SelectContain = styled(Box)`
  position: absolute;
  display: flex;
  gap: 10px;
  bottom: 0;
  right: 50%;
  transform: translate(50%, -50%);
  flex-direction: row;
`;

const ItemSelect = styled(Box)`
  height: 40px;
  width: 40px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s all ease-in;

  &:hover {
    background-color: #5cc9a3;

    & img {
      filter: invert(100%) sepia(1%) saturate(7464%) hue-rotate(5deg)
        brightness(105%) contrast(104%);
    }
  }

  & img {
    filter: invert(98%) sepia(1%) saturate(326%) hue-rotate(185deg)
      brightness(115%) contrast(76%);
  }
`;

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
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
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

const Item = styled(Box)`
  position: relative;
  @media (max-width: 500px) {
    &:nth-child(n + 4) {
      display: none;
    }
  }
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
  padding: 116% 0 0;
  margin-bottom: 10px;

  & ${SelectContain} {
    opacity: 0;
  }

  &:hover {
    & ${SelectContain} {
      opacity: 1;
      display: flex;
      transition: 0.3s opacity linear;
    }
  }
`;

const DiscountTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #5cc9a3;
  color: #ffffff;
  padding: 4px 8px;
`;

const ControlPictureContain = styled(Box)`
  position: absolute;
  top: 10px;
  right: 10px;
  flex-direction: row;
`;

const ControlPictureSelect = styled(Box)`
  height: 30px;
  width: 30px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s all ease-in;

  &:hover {
    background-color: #5cc9a3;
  }
`;
