import { useState } from "react"
import styled from "styled-components"

export default function Questions({questions, clicked,numberQuestion,setQuestionsFinished,questionsFinished}) {
    const [show, setshow] = useState(1)
    const [options, setoptions] = useState('')
    function btnClicked(element){
        if(element === "error"){
           

        }else if(element === "almost"){
           

        }else if (element === "zap"){
           
            
        }

        completedQuestions();
    }
    function completedQuestions(){
        const cout = questionsFinished
        setQuestionsFinished(cout + 1)
    }

    return (
        <BoxQuestions clicked={clicked.includes(numberQuestion)}>
                <Front show={show} >
                        {questions.question}
                    <Incon>
                        <ion-icon onClick={()=>show(setshow(0))}  name="repeat-outline"></ion-icon>
                    </Incon>
                </Front>
                < Back >
                        {questions.answer}
                    <Btns>
                        <button onClick={()=>btnClicked('error')}  className="error">Não lembrei</button>
                        <button onClick={()=>btnClicked('almost')} className="almost">Quase não lembrei</button>
                        <button onClick={()=>btnClicked('zap')} className="zap">Zap!</button>
                    </Btns>
                </Back>
        </BoxQuestions>
    )
}

const BoxQuestions = styled.div`
    display:${(props)=> props.clicked? "flex": "none"};
    width: 300px;
    height: 125px;
    position: relative;
    margin-bottom: 12px;
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
    z-index:${(props)=> props.show};
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

    display: ${props => props.clicado ? "none" : "flex"};
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
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