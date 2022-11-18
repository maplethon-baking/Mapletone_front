import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api";
<<<<<<< HEAD
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
=======
import { RecipeCard } from '../components/RecipeCard'
import { Container, Contents } from "./Home";
import create_button from '../assets/create_button.png';
import speech_bubble from '../assets/speech_bubble.png';
import styled from "styled-components";
import { useState } from "react";
import { RecipeCreate } from "../components/RecipeCreate";
const CreateButton = styled.img`
  width: 50px;
  margin-bottom: 100px;
`
const SpeechBubble = styled.img`
>>>>>>> 1e6f5993a545f0021e8aedbb32a5988f6429c0c9
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
<<<<<<< HEAD
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
=======
  color: white; 
>>>>>>> 1e6f5993a545f0021e8aedbb32a5988f6429c0c9
`;


export function Recipe() {
  const { isLoading, data } = useQuery(["recipe"], getRecipes);

  const onCreateCheck = () => {
    setCreateCheck(true);
  };
  const [createCheck, setCreateCheck] = useState(false);
  return (
<<<<<<< HEAD
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
=======
    <>
        {
          createCheck ? (<RecipeCreate />): (
            <Container>
            <Contents>
              {data && data.map((recipes) => <RecipeCard recipes={recipes} key={recipes.id} />)}
            <SpeechDiv>
              <SpeechText>나만의 레시피를 만들어보세요!</SpeechText>
              <SpeechBubble src={speech_bubble} />
            </SpeechDiv>
            <CreateButton src={create_button} onClick={onCreateCheck} />
            </Contents>
            </Container>
          )
      
      }
    </>
>>>>>>> 1e6f5993a545f0021e8aedbb32a5988f6429c0c9
  );
}
