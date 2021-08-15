import React from "react";
import styled from "styled-components";
import { IUser } from "../../App";
import { Box, P } from "../../utils/Tag";
import { AllButton, TitleContain } from "../ShopbySection/Shopby";
import ItemBestDeal from "./ItemBestDeal";

export default function BestOffers({
  state,
  setCart,
}: {
  state: IUser;
  setCart: React.Dispatch<React.SetStateAction<IUser>>;
}) {
  return (
    <BestOffersContain>
      <TitleContain>
        <h2
          style={{
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "0.025em",
          }}
        >
          Best Daily Deal <span style={{ fontWeight: 500 }}>Offers</span>
        </h2>
        <P>
          Aobortis conubialaoreet pellentesque quod olorem nibh eius Facilis
          voluptate sequuy
        </P>
      </TitleContain>
      <ItemBestDeal state={state} setCart={setCart} />
      <Box>
        <div>
          <AllButton>{`{ all categories }`}</AllButton>
        </div>
      </Box>
    </BestOffersContain>
  );
}

const BestOffersContain = styled(Box)`
  text-align: center;
  padding: 92px 0 0;
  background-color: #fff;
  gap: 34px;
`;
