import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getContents } from "../api";
import create_button from "../assets/create_button.png";
import speech_bubble from "../assets/speech_bubble.png";

import backImg from "../assets/background.svg";

const CreateButtonImg = styled.img`
  width: 50px;
`;
const Bubble = styled.img`
  width: 240px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  background:url(${backImg});
  background-size: cover;
  /* padding-top: 120px; */
`;

const SpeechDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
`;
const SpeechText = styled.span`
  position: absolute;
  text-align: center;
  transform: translate(6%, 50%);
  color: white;
`;

const Contents = styled.div`
  display: grid;
  padding: 100px 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  column-gap: 20px;
  row-gap: 20px;
  width: 100%;
  /* padding: 0px 20px;
  padding-top: 70px; */
  max-width: 480px;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 220px;
`;

const SpeechBox = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Content = styled.div``;

const ContentImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const CreateButton = styled.button`
  width: 50px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
`;

export function Boards() {
  const { isLoading, data } = useQuery(["ContentImg"], getContents);
  const navigate = useNavigate();
  return (
    <Container>
      <Contents>
        {data &&
          data.map((content) => (
            <Content key={content.id}>
              <ContentImg src={content.picture} />
            </Content>
          ))}
      </Contents>
      <SpeechBox>
        <SpeechDiv>
          <SpeechText>나의 작품을 게시물로 올려보세요!</SpeechText>
          <Bubble src={speech_bubble} />
        </SpeechDiv>
        <CreateButton type="button" onClick={() => navigate("/write")}>
          <CreateButtonImg src={create_button} />
        </CreateButton>
      </SpeechBox>
    </Container>
  );
}
