import styled from "styled-components";
import cake from "../assets/cake.png";
import backImg from "../assets/background.svg";
import { useQuery } from "@tanstack/react-query";
import { getResult } from "../api";
const Container = styled.div`
  padding-top: 50px;
  max-width: 480px;
  margin: 0 auto;
  /* object-fit: cover; */
`;

const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ImgDiv = styled.img`
  height: 200px;
`;

const ResultDiv = styled.div`
  height: 250px;
  background-color: #fef7f2;
`;
const FontDiv = styled.div`
  display: grid;
  padding: 30px;
`;
const TasteFont = styled.h2`
  font-size: 30px;
`;

const TypeFont = styled.h1`
  font-size: 35px;
`;
const RecipeFont = styled.h3`
  font-size: 13px;
  font-weight: lighter;
  margin-top: 30px;
`;

const SelectDiv = styled.div`
  display: grid;
  justify-content: center;
  padding: 40px;
  height: 465px;
  background: #f2e5de;
  /* border-radius: 15px 15px 0px 0px;  */
  z-index: 100;
`;
export function Result() {
  const { isLoading, data } = useQuery(["result"], getResult);

  return (
    <Container>
      <ResultContainer>
        <ImgDiv src={cake}></ImgDiv>
        <ResultDiv>
          {data && (
            <FontDiv>
              <TasteFont>{data[0]["data"][0]}</TasteFont>
              <TypeFont>{data[0]["data"][1]}</TypeFont>
              <RecipeFont>{data[0]["data"][2]}</RecipeFont>
            </FontDiv>
          )}
        </ResultDiv>
      </ResultContainer>

      <SelectDiv></SelectDiv>
    </Container>
  );
}
