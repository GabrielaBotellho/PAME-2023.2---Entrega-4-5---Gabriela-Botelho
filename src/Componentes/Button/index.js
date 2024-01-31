import React from 'react'
import { ButtonDiv } from './style'


//Botton foi criado como componente pois estará presente em todas as páginas
function Button({text}) {
 //Usamos a funcao text como uma propriedade de cada botao, com isso conseguimos criar botoes iguais 
 //com diferentes textos dentro 
  return (
    <ButtonDiv>
        
          <span>{text}</span>
    
    </ButtonDiv>
  )
}

export default Button

