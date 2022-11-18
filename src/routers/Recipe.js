import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api";
import { RecipeCard } from "../components/RecipeCard";
import { Contents } from "./Home";
import create_button from "../assets/create_button.png";
import speech_bubble from "../assets/speech_bubble.png";
import styled from "styled-components";

export const CreateButton = styled.img`
  width: 50px;
  margin-bottom: 100px;
`;
export const SpeechBubble = styled.img`
  /* position: relative; */
  width: 220px;
`;
export const SpeechDiv = styled.div`
  margin-top: 30px;
  vertical-align: middle;
  margin-bottom: 10px;
`;
export const SpeechText = styled.span`
  position: absolute;
  text-align: center;
  transform: translate(6%, 50%);
  color: white;
`;
const Container = styled.div`
  padding: 0px 20px;
  padding-top: 49px;
  max-width: 480px;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  background-color: #f1f1f1;
`;
export function Recipe() {
  const { isLoading, data } = useQuery(["recipe"], getRecipes);
  return (
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
        <CreateButton src={create_button} />
      </Contents>
    </Container>
  );
}
