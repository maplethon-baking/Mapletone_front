import styled from "styled-components";
const RecipeContainer = styled.div`
    display: grid;
    margin: 10px auto;
    grid-template-columns: 180px 220px;
`;

const RecipeDiv = styled.div`
    width: 220px;
    height: 200px;
    background-color: #c0c0c0;
    border-top-right-radius : 10px;
    border-bottom-right-radius : 10px;
    overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const RecipeImg = styled.img`
    width: 180px;
    height: 200px;
    border-top-left-radius : 10px;
    border-bottom-left-radius : 10px;

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
export function RecipeCard({ recipes }) {
    return (
        <RecipeContainer>
            <RecipeImg src={recipes.img} />
            <RecipeDiv>
                <FontDiv>
                    <TasteFont>{recipes.taste}</TasteFont>
                    <TypeFont>{recipes.type}</TypeFont>
                    <RecipeFont>{recipes.recipe.join(',')}</RecipeFont>
                </FontDiv>
            </RecipeDiv>
        </RecipeContainer>
    );
}