import styled from "styled-components"
import cards from "../questionsCards"
import Main from "./Main"
console.log(cards)
export default function RenderCards({ setQuestionsFinished, questionsFinished}) {
    return (
        cards.map((ques, i) =>
        <ConteinerMain>
            <Main
                data-test="flashcard"
                key={i}
                setQuestionsFinished={setQuestionsFinished}
                questionsFinished={questionsFinished}
                question={ques.question}
                answer={ques.answer}
                i={i}
            />
        </ConteinerMain>

        )
    )
}

const ConteinerMain = styled.div`
    margin-bottom: 12px;



`