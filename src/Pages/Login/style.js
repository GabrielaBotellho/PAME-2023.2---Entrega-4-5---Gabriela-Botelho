import styled from "styled-components";

//Customizar parte superior do site:
export const Pages = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    background-color: #F5DEB3;
    min-height: 550px;

`

//Customizar meio do site:
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
    height: 8vh;
    min-height: 7vh;

    margin-top: 30px;
    cursor: pointer;
    font-size: 18px;
    font-color: #8B4513;
    border-radius: 10px;
    background-color: #F5DEB3;
    
`



