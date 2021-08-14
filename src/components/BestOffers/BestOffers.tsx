import React from "react";
import styled from "styled-components";
import { Box, P } from "../../utils/Tag";
import { TitleContain } from "../ShopbySection/Shopby";
import ItemBestDeal from "./ItemBestDeal";

export default function BestOffers() {
  return (
    <BestOffersContain>
      <TitleContain>
        <h2
          style={{
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: ".20ch",
          }}
        >
          Best Daily Deal <span style={{ fontWeight: 500 }}>Offers</span>
        </h2>
        <P>
          Aobortis conubialaoreet pellentesque quod olorem nibh eius Facilis
          voluptate sequuy
        </P>
      </TitleContain>
      <ItemBestDeal />
      <Box></Box>
    </BestOffersContain>
  );
}

const BestOffersContain = styled(Box)`
  text-align: center;
  padding: 92px 0 0;
  background-color: #fff;
`;
