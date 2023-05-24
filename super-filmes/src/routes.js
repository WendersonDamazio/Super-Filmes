import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Filmes from './pages/Filmes'

import Header from './componets/Header'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/filmes/:id' element={ <Filmes/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;