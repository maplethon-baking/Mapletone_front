import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { getContents } from "../api";
import { menuState, menuSelector, contentState, categoryState } from "../atom";
import { Content } from "../components/Content";
import timeSort from "../assets/time_sort.png";
import likeSort from "../assets/like_sort.png";
import backImg from "../assets/background.svg";
export const Container = styled.div`
  padding: 0px 20px;
  padding-top: 49px;
  max-width: 480px;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  background:url(${backImg});
  background-size: cover;
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 110px 0;
  gap: 20px;
`;

const CategoryDiv = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f0e6;
  z-index: 10;
`;

const CategoryBar = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.menubar};
`;

const Categories = styled.div`
  width: 72%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CategoryBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid ${(props) => props.theme.menutext};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryName = styled.span`
  height: 11px;
  font-size: 5px;
  text-align: center;
  padding-top: 2px;
  color: ${(props) => props.theme.menutext};
`;

const Sort = styled.div`
  height: 24px;
  width: 28%;
  border-left: 2px solid ${(props) => props.theme.menutext};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Home() {
  const [query, setQuery] = useRecoilState(contentState);
  const post = useRecoilValue(menuSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const menu = useRecoilValue(menuState);
  const [selected, setSelected] = useState("");
  const { isLoading, data } = useQuery(["contents"], getContents);
  const { sort, setSort } = useState(true);
  useEffect(() => {
    if (data) {
      setQuery(data);
    }
  }, [data]);

  const onClick = (event) => {
    const {
      currentTarget: { name },
    } = event;
    setCategory(name);
  };

  return (
    <Container>
      <CategoryDiv>
        <CategoryBar>
          <Categories>
            {menu.map((item) => (
              <Category key={item.name}>
                <CategoryBtn onClick={onClick} name={item.name}>
                  <img src={item.img} alt="null" />
                </CategoryBtn>
                <CategoryName>{item.name}</CategoryName>
              </Category>
            ))}
          </Categories>
          <Sort>
            {sort ? (
              <img src={timeSort} alt="null" />
            ) : (
              <img src={likeSort} alt="null" />
            )}
          </Sort>
        </CategoryBar>
      </CategoryDiv>
      <Contents>
        {data &&
          post.map((content) => <Content content={content} key={content.id} />)}
      </Contents>
    </Container>
  );
}
