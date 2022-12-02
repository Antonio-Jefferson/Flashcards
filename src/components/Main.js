
import Query from "./Query"
import { useState } from "react";
import FrontFace from "./FrontFace";
import BackFace from "./BackFace";

export default function Main({ setQuestionsFinished, questionsFinished, question, answer, i, key }) {
    const [layout, setLayout] = useState('query')
    const [corIcon, setCorIcon] = useState('#333')
    const [icon, setIcon] = useState('play-outline')
    const [text, setText] = useState('') /*line-through*/
   
    return (
        <ul>
            <li>
                {layout === "query" &&
                    <Query
                        key={key}
                        numberQuestion={i}
                        setLayout={setLayout}
                        text={text}
                        corIcon={corIcon}
                        icon={icon}
                    />}
                {layout === "front" &&
                    <FrontFace
                        key={key}
                        questions={question}
                        setLayout={setLayout}
                    />}
                {layout === "back" &&
                    <BackFace
                        key={key}
                        setCorIcon={setCorIcon}
                        setIcon={setIcon}
                        setText={setText}
                        answer={answer}
                        setLayout={setLayout}
                        setQuestionsFinished={setQuestionsFinished}
                        questionsFinished={questionsFinished}
                    />}
            </li>
        </ul>
    )
}




