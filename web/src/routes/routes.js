import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'

export default function Rotas() {
    return ( 
        <Routes>  
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
        </Routes>
    )
}