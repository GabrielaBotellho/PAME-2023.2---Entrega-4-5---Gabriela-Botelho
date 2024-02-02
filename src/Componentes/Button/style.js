//Importação das bibliotecas usadas:
import styled from "styled-components";

// Customizando a div principal dos botoes:
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
    margin-right:20px;
    min-width: 75px;
    min-height: 25px; 
    

    //Customizando os botões da header:
    span{
    color: #F5DEB3;

    }

//definindo o que acontece quando encosta no botao
&:hover{
    background-color: #F5DEB3;

}

`

