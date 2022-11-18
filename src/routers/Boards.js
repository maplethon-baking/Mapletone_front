import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getContents } from "../api";
import create_button from "../assets/create_button.png";
import speech_bubble from "../assets/speech_bubble.png";

import { CreateButton, SpeechBubble, SpeechDiv, SpeechText } from "./Recipe";

const Bubble = styled(SpeechBubble)`
  width: 240px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Contents = styled.div`
  display: grid;
  padding: 100px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  column-gap: 20px;
  row-gap: 20px;
  width: 100%;
  padding: 0px 20px;
  padding-top: 70px;
  max-width: 480px;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
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

export function Boards() {
  const { isLoading, data } = useQuery(["ContentImg"], getContents);
  return (
    <Container>
      <Contents>
        {data &&
          data.map((content) => (
            <Content key={content.id}>
              <ContentImg src={content.img} />
            </Content>
          ))}
      </Contents>
      <SpeechBox>
        <SpeechDiv>
          <SpeechText>나의 작품을 게시물로 올려보세요!</SpeechText>
          <Bubble src={speech_bubble} />
        </SpeechDiv>
        <CreateButton src={create_button} />
      </SpeechBox>
    </Container>
  );
}
