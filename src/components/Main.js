import cards from "../questionsCards"
import Query from "./Query"
import Questions from "./Question"
import { useState } from "react";

export default function Main({setQuestionsFinished}) {
    const [display, setDisplay] = useState(true)

    return (
        <ul>
            {cards.map((c, i) => {
                return (
                    <li key={i}>
                        <Query 
                            numberQuestion={i} 
                            display={display}
                            setDisplay={setDisplay}
                        />
                        <Questions 
                            setQuestionsFinished={setQuestionsFinished}
                            questions={c}
                            display={display}
                        />
                    </li>
                )
            })}

        </ul>
    )
}




