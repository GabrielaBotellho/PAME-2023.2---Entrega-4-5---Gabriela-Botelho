//Importação das bibliotecas usadas:
import {useState} from 'react';

//Importação das funções utilizadas:
import { QuestionBoxDiv } from './style';


//QuestionBoxEstoque foi criado como componente pois será uma função utilizada nas página de estoque
export default function QuestionBoxEstoque (){
    
    //Utilizando o useState para que o funcionário fazer modificações
    const [duracao,setDuracao] = useState(10);

    return (
        <QuestionBoxDiv>
        <button id='BotaoModificarDia' onClick={() => setDuracao (duracao - 1) }>
            Registrar um dia de consumo 
        </button>
        <button id='BotaoModificarDia' onClick={() => setDuracao (duracao + 1) }>
            Registrar um dia de compra 
        </button>
        <p>  Restam {duracao} dias de produto! </p>
        </QuestionBoxDiv>
    )


}