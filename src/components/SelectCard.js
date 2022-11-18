import styled from "styled-components";

const Card = styled.div`
    width: 400px;
    height: 50px;
    border-radius: 3px;
    border: 1.5px solid rgba(255, 255, 255, 0.4);
    
`;

export function SelectCard({ recipe }) {
    return (
        <>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </>
    );
}