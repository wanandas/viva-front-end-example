import React from "react";
import styled from "styled-components";
import { mockData } from "../../utils/mockData";
import { Box } from "../../utils/Tag";

export default function Showcase() {
  return (
    <ShowcaseContain>
      {mockData.showCaseItem.map((item, i) => {
        return (
          <ItemShowcaseContain key={i}>
            <Image src={item.picture} />
            <CardItem>
              <div style={{ margin: "0 auto" }}>
                <p style={{ fontSize: "12px" }}>UP TO {item.discount}% OFF</p>
                <h2 style={{ textTransform: "uppercase" }}>{item.name},</h2>
                <h2 style={{ textTransform: "uppercase" }}>{item.type}</h2>
                <h4>
                  Starting From -{" "}
                  <span style={{ color: "#C9A75C" }}>${item.price}</span>
                </h4>
                <button
                  style={{
                    borderRadius: "24px",
                    color: "#ffffff",
                    backgroundColor: "#5CC9A3",
                    padding: "16px 36px",
                    border: "none",
                    marginTop: "30px",
                  }}
                >
                  SHOP NOW
                </button>
              </div>
            </CardItem>
            <CardBehide />
          </ItemShowcaseContain>
        );
      })}
    </ShowcaseContain>
  );
}

const ItemShowcaseContain = styled(Box)`
  position: relative;
  @media (max-width: 1280px) {
    &:nth-child(1) {
      display: none;
    }
  }
`;

const ShowcaseContain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin: 0 auto;
  padding: 90px 0 0;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const CardItem = styled(Box)`
  position: absolute;
  justify-content: center;
  background: #ffffff;
  top: 50%;
  right: 50%;
  width: 280px;
  height: 353px;
  transform: translate(50%, -50%);

  &::after {
    content: " ";
    position: absolute;
    justify-content: center;
    top: 55%;
    right: 45%;
    width: 280px;
    height: 353px;
    transform: translate(50%, -50%);
    border: 1px solid #ffffff;
  }
`;

const CardBehide = styled(Box)``;
