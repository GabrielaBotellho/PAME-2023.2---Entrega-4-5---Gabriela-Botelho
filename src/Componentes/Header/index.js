import React from 'react'
import { HeaderDiv, StyledLink } from './style'
import Button from '../Button'

import Logo from '../../Imagens/logo.jpg'


//Header foi criada como componente pois estará presente em todas as páginas
function Header() {
  return (
    <div>
        <HeaderDiv>
            <h1> Pudins do Jaime 
              <img id ='Logo' src={Logo} alt=''></img>
            </h1>

            <StyledLink to = '/Login'>
              <Button text='Login' ></Button>
            </StyledLink>

            <StyledLink to = '/Estoque'>
              <Button text='Estoque' ></Button>
            </StyledLink>

            <StyledLink to = '/Pedidos' >
              <Button text='Pedidos' ></Button>
            </StyledLink>

            
            

            
            
            
        </HeaderDiv>


    </div>
  )
}

export default Header
