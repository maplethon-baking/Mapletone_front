import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import Ho from "../assets/home_outline.svg";
import Hs from "../assets/home_solid.svg";
import Co from "../assets/cook_outline.svg";
import Cs from "../assets/cook_solid.svg";
import Po from "../assets/photo_outline.svg";
import Ps from "../assets/photo_solid.svg";

const Nav = styled.nav`
  z-index: 99;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.nav};
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export function Navbar() {
  const homeMatch = useMatch("/");
  const boardsMatch = useMatch("/boards");
  const recipeMatch = useMatch("/recipe");
  console.log(homeMatch, boardsMatch, recipeMatch);

  return (
    <Nav>
      <Item to="/">
        <Icon src={homeMatch ? Hs : Ho} />
      </Item>
      <Item to="/recipe">
        <Icon src={recipeMatch ? Cs : Co} />
      </Item>
      <Item to="/boards">
        <Icon src={boardsMatch ? Ps : Po} />
      </Item>
    </Nav>
  );
}
