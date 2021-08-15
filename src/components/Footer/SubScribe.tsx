import React from "react";
import styled from "styled-components";
import { Box, P } from "../../utils/Tag";

import handIcon from "../../Icon/hand.svg";

export function SubScribe() {
  return (
    <SubscribeContain>
      <ContentContain>
        <P>
          <img src={handIcon} alt="" style={{ verticalAlign: "middle" }} />
          &nbsp;&nbsp; Subscribe our newsletter
        </P>
        <Box style={{ padding: "8px 8px", flexDirection: "row", gap: "15px" }}>
          <TextInput type="text" placeholder="Enter your mail here" />
          <Button>Subscribe</Button>
        </Box>
      </ContentContain>
    </SubscribeContain>
  );
}

const SubscribeContain = styled(Box)`
  position: absolute;
  top: 0;
  right: 50%;
  background-color: #ffffff;
  padding: 50px 59px;
  width: 1045px;
  transform: translate(50%, -50%);
  @media (max-width: 1280px) {
    width: 80%;
  }

  @media (max-width: 1024px) {
    position: unset;
    box-sizing: border-box;
    padding: 50px 10px 50px 0;
    width: 100%;
    transform: translate(0);
  }
`;

const TextInput = styled.input`
  padding: 15px 0 15px 20px;
  border: none;
  background-color: #f5f5f5;
  width: 420px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.a`
  padding: 22px 53px;
  color: #ffffff;
  background-color: #5cc9a3;
  text-transform: uppercase;
`;

const ContentContain = styled(Box)`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
