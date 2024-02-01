import React from 'react';

import { BodyEstoque, ContainerEstoque, Pages } from './style';
import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';

import QuestionBoxEstoque from '../../Componentes/QuestionBoxEstoque';




 function Estoque() {
  return (
    <Pages>
        <Header></Header>

        <BodyEstoque>
          <ContainerEstoque>
            <h1> Quantidade em estoque: </h1>
            <p className='Produto'> Açúcar </p>
            <QuestionBoxEstoque></QuestionBoxEstoque>
            <p className='Produto'> Leite </p>
            <QuestionBoxEstoque></QuestionBoxEstoque>
            <p className='Produto'> Leite Condensado </p>
            <QuestionBoxEstoque></QuestionBoxEstoque>
            <p className='Produto'> Ovo </p>
            <QuestionBoxEstoque></QuestionBoxEstoque>
          

    

          </ContainerEstoque>


        </BodyEstoque>

        <Footer></Footer>
    </Pages>
    
  )
}

export default Estoque
