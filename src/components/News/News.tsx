import React from "react";
import styled from "styled-components";
import { Box, P } from "../../utils/Tag";
import { NewsItems } from "./NewsItems";

export default function News() {
  return (
    <NewsContain>
      <TitleContain>
        <h1 style={{ textTransform: "uppercase" }}>
          get Our product <span style={{ fontWeight: 400 }}>selling news</span>
        </h1>
        <P style={{ color: "#6A6A6A" }}>
          Aobortis conubialaoreet pellentesque quod olorem nibh eius Facilis
          voluptate sequuy
        </P>
      </TitleContain>
      <NewsItems />
    </NewsContain>
  );
}

const NewsContain = styled(Box)`
  padding: 61px 0 121px;
  background-color: #f5f5f5;
`;

const TitleContain = styled(Box)`
  text-align: center;
  letter-spacing: 0.025em;
`;
