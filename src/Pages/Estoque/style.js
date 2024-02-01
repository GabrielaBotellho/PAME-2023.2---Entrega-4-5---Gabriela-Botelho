import styled from "styled-components";






//Customizar parte superior do site:
export const Pages = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    background-color: #F5DEB3;

`

export const BodyEstoque = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #F5DEB3;
`
export const ContainerEstoque = styled.div`
    display: flex;
    width: 45%;
    height: 80%;
    align-items: center;
    flex-direction: column;
    
    min-height: 290px;
    min-width: 470px;
    
    //Customizar o nome do produto:
    .Produto{
        font-size: 20px;
        color: #8B4513;

        }
    
    

    //customizar o termo 'quantidade em estoque'
    h1{
        color: #8B4513;
    }

    

    
  `  