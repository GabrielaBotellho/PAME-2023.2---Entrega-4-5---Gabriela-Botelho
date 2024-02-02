import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Estoque from '../Pages/Estoque'
import Pedidos from '../Pages/Pedidos'

//Criando as rotas dos botoes:
function Rotas() {
  return (
    <Router>
        <Routes>
    
            <Route path='*' element= {<div>Not found</div>}></Route>
            <Route path='/Login' element= {<Login></Login>}></Route>
            <Route path='/' element= {<Home></Home>}></Route>
            <Route path='/Estoque' element= {<Estoque></Estoque>}></Route>
            <Route path='/Pedidos' element= {<Pedidos></Pedidos>}></Route>
            
            
        </Routes>
    </Router>
  )
}

export default Rotas

