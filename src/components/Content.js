import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled(motion.div)`
  width: 100%;
  height: 350px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${(props) => props.theme.content};
  box-shadow: 0px 4px 9px -4px rgba(0, 0, 0, 0.69);
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 67%;
  object-fit: cover;
`;

const InfoBox = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const Like = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
  top: 5px;
`;

const LikeIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-bottom: 2px;
`;

const LikeCounts = styled.span`
  font-size: 10px;
`;

const Text = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
`;

const Topic = styled.span`
  padding: 0 15px;
  width: 100%;
  height: 20px;
  font-size: 14px;
  font-weight: 600;
`;

const Comment = styled.span`
  font-size: 12px;
  padding: 0 15px;
`;

export function Content({ content }) {
  return (
    <Container>
      <Image src={content.picture} />
      <InfoBox>
        <Like>
          <LikeIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
          </LikeIcon>
          <LikeCounts>{content.likeCounts}</LikeCounts>
        </Like>
        <Text>
          <Topic>{content.title}</Topic>
          <Comment>{content.content}</Comment>
        </Text>
      </InfoBox>
    </Container>
  );
}
