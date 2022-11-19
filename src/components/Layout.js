import styled from "styled-components";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import backgroundImg from "../assets/background.svg";

const Container = styled.div`
  background-image: url("../assets/background.svg");
`;

export function Layout() {
  return (
    <Container>
      <Header />
      <Navbar />
    </Container>
  );
}
