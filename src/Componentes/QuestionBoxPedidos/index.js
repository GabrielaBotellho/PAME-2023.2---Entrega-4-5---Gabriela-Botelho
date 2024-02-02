//Importação das bibliotecas usadas:
import {useState} from 'react';

//Importação das funções utilizadas:
import { QuestionBoxDiv } from './style';

//QuestionBoxPedidos foi criado como componente pois será uma função utilizada nas página de pedidos
export default function QuestionBoxPedidos (){

    const [status,setStatus] = useState('Pedido enviado')

    return(
      <QuestionBoxDiv>
        <input id='CaixaModificarStatus' value={status} onChange={e => setStatus(e.target.value)}/>
        <p > Status do pedido: {status}! </p>


      </QuestionBoxDiv>


    )
}



    
    
    
    

