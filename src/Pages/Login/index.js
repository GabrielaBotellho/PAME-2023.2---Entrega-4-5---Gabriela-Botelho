import React from 'react'

//importacoes das paginas usadas
import { Body, Container, Pages } from './style'
import Header from '../../Componentes/Header'


function Login() {
  return (
    // Pages é a div maior que contemplat toda a pagina de login
    <Pages>
        <Header></Header>
        <Body></Body>
        <Container></Container>
        

    </Pages>
  )
}

export default Login