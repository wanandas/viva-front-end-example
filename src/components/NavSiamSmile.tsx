import React from "react";
import styled from "styled-components";
import { A } from "../utils/Tag";

import siamSmileIcon from "../Icon/SiamSmile.svg";
import hambergerIcon from "../Icon/Hamberger.svg";
import callIcon from "../Icon/Call.svg";
import cartIcon from "../Icon/Cart.svg";
import seachIcon from "../Icon/Search.svg";
import lineBorderIcon from "../Icon/LineBorder.svg";

export function NavSiamSmile() {
  return (
    <Navbar>
      <ContainA>
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
      </ContainA>
      <ContainIcon>
        <Icon src={siamSmileIcon} alt="" />
      </ContainIcon>

      <ContainA>
        <A>
          <Icon src={callIcon} alt="callIcon" /> CALL US: 02-12345678
        </A>
        <A>LOGIN</A>
        <CotainSearchAndCart>
          <A>
            <Icon src={seachIcon} alt="seachIcon" />
          </A>
          <Icon src={lineBorderIcon}></Icon>
          <A>
            <Icon src={cartIcon} alt="seachIcon" />
          </A>
        </CotainSearchAndCart>
      </ContainA>
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
`;

const ContainA = styled.div`
  display: flex;
  gap: 32px;
  justify-self: flex-end;
`;

const SupNumber = styled.sup`
  font-size: 8px;
`;

const ContainIcon = styled.div`
  margin: 0 270px 0 135pxx;
  position: absolute;
  left: 40%;
`;

const CotainSearchAndCart = styled.div`
  display: flex;
  gap: 20.5px;
`;

const Icon = styled.img`
  vertical-align: middle;
`;
