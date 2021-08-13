import React from "react";
import styled from "styled-components";

import siamSmileIcon from "../../Icon/SiamSmile.svg";
import hambergerIcon from "../../Icon/Hamberger.svg";
import callIcon from "../../Icon/Call.svg";
import cartIcon from "../../Icon/Cart.svg";
import seachIcon from "../../Icon/Search.svg";
import lineBorderIcon from "../../Icon/LineBorder.svg";
import { A } from "../../utils/Tag";

export function NavSiamSmile() {
  return (
    <Navbar>
      <ContainMenu>
        <A>
          <Icon src={hambergerIcon} alt="hambergerIcon" />
        </A>
        <A>
          HOME<SupNumber style={{ fontSize: "8px" }}>10</SupNumber>
        </A>
        <A>
          SHOP<SupNumber style={{ fontSize: "8px" }}>13</SupNumber>
        </A>
        <A>
          PRODUCTS<SupNumber style={{ fontSize: "8px" }}>54</SupNumber>
        </A>
        <A>
          PAGES<SupNumber style={{ fontSize: "8px" }}>29</SupNumber>
        </A>
        <A>BLOG</A>
        <A>CONTACT</A>
      </ContainMenu>

      <ContainIcon>
        <Icon src={siamSmileIcon} alt="" />
      </ContainIcon>

      <ContainLogin>
        <A>
          <Icon src={callIcon} alt="callIcon" /> CALL US: 02-12345678
        </A>
        <A>LOGIN</A>
        <CotainSearchAndCart>
          <Icon src={seachIcon} alt="seachIcon" />
          <Icon src={lineBorderIcon}></Icon>
          <Icon src={cartIcon} alt="seachIcon" />
        </CotainSearchAndCart>
      </ContainLogin>
    </Navbar>
  );
}

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 24px 100px;
  @media (max-width: 1024px) {
    padding: 24px 10px;
  }
`;

const ContainA = styled.div`
  display: flex;
  gap: 32px;
`;

const ContainMenu = styled(ContainA)`
  @media (max-width: 1024px) {
    & A {
      &:not(:nth-child(1)) {
        display: none;
      }
    }
  }
`;

const ContainLogin = styled(ContainA)`
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    & A {
      display: none;
    }
  }
`;

const SupNumber = styled.sup`
  font-size: 8px;
`;

const ContainIcon = styled.div`
  position: absolute;
  left: 40%;
  @media (max-width: 1024px) {
    position: unset;
  }
`;

const CotainSearchAndCart = styled.div`
  display: flex;
  gap: 20.5px;
`;

const Icon = styled.img`
  vertical-align: middle;
`;
