import React from "react";
import styled from "styled-components";
import { Box, P, H4, A } from "../../utils/Tag";

import { SubScribe } from "./SubScribe";

import pinIcon from "../../Icon/pin.svg";
import phoneIcon from "../../Icon/phone.svg";
import letterIcon from "../../Icon/letter.svg";
import arrowTop from "../../Icon/ArrowTop.svg";

import appStoreIcon from "../../Icon/appStore.svg";
import ggplayIcon from "../../Icon/googlePlay.svg";

export default function Footer() {
  return (
    <FooterContain>
      <SubScribe />
      <FooterContentContain>
        {/* 1 column */}
        <AbountColumnContain>
          <TitleColumn>
            About & <span style={{ color: "#c9a75c" }}> Locations </span>
          </TitleColumn>
          <Box style={{ alignItems: "start", gap: "25px" }}>
            <Box>
              <P>
                Dignissimos commodi amet nisi animi egestas cupidatat ntium
                minus ullam facere.
              </P>
            </Box>

            <Box style={{ alignItems: "start", gap: "10px" }}>
              <H4>
                <img src={pinIcon} alt="" /> &nbsp; Location
              </H4>
              <P>Viva business Co,.Ltd</P>
            </Box>

            <Box>
              <P>
                <img src={phoneIcon} alt="" /> &nbsp; +940-99382290
              </P>
            </Box>
            <Box>
              <P>
                <img src={letterIcon} alt="" /> &nbsp; info@siamsmile.com
              </P>
            </Box>
          </Box>
        </AbountColumnContain>

        <OurStoreColumnContain>
          <TitleColumn>
            Our Store <span style={{ color: "#c9a75c" }}> Locations </span>
          </TitleColumn>
          <Box style={{ gap: "10px" }}>
            <CustomA>New York</CustomA>
            <CustomA>London</CustomA>
            <CustomA>Los Angeles</CustomA>
            <CustomA>Chicago</CustomA>
            <CustomA>Las Vegas</CustomA>
            <CustomA>California</CustomA>
          </Box>
          <Box style={{ flexDirection: "row", gap: "10px" }}>
            <img src={appStoreIcon} alt="appstore" />
            <img src={ggplayIcon} alt="googleplay" />
          </Box>
        </OurStoreColumnContain>

        <OtherColumnContain>
          <TitleColumn>
            Social <span style={{ color: "#c9a75c" }}> Contact </span>
          </TitleColumn>
          <Box style={{ gap: "10px" }}>
            <CustomA>Facebook</CustomA>
            <CustomA>Instagram</CustomA>
            <CustomA>Twitter</CustomA>
            <CustomA>Dribbble</CustomA>
            <CustomA>Pinterest</CustomA>
            <CustomA>Linkedin</CustomA>
          </Box>
        </OtherColumnContain>

        <OtherColumnContain>
          <TitleColumn>
            Useful <span style={{ color: "#c9a75c" }}> Link </span>
          </TitleColumn>
          <Box style={{ gap: "10px" }}>
            <CustomA>About us</CustomA>
            <CustomA>Term of Service</CustomA>
            <CustomA>Privacy Policy</CustomA>
            <CustomA>Promotion</CustomA>
            <CustomA>Return</CustomA>
            <CustomA>Shipping</CustomA>
            <CustomA>My Account</CustomA>
            <CustomA>Track Your Order</CustomA>
          </Box>
        </OtherColumnContain>
      </FooterContentContain>
      <CopyRightContain style={{}}>
        <P>All right reserved @CopyRight & designed by Siamsmile</P>
        <Box
          style={{
            backgroundColor: "#5CC9A3",
            width: "40px",
            height: "40px",
            padding: "11px",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <A href="#home">
            <img src={arrowTop} alt="" />
          </A>
        </Box>
      </CopyRightContain>
    </FooterContain>
  );
}

const FooterContain = styled(Box)`
  position: relative;
  background-color: #1b1b1b;
`;

const FooterContentContain = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px;
  max-width: 100%;
  padding: 10% 19.8%;

  && ${Box} {
    align-items: flex-start;
  }

  @media (max-width: 1366px) {
    padding: 10% 8%;
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    gap: 10px;
  }
`;

const TitleColumn = styled.h2`
  position: relative;
  letter-spacing: 0.025em;
  color: #fff;
  position: relative;
  padding-bottom: 16px;

  &::after {
    width: 33px;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    height: 1px;
    background-color: #c9a75c;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 33px;
    right: 0;
    display: block;
    width: 86px;
    height: 1px;
    background-color: #fff;
  }
`;

const AbountColumnContain = styled(Box)`
  color: #fff;
`;

const OurStoreColumnContain = styled(Box)`
  & A {
    color: #fff;
  }
`;

const OtherColumnContain = styled(OurStoreColumnContain)``;

const CustomA = styled(A)`
  &:hover {
    color: #c9a75c;
  }
`;

const CopyRightContain = styled(Box)`
  background-color: #fff;
  color: #6a6a6a;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20%;

  @media (max-width: 1366px) {
    padding: 20px 8%;
  }
`;
