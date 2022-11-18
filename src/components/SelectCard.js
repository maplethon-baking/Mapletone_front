import { useEffect, useState } from "react";
import styled from "styled-components";
import { SELECT } from "../data/select"
import arrow_back from "../assets/arrow_back_FILL0_wght400_GRAD0_opsz48.svg"
const Card = styled.button`
    display: flex;
    align-items: center;
    width: 400px;
    height: 60px;
    border-radius: 6px;
    border: 1.5px solid rgba(255, 255, 255, 0.4);
    :hover{
    background: #BBBBBB;
    box-shadow: 0 0 10px 0 rgba(107, 83, 83,.15),
                0 0 10px 0 rgba(107, 83, 83,.15),
                0 0 10px 0 rgba(107, 83, 83,.15),
                0 0 10px 0 rgba(107, 83, 83,.15);
     -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
     transition: all ease 0.7s 0s;
    }
    background-color: ${props => props.color};
`;
const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
const NextButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.size};
    height: 40px;
    border: 1.5px solid rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    :hover{
    background: #BBBBBB;
    box-shadow: 0 0 10px 0 rgba(107, 83, 83,.15),
                0 0 10px 0 rgba(107, 83, 83,.15),
                0 0 10px 0 rgba(107, 83, 83,.15),
                0 0 10px 0 rgba(107, 83, 83,.15);
     -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
     transition: all ease 0.7s 0s;
    }
    cursor: pointer;
`;

const BackButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1.5px solid rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    :hover{
    background: #BBBBBB;
    box-shadow: 0 0 10px 0 rgba(107, 83, 83,.15),
                0 0 10px 0 rgba(107, 83, 83,.15),
                0 0 10px 0 rgba(107, 83, 83,.15),
                0 0 10px 0 rgba(107, 83, 83,.15);
     -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
     transition: all ease 0.7s 0s;
    }
    cursor: pointer;
`
const BackImg = styled.img`
    width: 24px;
    height: 24px;
`

export function SelectCard({ count, setCount, num, setNum }) {
    const [current, setCurrent] = useState([]);
    const [taste, setTaste] = useState([]);
    const [topping, setTopping] = useState(new Set([]));
    const [test, setTest] = useState([]);
    const [color,setColor] = useState("gray");
    const next = () => {
        if (num < 3) {
            setCount(count += 35);
            setNum(++num);
        }
        else {
            setTest([...test, current, taste, topping]);
        }
    };
    const back = () => {
        if (num > 1) {
            setCount(count -= 35);
            setNum(--num);
            test.pop();
        }
    };
    const currentProgress = (e) => {
        const type = e.target.value;
        color === "gray" ? setColor("gray") : setColor("#BBBBBB");
        if (num === 1) {
            setCurrent([type]);
        }
        if (num === 2) {
            setTaste([type]);
            topping.clear();
        }
        if (num === 3) {
            setTopping(new Set([...topping, type]));
        }
    };
    const selectPage = () => {
        if (num === 1) {
            return SELECT[num]["type"].map((text) => {
                return <Card color={color} onClick={currentProgress} value={text} key={text.id}>{text}</Card>;
            });
        }
        else {
            return SELECT[num][`${current}`].map((text) => {
                return <Card color={color} onClick={currentProgress} value={text} key={text.id}>{text}</Card>;
            });
        }
    };
    console.log((test));
    return (
        <>
            {
                selectPage()
            }
            <ButtonDiv>
                {num > 1 ? (
                    <>
                        <BackButton onClick={back}>
                            <BackImg src={arrow_back}></BackImg>
                        </BackButton>

                        <NextButton size="85%" onClick={next}>다음으로 넘어가기</NextButton>
                    </>
                ) : (
                    <NextButton size="100%" onClick={next}>다음으로 넘어가기</NextButton>)}
            </ButtonDiv>
        </>
    );
}