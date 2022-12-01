import styled from "styled-components"

export default function Query({ numberQuestion, click, clicked}) {
 
    return (
        <BoxQuetion  finalizado={clicked.includes(numberQuestion)}>
            <h2>Pergunta {numberQuestion + 1}</h2>
            <ion-icon  onClick={() => click(numberQuestion)} name="play-outline"></ion-icon>
        </BoxQuetion>
    )
}

const BoxQuetion = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display:${props => props.finalizado ? "none" : "flex"};
    align-items: center;
    justify-content: space-between;
    h2{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    ion-icon{
        font-size: 35px;
    }

`