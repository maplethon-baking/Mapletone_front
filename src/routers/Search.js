import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import {
  Link,
  useLocation,
  useMatch,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import styled from "styled-components";
import { getContents, getSearch } from "../api";
import { Content } from "../components/Content";

import backImg from "../assets/background.svg";
const Container = styled.div`

background:url(${backImg});
  background-size: cover;
`;

const Contents = styled.div`
  padding: 100px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  gap: 10px;
`;

const ContentBox = styled(motion.div)`
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

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

export const Clicked = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 80vw;
  height: 350px;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: transparent;
`;

export function Search() {
  const { isLoading, data } = useQuery(["ContentImg"], getContents);
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("search");
  const [searchParams] = useSearchParams();
  const word = searchParams.get("search");
  const { data: searchData, isLoading: searchLoading } = useQuery(
    ["search: " + word],
    () =>
      getSearch({
        keyword: keyword,
      })
  );
  const contentMatch = useMatch("/search/:id");
  const clickedContent =
    contentMatch?.params.id &&
    data?.find((item) => item.id === +contentMatch.params.id);
  const overlayClick = () => navigate(-1);
  const navigate = useNavigate();
  const onBoxClick = (id) => navigate(`${id}`);

  return (
    <Container>
      <AnimatePresence>
        {keyword ? (
          <Contents>
            {searchData &&
              searchData.map((content) => (
                <ContentBox
                  layoutId={content.id + ""}
                  onClick={() => onBoxClick(content.id)}
                  key={content.id}
                >
                  <ContentImg src={content.picture[0]} />
                </ContentBox>
              ))}
          </Contents>
        ) : (
          <Contents>
            {data &&
              data.map((content) => (
                <ContentBox
                  layoutId={content.id + ""}
                  onClick={() => onBoxClick(content.id)}
                  key={content.id}
                >
                  <ContentImg src={content.picture[0]} />
                </ContentBox>
              ))}
          </Contents>
        )}

        {contentMatch ? (
          <>
            <Overlay
              onClick={overlayClick}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            <Clicked layoutId={contentMatch.params.id}>
              {clickedContent && <Content content={clickedContent} />}
            </Clicked>
          </>
        ) : null}
      </AnimatePresence>
    </Container>
  );
}
