import styled from "styled-components";

export const Pages = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    background-color: #F5DEB3;

`
export const Body = styled.div`

    display: flex;
    width: 100%;
    height: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #F5DEB3;


`
//customizar caixa de login:   
export const Container = styled.div`
    display: flex;
    width: 45%;
    height: 80%;
    align-items: center;
    flex-direction: column;
    
    min-height: 290px;
    

    //customizar o login
    h1{
        color: #8B4513;
    }

`
export const LoginButton = styled.button `
    width: 15vw;
    height: 4vh;
    margin-top: 30px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 10px;
`



//customizar o rodape do site:
export const Footer = styled.div `
    width: 100vw;
    height: 35vh;
    background-color: #8B4513;
    color: #F5DEB3;
    display: flex;
    
    justify-content: space-around

`
