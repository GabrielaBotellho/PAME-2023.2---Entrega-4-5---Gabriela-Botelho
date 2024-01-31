import styled from "styled-components";

//div principal dos botoes
export const ButtonDiv = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 8vw;
    height: 5vh;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    border-color: #F5DEB3;
    font-size: 20px;
    margin-top : 40px;
    gap: 10px;
    min-width: 75px;
    min-height: 25px; 

     
span{
    color: black;

}

//definindo o que acontece quando encosta no botao
&:hover{
    background-color: #F5DEB3;

}

`

