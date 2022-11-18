import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getContents } from "../api";

const Container = styled.div``;

const Contents = styled.div`
  padding: 100px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);

  column-gap: 20px;
  row-gap: 20px;
`;

const Content = styled.div`
  background-color: black;
  :nth-child(2) {
    grid-column: 2/4;
    grid-row: 1/3;
  }
`;

const ContentImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export function Search() {
  const { isLoading, data } = useQuery(["ContentImg"], getContents);
  console.log(data);
  return (
    <Container>
      <Contents>
        {data &&
          data.map((content) => (
            <Content key={content.id}>
              <ContentImg src={content.img} />
            </Content>
          ))}
      </Contents>
    </Container>
  );
}
