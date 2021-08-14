import React from "react";
import styled from "styled-components";
import { A, Box, P } from "../../utils/Tag";

import mockCover from "../../Icon/mockItemOffer.svg";

export default function Offer() {
  return (
    <OfferContain>
      <Card>
        <Cover>
          <img src={mockCover} alt="" />
        </Cover>
        <ContentContain>
          <P
            style={{
              textTransform: "uppercase",
              color: "#5CC9A3",
              fontSize: "14px",
            }}
          >
            Get 30% offer
          </P>
          <h1 style={{ textTransform: "uppercase", letterSpacing: "0.025em" }}>
            Smart Wooden watch 20.3
          </h1>
          <P style={{ lineHeight: "25px", color: "#6A6A6A" }}>
            Wuibusdam consequat, tempor earum sollicitudin sed pretium, eu.
            Corrupti minima fugit! Fuga deserunt cillum culpa? Diamlorem blandit
            tortor. Cras sagittis sollicitudin voluptate? Consequatur excepteur
          </P>
          <Box style={{ marginTop: "24px", gap: "32px" }}>
            <Box
              style={{
                flexDirection: "row",
                alignContent: "center",
                gap: "8px",
              }}
            >
              <P style={{ fontSize: "20px" }}>Color: </P>
              {["#7C7C7C", "#FD4E54", "#FF8181"].map((value) => (
                <ColorCircle color={value} />
              ))}{" "}
            </Box>
            <Box style={{ flexDirection: "row" }}>
              <div>
                <Button style={{ color: "#C9A75C" }}>
                  <span
                    style={{ textDecoration: "line-through", fontSize: "16px" }}
                  >
                    $62
                  </span>
                  &nbsp;&nbsp; $32
                </Button>
              </div>
              <div>
                <Button>Add to Cart</Button>
              </div>
            </Box>
            <Box>
              <P style={{ textTransform: "uppercase" }}>
                Category: <span style={{ color: "#5CC9A3" }}> Wall Clock</span>
              </P>
            </Box>
          </Box>
        </ContentContain>
      </Card>
    </OfferContain>
  );
}

const OfferContain = styled(Box)`
  padding: 90px 10px;
`;

const Card = styled(Box)`
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  @media (max-width: 1024px) {
    flex-direction: column;
    max-width: 550px;
  }
`;
const Cover = styled(Box)`
  width: 550px;
`;

const ContentContain = styled(Box)`
  padding: 0 50px;

  @media (max-width: 1024px) {
    padding-top: 50px;
  }
`;

const Button = styled(A)`
  padding: 16.5px 39px;
  width: 100%;
  border: 2px solid #f5f5f5;
  color: #6a6a6a;
  font-size: 20px;
  text-transform: uppercase;
`;

const ColorCircle = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.color};
  width: 15px;
  height: 15px;
  align-self: center;
`;
