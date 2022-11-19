import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

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
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 9px -4px rgba(0, 0, 0, 0.69);
`;

const Logo = styled.img``;

const Search = styled(Link)`
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  border: solid 2px #dbb7a6;
  border-radius: 8px;
`;

const Icon = styled.svg`
  width: 25px;
  height: 25px;
`;
const SearchIcon = styled(Icon)`
  position: absolute;
  right: 25px;
`;

const SearchBar = styled.form`
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
  justify-content: center;
  align-items: center;
  svg {
    width: 25px;
    height: 25px;
  }
`;

const Input = styled(motion.input)`
  transform-origin: right;
  padding: 5px 10px;
  width: 70%;
  height: 35px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #fff;
  border: none;
`;

export function Header() {
  const navigate = useNavigate();
  const searchMatch = useMatch("/search");
  const { register, handleSubmit } = useForm();
  const onValid = (data) => {
    console.log(data);
    navigate(`/search?search=${data.search}`);
  };
  return (
    <>
      {searchMatch ? (
        <SearchBar onSubmit={handleSubmit(onValid)}>
          <Input
            {...register("search", { required: true, minLength: 2 })}
            transition={{ type: "linear" }}
            animate={{ scaleX: 1 }}
            placeholder="검색어를 입력하세요"
            initial={{ scaleX: 0 }}
          />
          <SearchIcon
            onClick={handleSubmit(onValid)}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </SearchIcon>
        </SearchBar>
      ) : (
        <HeaderBar>
          <Logo src={logo} />
          <Search to="/search">
            <Icon
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </Icon>
          </Search>
        </HeaderBar>
      )}
    </>
  );
}
