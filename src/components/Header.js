import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderBar = styled.header`
  z-index: 99;
  position: fixed;
  top: 0;
  height: 49px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.header};
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 9px -4px rgba(0, 0, 0, 0.69);
`;

const Logo = styled.div``;

const Search = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.svg`
  width: 25px;
  height: 25px;
`;

const SearchBar = styled.form`
  z-index: 99;
  position: fixed;
  top: 0;
  height: 49px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background-color: #c0c0c0;
  padding: 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 25px;
    height: 25px;
  }
`;

const Cancel = styled.input`
  position: absolute;
  right: 5px;
`;

const Input = styled(motion.input)`
  transform-origin: right;
  padding: 5px 10px;
  padding-left: 40px;
  width: 220px;
  height: 35px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #fff;
  border: none;
`;

export function Header() {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);

  const searchMatch = useMatch("/search");

  const { register, handleSubmit } = useForm();
  const onValid = (data) => {
    console.log(data);
    navigate(`/search?keyword=${data.keyword}`);
  };

  return (
    <>
      {searchMatch ? (
        <SearchBar onSubmit={handleSubmit(onValid)}>
          <Input
            {...register("keyword", { required: true, minLength: 2 })}
            transition={{ type: "linear" }}
            animate={{ scaleX: 1 }}
            placeholder="검색어를 입력하세요"
            initial={{ scaleX: 0 }}
          />
          <motion.svg
            transition={{ type: "linear" }}
            initial={{ x: 0 }}
            animate={{ x: -210 }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </motion.svg>
        </SearchBar>
      ) : (
        <HeaderBar>
          <Logo>Logo</Logo>
          <Search to="/search">
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </Icon>
          </Search>
        </HeaderBar>
      )}
    </>
  );
}
