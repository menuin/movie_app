import React from "react";
import { FaYoutube } from "react-icons/fa";
import styled from "styled-components";

const DetailContainer = styled.div`
  background-color: #e5e5e5;
  height: 70%;
  margin: 0px 30px;
  border-radius: 50px;
  display: flex;
  box-shadow: 4px 4px 12px #c6c6c6;
`;
const DetailPoster = styled.img`
  width: 70%;
`;
const PosterContainer = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  width: 25%;
`;
const InfoContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-right: 50px;
`;
const TitleContainer = styled.div`
  font-family: "Noticia Text", serif;
  font-size: 50px;
`;
const SummaryContainer = styled.div`
  margin-top: 20px;
  font-family: "Noto Sans", sans-serif;
  line-height: 150%;
`;
const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const SmallInfo = styled.div`
  font-family: "Noto Sans", sans-serif;
`;
const YTbtnContainer = styled.div`
  color: #ff0000;
  margin-top: 10px;
  width: 70%;
  text-align: center;

  a {
    text-decoration: none;
    color: #ff0000;
  }
`;
function Detail({
  movie: {
    id,
    year,
    title,
    runtime,
    summary,
    large_cover_image,
    yt_trailer_code,
  },
}) {
  const yturl = "https://www.youtube.com/watch?v=" + yt_trailer_code;
  return (
    <DetailContainer>
      <PosterContainer>
        <DetailPoster src={large_cover_image} />

        <YTbtnContainer>
          <a href={yturl}>
            <FaYoutube size="60" />
          </a>
        </YTbtnContainer>
      </PosterContainer>
      <InfoContainer>
        <BasicInfo>
          <TitleContainer>{title}</TitleContainer>
          <SmallInfo>
            {year} | {runtime} mins
          </SmallInfo>
        </BasicInfo>
        <SummaryContainer>{summary}</SummaryContainer>
      </InfoContainer>
    </DetailContainer>
  );
}

export default Detail;
