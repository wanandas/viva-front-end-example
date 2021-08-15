import React from "react";
import styled from "styled-components";

import freeShippingIcon from "../../Icon/FreeShipping.svg";
import { COLOR } from "../../utils/COLOR";
import { A } from "../../utils/Tag";

export function FreeShipping() {
  return (
    <Contain>
      <FreeShippingNav>
        <img src={freeShippingIcon} alt="freeShippingIcon" />
        &nbsp; Free shipping for ordering up to &nbsp;$230
      </FreeShippingNav>
      <FreeShippingNav>
        <A>About</A>
        <A>Newsletter</A>
        <A>FAQS</A>
        <A>Contact</A>
      </FreeShippingNav>
    </Contain>
  );
}
const Contain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${COLOR.WHITE_2};
  font-size: 12px;
  text-transform: uppercase;
  align-content: center;
  padding: 18px 100px;
  @media (max-width: 1024px) {
    padding: 18px 10px;
    font-size: 8px;
  }
`;

const FreeShippingNav = styled.div`
  display: flex;
  word-break: break-all;
  gap: 24px;
  @media (max-width: 1024px) {
    gap: 16px;
  }

  @media (max-width: 500px) {
    & A {
      &:not(:nth-child(4)) {
        display: none;
      }
    }
  }
`;
