import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  padding-top: 60px;
  max-width: 480px;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PickRecipe = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 200px;
`;

const PickSpan = styled.div`
  text-align: center;
`;

const Recipes = styled.div`
  height: 142px;
  width: 398px;
  display: flex;
  gap: 20px;
  overflow-x: scroll;
`;

const Recipe = styled.div`
  width: 122px;
  height: 134px;
  border: solid;
`;

const Upload = styled.div``;

const PhotoUpload = styled.div``;

const TextUpload = styled.div``;

const Title = styled.div`
  width: 100%;
  display: flex;
`;

const Index = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.span``;

const TextBox = styled.textarea``;

export function Write() {
  return (
    <Container>
      <PickRecipe>
        <PickSpan>나의 레시피를 선택하세요</PickSpan>
        <Recipes>
          <Recipe></Recipe>
          <Recipe></Recipe>
          <Recipe></Recipe>
          <Recipe></Recipe>
        </Recipes>
      </PickRecipe>
      <Upload>
        <PhotoUpload>
          <Index>1</Index>
          <TitleText>사진을 선택하세요</TitleText>
        </PhotoUpload>
        <TextUpload>
          <Title>
            <Index>2</Index>
            <TitleText>글을 작성해주세요</TitleText>
            <TextBox></TextBox>
          </Title>
        </TextUpload>
      </Upload>
    </Container>
  );
}
