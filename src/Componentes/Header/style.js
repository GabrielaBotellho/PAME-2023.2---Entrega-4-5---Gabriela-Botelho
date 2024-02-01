import { Link } from "react-router-dom";
import styled from "styled-components";

// div principal do header
export const HeaderDiv = styled.div`
    width: 100vw;
    height: 15vh;
    
    min-height: 90px;
    background-color: #8B4513;
    color: #F5DEB3;
    display: flex;
    margin-top: 0;
    justify-content: space-between;
    

        
        h1{
            display: flex;
            align-items: center;
            margin-left: 30px;
            min-width: 305px;

            img{
                width:8vw;
                height:10vh;
                margin-left: 10px;
                min-height:60px;
                
            }


        }

`

export const ButtonDiv = styled.div`

`

//Aplicacao que permite associar o link do site a um botao:
export const StyledLink = styled(Link)`
        text-decoration: none;
`
