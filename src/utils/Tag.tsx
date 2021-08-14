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
