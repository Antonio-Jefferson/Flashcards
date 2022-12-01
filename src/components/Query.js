import styled from "styled-components"

export default function Query({ numberQuestion, display, setDisplay}) {

    const click = (a) => {
        setDisplay(false)
    }
    return (
        <BoxQuetion display={display} onClick={() => click(numberQuestion)}>
            <h2>Pergunta {numberQuestion + 1}</h2>
            <ion-icon name="play-outline"></ion-icon>
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
    display: ${(props)=> props.display? "flex": "none" };
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

`