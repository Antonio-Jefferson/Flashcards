import styled from "styled-components"
import logotipo from "../assets/logo.png"
export default function ScreenHome({play, setPlay}){
    return (
        <Screen iniciar={play}>
            <img src={logotipo} alt="Logo inicial" />
            <h1>ZapRecall</h1>
            <button onClick={() => setPlay(true)} >Iniciar Recall!</button>
        </Screen>
    )
}

const Screen = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: ${props => props.iniciar ? "none" : "flex"};
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-top: 20vh;
    & img {
        width: 136px;
        height: 161px;
        margin: 0 auto;
    }
    & h1 {
        height: 59px;
        font-family: 'Righteous';
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        margin-top: 15px;
    }
    & button {
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        margin-top: 30px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
    }
`