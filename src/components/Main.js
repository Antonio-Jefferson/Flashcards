import cards from "../questionsCards"
import Query from "./Query"
import Questions from "./Question"
import { useState } from "react";

export default function Main({setQuestionsFinished, questionsFinished}) {
    const [clicked, setClicked] = useState([])
    const [display, setDisplay] = useState(false)
    const [chengeDecor, setChengerDecor] = useState('')

    function click(number) {
        const contains = clicked.includes(number)

        if (!contains) {
            setClicked([...clicked, number])
            setDisplay(true)
        }
    }

    return (
        <ul>
            {cards.map((c, i) => {
                return (
                    <li key={i}>
                        <Query 
                            numberQuestion={i}
                            clicked={clicked}
                            click={click}
                        />
                        <Questions 
                            clicked={clicked}
                            setDisplay={display}
                            numberQuestion={i}
                            setQuestionsFinished={setQuestionsFinished}
                            questionsFinished={questionsFinished}
                            questions={c}
                        />
                    </li>
                )
            })}

        </ul>
    )
}




