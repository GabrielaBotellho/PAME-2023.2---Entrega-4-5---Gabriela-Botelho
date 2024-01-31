import React from 'react'

//importacoes das paginas usadas
import { Body, Container, Footer, LoginButton, Pages } from './style'
import Header from '../../Componentes/Header'
import Input from '../../Componentes/Input'


function Login() {
  return (
    // Pages é a div maior que contemplat toda a pagina de login
    <Pages>
        <Header></Header>
        <Body>
          <Container>
            <h1> Login </h1>

            <Input>Email:</Input>
            <Input>Senha:</Input>
            <LoginButton>Logar</LoginButton>

          </Container>
        </Body>
        <Footer>
          <h1> Contato dos fornecedores: </h1>
          
          
        </Footer>
        
    </Pages>
  )
}

export default Login