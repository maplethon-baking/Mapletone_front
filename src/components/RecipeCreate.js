import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
import { SELECT, TASTE_TOPPING, TYPE } from "../data/select"
import { SelectCard } from "./SelectCard";
const Container = styled.div`
  padding-top: 49px;
  max-width: 480px;
  margin: 0 auto;
  background-color: black;

`;

const CreateDiv = styled.div`
    .label{
        /* font-size: 11px; */
        display: none;
    }
`

const ProgressDiv = styled.div`
    margin-top: 30px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
`
const TitieDiv = styled.div`
    display: grid;
    justify-content: center;
    font-size: 25px;
    color: white;
    margin-bottom: 190px;
`
const SelectDiv = styled.div`
    display: grid;
    justify-content: center;
    padding: 40px;
    height: 400px;
    background-color: gray;
    border-radius: 15px 15px 0px 0px;
`
export function RecipeCreate() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(1);
    return (
        <Container>
            <CreateDiv>
                <ProgressDiv>
                    <ProgressBar labelAlignment="center" labelClassName="label" completed={count} height="15px" width="200px" bgColor="#C5C5C5" baseBgColor="#787878" borderRadius="10px" animateOnRender={true} />
                </ProgressDiv>
                <TitieDiv>{SELECT[num]["title"]}</TitieDiv>
                <SelectDiv>
                    <SelectCard></SelectCard>
                </SelectDiv>
            </CreateDiv>
        </Container>
    );
}