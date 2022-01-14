import React from "react"
import { Api } from '../../services/axios'
import { useEffect, useState } from "react"
import * as S from './styled'
import FotoBox from '../../assets/images/fundo_box.png'

export default function Home() {
    const [materias, setMaterias] = useState([]);

    async function BuscarMaterias(){
        try{
            const { data } = await Api.get('/materias-essenciais');
            setMaterias(data)
        }catch(err){}
    }
    useEffect(() => {
        BuscarMaterias()
    },[])
    return (
        <>
        <S.Container>
        {
                materias.map(item => (
            
                    <S.Box>
                        <S.Content>
                            <S.Title>
                                {item.nome}
                            </S.Title>
                        </S.Content>
                            <S.ContentImage>
                                <img width={100} src={FotoBox} />
                            </S.ContentImage>
                    </S.Box>
                 
            ))}  
        </S.Container>
           
            <h1> Aqui é a página Home</h1>
        </>
        
    )
}