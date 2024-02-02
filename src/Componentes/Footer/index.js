//Importação das bibliotecas usadas:
import React from 'react'

//Importação da funções utilizadas:
import { FooterDiv } from './style'

//Footer foi criado como componente pois estará presente em todas as páginas
function Footer() {
  return (
    <div>
        <FooterDiv>
          <p className='Titulo'> Informações para contato: </p>
          <p className='Informacoes'> Telefone : 21 989675455 </p>
          <p className='Informacoes'> Instagram: @pudimJaime </p>
        </FooterDiv>

    </div>
    
  )
}

export default Footer