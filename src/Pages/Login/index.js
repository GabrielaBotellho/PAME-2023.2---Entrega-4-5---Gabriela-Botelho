//Importação das bibliotecas usadas:
import React from 'react'

//Importação das pastas ou funções utilizadas:
import { Body, Container, LoginButton, Pages } from './style'
import Header from '../../Componentes/Header'
import Input from '../../Componentes/Input'
import Footer from '../../Componentes/Footer'

//Declarando a função que será usada:
function Login() {
  return (
    // Pages é a div maior que contempla toda a pagina de login
    <Pages>
        <Header></Header>
        <Body>
          <Container>
            <h1> Login </h1>
            <p>Digite seu email:</p>
            <Input type = "email" >Email:</Input>
            <p></p>
            <p>Digite sua senha:</p>
            <Input type = "password" >Senha:</Input>
            <LoginButton>Logar</LoginButton>

          </Container>
        </Body>
        <Footer></Footer>        
    </Pages>
  )
}

export default Login