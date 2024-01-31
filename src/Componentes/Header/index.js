import React from 'react'
import { HeaderDiv } from './style'
import Button from '../Button'


//Header foi criada como componente pois estará presente em todas as páginas
function Header() {
  return (
    <div>
        <HeaderDiv>
            <h1> Pudins do Jaime </h1>

            <Button text='Login' ></Button>
            <Button text='Estoque' ></Button>
            <Button text='Pedidos' ></Button>
            
        </HeaderDiv>


    </div>
  )
}

export default Header
