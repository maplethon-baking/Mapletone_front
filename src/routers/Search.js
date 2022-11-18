import { useQuery } from "@tanstack/react-query";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getContents, getSearch } from "../api";

const Container = styled.div``;

const Contents = styled.div`
  padding: 100px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  gap: 10px;
`;

const Content = styled.div`
  min-width: 100px;
  background-color: black;
  :nth-child(2) {
    grid-column: 2/4;
    grid-row: 1/3;
  }
  border-radius: 10px;
  overflow: hidden;
`;

const ContentImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export function Search() {
  const { isLoading, data } = useQuery(["ContentImg"], getContents);
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("search");
  const [searchParams] = useSearchParams();
  const word = searchParams.get("search");
  console.log(keyword, word);
  const { data: searchData, isLoading: searchLoading } = useQuery(
    ["search: " + word],
    () =>
      getSearch({
        keyword: keyword,
      })
  );

  return (
    <Container>
      {keyword ? (
        <Content>
          {searchData &&
            searchData.map((content) => (
              <Content key={content.id}>
                <ContentImg src={content.picture} />
              </Content>
            ))}
        </Content>
      ) : (
        <Contents>
          {data &&
            data.map((content) => (
              <Content key={content.id}>
                <ContentImg src={content.picture} />
              </Content>
            ))}
        </Contents>
      )}
    </Container>
  );
}
