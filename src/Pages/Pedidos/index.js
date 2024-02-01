import React from 'react'
import { BodyPedidos, ContainerPedidos, Pages } from './style'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import QuestionBoxPedidos from '../../Componentes/QuestionBoxPedidos'





function Pedidos() {
  return (
    <Pages>
      <Header></Header>

      <BodyPedidos>
        
        <ContainerPedidos>
          <h1> Pedidos: </h1>
          <p className='Produtos'> Açúcar </p>
          <QuestionBoxPedidos></QuestionBoxPedidos>
          <p className='Produtos'> Leite </p>
          <QuestionBoxPedidos></QuestionBoxPedidos>
          <p className='Produtos'> Leite Condensado</p>
          <QuestionBoxPedidos></QuestionBoxPedidos>
          <p className='Produtos'> Ovo </p>
          <QuestionBoxPedidos></QuestionBoxPedidos>
          
        </ContainerPedidos>

        </BodyPedidos>
      <Footer></Footer>
    </Pages>
  )
}

export default Pedidos

