import React from "react";
import styled from "styled-components";
import { Box, P, H4 } from "../../utils/Tag";

import seviceIcon from "../../Icon/Service.svg";
import bagIcon from "../../Icon/bag.svg";
import carIcon from "../../Icon/carFree.svg";

export default function ServiceSection() {
  return (
    <ContainServiceSection>
      <ContainCard>
        <Card>
          <Box style={{ marginLeft: "10px" }}>
            <img src={seviceIcon} alt="" />
          </Box>
          <Box>
            <H4>24/7 online support</H4>
            <P>Call us for any order or delivery</P>
          </Box>
        </Card>

        <Card>
          <Box>
            <img src={bagIcon} alt="" />
          </Box>
          <Box>
            <H4>Save 20% Every Sell</H4>
            <P>Get offer for every day, month</P>
          </Box>
        </Card>
        <Card>
          <Box style={{ marginLeft: "10px" }}>
            <img src={carIcon} alt="" />
          </Box>
          <Box>
            <H4>Fast Free Shipping</H4>
            <P>Order up to $80</P>
          </Box>
        </Card>
      </ContainCard>
    </ContainServiceSection>
  );
}

const ContainServiceSection = styled(Box)`
  padding: 90px 0;
  background: rgba(0, 0, 0, 0.2);
  margin: 90px 0 0;
`;

const ContainCard = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  gap: 30px;

  @media (max-width: 1366px) {
    gap: 10px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(Box)`
  background-color: #fff;
  padding: 30px 0 30px 10px;
  width: 355px;
  justify-content: start;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  @media (max-width: 1366px) {
    width: 300px;
  }
  @media (max-width: 1024px) {
    width: 250px;
  }
`;
