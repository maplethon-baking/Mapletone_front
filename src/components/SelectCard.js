import { useEffect, useState } from "react";
import styled from "styled-components";
import { SELECT } from "../data/select";
import arrow_back from "../assets/arrow_back_FILL0_wght400_GRAD0_opsz48.svg";
import { useRecoilState } from "recoil";
import { recipeResult, recipeState } from "../atom";

const Card = styled.button`
  display: flex;
  align-items: center;
  width: 400px;
  height: 70px;
  border-radius: 6px;
  border: 1.5px solid rgba(151, 106, 81, 0.5);
  :hover {
    background-color: rgba(151, 106, 81, 0.4);
    box-shadow: 0 0 10px 0 rgba(107, 83, 83, 0.15),
      0 0 10px 0 rgba(107, 83, 83, 0.15), 0 0 10px 0 rgba(107, 83, 83, 0.15),
      0 0 10px 0 rgba(107, 83, 83, 0.15);
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    transition: all ease 0.7s 0s;
  }
  color: #976a51;
  background: rgba(254, 247, 242, 0.2);
  &.active {
    background-color: rgba(151, 106, 81, 0.4);
  }
  cursor: pointer;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size};
  height: 40px;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  background: rgba(151, 106, 81, 0.2);
  :hover {
    background: #976a51;
    box-shadow: 0 0 10px 0 rgba(107, 83, 83, 0.15),
      0 0 10px 0 rgba(107, 83, 83, 0.15), 0 0 10px 0 rgba(107, 83, 83, 0.15),
      0 0 10px 0 rgba(107, 83, 83, 0.15);
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    transition: all ease 0.7s 0s;
  }
  color: white;
  cursor: pointer;
`;

const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  background: rgba(151, 106, 81, 0.2);
  :hover {
    background: #976a51;
    box-shadow: 0 0 10px 0 rgba(107, 83, 83, 0.15),
      0 0 10px 0 rgba(107, 83, 83, 0.15), 0 0 10px 0 rgba(107, 83, 83, 0.15),
      0 0 10px 0 rgba(107, 83, 83, 0.15);
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    transition: all ease 0.7s 0s;
  }
  color: white;
  cursor: pointer;
`;
const BackImg = styled.img`
  width: 24px;
  height: 24px;
`;

export function SelectCard({ count, setCount, num, setNum, check, setCheck }) {
  const [current, setCurrent] = useState([]);
  const [taste, setTaste] = useState([]);
  const [topping, setTopping] = useState(new Set([]));
  const [color, setColor] = useState(null);
  const [nextText, setNextText] = useState("다음");

  const [resulutRecipe, setResulutRecipe] = useRecoilState(recipeResult);
  const next = () => {
    if (num < 3) {
      setCount((count += 35));
      setNum(++num);
    } else {
      if (resulutRecipe.length > 0) {
        setResulutRecipe([
          [...resulutRecipe[0]],
          [...current, ...taste, ...topping],
        ]);
      } else {
        setResulutRecipe([[...current, ...taste, ...topping]]);
      }
      setCheck(true);
    }
  };
  const back = () => {
    if (num > 1) {
      setCount((count -= 35));
      setNum(--num);
      resulutRecipe.pop();
    }
  };
  const currentProgress = (e) => {
    const type = e.target.value;
    const index = e.target.id;
    setColor(index);
    //color === "gray" ? setColor("gray") : setColor("#BBBBBB");
    if (num === 1) {
      setCurrent([type]);
    }
    if (num === 2) {
      setTaste([type]);
    }
    if (num === 3) {
      setTopping([type]);
    }
  };
  const selectPage = () => {
    if (num === 1) {
      return SELECT[num]["type"].map((text, index) => {
        return (
          <Card
            className={index == color ? " active" : ""}
            onClick={(e) => {
              currentProgress(e);
            }}
            value={text}
            id={index}
          >
            {text}
          </Card>
        );
      });
    } else {
      return SELECT[num][`${current}`].map((text, index) => {
        return (
          <Card
            className={index == color ? " active" : ""}
            color={color}
            onClick={(e) => {
              currentProgress(e);
            }}
            value={text}
            id={index}
          >
            {text}
          </Card>
        );
      });
    }
  };
  useEffect(() => {
    setColor(null);
  }, [num]);
  useEffect(() => {
    if (num === 3) {
      setNextText("완료");
    } else {
      setNextText("다음");
    }
  }, [num]);
  return (
    <>
      {selectPage()}
      <ButtonDiv>
        {num > 1 ? (
          <>
            <BackButton onClick={back}>이전</BackButton>

            <NextButton size="60px" onClick={next}>
              {nextText}
            </NextButton>
          </>
        ) : (
          <>
            <div></div>
            <NextButton size="60px" onClick={next}>
              {nextText}
            </NextButton>
          </>
        )}
      </ButtonDiv>
    </>
  );
}
