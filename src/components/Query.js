
import styled from "styled-components"

export default function Query({ numberQuestion, setLayout, icon, corIcon, text,clickd, setClick }) {
   function desativar(){
        setLayout('front')
        setClick('true')
   }
    return (
        <BoxQuetion data-test="flashcard" decoration={text}  color={corIcon}>
            <h2 data-test="flashcard-text" >Pergunta {numberQuestion + 1}</h2>
            <button 
             disabled={clickd} 
             onClick={desativar}
             data-test="play-btn"
             >
                <img data-test={icon}  src={icon} />
            </button>
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
    display:flex;
    align-items: center;
    justify-content: space-between;
    h2{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color:${(props)=> props.color};
        text-decoration:${(props)=> props.decoration};
    }
    ion-icon{
        font-size: 35px;
        color:${(props)=> props.color};
    }
    button{
        border: none;
        background-color: transparent;
    }

`