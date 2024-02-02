import styled from "styled-components";

//Customizar parte superior do site:
export const Pages = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    background-color: #F5DEB3;

`
export const BodyPedidos = styled.div`
    display: flex;
    width: 100%;
    height: 75vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #F5DEB3;

`
export const ContainerPedidos = styled.div`
    display: flex;
    width: 45%;
    height: 75vh;
    align-items: center;
    flex-direction: column;
    min-height: 290px;
    
    //customizar o termo 'Pedidos'
    h1{
        color: #8B4513;
    }

    //Customzar nome dos ingredientes:
    .Produtos{
        font-weight: bold;  
    }   
  `  