import React from 'react';

import { BodyEstoque, ContainerEstoque, Pages } from './style';
import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';
import Input from '../../Componentes/Input';




 function Estoque() {
  return (
    <Pages>
        <Header></Header>

        <BodyEstoque>
          <ContainerEstoque>
            <h1> Quantidade em estoque: </h1>
            <Input> Acuçar: </Input>
            <Input> Leite Condensado: </Input>
            <Input> Leite: </Input>
            <Input> Ovo: </Input>

    

          </ContainerEstoque>


        </BodyEstoque>

        <Footer></Footer>
    </Pages>
    
  )
}

export default Estoque
