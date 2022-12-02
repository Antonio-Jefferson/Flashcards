import styled from "styled-components"

export default function BackFace({answer, questionsFinished, setQuestionsFinished, setLayout,setCorIcon, setIcon, setText}) {
    function btnClicked(element){
        if(element === "error"){
            alert('entrou aqui')
            setLayout('query')
            setCorIcon("red")
            setIcon("close-circle")
            setText("line-through")

        }else if(element === "almost"){
            alert('entrou aqui')
            setLayout('query')
            setCorIcon("orange")
            setIcon("alert-circle")
            setText("line-through")

        }else if (element === "zap"){
            alert('entrou aqui')
            setLayout('query')
            setCorIcon("green")
            setIcon("checkmark-circle")
            setText("line-through")
            
        }

        completedQuestions();
    }
    
    function completedQuestions(){
        console.log('entrei aqui')
        const cout = questionsFinished
        setQuestionsFinished(cout + 1)
    }
    return (
        < Back >
            {answer}
            <Btns>
                <button onClick={() => btnClicked('error')} className="error">Não lembrei</button>
                <button onClick={() => btnClicked('almost')} className="almost">Quase não lembrei</button>
                <button onClick={() => btnClicked('zap')} className="zap">Zap!</button>
            </Btns>
        </Back>

    )
}

const Back = styled.div`
    width: 300px;
    height: 125px;
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

    display:flex;
    flex-direction: column;
    justify-content: space-between;
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
