import React from 'react'
import { BodyPedidos, ContainerPedidos, Pages } from './style'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'

function Pedidos() {
  return (
    <Pages>
      <Header></Header>

      <BodyPedidos>
        
        <ContainerPedidos>
          <h1> Pedidos: </h1>
        </ContainerPedidos>

        </BodyPedidos>
      <Footer></Footer>
    </Pages>
  )
}

export default Pedidos

