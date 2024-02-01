import {useState} from 'react';
import { QuestionBoxDiv } from './style';

export default function QuestionBoxPedidos (){

    const [status,setStatus] = useState('Pedido enviado')

    return(
      <QuestionBoxDiv>
        <input id='CaixaModificarStatus' value={status} onChange={e => setStatus(e.target.value)}/>
        <p > Status do pedido: {status}! </p>


      </QuestionBoxDiv>


    )
}



    
    
    
    

