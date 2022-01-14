import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20%;
    width: 15%;
`

export const Row = styled.div`
    margin: .2rem 0 .2rem 0;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`
export const Label = styled.div`
    font-size: 12px;
`

export const Input = styled.input`
    border: 1px #C6C6C6 solid;
    border-radius: 4px;
    padding: .5rem;
`
export const Button = styled.button`
    padding: 1rem 2rem;
    background: #661CF1;
    border: 0;
    border-radius: 4px;
    color: white;
    cursor: pointer;
`