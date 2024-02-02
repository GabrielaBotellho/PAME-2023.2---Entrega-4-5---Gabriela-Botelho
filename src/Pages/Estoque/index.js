//Importação das bibliotecas usadas:
import React from 'react';

//Importação das pastas ou funções utilizadas:
import { BodyEstoque, ContainerEstoque, Pages } from './style';
import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';
import QuestionBoxEstoque from '../../Componentes/QuestionBoxEstoque';

//Declarando a função que será usada:
 function Estoque() {
  return (
    <Pages>
        <Header></Header>

        <BodyEstoque>
          <ContainerEstoque>
            <h1> Ingredientes em estoque: </h1>
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
