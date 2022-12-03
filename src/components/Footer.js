import styled from "styled-components"
import questions from "../questionsCards"

export default function Footer({questionsFinished}){
    return (
        <Concluded>
            <span data-test="footer">{questionsFinished}</span>
            <span>\</span>
            <span data-test="footer">{questions.length}</span>
            <span>CONCLUIDOS</span>
        </Concluded>
    )
}

const Concluded = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
    z-index: 3;


`