import styled from "styled-components"
export default function FrontFace({questions, setLayout}) {
    return (
        <Front data-test="flashcard">
            <p data-test="flashcard-text" >{questions}</p>
            <Incon>
                <ion-icon data-test="turn-btn" onClick={()=> setLayout('back')}  name="repeat-outline"></ion-icon>
            </Incon>
        </Front>
    )
}

const Front = styled.div`
    width: 300px;
    height: 125px;
    margin: 0px 12px;
    padding: 15px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #333333;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Incon = styled.div`
    position: relative;
    ion-icon{
        position: absolute;
        right: 10px;
        bottom: 10px;
        font-size: 30px;
    }
`