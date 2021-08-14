import styled from "styled-components";
import { COLOR } from "./COLOR";

export const A = styled.a`
  text-decoration: none;
  color: ${COLOR.GREY};
  cursor: pointer;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const P = styled.p`
  margin: 0;
`;

export const H4 = styled.h4`
  margin: 0;
  letter-spacing: 0.025em;
`;

export const Image = styled.img`
  max-width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
