import styled from "styled-components";
import cake from "../assets/cake.png"
import backImg from "../assets/background.svg"
import { useQuery } from "@tanstack/react-query";
import { getResult } from "../api";
import { getOrder } from "../api";
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
    height: 270px;
    background-color: #FEF7F2;
`;
const FontDiv = styled.div`
    display: grid;
    padding: 30px;
`;
const TasteFont = styled.h2`
    font-size: 25px;
`;

const TypeFont = styled.h1`
    font-size: 20px;
`;
const RecipeFont = styled.h3`
    font-size: 13px;
    font-weight: lighter;
    margin-top: 30px;
`;

const SelectDiv = styled.div`
    display: grid;
    grid-template-rows: 50px 1fr;
    justify-content: center;
    padding: 40px;
    height: 465px;
    background: #F2E5DE;
    gap: 20px;
    /* border-radius: 15px 15px 0px 0px;  */
`
const OrderText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    background: #D7BCAE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: #976A51;
    font-size: 30px;
`
const OrderTextDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const OrderDiv = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 40px;
    width: 400px;
    background: #FEF7F2;
    border-radius: 8px;
    padding-bottom: 100px;
`
const RecipeContainer = styled.div`
    display: grid;
    height: 120px;
    margin: 10px auto;
    grid-template-columns: 150px 170px;
    box-shadow: 0px 4px 9px -4px rgba(0, 0, 0, 0.69);
    border-radius: 10px;
`;
const RecipeImg = styled.img`
    width: 150px;
    height: 120px;
    border-top-left-radius : 10px;
    border-bottom-left-radius : 10px;

`;
const RecipeDiv = styled.div`
    display: grid;
    gap: 10px;
    padding: 20px;
    width: 170px;
    height: 120px;
    background-color: #FEF7F2;
    border-top-right-radius : 10px;
    border-bottom-right-radius : 10px;
    overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StepFont = styled.h1`
    font-size: 20px;
`;
const OrderFont = styled.h2`
    font-size: 15px;
`
// const OrderCard = styled.div`

// `
export function Result() {
    const { isLoading, data } = useQuery(["result"], getResult);
    const { isLoading: Loading, data: order } = useQuery(["order"], getOrder);
    return (
        <Container>
            <ResultContainer>
                <ImgDiv src={cake}></ImgDiv>
                <ResultDiv>
                    {
                        data &&
                        <FontDiv>
                            <TasteFont>{data[0]['data'][0]}</TasteFont>
                            <TypeFont>{data[0]['data'][1]}</TypeFont>
                            <RecipeFont>{data[0]['data'][2]}</RecipeFont>
                        </FontDiv>
                    }
                </ResultDiv>
            </ResultContainer>

            <SelectDiv>
                <OrderTextDiv>
                    <OrderText>조리 순서</OrderText>
                </OrderTextDiv>
                <OrderDiv>
                    {order && order.map((e) => {
                        return (
                            <RecipeContainer>
                                <RecipeImg></RecipeImg>
                                <RecipeDiv>
                                    <StepFont>STEP {e.id}</StepFont>
                                    <OrderFont>{e.text}</OrderFont>
                                </RecipeDiv>
                            </RecipeContainer>
                        );

                    })}
                </OrderDiv>
            </SelectDiv>
        </Container>
    );

}