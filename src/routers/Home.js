import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getContents } from "../api";
import { Content } from "../components/Content";

export const Container = styled.div`
  padding: 0px 20px;
  padding-top: 49px;
  max-width: 480px;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function Home() {
  const { isLoading, data } = useQuery(["contents"], getContents);
  console.log(data);
  return (
    <Container>
      <Contents>
        {data &&
          data.map((content) => <Content content={content} key={content.id} />)}
      </Contents>
    </Container>
  );
}
