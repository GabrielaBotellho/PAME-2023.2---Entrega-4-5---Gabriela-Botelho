import React from 'react'
import Header from '../../Componentes/Header'
import { Body, Pages } from './style'



import fotoFundoHome from '../../Imagens/fotoFundoHome.jpg'
import Footer from '../../Componentes/Footer'


function Home() {
  return (
    <Pages>
        <Header></Header>
        
        <Body>
          <img id = "FotoFundoHome" src={fotoFundoHome} alt=''></img>
        </Body>

        <Footer></Footer>

        

    </Pages>
  )
}

export default Home