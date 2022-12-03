import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Header() {
    return (
        <Logo>
            <img src={logo} />
            <h1>ZapRecall</h1>
        </Logo>
    )

}

const Logo = styled.div`
    background-color: #FB6B6B;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 2px 80px;
    margin: 0px 0 20px 0;
    position: fixed;
    top: 0px;
    z-index: 4;

   h1{
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
   }

    img{
        width: 52px;
    }
`
