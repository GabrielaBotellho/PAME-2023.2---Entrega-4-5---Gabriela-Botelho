import {useState} from 'react';
import { QuestionBoxDiv } from './style';

export default function QuestionBoxEstoque (){
    
    
    const [duracao,setDuracao] = useState(10);

    return (
        <QuestionBoxDiv>
        

        <button id='BotaoModificarDia' onClick={() => setDuracao (duracao - 1) }>
            Registrar um dia de consumo 
        </button>
        <p>  Restam {duracao} dias de produto! </p>

        
        
        
        </QuestionBoxDiv>
    )


}