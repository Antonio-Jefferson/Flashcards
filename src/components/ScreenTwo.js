import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import { useState } from "react";
import RenderCards from "./RenderCards";

export default function ScreenTwo() {
    const [questionsFinished, setQuestionsFinished] = useState(0)
    return (
        <Conteiner>
            <Header />
            <RenderCards
                setQuestionsFinished={setQuestionsFinished}
                questionsFinished={questionsFinished}
             />
            <Footer 
                questionsFinished={questionsFinished}
            />
        </Conteiner>
    )
}

const Conteiner = styled.div`
  background-color: #FB6B6B;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  padding-bottom: 100px;
`