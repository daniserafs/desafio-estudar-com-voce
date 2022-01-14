import React from "react"
import { useState } from "react"
import * as S from './styled'
import { Api } from '../../services/axios'


export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true)
        try{
            const { data } = await Api.post('/login', {email, senha: password});
            console.log(data)
            sessionStorage.setItem('token', data.token);
            window.location = '/'
        }catch(err){
            alert("Login ou senha inválido")
        }finally{
            setLoading(false)
        }
    }
    return (
        <>  
            <S.Container>
                <div>
                <h1>Faça seu login</h1>
                <p> Entre com sua conta e aproveite</p>
                </div>
                
                <S.Content>
                    <S.Row>
                        <S.Label>
                            Email
                        </S.Label>
                        <S.Input onChange={e => setEmail(e.target.value)} value={email} type={'text'}></S.Input>
                    </S.Row>

                    <S.Row>
                        <S.Label>
                            Password
                        </S.Label>
                        <S.Input onChange={e => setPassword(e.target.value)} value={password} type={'password'}></S.Input>
                    </S.Row>
                    <S.Row>
                        <S.Button disabled={loading} onClick={() => handleSubmit()}> 
                            {loading ? 'Carregando...' : 'Enviar'}
                        </S.Button>
                    </S.Row>
                </S.Content>
                
            </S.Container>
            
        </>
        
    )
}