import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  height: 49px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background-color: #c0c0c0;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div``;

const Search = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.svg`
  width: 30px;
  height: 30px;
`;

export function Header() {
  return (
    <HeaderBar>
      <Logo>Logo</Logo>
      <Search>
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </Icon>
      </Search>
    </HeaderBar>
  );
}
