import styled from "styled-components";
import { Navbar } from "../components/Navbar";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

export default function Home() {
  return (
    <>
      <Container>home</Container>
      <Navbar />
    </>
  );
}
