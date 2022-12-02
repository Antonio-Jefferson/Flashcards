import cards from "../questionsCards"
import Main from "./Main"
console.log(cards)
export default function RenderCards({ setQuestionsFinished, questionsFinished}) {
    return (
        cards.map((ques, i) =>

            <Main
                key={i}
                setQuestionsFinished={setQuestionsFinished}
                questionsFinished={questionsFinished}
                question={ques.question}
                answer={ques.answer}
                i={i}
            />

        )
    )
}