import React from "react"
import * as S from "./styled"
import {Link} from 'react-router-dom'

export default function Header () {
    return (
        <S.Nav>
            <Link to='/'> Home </Link>
            <Link to='/materias'> Matéris </Link>
            <Link to='/alunos'> Alunos </Link>
        </S.Nav>
    )
}