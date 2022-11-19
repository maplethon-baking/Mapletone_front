import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useState } from "react";
import { SELECT } from "../data/select";
import { SelectCard } from "./SelectCard";
import { Result } from "./Result";
import { postRecipes } from "../api";
import { useMutation } from "@tanstack/react-query";
import backImg from "../assets/background.svg";
import { useRecoilState } from "recoil";
import { recipeResult } from "../atom";
const Container = styled.div`
  padding-top: 90px;
  max-width: 480px;
  margin: 0 auto;
  background: url(${backImg});
  background-size: cover;
  /* object-fit: cover; */
`;

const CreateDiv = styled.div`
  .label {
    /* font-size: 11px; */
    display: none;
  }
`;

const ProgressDiv = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
`;
const TitieDiv = styled.div`
  display: grid;
  justify-content: center;
  font-size: 25px;
  color: #976a51;
  margin-bottom: 100px;
`;
const SelectDiv = styled.div`
  display: grid;
  justify-content: center;
  padding: 40px;
  height: 460px;
  background: #f2e5de;
  border-radius: 15px 15px 0px 0px;
`;

export function RecipeCreate() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);
  const [check, setCheck] = useState(false);

  const [resulutRecipe, setResulutRecipe] = useRecoilState(recipeResult);
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(() =>
    postRecipes(resulutRecipe)
  );
  useEffect(() => {
    if (resulutRecipe.length > 0) {
      mutate();
    }
  }, [resulutRecipe]);
  return (
    <>
      {check ? (
        <Result resulutRecipe={resulutRecipe}></Result>
      ) : (
        <Container>
          <CreateDiv>
            <ProgressDiv>
              <ProgressBar
                labelAlignment="center"
                labelClassName="label"
                completed={count}
                height="10px"
                width="200px"
                bgColor="#D7BCAE"
                baseBgColor="#FEF7F2"
                borderRadius="10px"
                animateOnRender={true}
              />
            </ProgressDiv>
            <TitieDiv>{SELECT[num]["title"]}</TitieDiv>
            <SelectDiv>
              <SelectCard
                count={count}
                setCount={setCount}
                num={num}
                setNum={setNum}
                check={check}
                setCheck={setCheck}
              ></SelectCard>
            </SelectDiv>
          </CreateDiv>
        </Container>
      )}
    </>
  );
}
