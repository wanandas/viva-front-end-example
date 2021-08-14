import React from "react";
import styled from "styled-components";
import { mockData } from "../../utils/mockData";
import { Box, H4, P, Image } from "../../utils/Tag";

export function NewsItems() {
  return (
    <CardContain>
      {mockData.news.map((item, i) => {
        if (i > 2) return null;
        return (
          <Card key={i}>
            <CoverContain>
              <ContainImage>
                <Image src={item.cover} alt="" />
                <DateTag>{item.date}</DateTag>
              </ContainImage>
            </CoverContain>
            <ContentContain>
              <H4>{item.title}</H4>
              <P style={{ lineHeight: "25px" }}>{item.content}</P>
              <WritterContain>
                <P
                  style={{
                    lineHeight: "25px",
                    marginTop: "6px",
                    textTransform: "uppercase",
                    color: "#B0B0B0",
                  }}
                >
                  By ({item.writer}) | Comments ({item.commentCount})
                </P>
              </WritterContain>
            </ContentContain>
          </Card>
        );
      })}
    </CardContain>
  );
}
const CardContain = styled(Box)`
  margin: 40px auto;
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  gap: 30px;
  @media (max-width: 1366px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(Box)`
  max-width: 369px;

  @media (max-width: 1366px) {
    &:nth-last-child(1) {
      display: none;
    }
  }
`;

const ContainImage = styled(Box)`
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  padding: 69% 0 0;
`;

const CoverContain = styled(Box)`
  width: 369px;
`;

const ContentContain = styled(Box)`
  background-color: #fff;
  padding: 24px 30px;
  gap: 14px;
  height: 150px;
  border-radius: 0 0 5px 5px;
  position: relative;
`;

const WritterContain = styled(Box)`
  position: absolute;
  bottom: 34px;
`;
const DateTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 17px;
  background-color: #ffffff;
  padding: 4px 8px;
`;
