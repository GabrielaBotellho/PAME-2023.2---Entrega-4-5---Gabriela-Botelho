import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'

//Criando as rotas dos botoes:
function Rotas() {
  return (
    <Router>
        <Routes>
    
            <Route path='*' element= {<div>Not found</div>}></Route>
            <Route path='/Login' element= {<Login></Login>}></Route>
        </Routes>
    </Router>
  )
}

export default Rotas