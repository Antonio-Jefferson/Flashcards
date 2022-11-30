export default function Main() {
    return (
        <ul>
            <li>
                <div className="pergunta-fechada">
                    <h2>Pergunta 1</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="question">
                    <div className="pergunta">
                        <div>
                            O que é JSX?
                        </div>
                        <div className="icon">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="pergunta-aberta">
                        <div>
                            JSX é uma sintaxe para escrever HTML dentro do JS
                        </div>
                        <div className="Btns">
                            <button className="erro">Não lembrei</button>
                            <button className="quase">Quase não lembrei</button>
                            <button className="zap">Zap!</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}