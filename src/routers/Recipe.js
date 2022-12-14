import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api";
import { RecipeCard } from '../components/RecipeCard'
import create_button from '../assets/create_button.png';
import speech_bubble from '../assets/speech_bubble.png';
import styled from "styled-components";
import { useState } from "react";
import { RecipeCreate } from "../components/RecipeCreate";
import backImg from "../assets/background.svg"
export const Container = styled.div`
  padding: 0px 20px;
  padding-top: 49px;
  max-width: 480px;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  
  background:url(${backImg});
  background-size: cover;
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  gap: 20px;
`;

export const CreateButton = styled.img`
  width: 50px;
  margin-bottom: 100px;
  cursor: pointer;
`
export const SpeechBubble = styled.img`
  width: 220px;
`;
export const SpeechDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
`;
export const SpeechText = styled.span`
  position: absolute;
  text-align: center;
  transform: translate(6%, 50%);
  color: white; 
`;


export function Recipe() {
  const { isLoading, data } = useQuery(["recipe"], getRecipes);

  const onCreateCheck = () => {
    setCreateCheck(true);
  };
  const [createCheck, setCreateCheck] = useState(false);
  return (
    <>
      {createCheck ? (
        <RecipeCreate />
      ) : (
        <Container>
          <Contents>
            {data &&
              data.map((recipes) => (
                <RecipeCard recipes={recipes} key={recipes.id} />
              ))}
            <SpeechDiv>
              <SpeechText>나만의 레시피를 만들어보세요!</SpeechText>
              <SpeechBubble src={speech_bubble} />
            </SpeechDiv>
            <CreateButton src={create_button} onClick={onCreateCheck} />
          </Contents>
        </Container>
      )}
    </>
  );
}
