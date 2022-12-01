import styled from "styled-components"

export default function Questions({questions,display}) {
    return (
        <BoxQuestions display={display}>
            <Card >
                <Front>
                    <div>
                        {questions.question}
                    </div>
                    <Incon>
                        <ion-icon name="repeat-outline"></ion-icon>
                    </Incon>
                </Front>
                < Back>
                    <div>
                        {questions.answer}
                    </div>
                    <Btns>
                        <button className="erro">Não lembrei</button>
                        <button className="quase">Quase não lembrei</button>
                        <button className="zap">Zap!</button>
                    </Btns>
                </Back>
            </Card>
        </BoxQuestions>
    )
}

const BoxQuestions = styled.div`
    display: ${(props)=> props.display? "none":"flex"};
    width: 300px;
    height: 125px;
    position: relative;
    &:hover{
        transform:rotateX(180deg);
        transition: all 0.5s ease;
    }
`

const Card = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    transform-style: preserve-3d;
    &:hover{
        transform:rotateX(180deg);
        transition: all 0.5s ease;
    }
`
const Front = styled.div`
    width: 100%;
    height: 100%;
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

    position: absolute;
    backface-visibility: hidden;
`
const Back = styled.div`
    width: 100%;
    height: 100%;
    margin: 12px;
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

    position: absolute;
    backface-visibility: hidden;
    transform: rotateX(180deg);
  button{
        width: 85.17px;
        height: 37.17px;
        border: none;
        border-radius: 5px;
        align-items: center;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 12px;
        align-items: center;
        text-align: center;

        color: #FFFFFF; 
    }

`
const Btns = styled.div`
    display: flex;
    justify-content: space-evenly;
    & :nth-child(1){
            background-color: #FF3030;
        }
        & :nth-child(2){
            background-color: #FF922E;
        }
        & :nth-child(3){
            background-color: #2FBE34;
        }

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