import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import home from "../assets/home.svg";
import cook from "../assets/cook.svg";
import board from "../assets/board.svg";
import { motion } from "framer-motion";

const Nav = styled.nav`
  z-index: 99;
  position: fixed;
  bottom: 0;
  height: 65px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.nav};
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const Item = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 10%;
  padding-bottom: 7px;
`;

const Icon = styled.img`
  width: 41px;
  height: 41px;
`;

const Circle = styled(motion.span)`
  /* position: absolute;
  width: 50px;
  height: 50px;

  background-color: rgba(80, 47, 29, 0.4);
  margin: 0 auto;
  border-radius: 50%; */
  position: absolute;
  width: 50px;
  height: 4px;
  background-color: rgba(80, 47, 29, 0.6);
  top: 3px;
  margin: 0 auto;
`;

export function Navbar() {
  const homeMatch = useMatch("/");
  const boardsMatch = useMatch("/boards");
  const recipeMatch = useMatch("/recipe");

  return (
    <Nav>
      <Item to="/">
        <Icon src={home} />
        {homeMatch && <Circle layoutId="circle" />}
      </Item>
      <Item to="/recipe">
        <Icon src={cook} />
        {recipeMatch && <Circle layoutId="circle" />}
      </Item>
      <Item to="/boards">
        <Icon src={board} />
        {boardsMatch && <Circle layoutId="circle" />}
      </Item>
    </Nav>
  );
}
