import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getContents } from "../api";
import create_button from "../assets/create_button.png";
import speech_bubble from "../assets/speech_bubble.png";
import { Content } from "../components/Content";
import { Clicked, Overlay } from "./Search";

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

  background: url(${backImg});
  background-size: cover;
  /* padding-top: 120px; */
`;

const SpeechDiv = styled.div``;
const SpeechText = styled.span`
  position: absolute;
  text-align: center;
  transform: translate(10%, 60%);
  color: ${(props) => props.theme.menutext};
  font-size: 15px;
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
  padding-bottom: 400px;
`;

const SpeechBox = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const ContentDiv = styled(motion.div)``;

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
  const contentMatch = useMatch("/boards/:id");
  const clickedContent =
    contentMatch?.params.id &&
    data?.find((item) => item.id === +contentMatch.params.id);
  const overlayClick = () => navigate("/boards");
  const onBoxClick = (id) => navigate(`${id}`);
  return (
    <Container>
      <AnimatePresence>
        <Contents>
          {data &&
            data.map((content) => (
              <ContentDiv
                layoutId={content.id + ""}
                onClick={() => onBoxClick(content.id)}
                key={content.id}
              >
                <ContentImg src={content.picture[0]} />
              </ContentDiv>
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

        {contentMatch ? (
          <>
            <Overlay
              onClick={overlayClick}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            <Clicked layoutId={contentMatch.params.id}>
              <Content content={clickedContent} />
            </Clicked>
          </>
        ) : null}
      </AnimatePresence>
    </Container>
  );
}
