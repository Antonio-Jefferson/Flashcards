import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import styled from "styled-components";
import { useState } from "react";

export default function ScreenTwo() {
    const [questionsFinished, setQuestionsFinished] = useState(0)
    return (
        <Conteiner>
            <Header />
            <Main
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
  height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`