import React from 'react'

//importacoes das paginas usadas
import { Body, Container, LoginButton, Pages } from './style'
import Header from '../../Componentes/Header'
import Input from '../../Componentes/Input'
import Footer from '../../Componentes/Footer'


function Login() {
  return (
    // Pages é a div maior que contempla toda a pagina de login
    <Pages>
        <Header></Header>
        <Body>
          <Container>
            <h1> Login </h1>
            <p>Digite seu email:</p>
            <Input>Email:</Input>
            <p></p>
            <p>Digite sua senha:</p>
            <Input>Senha:</Input>
            <LoginButton>Logar</LoginButton>

          </Container>
        </Body>
        <Footer></Footer>
      

        
    </Pages>
  )
}

export default Login