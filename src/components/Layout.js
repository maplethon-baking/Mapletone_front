import styled from "styled-components";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import backgroundImg from "../assets/background.svg";
import backImg from "../assets/background.svg"
const Container = styled.div`
  background:url(${backImg});
  background-size: cover;
`;

export function Layout() {
  return (
    <Container>
      <Header />
      <Navbar />
    </Container>
  );
}
