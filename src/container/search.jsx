import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/buttons2.css'


export default function Search() {

    const [text, setText] = useState('')

    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        navigate(`/productos/search/${text}`)
    }

    const onChange = (event) => {
        setText(event.target.value)
    }



    return (
        <Container onSubmit={onSubmit}>
            <input placeholder='Que es lo que estas buscando' aria-label='search' type={"text"} maxLength={160} onChange={e => onChange(e)} />
            <button className='button'>
                <i className="fa-solid fa-magnifying-glass" style={{ color: "#5c5c5c" }}></i>
            </button>
        </Container>

    )

}

const Container = styled.form`

    margin: 3% 12%;


    display: flex;
    flex-direction:row;
   
    
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow:  0px 0px 9px rgba(0, 0, 0, .15);
    
    border-radius: 15px;
    input{
        flex: 1;
        padding: 1.5% 1.8%;
        border-style: none;
        border-radius: 15px;
        outline: none;
    }

`

