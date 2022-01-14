import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

`
export const Box = styled.div`
    border: 1px solid #000;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    border-radius: 5px;
    width: 400px;
    height: 200px;
    background-color: #DBE4FF;
    margin: 2rem 0 2rem 0;
    
`
export const Content = styled.div`
    background: white;
    width: 100%;
`

export const Title = styled.h1`
    color: #666666;
    padding: 1rem;
    font-family: 'Open Sans';
`

export const ContentImage = styled.div`
    margin: .5rem;
`