import logo from "../assets/logo.png"

export  default function Header(){
    return (
        <div className="logo-container">
            <img src={logo} />
            <h1>ZapRecall</h1>
        </div>
    )
      
}
